export const company = {
  brand: "L8AI",
  legalNameCn: "杭州来八数智有限公司",
  legalNameEn: "Hangzhou Laiba Digital Intelligence Co., Ltd.",
  slogan: "8L · xL · xDo 企业 AI 生产化体系",
  email: "contact@l8ai.cn",
}

export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string; desc?: string }[]
}

export const navItems: NavItem[] = [
  {
    label: "8L 产品分层",
    href: "/products",
    children: [
      { label: "8L 产品分层总览", href: "/products", desc: "构建企业 AI 生产化操作系统" },
      { label: "Landscape 场景雷达", href: "/products#layer-01" },
      { label: "Link 集成平台", href: "/products#layer-04" },
      { label: "Loop 资产闭环", href: "/products#layer-08" },
    ],
  },
  {
    label: "xL 方法论",
    href: "/method",
    children: [
      { label: "xL 交付路径总览", href: "/method", desc: "从真问题到可复用价值的工程化路径" },
      { label: "Locate / Learn", href: "/method#step-1" },
      { label: "Layer / Link", href: "/method#step-3" },
      { label: "Launch / Leverage / Loop", href: "/method#step-5" },
    ],
  },
  {
    label: "xDo 引擎",
    href: "/tools",
    children: [
      { label: "xDo 工程工具链总览", href: "/tools", desc: "Doops · DoAgent · DoDNS" },
      { label: "Doops 部署运维", href: "/tools#doops" },
      { label: "DoAgent 执行引擎", href: "/tools#doagent" },
      { label: "DoDNS 网络治理", href: "/tools#dodns" },
    ],
  },
  {
    label: "实践案例",
    href: "/cases",
  },
  {
    label: "课程",
    href: "/courses",
  },
  {
    label: "白皮书",
    href: "/whitepapers",
  },
  {
    label: "博客",
    href: "/blog",
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
  { value: "8L", label: "产品能力层" },
  { value: "7", label: "xL 交付步骤" },
  { value: "3+", label: "xDo 工具入口" },
  { value: "4类", label: "交付资产" },
]

// ===== 8L 产品分层 =====
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

// ===== xL 方法论 =====
export type MethodStep = {
  no: string
  id: string
  code: string
  icon: string
  title: string
  desc: string
  bullets: string[]
}

export const methodSteps: MethodStep[] = [
  {
    no: "1",
    id: "step-1",
    code: "Locate",
    icon: "compass",
    title: "定位真问题",
    desc: "进入业务一线，识别真正影响指标、流程和采用的 AI 机会。",
    bullets: ["业务访谈", "问题树拆解", "价值判断"],
  },
  {
    no: "2",
    id: "step-2",
    code: "Learn",
    icon: "book",
    title: "学习业务语境",
    desc: "吸收行业术语、系统现状、数据来源、组织角色和约束条件。",
    bullets: ["流程学习", "知识盘点", "系统上下文"],
  },
  {
    no: "3",
    id: "step-3",
    code: "Layer",
    icon: "layers",
    title: "分层设计",
    desc: "把需求拆成产品层、数据层、模型层、工具层、权限层和运营层。",
    bullets: ["8L 映射", "架构分层", "验收边界"],
  },
  {
    no: "4",
    id: "step-4",
    code: "Link",
    icon: "link",
    title: "连接系统",
    desc: "打通知识库、API、MCP、Agent 工具、权限、审计和企业业务系统。",
    bullets: ["数据接入", "工具调用", "集成联调"],
  },
  {
    no: "5",
    id: "step-5",
    code: "Launch",
    icon: "rocket",
    title: "验证试点",
    desc: "用小范围试点验证质量、流程、成本、用户采用和上线条件。",
    bullets: ["试点上线", "Eval 评测", "问题闭环"],
  },
  {
    no: "6",
    id: "step-6",
    code: "Leverage",
    icon: "rocket",
    title: "规模上线",
    desc: "把验证过的能力复制到更多团队、流程和业务场景，形成组织杠杆。",
    bullets: ["上线发布", "扩展推广", "培训赋能"],
  },
  {
    no: "7",
    id: "step-7",
    code: "Loop",
    icon: "activity",
    title: "运营复盘",
    desc: "用运行数据、用户反馈和项目复盘持续改进，并沉淀可复用资产。",
    bullets: ["LiveOps 运营", "复盘改进", "资产沉淀"],
  },
]

// ===== xDo 工具 =====
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
]

export const knowledgeItems = [
  { id: "knowledge-methods", icon: "compass", title: "方法论与指南", desc: "FDE、8L、xL、xDo 的流程指引、决策框架与交付标准。" },
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
    title: "8L 产品分层",
    links: [
      { label: "场景雷达", href: "/products#layer-01" },
      { label: "方案工作台", href: "/products#layer-02" },
      { label: "生产治理", href: "/products#layer-07" },
    ],
  },
  {
    title: "xL 方法论",
    links: [
      { label: "问题定位", href: "/method#step-1" },
      { label: "系统连接", href: "/method#step-4" },
      { label: "运营复盘", href: "/method#step-7" },
    ],
  },
  {
    title: "xDo 工程引擎",
    links: [
      { label: "Doops", href: "/tools#doops" },
      { label: "DoAgent", href: "/tools#doagent" },
      { label: "DoDNS", href: "/tools#dodns" },
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
