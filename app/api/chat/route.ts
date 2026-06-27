import { createOpenAICompatible } from "@ai-sdk/openai-compatible"
import { convertToModelMessages, streamText, type UIMessage } from "ai"

export const maxDuration = 30

const SYSTEM_PROMPT = `你是 L8AI（杭州来八数智有限公司）官网的 AI 助手，名字叫"来八助手"。
L8AI 帮助企业把 AI 从 Demo 推进到可上线、可评测、可运营的生产系统，核心体系是：

【8L 产品分层】构建企业 AI 生产化操作系统：
01 AI 场景雷达(Landscape)、02 AI 方案工作台(Logic)、03 企业知识与 RAG(Lab)、04 Agent 与 MCP 集成(Link)、05 AI 应用交付脚手架(Launchpad)、06 Eval 与反馈学习(Learn)、07 AI LiveOps 生产治理(Live)、08 FDE Playbook 资产库(Loop)。

【xL 方法论】从真问题到可复用价值的工程化交付路径：
Locate 定位、Learn 学习、Layer 分层、Link 连接、Launch 试点、Leverage 复制、Loop 复盘。

【xDo 工具】支撑真实交付的工程引擎：
Doops（部署运维与远程执行）、DoAgent（Agent 编排与任务执行）、DoDNS（域名证书与入口路由治理）。

L8AI 还提供企业 AI 生产化课程、场景样板和博客洞察。

请用专业、简洁、友好的中文回答访客的问题，聚焦企业 AI 落地场景。回答尽量简短清晰（通常不超过 150 字），必要时使用简短的要点列表（用「· 」开头），不要使用 Markdown 表格。如果访客想深入了解或合作，引导他们预约咨询（contact@l8ai.cn）。不要编造不存在的产品功能。`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const apiKey = process.env.MINIMAX_API_KEY
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "MINIMAX_API_KEY 未配置，请在项目环境变量中添加。" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    )
  }

  const minimax = createOpenAICompatible({
    name: "minimax",
    apiKey,
    // 国内平台默认 https://api.minimaxi.com/v1；海外平台为 https://api.minimax.io/v1
    baseURL: process.env.MINIMAX_BASE_URL || "https://api.minimaxi.com/v1",
  })

  const result = streamText({
    model: minimax(process.env.MINIMAX_MODEL || "MiniMax-M3"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  })

  return result.toUIMessageStreamResponse({
    onError: (error) => {
      console.log("[v0] MiniMax 调用出错:", error instanceof Error ? error.message : String(error))
      const msg = error instanceof Error ? error.message : String(error)
      if (/api key|401|authorized/i.test(msg)) {
        return "AI 助手暂时无法连接：MiniMax API Key 校验失败，请确认 MINIMAX_API_KEY 与所选平台（国内 api.minimaxi.com / 海外 api.minimax.io）匹配。"
      }
      return "AI 助手暂时遇到问题，请稍后再试。"
    },
  })
}
