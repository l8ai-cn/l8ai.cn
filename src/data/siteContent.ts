export const company = {
  brand: "L8AI",
  legalNameCn: "杭州来八数智有限公司",
  legalNameEn: "Hangzhou Laiba Digital Intelligence Co., Ltd.",
  slogan: "8L xL xDo 企业 AI 落地体系",
};

export const navItems = [
  {
    label: "产品体系",
    href: "#modules",
    children: [
      { label: "八大产品模块", href: "#modules" },
      { label: "产品架构", href: "#module-04" },
      { label: "平台能力", href: "#module-06" },
    ],
  },
  {
    label: "FDE 方法论",
    href: "#method",
    children: [
      { label: "方法论概览", href: "#method" },
      { label: "交付流程", href: "#method-1" },
      { label: "服务模式", href: "#method-7" },
    ],
  },
  {
    label: "知识库",
    href: "#knowledge",
    children: [
      { label: "方法论与指南", href: "#knowledge-methods" },
      { label: "行业与场景库", href: "#knowledge-scenarios" },
      { label: "模板与工具", href: "#knowledge-tools" },
      { label: "案例与复盘", href: "#knowledge-cases" },
    ],
  },
  {
    label: "实践案例",
    href: "#cases",
    children: [
      { label: "客户案例", href: "#cases" },
      { label: "智能客服", href: "#case-service" },
      { label: "流程提效", href: "#case-operation" },
      { label: "知识管理", href: "#case-knowledge" },
    ],
  },
  {
    label: "资源与洞察",
    href: "#resources",
    children: [
      { label: "资源中心", href: "#resources" },
      { label: "行业洞察", href: "#knowledge-scenarios" },
      { label: "研究与洞察", href: "#knowledge-insights" },
      { label: "白皮书", href: "#contact" },
    ],
  },
  {
    label: "关于我们",
    href: "#about",
    children: [
      { label: "公司介绍", href: "#about" },
      { label: "团队与服务", href: "#contact" },
      { label: "联系我们", href: "#contact" },
    ],
  },
];

export const heroProof = [
  { icon: "shield", label: "业务导向的工程落地" },
  { icon: "activity", label: "可度量的业务价值" },
  { icon: "shield", label: "安全合规与可控" },
  { icon: "workflow", label: "长期陪伴的团队" },
];

export const productModules = [
  {
    no: "01",
    icon: "radar",
    title: "机会与问题洞察",
    desc: "识别高价值业务场景与痛点，量化机会空间与优先级。",
    bullets: ["业务流程分析", "价值评估模型", "机会池管理"],
  },
  {
    no: "02",
    icon: "workflow",
    title: "数据与知识工程",
    desc: "构建高质量知识资产与企业知识库，为模型提供可靠语境。",
    bullets: ["数据接入与治理", "知识库与向量化", "数据质量评估"],
  },
  {
    no: "03",
    icon: "blocks",
    title: "模型与工具编排",
    desc: "选择与配置大模型和工具链，满足效果、成本与安全目标。",
    bullets: ["模型选型与评测", "提示工程与编排", "工具/插件管理"],
  },
  {
    no: "04",
    icon: "link",
    title: "应用与集成开发",
    desc: "将 AI 能力嵌入业务系统与流程，形成可使用的产品体验。",
    bullets: ["应用开发与封装", "系统集成与 API", "自动化流程编排"],
  },
  {
    no: "05",
    icon: "circleCheck",
    title: "评测与验证体系",
    desc: "建立多维评估体系，确保效果、安全与体验达标。",
    bullets: ["自动化评测", "人工评审", "红队与安全测试"],
  },
  {
    no: "06",
    icon: "rocket",
    title: "部署与运营平台",
    desc: "提供稳定可靠的运行环境，保障服务质量与成本可控。",
    bullets: ["环境与部署管理", "监控与告警", "成本与配额管理"],
  },
  {
    no: "07",
    icon: "activity",
    title: "效果度量与分析",
    desc: "度量业务效果与 AI 指标，驱动持续优化与决策。",
    bullets: ["业务指标看板", "用户行为分析", "ROI 评估"],
  },
  {
    no: "08",
    icon: "shield",
    title: "持续迭代与治理",
    desc: "建立反馈闭环和治理机制，让系统持续进化并合规运行。",
    bullets: ["反馈与迭代", "模型与知识更新", "安全与合规治理"],
  },
];

export const methodSteps = [
  {
    no: "1.",
    icon: "compass",
    title: "问题发现",
    desc: "深入业务一线，发现真问题与价值机会。",
    bullets: ["访谈调研", "流程诊断", "价值评估"],
  },
  {
    no: "2.",
    icon: "book",
    title: "方案设计",
    desc: "设计可落地的 AI 解决方案与成功标准。",
    bullets: ["场景定义", "方案设计", "指标设定"],
  },
  {
    no: "3.",
    icon: "link",
    title: "数据与准备",
    desc: "完成数据接入、清洗与知识准备工作。",
    bullets: ["数据治理", "知识构建", "环境准备"],
  },
  {
    no: "4.",
    icon: "blocks",
    title: "构建与集成",
    desc: "开发与集成 AI 能力，并与业务系统打通。",
    bullets: ["模型开发", "应用开发", "集成联调"],
  },
  {
    no: "5.",
    icon: "circleCheck",
    title: "验证与试点",
    desc: "小范围上线验证，评估效果与可行性。",
    bullets: ["试点上线", "效果评估", "问题闭环"],
  },
  {
    no: "6.",
    icon: "rocket",
    title: "规模化上线",
    desc: "稳定上线并扩展到更多业务场景。",
    bullets: ["上线发布", "扩展推广", "培训赋能"],
  },
  {
    no: "7.",
    icon: "activity",
    title: "运营与迭代",
    desc: "持续运营优化，让系统长期创造价值。",
    bullets: ["监控运营", "迭代优化", "治理合规"],
  },
];

export const doEngineItems = [
  {
    id: "doops",
    icon: "rocket",
    title: "Doops",
    desc: "面向部署、运维、远程执行和 Kubernetes 操作的工程入口，把 AI 应用从本地推向生产环境。",
    bullets: ["远程运维入口", "集群发布", "运行态诊断"],
  },
  {
    id: "doagent",
    icon: "brain",
    title: "DoAgent",
    desc: "面向 Agent 编排、工具调用和任务执行的运行引擎，让企业流程可以被 AI 自动执行。",
    bullets: ["Agent 运行时", "工具调用", "任务编排"],
  },
  {
    id: "dodns",
    icon: "workflow",
    title: "DoDNS",
    desc: "面向域名、解析、证书和入口路由的网络治理工具，保障 AI 应用稳定可访问。",
    bullets: ["DNS 管理", "证书配置", "入口路由"],
  },
  {
    id: "do-series",
    icon: "blocks",
    title: "Do Series",
    desc: "围绕 Doops、DoAgent、DoDNS 扩展的 Do 系列工具族，支撑交付、运行、治理全链路。",
    bullets: ["工具标准化", "自动化执行", "工程资产复用"],
  },
];

export type CourseModule = {
  title: string;
  objective: string;
  deliverable: string;
};

export type Course = {
  id: string;
  track: "8L" | "xL" | "xDo" | "Operations";
  title: string;
  subtitle: string;
  audience: string;
  duration: string;
  level: string;
  outcome: string;
  pageTitle: string;
  summary: string;
  modules: CourseModule[];
  tools: string[];
};

export const courseCatalogIntro = {
  title: "课程体系：围绕 8L、xL、xDo 培养企业 AI 落地能力",
  desc: "从方法、产品、工具到运营治理，帮助团队形成能交付真实业务系统的学习路径。",
};

export const courseTracks: Array<{ label: string; href: string; track: Course["track"] }> = [
  { label: "8L 产品课", href: "#/courses?track=8L", track: "8L" },
  { label: "xL 方法课", href: "#/courses?track=xL", track: "xL" },
  { label: "xDo 工具课", href: "#/courses?track=xDo", track: "xDo" },
  { label: "运营治理课", href: "#/courses?track=Operations", track: "Operations" },
];

export const courses: Course[] = [
  {
    id: "ai-fde-foundation",
    track: "xL",
    title: "AI FDE Foundation Bootcamp",
    subtitle: "企业 AI 落地基础训练营",
    audience: "企业负责人、产品经理、解决方案顾问、AI 项目负责人",
    duration: "2 天工作坊",
    level: "入门到进阶",
    outcome: "完成一份企业 AI 机会地图与首个落地路线图。",
    pageTitle: "AI FDE Foundation Bootcamp",
    summary: "用 8L / xL / xDo 建立企业 AI 落地的共同语言，识别可做、值得做、能上线的业务场景。",
    modules: [
      { title: "AI 落地全景", objective: "区分 Demo、工具、系统和业务闭环。", deliverable: "AI 落地成熟度自评表" },
      { title: "8L 体系导入", objective: "用八层结构拆解 AI 产品能力。", deliverable: "8L 能力拆解图" },
      { title: "xL 方法导入", objective: "掌握从定位到闭环的交付路径。", deliverable: "xL 项目路径图" },
      { title: "xDo 工程导入", objective: "理解 Do 系列工具如何支撑运行。", deliverable: "工具选型清单" },
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
    summary: "围绕 Lead、Logic、Library、LLM、Link、Launch、Loop、Ledger 设计可交付的 AI 产品系统。",
    modules: [
      { title: "Lead 与 Logic", objective: "把业务机会和流程逻辑沉淀为产品输入。", deliverable: "机会与业务逻辑表" },
      { title: "Library 与 LLM", objective: "设计知识资产和模型能力边界。", deliverable: "知识与模型能力图" },
      { title: "Link 与 Launch", objective: "规划系统连接和发布路径。", deliverable: "集成与上线方案" },
      { title: "Loop 与 Ledger", objective: "设计反馈闭环和价值账本。", deliverable: "运营度量看板草案" },
    ],
    tools: ["8L Layer Map", "Product Requirement Sheet", "Value Ledger"],
  },
  {
    id: "xl-delivery-method",
    track: "xL",
    title: "xL Delivery Method Practicum",
    subtitle: "xL 方法论交付实训",
    audience: "交付经理、FDE、实施顾问、客户成功团队",
    duration: "4 周项目制",
    level: "进阶到专业",
    outcome: "交付一个从业务定位到试点上线的 AI 项目方案。",
    pageTitle: "xL Delivery Method Practicum",
    summary: "用 Locate、Learn、Layer、Link、Launch、Leverage、Loop 管理企业 AI 项目的节奏和验收。",
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
    title: "xDo Engineering Tools Lab",
    subtitle: "Do 系列工程工具实验课",
    audience: "工程师、运维、平台团队、技术负责人",
    duration: "5 天实验课",
    level: "专业",
    outcome: "完成 Doops、DoAgent、DoDNS 支撑的 AI 应用发布与诊断流程。",
    pageTitle: "xDo Engineering Tools Lab",
    summary: "围绕 Doops、DoAgent、DoDNS 建立部署、执行、域名证书和运行诊断的工程能力。",
    modules: [
      { title: "Doops 发布与运维", objective: "掌握远程执行、集群发布和运行检查。", deliverable: "Doops 部署 runbook" },
      { title: "DoAgent 执行引擎", objective: "配置 Agent 任务、工具调用和执行链路。", deliverable: "Agent 工具链 Demo" },
      { title: "DoDNS 入口治理", objective: "配置域名、证书、Ingress 和验证闭环。", deliverable: "DNS/TLS 检查清单" },
      { title: "Do Series 综合演练", objective: "完成一次从开发到上线的端到端发布。", deliverable: "综合交付报告" },
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
];

export const knowledgeItems = [
  { id: "knowledge-methods", icon: "compass", title: "方法论与指南", desc: "FDE 方法论、流程指引与最佳实践。" },
  { id: "knowledge-scenarios", icon: "workflow", title: "行业与场景库", desc: "覆盖多行业 AI 场景与解决方案参考。" },
  { id: "knowledge-tools", icon: "book", title: "模板与工具", desc: "提示词模板、评测集、脚本与 Do 系列自动化工具。" },
  { id: "knowledge-cases", icon: "chat", title: "案例与复盘", desc: "真实项目案例与经验复盘沉淀。" },
  { id: "knowledge-insights", icon: "gauge", title: "研究与洞察", desc: "前沿研究、趋势洞察与技术解读。" },
];

export const caseCards = [
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
];

export const footerColumns = [
  ["产品体系", "八大产品模块", "产品架构", "平台能力"],
  ["FDE 方法论", "方法论概览", "交付流程", "服务模式"],
  ["知识库", "方法论与指南", "模板与工具", "案例与复盘"],
  ["资源与洞察", "行业洞察", "技术解读", "白皮书"],
  ["关于我们", "团队介绍", "加入我们", "联系我们"],
];
