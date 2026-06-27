import { createOpenAICompatible } from "@ai-sdk/openai-compatible"
import { convertToModelMessages, createUIMessageStream, createUIMessageStreamResponse, streamText, type UIMessage } from "ai"

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

const SITE_ANSWERS = [
  {
    patterns: [/8l/i, /product stratification/i, /product tier/i, /产品分层/, /八大产品/, /八层/],
    answer:
      "8L 产品分层是 L8AI 的企业 AI 生产化操作系统，把 AI 从 Demo 到生产系统拆成八个可交付层：\n· Landscape：AI 场景雷达，识别高价值业务场景\n· Logic：AI 方案工作台，沉淀方案、架构与验收指标\n· Lab：企业知识与 RAG，建设可验证知识应用\n· Link：Agent 与 MCP 集成，连接工具和业务系统\n· Launchpad：AI 应用交付脚手架，形成可上线应用\n· Learn：Eval 与反馈学习，持续评测改进\n· Live：AI LiveOps 生产治理，监控、审计、成本与回滚\n· Loop：FDE Playbook 资产库，把经验沉淀为可复用资产",
  },
  {
    patterns: [/xl/i, /xL/, /方法论/, /methodology/i, /fde/i],
    answer:
      "xL 方法论是 L8AI 从真问题到可复用价值的工程化路径：Locate 定位问题，Learn 学习业务，Layer 分层建模，Link 连接系统，Launch 试点上线，Leverage 规模复制，Loop 复盘沉淀。它的目标是让 AI 交付可评测、可运营、可复用。",
  },
  {
    patterns: [/xdo/i, /doops/i, /doagent/i, /dodns/i, /工具/, /engine/i],
    answer:
      "xDo 是 L8AI 的工程引擎系列，用来支撑真实交付：Doops 负责部署运维与远程执行，DoAgent 负责 Agent 编排与任务执行，DoDNS 负责域名、证书与入口路由治理。它们共同把方法论落到可运行的业务系统里。",
  },
  {
    patterns: [/课程/, /training/i, /course/i, /实战/, /学习/],
    answer:
      "L8AI 的课程围绕企业 AI 生产化展开，覆盖场景识别、知识库/RAG、Agent 集成、应用交付、Eval 评测和 LiveOps 治理。课程不是只做工具演示，而是帮助团队建立能复用到真实业务的交付方法和工程资产。",
  },
  {
    patterns: [/预约/, /咨询/, /contact/i, /合作/, /pricing/i, /price/i],
    answer:
      "可以通过 contact@l8ai.cn 预约咨询。建议先准备三个信息：企业当前 AI 应用目标、已有业务系统与知识资料、希望优先验证的 1-2 个场景。L8AI 会按 FDE 路径评估可交付方案和落地节奏。",
  },
]

function latestUserText(messages: UIMessage[]) {
  const lastUserMessage = [...messages].reverse().find((message) => message.role === "user")
  if (!lastUserMessage) return ""

  return lastUserMessage.parts
    .map((part) => {
      if (part.type === "text") return part.text
      return ""
    })
    .join("\n")
    .trim()
}

function getSiteAnswer(question: string) {
  const normalized = question.trim()
  if (!normalized) return null

  return SITE_ANSWERS.find((item) => item.patterns.some((pattern) => pattern.test(normalized)))?.answer ?? null
}

function createAssistantTextResponse(text: string) {
  const stream = createUIMessageStream<UIMessage>({
    execute: ({ writer }) => {
      writer.write({ type: "start" })
      writer.write({ type: "start-step" })
      writer.write({ type: "text-start", id: "site-answer" })
      writer.write({ type: "text-delta", id: "site-answer", delta: text })
      writer.write({ type: "text-end", id: "site-answer" })
      writer.write({ type: "finish-step" })
      writer.write({ type: "finish" })
    },
  })

  return createUIMessageStreamResponse({ stream })
}

function createConfigurationMessage(question: string) {
  return (
    getSiteAnswer(question) ??
    "当前模型服务还没有配置 MINIMAX_API_KEY，我可以先回答 L8AI 官网基础问题，例如 8L 产品分层、xL 方法论、xDo 工具链、课程和预约咨询。更深入的开放问题请联系 contact@l8ai.cn。"
  )
}

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()
  const question = latestUserText(messages)
  const siteAnswer = getSiteAnswer(question)

  if (siteAnswer) {
    return createAssistantTextResponse(siteAnswer)
  }

  const apiKey = process.env.MINIMAX_API_KEY
  if (!apiKey) {
    console.log("[v0] MINIMAX_API_KEY 未配置，使用 L8AI 站内知识回答。")
    return createAssistantTextResponse(createConfigurationMessage(question))
  }

  try {
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
        return getSiteAnswer(question) ?? "AI 助手暂时遇到问题，请稍后再试。"
      },
    })
  } catch (error) {
    console.log("[v0] MiniMax 初始化出错:", error instanceof Error ? error.message : String(error))
    return createAssistantTextResponse(createConfigurationMessage(question))
  }
}
