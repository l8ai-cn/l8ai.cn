export const company = {
  brand: "L8AI",
  legalNameCn: "杭州来八数智有限公司",
  legalNameEn: "Hangzhou Laiba Digital Intelligence Co., Ltd.",
  slogan: "8L 核心产品 · 6L 方法论 · 3Do 工具",
  email: "contact@l8ai.cn",
}

export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string; desc?: string }[]
}

export const navItems: NavItem[] = [
  {
    label: "核心产品",
    href: "/products",
    children: [
      { label: "8L 产品体系总览", href: "/products", desc: "八层结构构建企业 AI 落地操作系统" },
      { label: "机会洞察 / 知识工程", href: "/products#layer-01" },
      { label: "模型编排 / 应用集成", href: "/products#layer-03" },
      { label: "运营治理 / 效果度量", href: "/products#layer-07" },
    ],
  },
  {
    label: "方法论",
    href: "/method",
    children: [
      { label: "6L 方法论总览", href: "/method", desc: "从定位到闭环的工程化交付路径" },
      { label: "Locate / Learn", href: "/method#step-1" },
      { label: "Layer / Link", href: "/method#step-3" },
      { label: "Launch / Loop", href: "/method#step-5" },
    ],
  },
  {
    label: "3Do 工具",
    href: "/tools",
    children: [
      { label: "3Do 工程引擎总览", href: "/tools", desc: "Doops · DoAgent · DoDNS" },
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
    label: "博客",
    href: "/blog",
  },
  {
    label: "关于我们",
    href: "/about",
  },
]

export const heroProof = [
  { icon: "shield", label: "业务导向的工程落地" },
  { icon: "activity", label: "可度量的业务价值" },
  { icon: "lock", label: "安全合规与可控" },
  { icon: "workflow", label: "长期陪伴的团队" },
]

export const heroMetrics = [
  { value: "23", label: "上线应用数" },
  { value: "128 万", label: "月度调用量" },
  { value: "68%", label: "业务覆盖率" },
  { value: "4.7 / 5", label: "综合满意度" },
]

// ===== 8L 核心产品 =====
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
    code: "Lead",
    icon: "radar",
    title: "机会与问题洞察",
    desc: "识别高价值业务场景与痛点，量化机会空间与优先级。",
    bullets: ["业务流程分析", "价值评估模型", "机会池管理"],
  },
  {
    no: "02",
    id: "layer-02",
    code: "Library",
    icon: "workflow",
    title: "数据与知识工程",
    desc: "构建高质量知识资产与企业知识库，为模型提供可靠语境。",
    bullets: ["数据接入与治理", "知识库与向量化", "数据质量评估"],
  },
  {
    no: "03",
    id: "layer-03",
    code: "LLM",
    icon: "blocks",
    title: "模型与工具编排",
    desc: "选择与配置大模型和工具链，满足效果、成本与安全目标。",
    bullets: ["模型选型与评测", "提示工程与编排", "工具/插件管理"],
  },
  {
    no: "04",
    id: "layer-04",
    code: "Link",
    icon: "link",
    title: "应用与集成开发",
    desc: "将 AI 能力嵌入业务系统与流程，形成可使用的产品体验。",
    bullets: ["应用开发与封装", "系统集成与 API", "自动化流程编排"],
  },
  {
    no: "05",
    id: "layer-05",
    code: "Lab",
    icon: "circleCheck",
    title: "评测与验证体系",
    desc: "建立多维评估体系，确保效果、安全与体验达标。",
    bullets: ["自动化评测", "人工评审", "红队与安全测试"],
  },
  {
    no: "06",
    id: "layer-06",
    code: "Launch",
    icon: "rocket",
    title: "部署与运营平台",
    desc: "提供稳定可靠的运行环境，保障服务质量与成本可控。",
    bullets: ["环境与部署管理", "监控与告警", "成本与配额管理"],
  },
  {
    no: "07",
    id: "layer-07",
    code: "Ledger",
    icon: "activity",
    title: "效果度量与分析",
    desc: "度量业务效果与 AI 指标，驱动持续优化与决策。",
    bullets: ["业务指标看板", "用户行为分析", "ROI 评估"],
  },
  {
    no: "08",
    id: "layer-08",
    code: "Loop",
    icon: "shield",
    title: "持续迭代与治理",
    desc: "建立反馈闭环和治理机制，让系统持续进化并合规运行。",
    bullets: ["反馈与迭代", "模型与知识更新", "安全与合规治理"],
  },
]

// ===== 6L 方法论 =====
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
    title: "定位",
    desc: "深入业务一线，发现真问题与价值机会，明确成功标准。",
    bullets: ["访谈调研", "流程诊断", "价值评估"],
  },
  {
    no: "2",
    id: "step-2",
    code: "Learn",
    icon: "book",
    title: "学习",
    desc: "吸收领域知识，完成数据接入、清洗与知识准备工作。",
    bullets: ["知识吸收", "数据治理", "知识构建"],
  },
  {
    no: "3",
    id: "step-3",
    code: "Layer",
    icon: "layers",
    title: "分层",
    desc: "用 8L 结构拆解方案，设计可落地的分层架构。",
    bullets: ["场景定义", "分层方案", "指标设定"],
  },
  {
    no: "4",
    id: "step-4",
    code: "Link",
    icon: "link",
    title: "连接",
    desc: "开发与集成 AI 能力，与业务系统、知识库和工具打通。",
    bullets: ["模型开发", "应用开发", "集成联调"],
  },
  {
    no: "5",
    id: "step-5",
    code: "Launch",
    icon: "rocket",
    title: "上线",
    desc: "试点验证后稳定上线，扩展到更多业务场景。",
    bullets: ["试点上线", "效果评估", "扩展推广"],
  },
  {
    no: "6",
    id: "step-6",
    code: "Loop",
    icon: "activity",
    title: "闭环",
    desc: "持续运营优化，建立反馈闭环，让系统长期创造价值。",
    bullets: ["监控运营", "迭代优化", "治理合规"],
  },
]

// ===== 3Do 工具 =====
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
    desc: "面向部署、运维、远程执行和 Kubernetes 操作的工程入口，把 AI 应用从本地推向生产环境。",
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
    desc: "面向 Agent 编排、工具调用和任务执行的运行引擎，让企业流程可以被 AI 自动执行。",
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
    desc: "面向域名、解析、证书和入口路由的网络治理工具，保障 AI 应用稳定可访问。",
    bullets: ["DNS 管理", "证书配置", "入口路由"],
    features: [
      { title: "DNS 管理", desc: "集中化的域名解析与记录管理。" },
      { title: "证书自动化", desc: "证书自动签发与续期，保障安全访问。" },
      { title: "入口路由", desc: "灵活的 Ingress 与流量路由治理。" },
    ],
  },
]

export const knowledgeItems = [
  { id: "knowledge-methods", icon: "compass", title: "方法论与指南", desc: "FDE 方法论、流程指引与最佳实践。" },
  { id: "knowledge-scenarios", icon: "workflow", title: "行业与场景库", desc: "覆盖多行业 AI 场景与解决方案参考。" },
  { id: "knowledge-tools", icon: "book", title: "模板与工具", desc: "提示词模板、评测集、脚本与 Do 系列自动化工具。" },
  { id: "knowledge-cases", icon: "chat", title: "案例与复盘", desc: "真实项目案例与经验复盘沉淀。" },
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
    tag: "智能客服",
    title: "大型零售集团智能客服升级",
    desc: "构建多模态知识客服，优化服务体验并降低人工成本。",
    metrics: [
      ["35%", "人工成本下降"],
      ["28%", "问题解决率提升"],
    ],
  },
  {
    id: "case-operation",
    tag: "流程提效",
    title: "制造企业设备运维 Copilot",
    desc: "基于设备数据与知识库，提升巡检效率与准确率。",
    metrics: [
      ["42%", "巡检效率提升"],
      ["60%", "故障识别准确率提升"],
    ],
  },
  {
    id: "case-growth",
    tag: "营销增长",
    title: "金融机构营销内容智能生成",
    desc: "自动化生成合规营销内容，提升转化与产能。",
    metrics: [
      ["3.2x", "内容生产效率"],
      ["18%", "转化率提升"],
    ],
  },
  {
    id: "case-knowledge",
    tag: "知识管理",
    title: "集团企业知识中台建设",
    desc: "沉淀企业知识资产，提升检索效率与知识复用率。",
    metrics: [
      ["55%", "检索效率提升"],
      ["70%", "知识复用率提升"],
    ],
  },
]

export const footerColumns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "核心产品",
    links: [
      { label: "8L 产品体系", href: "/products" },
      { label: "产品架构", href: "/products#layer-04" },
      { label: "平台能力", href: "/products#layer-06" },
    ],
  },
  {
    title: "方法论",
    links: [
      { label: "6L 方法论", href: "/method" },
      { label: "交付流程", href: "/method#step-1" },
      { label: "服务模式", href: "/method#step-6" },
    ],
  },
  {
    title: "3Do 工具",
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
