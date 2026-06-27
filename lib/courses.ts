export type CourseModule = {
  title: string
  objective: string
  deliverable: string
}

export type Course = {
  id: string
  track: "8L" | "6L" | "3Do" | "Operations"
  title: string
  subtitle: string
  audience: string
  duration: string
  level: string
  outcome: string
  pageTitle: string
  summary: string
  modules: CourseModule[]
  tools: string[]
}

export const courseCatalogIntro = {
  title: "课程体系：围绕 8L、6L、3Do 培养企业 AI 落地能力",
  desc: "从方法、产品、工具到运营治理，帮助团队形成能交付真实业务系统的学习路径。",
}

export const courseTracks: Array<{ label: string; track: Course["track"] }> = [
  { label: "8L 产品课", track: "8L" },
  { label: "6L 方法课", track: "6L" },
  { label: "3Do 工具课", track: "3Do" },
  { label: "运营治理课", track: "Operations" },
]

export const courses: Course[] = [
  {
    id: "ai-fde-foundation",
    track: "6L",
    title: "AI FDE Foundation Bootcamp",
    subtitle: "企业 AI 落地基础训练营",
    audience: "企业负责人、产品经理、解决方案顾问、AI 项目负责人",
    duration: "2 天工作坊",
    level: "入门到进阶",
    outcome: "完成一份企业 AI 机会地图与首个落地路线图。",
    pageTitle: "AI FDE Foundation Bootcamp",
    summary: "用 8L / 6L / 3Do 建立企业 AI 落地的共同语言，识别可做、值得做、能上线的业务场景。",
    modules: [
      { title: "AI 落地全景", objective: "区分 Demo、工具、系统和业务闭环。", deliverable: "AI 落地成熟度自评表" },
      { title: "8L 体系导入", objective: "用八层结构拆解 AI 产品能力。", deliverable: "8L 能力拆解图" },
      { title: "6L 方法导入", objective: "掌握从定位到闭环的交付路径。", deliverable: "6L 项目路径图" },
      { title: "3Do 工程导入", objective: "理解 Do 系列工具如何支撑运行。", deliverable: "工具选型清单" },
    ],
    tools: ["8L Canvas", "6L Delivery Map", "Opportunity Scorecard"],
  },
  {
    id: "8l-product-system",
    track: "8L",
    title: "8L Product System Workshop",
    subtitle: "8L 产品系统设计工作坊",
    audience: "AI 产品经理、业务架构师、售前方案团队",
    duration: "3 天实战课",
    level: "进阶",
    outcome: "完成一个企业 AI 产品的 8L 分层方案。",
    pageTitle: "8L Product System Workshop",
    summary: "围绕 Lead、Library、LLM、Link、Lab、Launch、Ledger、Loop 设计可交付的 AI 产品系统。",
    modules: [
      { title: "Lead 与 Library", objective: "把业务机会和知识资产沉淀为产品输入。", deliverable: "机会与知识资产表" },
      { title: "LLM 与 Link", objective: "设计模型能力边界和系统连接。", deliverable: "模型与集成方案" },
      { title: "Lab 与 Launch", objective: "规划评测体系和发布路径。", deliverable: "评测与上线方案" },
      { title: "Ledger 与 Loop", objective: "设计价值账本和反馈闭环。", deliverable: "运营度量看板草案" },
    ],
    tools: ["8L Layer Map", "Product Requirement Sheet", "Value Ledger"],
  },
  {
    id: "6l-delivery-method",
    track: "6L",
    title: "6L Delivery Method Practicum",
    subtitle: "6L 方法论交付实训",
    audience: "交付经理、FDE、实施顾问、客户成功团队",
    duration: "4 周项目制",
    level: "进阶到专业",
    outcome: "交付一个从业务定位到试点上线的 AI 项目方案。",
    pageTitle: "6L Delivery Method Practicum",
    summary: "用 Locate、Learn、Layer、Link、Launch、Loop 管理企业 AI 项目的节奏和验收。",
    modules: [
      { title: "Locate / Learn", objective: "完成业务调研、角色访谈和知识吸收。", deliverable: "调研纪要与知识地图" },
      { title: "Layer / Link", objective: "设计分层方案并连接系统、知识库和工具。", deliverable: "系统连接方案" },
      { title: "Launch", objective: "组织试点上线、验收和问题闭环。", deliverable: "试点上线计划" },
      { title: "Loop", objective: "复用能力并建立长期运营机制。", deliverable: "复用与运营计划" },
    ],
    tools: ["Interview Script", "Delivery Checklist", "Pilot Runbook"],
  },
  {
    id: "3do-engineering-tools",
    track: "3Do",
    title: "3Do Engineering Tools Lab",
    subtitle: "Do 系列工程工具实验课",
    audience: "工程师、运维、平台团队、技术负责人",
    duration: "5 天实验课",
    level: "专业",
    outcome: "完成 Doops、DoAgent、DoDNS 支撑的 AI 应用发布与诊断流程。",
    pageTitle: "3Do Engineering Tools Lab",
    summary: "围绕 Doops、DoAgent、DoDNS 建立部署、执行、域名证书和运行诊断的工程能力。",
    modules: [
      { title: "Doops 发布与运维", objective: "掌握远程执行、集群发布和运行检查。", deliverable: "Doops 部署 runbook" },
      { title: "DoAgent 执行引擎", objective: "配置 Agent 任务、工具调用和执行链路。", deliverable: "Agent 工具链 Demo" },
      { title: "DoDNS 入口治理", objective: "配置域名、证书、Ingress 和验证闭环。", deliverable: "DNS/TLS 检查清单" },
      { title: "3Do 综合演练", objective: "完成一次从开发到上线的端到端发布。", deliverable: "综合交付报告" },
    ],
    tools: ["Doops", "DoAgent", "DoDNS", "Kubernetes", "Ingress"],
  },
  {
    id: "enterprise-knowledge-agent",
    track: "8L",
    title: "Enterprise Knowledge Agent Builder",
    subtitle: "企业知识 Agent 构建课",
    audience: "知识管理负责人、AI 应用工程师、业务专家",
    duration: "3 周实战课",
    level: "进阶",
    outcome: "完成一个可评测的企业知识 Agent 原型。",
    pageTitle: "Enterprise Knowledge Agent Builder",
    summary: "围绕知识资产、RAG、工具调用和评测体系构建可用的企业知识 Agent。",
    modules: [
      { title: "知识资产整理", objective: "构建领域知识目录、权限和版本策略。", deliverable: "知识资产清单" },
      { title: "检索与生成链路", objective: "设计 RAG 流程、提示词和上下文策略。", deliverable: "RAG 流程图" },
      { title: "Agent 工具调用", objective: "让 Agent 调用业务工具完成任务。", deliverable: "Agent Action Demo" },
      { title: "评测与上线准备", objective: "建立问题集、评测指标和灰度策略。", deliverable: "评测报告" },
    ],
    tools: ["Knowledge Base", "RAG Eval Set", "DoAgent"],
  },
  {
    id: "ai-ops-governance",
    track: "Operations",
    title: "AI Operations and Governance",
    subtitle: "AI 运营与治理课程",
    audience: "管理者、安全合规、平台运营、AI 项目负责人",
    duration: "2 天工作坊",
    level: "管理与专业",
    outcome: "建立 AI 应用的运营指标、成本治理和风险控制机制。",
    pageTitle: "AI Operations and Governance",
    summary: "把 AI 应用从一次性交付转为长期运营，覆盖指标、成本、权限、安全和复盘。",
    modules: [
      { title: "运营指标体系", objective: "定义使用、效果、质量和业务价值指标。", deliverable: "AI 运营指标表" },
      { title: "成本与配额治理", objective: "建立模型调用、预算和容量管理策略。", deliverable: "成本治理方案" },
      { title: "安全与合规", objective: "管理权限、审计、数据边界和风险响应。", deliverable: "AI 风险清单" },
      { title: "Loop 复盘机制", objective: "建立持续迭代和治理例会机制。", deliverable: "运营复盘模板" },
    ],
    tools: ["Value Ledger", "Risk Register", "Ops Review Template"],
  },
]
