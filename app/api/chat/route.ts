import { createOpenAICompatible } from "@ai-sdk/openai-compatible"
import { convertToModelMessages, streamText, type UIMessage } from "ai"

export const maxDuration = 30

const SYSTEM_PROMPT = `你是 L8AI（杭州来八数智有限公司）官网的 AI 助手，名字叫"来八助手"。
L8AI 帮助企业把 AI 从 Demo 推进到真实可运营的业务系统，核心体系是：

【8L 核心产品】八层结构构建企业 AI 落地操作系统：
01 机会与问题洞察(Lead)、02 数据与知识工程(Library)、03 模型与工具编排(LLM)、04 应用与集成开发(Link)、05 评测与验证体系(Lab)、06 部署与运营平台(Launch)、07 效果度量与分析(Ledger)、08 持续迭代与治理(Loop)。

【6L 方法论】从定位到闭环的工程化交付路径：
Locate 定位、Learn 学习、Layer 分层、Link 连接、Launch 上线、Loop 闭环。

【3Do 工具】支撑真实交付的工程引擎：
Doops（部署运维与远程执行）、DoAgent（Agent 编排与任务执行）、DoDNS（域名证书与入口路由治理）。

L8AI 还提供企业 AI 落地课程、实践案例和博客洞察。

请用专业、简洁、友好的中文回答访客的问题，聚焦企业 AI 落地场景。回答尽量简短清晰，必要时使用要点列表。如果访客想深入了解或合作，引导他们预约咨询（contact@l8ai.cn）。不要编造不存在的产品功能。`

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
    baseURL: process.env.MINIMAX_BASE_URL || "https://api.minimax.io/v1",
  })

  const result = streamText({
    model: minimax(process.env.MINIMAX_MODEL || "MiniMax-M3"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  })

  return result.toUIMessageStreamResponse()
}
