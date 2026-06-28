"use client"

import { useEffect, useRef, useState } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Icon } from "@/components/icon"

const SUGGESTIONS = ["产品矩阵是什么？", "八维方法怎么落地？", "DoSQL 做什么？", "工程引擎有哪些？"]

function renderRich(text: string) {
  // 轻量渲染 **粗体**，其余按纯文本处理
  return text.split(/(\*\*[^*]+\*\*)/g).map((seg, i) => {
    if (seg.startsWith("**") && seg.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold">
          {seg.slice(2, -2)}
        </strong>
      )
    }
    return <span key={i}>{seg}</span>
  })
}

function messageText(parts: { type: string; text?: string }[] | undefined) {
  if (!parts) return ""
  const raw = parts
    .filter((p) => p.type === "text")
    .map((p) => p.text ?? "")
    .join("")
  // 去除 MiniMax 推理模型输出的 <think>…</think> 思考块（含未闭合的流式片段）
  return raw
    .replace(/<think>[\s\S]*?<\/think>/g, "")
    .replace(/<think>[\s\S]*$/g, "")
    .trim()
}

export function AiAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  const busy = status === "submitted" || status === "streaming"

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, open])

  const submit = (text: string) => {
    const value = text.trim()
    if (!value || busy) return
    sendMessage({ text: value })
    setInput("")
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "关闭 AI 助手" : "打开 AI 助手"}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_30px_rgba(16,191,208,0.4)] transition-transform hover:scale-105 active:scale-95"
      >
        <Icon name={open ? "close" : "chat"} size={24} />
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[34rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_rgba(12,41,92,0.22)]">
          {/* header */}
          <div className="flex items-center gap-3 border-b border-border bg-primary px-4 py-3 text-primary-foreground">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
              <Icon name="spark" size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight">来八助手</p>
              <p className="text-[11px] leading-tight opacity-80">L8AI 企业 AI 落地顾问</p>
            </div>
          </div>

          {/* messages */}
          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div className="space-y-4">
                <div className="rounded-xl rounded-tl-sm bg-muted px-3 py-2.5 text-sm text-foreground">
                  你好，我是来八助手。关于 L8AI 的产品矩阵、八维方法、课程体系、工程引擎和企业 AI 落地，都可以问我。
                </div>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => submit(s)}
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-ink-2 transition-colors hover:border-primary hover:text-primary"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m) => {
              const isUser = m.role === "user"
              return (
                <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] whitespace-pre-wrap rounded-xl px-3 py-2.5 text-sm ${
                      isUser
                        ? "rounded-tr-sm bg-primary text-primary-foreground"
                        : "rounded-tl-sm bg-muted text-foreground"
                    }`}
                  >
                    {isUser
                      ? messageText(m.parts)
                      : messageText(m.parts)
                        ? renderRich(messageText(m.parts))
                        : busy
                          ? "正在思考…"
                          : ""}
                  </div>
                </div>
              )
            })}

            {busy && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-xl rounded-tl-sm bg-muted px-3 py-3">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" />
                </div>
              </div>
            )}

            {error && (
              <div className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">
                助手暂时无法回复，请稍后再试或联系 contact@l8ai.cn。
              </div>
            )}
          </div>

          {/* input */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              submit(input)
            }}
            className="flex items-center gap-2 border-t border-border px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="输入你的问题…"
              className="min-w-0 flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="发送"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
            >
              <Icon name="send" size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
