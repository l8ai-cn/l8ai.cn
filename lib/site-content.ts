export const company = {
  brand: "L8AI",
  legalNameCn: "杭州来八数智有限公司",
  legalNameEn: "Hangzhou Laiba Digital Intelligence Co., Ltd.",
  slogan: "产品矩阵 · 八维方法 · 课程体系 · 工程引擎",
  email: "contact@l8ai.cn",
}

export type NavItem = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  {
    label: "产品矩阵",
    href: "/products",
  },
  {
    label: "八维方法",
    href: "/method",
  },
  {
    label: "课程体系",
    href: "/courses",
  },
  {
    label: "工程引擎",
    href: "/tools",
  },
  {
    label: "实践案例",
    href: "/cases",
  },
  {
    label: "资源洞察",
    href: "/whitepapers",
  },
  {
    label: "关于我们",
    href: "/about",
  },
]

export const heroProof = [
  { icon: "workflow", label: "从业务问题出发" },
  { icon: "activity", label: "用评测定义质量" },
  { icon: "shield", label: "打通权限与治理" },
  { icon: "rocket", label: "上线后持续运营" },
]

export const heroMetrics = [
  { value: "8", label: "产品矩阵层" },
  { value: "8", label: "方法维度" },
  { value: "6", label: "课程路径" },
  { value: "6", label: "工程引擎" },
]

// ===== 8L 产品矩阵 =====
export type ProductLayer = {
  no: string
  id: string
  code: string
  icon: string
  title: string
  desc: string
  bullets: string[]
}

export const productLayers: ProductLayer[] = [
  {
    no: "01",
    id: "layer-01",
    code: "Landscape",
    icon: "radar",
    title: "AI 场景雷达",
    desc: "识别、收集、评分和排序企业 AI 机会，形成业务、技术和管理层共用的 opportunity map。",
    bullets: ["业务场景采集", "数据准备度评估", "价值与风险排序"],
  },
  {
    no: "02",
    id: "layer-02",
    code: "Logic",
    icon: "workflow",
    title: "AI 方案工作台",
    desc: "把模糊诉求转成可开发、可验收、可上线的 PRD、架构图、里程碑和风险清单。",
    bullets: ["方案与 PRD 生成", "成功指标设计", "边界与风险定义"],
  },
  {
    no: "03",
    id: "layer-03",
    code: "Lab",
    icon: "blocks",
    title: "企业知识与 RAG",
    desc: "把文档、制度、工单和业务知识转入可验证实验场，构建可权限治理、可引用溯源的知识应用。",
    bullets: ["多源知识接入", "检索与生成实验", "权限感知问答"],
  },
  {
    no: "04",
    id: "layer-04",
    code: "Link",
    icon: "link",
    title: "Agent 与 MCP 集成",
    desc: "让 Agent 不只会聊天，而是能调用工具、连接系统、遵守权限并执行业务流程。",
    bullets: ["MCP Server 构建", "企业 API 封装", "工具权限与审计"],
  },
  {
    no: "05",
    id: "layer-05",
    code: "Launchpad",
    icon: "circleCheck",
    title: "AI 应用交付脚手架",
    desc: "把常见企业 AI 场景快速做成可演示、可试点、可上线、可运维的业务应用。",
    bullets: ["RAG/Agent 模板", "前后端脚手架", "试点包交付"],
  },
  {
    no: "06",
    id: "layer-06",
    code: "Learn",
    icon: "rocket",
    title: "Eval 与反馈学习",
    desc: "建立问题集、rubric、回归测试和用户反馈机制，让 AI 效果能被度量、比较和持续改进。",
    bullets: ["Eval 数据集", "质量看板", "错误归因与回归"],
  },
  {
    no: "07",
    id: "layer-07",
    code: "Live",
    icon: "activity",
    title: "AI LiveOps 生产治理",
    desc: "让 AI 应用上线后可运行、可观测、可审计、可控成本、可告警、可回滚。",
    bullets: ["运行监控与 trace", "权限审计", "成本与配额治理"],
  },
  {
    no: "08",
    id: "layer-08",
    code: "Loop",
    icon: "shield",
    title: "FDE Playbook 资产库",
    desc: "把项目经验沉淀成模板、课程、连接器、runbook 和行业包，避免每次从零开始。",
    bullets: ["交付 Playbook", "行业方案包", "项目复盘模板"],
  },
]

// ===== 8L 方法论 =====
export type MethodDimension = {
  id: string
  no: string
  code: string
  icon: string
  title: string
  question: string
  input: string
  action: string
  output: string
  validation: string
}

export const methodDimensions: MethodDimension[] = [
  {
    id: "method-landscape",
    no: "01",
    code: "Landscape",
    icon: "radar",
    title: "机会定位",
    question: "企业到底应该先做哪个 AI 场景？",
    input: "业务目标、流程痛点、人工成本、数据现状、风险边界。",
    action: "用访谈、问题树和价值评分筛出高价值且可上线的场景。",
    output: "AI 机会地图、场景优先级、试点候选清单。",
    validation: "场景有明确业务负责人、指标口径和试点范围。",
  },
  {
    id: "method-logic",
    no: "02",
    code: "Logic",
    icon: "workflow",
    title: "方案成型",
    question: "模糊诉求如何变成能开发、能验收的方案？",
    input: "场景清单、用户角色、业务流程、系统边界、成功指标。",
    action: "把需求拆成 PRD、流程、架构、数据口径和验收标准。",
    output: "方案蓝图、MVP 范围、里程碑、风险清单。",
    validation: "业务、技术和管理层对范围、指标、边界达成一致。",
  },
  {
    id: "method-lab",
    no: "03",
    code: "Lab",
    icon: "blocks",
    title: "知识实验",
    question: "知识、数据和模型效果怎样被验证？",
    input: "文档、制度、工单、FAQ、数据库字段和真实问题集。",
    action: "建设知识实验场，跑通 RAG、提示词、权限和引用溯源。",
    output: "知识资产清单、实验报告、问题集、初版评测结果。",
    validation: "回答可溯源、权限可控制、失败样本可复盘。",
  },
  {
    id: "method-link",
    no: "04",
    code: "Link",
    icon: "link",
    title: "系统连接",
    question: "AI 如何从会回答变成会执行？",
    input: "企业 API、MCP 工具、权限策略、审计要求、业务系统。",
    action: "封装工具、连接系统、定义调用边界与人工确认点。",
    output: "Agent 工具清单、MCP/API 连接方案、权限审计方案。",
    validation: "关键任务能闭环执行，调用链路可追踪、可回滚。",
  },
  {
    id: "method-launchpad",
    no: "05",
    code: "Launchpad",
    icon: "circleCheck",
    title: "应用交付",
    question: "试点应用怎样从 Demo 变成可交付系统？",
    input: "方案蓝图、知识实验结果、系统连接能力、试点用户。",
    action: "用交付脚手架完成前后端、权限、日志、灰度和部署。",
    output: "可上线应用、试点计划、培训材料、上线清单。",
    validation: "试点用户能完成真实流程，异常路径有处理方案。",
  },
  {
    id: "method-learn",
    no: "06",
    code: "Learn",
    icon: "rocket",
    title: "评测学习",
    question: "AI 效果如何持续变好而不是靠感觉判断？",
    input: "真实问题、用户反馈、模型输出、失败案例、业务指标。",
    action: "建立 Eval、Rubric、回归测试和反馈闭环。",
    output: "评测看板、质量报告、改进 backlog、回归测试集。",
    validation: "每次迭代能证明质量变化，关键失败不重复出现。",
  },
  {
    id: "method-live",
    no: "07",
    code: "Live",
    icon: "activity",
    title: "生产运营",
    question: "AI 上线后如何稳定、可控、可治理？",
    input: "运行日志、成本数据、权限审计、用户行为、告警事件。",
    action: "建立 LiveOps 监控、成本、审计、安全和应急机制。",
    output: "生产看板、运维 runbook、成本策略、风险响应流程。",
    validation: "服务可观测、成本可解释、事故可追踪、风险可处置。",
  },
  {
    id: "method-loop",
    no: "08",
    code: "Loop",
    icon: "shield",
    title: "资产复用",
    question: "一次项目怎样沉淀成下一次更快交付的资产？",
    input: "项目复盘、模板、连接器、评测集、运营记录、客户反馈。",
    action: "沉淀 Playbook、课程、模板、行业包和复用组件。",
    output: "FDE Playbook、课程素材、方案包、复用资产库。",
    validation: "新项目能复用旧资产，交付周期和沟通成本下降。",
  },
]

// ===== 工程引擎 =====
export type DoTool = {
  id: string
  icon: string
  name: string
  tagline: string
  desc: string
  bullets: string[]
  features: { title: string; desc: string }[]
}

export const doTools: DoTool[] = [
  {
    id: "doops",
    icon: "rocket",
    name: "Doops",
    tagline: "部署 · 运维 · 远程执行",
    desc: "面向部署、运维、远程执行和 Kubernetes 操作的工程入口，把 AI 应用从本地交付推向稳定生产环境。",
    bullets: ["远程运维入口", "集群发布", "运行态诊断"],
    features: [
      { title: "一键发布", desc: "标准化发布流水线，从代码到集群一步到位。" },
      { title: "远程执行", desc: "安全的远程命令执行与批量运维操作。" },
      { title: "运行诊断", desc: "实时观测运行态指标，快速定位问题。" },
    ],
  },
  {
    id: "doagent",
    icon: "brain",
    name: "DoAgent",
    tagline: "Agent 编排 · 工具调用 · 任务执行",
    desc: "面向 Agent 编排、工具调用、任务执行和失败追踪的运行引擎，让企业流程可以被 AI 有边界地执行。",
    bullets: ["Agent 运行时", "工具调用", "任务编排"],
    features: [
      { title: "Agent 运行时", desc: "稳定可靠的 Agent 执行环境与上下文管理。" },
      { title: "工具调用", desc: "统一的工具接入协议，连接业务系统与 API。" },
      { title: "任务编排", desc: "多步骤任务的可视化编排与监控。" },
    ],
  },
  {
    id: "dodns",
    icon: "workflow",
    name: "DoDNS",
    tagline: "域名 · 证书 · 入口路由",
    desc: "面向域名、解析、证书、Ingress 和入口路由的网络治理工具，保障官网、知识库和 AI 应用稳定可访问。",
    bullets: ["DNS 管理", "证书配置", "入口路由"],
    features: [
      { title: "DNS 管理", desc: "集中化的域名解析与记录管理。" },
      { title: "证书自动化", desc: "证书自动签发与续期，保障安全访问。" },
      { title: "入口路由", desc: "灵活的 Ingress 与流量路由治理。" },
    ],
  },
  {
    id: "dosql",
    icon: "database",
    name: "DoSQL",
    tagline: "数据查询 · 指标口径 · 分析取数",
    desc: "面向企业数据查询、指标口径、权限边界和分析取数的工程引擎，让 AI 能安全理解业务数据并生成可审计的 SQL 查询。",
    bullets: ["自然语言取数", "指标口径管理", "查询审计"],
    features: [
      { title: "语义查询", desc: "把业务问题转成受控 SQL，支持字段解释、查询预览和结果校验。" },
      { title: "指标治理", desc: "沉淀指标口径、表关系、权限边界和常用分析模板。" },
      { title: "安全审计", desc: "记录查询意图、SQL、执行结果和敏感字段访问，便于复盘。" },
    ],
  },
  {
    id: "dosecurity",
    icon: "shield",
    name: "DoSecurity",
    tagline: "安全 · 权限 · 审计响应",
    desc: "面向企业 AI 系统的安全治理引擎，覆盖身份权限、密钥管理、调用审计、风险策略和安全事件响应。",
    bullets: ["权限治理", "密钥与审计", "风险响应"],
    features: [
      { title: "权限基线", desc: "定义用户、角色、工具、知识和数据的访问边界。" },
      { title: "审计证据", desc: "记录模型调用、工具执行、敏感操作和人工确认链路。" },
      { title: "风险响应", desc: "对越权、泄露、异常调用和高风险输出建立处置流程。" },
    ],
  },
  {
    id: "doproject",
    icon: "layers",
    name: "DoProject",
    tagline: "计划 · 任务 · 交付证据",
    desc: "面向 FDE 项目管理的交付协同引擎，把机会、方案、任务、里程碑、验收材料和复盘资产串成项目闭环。",
    bullets: ["项目计划", "任务协同", "交付复盘"],
    features: [
      { title: "计划编排", desc: "把场景、里程碑、负责人、风险和依赖拆成可推进计划。" },
      { title: "交付证据", desc: "沉淀需求、实验、上线、验收和会议结论等项目证据。" },
      { title: "复盘资产", desc: "把项目结果转成 playbook、模板、课程素材和下一轮 backlog。" },
    ],
  },
]

export const knowledgeItems = [
  { id: "knowledge-methods", icon: "compass", title: "方法论与指南", desc: "FDE、产品矩阵、八维方法、工程引擎的流程指引、决策框架与交付标准。" },
  { id: "knowledge-scenarios", icon: "workflow", title: "行业与场景库", desc: "沉淀制造、教育、零售、金融、政企等场景的 AI 机会地图和方案参考。" },
  { id: "knowledge-tools", icon: "book", title: "模板与工具", desc: "访谈脚本、PRD 模板、Eval 数据集、上线清单和 Do 系列自动化脚本。" },
  { id: "knowledge-cases", icon: "chat", title: "案例与复盘", desc: "把项目问题、技术路径、上线闸口和复盘结论转成可复用 playbook。" },
]

export type CaseCard = {
  id: string
  tag: string
  title: string
  desc: string
  metrics: [string, string][]
}

export const caseCards: CaseCard[] = [
  {
    id: "case-service",
    tag: "服务知识",
    title: "服务知识助手交付蓝图",
    desc: "围绕客服、售前和售后知识，构建带引用溯源、权限过滤和质量评测的 RAG 助手。",
    metrics: [
      ["RAG", "知识问答"],
      ["Eval", "质量复盘"],
    ],
  },
  {
    id: "case-operation",
    tag: "运维流程",
    title: "设备运维 Copilot 样板",
    desc: "把设备文档、工单记录、巡检流程和工具调用连接起来，形成可审计的运维辅助流程。",
    metrics: [
      ["Agent", "任务执行"],
      ["MCP", "工具集成"],
    ],
  },
  {
    id: "case-growth",
    tag: "内容合规",
    title: "营销内容生成与审核样板",
    desc: "用模板、知识库、风控规则和人工复核流程，支持内容生成、合规检查和版本追踪。",
    metrics: [
      ["规则", "合规边界"],
      ["流程", "人工复核"],
    ],
  },
  {
    id: "case-knowledge",
    tag: "知识管理",
    title: "集团知识中台建设路径",
    desc: "从知识资产盘点、权限模型、检索评测到运营机制，帮助集团型组织建立统一知识入口。",
    metrics: [
      ["8L", "能力分层"],
      ["Loop", "资产沉淀"],
    ],
  },
]

export const footerColumns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "产品矩阵",
    links: [
      { label: "场景雷达", href: "/products#layer-01" },
      { label: "方案工作台", href: "/products#layer-02" },
      { label: "生产治理", href: "/products#layer-07" },
    ],
  },
  {
    title: "八维方法",
    links: [
      { label: "机会定位", href: "/method#method-landscape" },
      { label: "系统连接", href: "/method#method-link" },
      { label: "资产复用", href: "/method#method-loop" },
    ],
  },
  {
    title: "工程引擎",
    links: [
      { label: "Doops", href: "/tools#doops" },
      { label: "DoAgent", href: "/tools#doagent" },
      { label: "DoDNS", href: "/tools#dodns" },
      { label: "DoSQL", href: "/tools#dosql" },
      { label: "DoSecurity", href: "/tools#dosecurity" },
      { label: "DoProject", href: "/tools#doproject" },
    ],
  },
  {
    title: "资源",
    links: [
      { label: "实践案例", href: "/cases" },
      { label: "课程", href: "/courses" },
      { label: "白皮书", href: "/whitepapers" },
      { label: "博客", href: "/blog" },
    ],
  },
  {
    title: "关于我们",
    links: [
      { label: "公司介绍", href: "/about" },
      { label: "联系我们", href: "/about#contact" },
    ],
  },
]
