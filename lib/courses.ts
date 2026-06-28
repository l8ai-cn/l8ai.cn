export type CourseModule = {
  title: string
  objective: string
  deliverable: string
}

export type Course = {
  id: string
  track: "8L" | "xL" | "xDo" | "Operations"
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
  title: "课程体系：把 8L 方法训练成团队能力",
  desc: "课程体系回答“团队怎样学会并复用这套方法”。从业务场景、产品矩阵、知识实验、Agent 集成、Eval 评测到生产运营，每门课都要求产出可验收交付物。",
}

export const courseTracks: Array<{ label: string; track: Course["track"] }> = [
  { label: "产品矩阵课", track: "8L" },
  { label: "八维方法课", track: "xL" },
  { label: "Do 引擎课", track: "xDo" },
  { label: "运营治理课", track: "Operations" },
]

export type CourseDesignModule = {
  no: string
  layer: string
  title: string
  goal: string
  task: string
  deliverable: string
  assessment: string
}

export const courseDesignModules: CourseDesignModule[] = [
  {
    no: "01",
    layer: "Landscape",
    title: "AI 场景识别与机会评分",
    goal: "能从业务目标和流程痛点中筛选值得做的 AI 场景。",
    task: "访谈一个真实业务流程，完成机会地图和优先级排序。",
    deliverable: "AI 机会地图、场景评分表。",
    assessment: "场景是否有负责人、指标、数据条件和试点边界。",
  },
  {
    no: "02",
    layer: "Logic",
    title: "AI 方案设计与验收定义",
    goal: "能把模糊需求转成可开发、可验收的 AI 方案。",
    task: "为一个优先场景写出 PRD、流程图、风险清单和验收指标。",
    deliverable: "AI 方案蓝图、验收标准。",
    assessment: "业务、技术、管理三方是否能按同一方案推进。",
  },
  {
    no: "03",
    layer: "Lab",
    title: "企业知识与 RAG 实验",
    goal: "能把文档和业务知识转成可测试的知识应用。",
    task: "整理知识资产，构建问题集，完成一次 RAG 实验。",
    deliverable: "知识资产清单、RAG 实验报告。",
    assessment: "答案是否可溯源，失败样本是否能定位原因。",
  },
  {
    no: "04",
    layer: "Link",
    title: "Agent 工具与系统连接",
    goal: "能让 AI 通过工具调用进入真实业务流程。",
    task: "设计 Agent 工具清单，完成一个 API/MCP 调用链路。",
    deliverable: "工具调用方案、权限审计表。",
    assessment: "调用边界是否清楚，执行过程是否可追踪。",
  },
  {
    no: "05",
    layer: "Launchpad",
    title: "试点应用交付",
    goal: "能把 Demo 做成小范围可上线的试点应用。",
    task: "完成试点应用原型、上线清单和用户培训材料。",
    deliverable: "试点应用包、发布计划。",
    assessment: "用户是否能完成真实流程，异常路径是否有处理方案。",
  },
  {
    no: "06",
    layer: "Learn",
    title: "Eval 评测与反馈学习",
    goal: "能用数据判断 AI 效果，而不是靠主观感觉。",
    task: "建立评测集、rubric、回归测试和反馈看板。",
    deliverable: "Eval 报告、改进 backlog。",
    assessment: "质量变化是否可量化，关键失败是否可复现。",
  },
  {
    no: "07",
    layer: "Live",
    title: "生产运营与治理",
    goal: "能让 AI 应用上线后持续稳定、可控、可审计。",
    task: "设计监控、成本、权限、安全和应急 runbook。",
    deliverable: "LiveOps 看板、治理方案。",
    assessment: "运行、成本、安全和事故处理是否有闭环。",
  },
  {
    no: "08",
    layer: "Loop",
    title: "资产沉淀与复用",
    goal: "能把一次项目沉淀为下一次可复用的组织资产。",
    task: "把项目复盘整理成模板、课程素材、连接器和行业包。",
    deliverable: "FDE Playbook、复用资产清单。",
    assessment: "新项目是否能直接复用资产并缩短交付周期。",
  },
]

export const courses: Course[] = [
  {
    id: "ai-fde-foundation",
    track: "xL",
    title: "AI FDE Foundation Bootcamp",
    subtitle: "企业 AI 生产化基础训练营",
    audience: "企业负责人、产品经理、解决方案顾问、AI 项目负责人",
    duration: "2 天工作坊",
    level: "入门到进阶",
    outcome: "完成一份企业 AI 机会地图与首个落地路线图。",
    pageTitle: "AI FDE Foundation Bootcamp",
    summary: "用产品矩阵、八维方法和 Do 引擎建立企业 AI 生产化的共同语言，识别可做、值得做、能上线、能运营的业务场景。",
    modules: [
      { title: "AI 生产化全景", objective: "区分 Demo、工具、系统和业务闭环。", deliverable: "AI 生产化成熟度自评表" },
      { title: "8L 体系导入", objective: "用八层结构拆解 AI 产品能力。", deliverable: "8L 能力拆解图" },
      { title: "xL 方法导入", objective: "掌握从定位到复盘的交付路径。", deliverable: "xL 项目路径图" },
      { title: "Do 引擎导入", objective: "理解 Do 系列工具如何支撑运行。", deliverable: "工具选型清单" },
    ],
    tools: ["8L Canvas", "xL Delivery Map", "Opportunity Scorecard"],
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
    summary: "围绕 Landscape、Logic、Lab、Link、Launchpad、Learn、Live、Loop 设计可交付、可上线、可运营的 AI 产品系统。",
    modules: [
      { title: "Landscape 与 Logic", objective: "把业务机会和流程逻辑沉淀为产品输入。", deliverable: "机会地图与方案边界表" },
      { title: "Lab 与 Link", objective: "设计知识实验、RAG 评测和系统连接能力。", deliverable: "知识实验与集成方案" },
      { title: "Launchpad 与 Learn", objective: "规划应用脚手架、试点路径和评测学习机制。", deliverable: "试点应用与 Eval 方案" },
      { title: "Live 与 Loop", objective: "设计生产治理、运营复盘和资产沉淀机制。", deliverable: "LiveOps 与 Playbook 草案" },
    ],
    tools: ["8L Layer Map", "Product Requirement Sheet", "LiveOps Review"],
  },
  {
    id: "xl-delivery-method",
    track: "xL",
    title: "xL Delivery Method Practicum",
    subtitle: "八维方法交付路径实训",
    audience: "交付经理、FDE、解决方案工程师、客户成功团队",
    duration: "4 周项目制",
    level: "进阶到专业",
    outcome: "交付一个从业务定位到试点上线的 AI 项目方案。",
    pageTitle: "xL Delivery Method Practicum",
    summary: "用 Locate、Learn、Layer、Link、Launch、Leverage、Loop 管理企业 AI 项目的调研、设计、集成、试点、复制和复盘。",
    modules: [
      { title: "Locate / Learn", objective: "完成业务调研、角色访谈和知识吸收。", deliverable: "调研纪要与知识地图" },
      { title: "Layer / Link", objective: "设计分层方案并连接系统、知识库和工具。", deliverable: "系统连接方案" },
      { title: "Launch", objective: "组织试点上线、验收和问题闭环。", deliverable: "试点上线计划" },
      { title: "Leverage / Loop", objective: "复用能力并建立长期运营机制。", deliverable: "复用与运营计划" },
    ],
    tools: ["Interview Script", "Delivery Checklist", "Pilot Runbook"],
  },
  {
    id: "xdo-engineering-tools",
    track: "xDo",
    title: "Do Engineering Tools Lab",
    subtitle: "Do 系列工程工具实验课",
    audience: "工程师、运维、平台团队、技术负责人",
    duration: "5 天实验课",
    level: "专业",
    outcome: "完成 Doops、DoAgent、DoDNS、DoSQL、DoSecurity、DoProject 支撑的 AI 应用发布、诊断、取数、安全和交付流程。",
    pageTitle: "Do Engineering Tools Lab",
    summary: "围绕 Doops、DoAgent、DoDNS、DoSQL、DoSecurity、DoProject 建立部署、执行、入口治理、数据查询、安全审计和项目交付的工程能力。",
    modules: [
      { title: "Doops 发布与运维", objective: "掌握远程执行、集群发布和运行检查。", deliverable: "Doops 部署 runbook" },
      { title: "DoAgent 执行引擎", objective: "配置 Agent 任务、工具调用和执行链路。", deliverable: "Agent 工具链 Demo" },
      { title: "DoDNS 入口治理", objective: "配置域名、证书、Ingress 和验证闭环。", deliverable: "DNS/TLS 检查清单" },
      { title: "DoSQL 数据查询", objective: "设计指标口径、表关系、权限边界和可审计 SQL 查询链路。", deliverable: "DoSQL 查询与指标治理方案" },
      { title: "DoSecurity 安全治理", objective: "建立权限、密钥、调用审计和风险响应流程。", deliverable: "AI 安全审计清单" },
      { title: "DoProject 项目交付", objective: "把任务、里程碑、验收证据和复盘资产串成闭环。", deliverable: "项目交付证据包" },
      { title: "Do 引擎综合演练", objective: "完成一次从开发到上线、从安全到复盘的端到端发布。", deliverable: "综合交付报告" },
    ],
    tools: ["Doops", "DoAgent", "DoDNS", "DoSQL", "DoSecurity", "DoProject", "Kubernetes", "Ingress"],
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
    tools: ["Value Review", "Risk Register", "Ops Review Template"],
  },
]
