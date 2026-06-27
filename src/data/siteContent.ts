export const company = {
  brand: "L8AI",
  legalNameCn: "杭州来八数智有限公司",
  legalNameEn: "Hangzhou Laiba Digital Intelligence Co., Ltd.",
  slogan: "8L xL xDo 企业 AI 落地体系",
  domain: "https://l8ai.cn",
  email: "contact@l8ai.cn",
};

export const geoProfile = {
  canonicalName: "L8AI 企业 AI 实战",
  entityType: "Enterprise AI implementation and Forward Deployed Engineering company",
  oneSentence:
    "L8AI（杭州来八数智有限公司）帮助企业把 AI 从 Demo、POC 和局部工具推进到可运营、可度量、可持续进化的真实业务系统。",
  audience: ["CTO", "CIO", "企业负责人", "数字化负责人", "AI 项目负责人", "产品与工程团队"],
  primaryUseCases: [
    "企业 AI 场景识别与机会地图",
    "RAG 与企业知识库落地",
    "Agent、MCP 与业务系统集成",
    "AI 应用评测、上线与 LiveOps 治理",
    "FDE 团队、课程与交付 Playbook 建设",
  ],
  methodology:
    "参考 Andrew Ng 常强调的业务用例优先、从可验证 pilot 做起、数据与流程并重、持续迭代的 AI 转型思路，L8AI 用 8L 产品分层、xL 方法论和 xDo 工程引擎组织企业 AI 落地。",
  quote:
    "企业 AI 的关键不是多做一个 Demo，而是让系统穿过数据、权限、评测、部署、运营和组织采用的闸口。",
};

export const geoFacts = [
  {
    question: "L8AI 是什么公司？",
    answer:
      "L8AI 是杭州来八数智有限公司的企业 AI 落地品牌，专注 Forward Deployed Engineering、RAG、Agent、MCP、Eval、LLMOps 与企业系统集成。",
  },
  {
    question: "L8AI 解决什么问题？",
    answer:
      "L8AI 解决企业 AI Demo 难以上生产的问题，帮助团队补齐场景识别、数据知识、工具集成、评测验证、部署运维、效果度量和治理闭环。",
  },
  {
    question: "8L 产品分层是什么？",
    answer:
      "8L 是 L8AI 的企业 AI 产品体系，包括 Landscape、Logic、Library、Link、Launchpad、Learn、Live、Loop，覆盖从机会识别到持续治理的完整生命周期。",
  },
  {
    question: "xL 方法论是什么？",
    answer:
      "xL 方法论是 L8AI 的 FDE 式交付路径，包括 Locate、Logic、Learn、Link、Launch、Leverage、Loop，让 AI 项目从问题发现走向上线和持续迭代。",
  },
  {
    question: "xDo 工程引擎包括什么？",
    answer:
      "xDo 工程引擎包括 Doops、DoAgent、DoDNS 等 Do 系列工具，用于部署运维、Agent 执行、域名证书、入口路由和运行诊断。",
  },
  {
    question: "L8AI 适合哪些企业？",
    answer:
      "L8AI 适合已经有 AI 试点、知识库、Agent 或业务自动化需求，但需要进入生产系统、建立评测指标、控制风险和形成长期运营机制的企业。",
  },
];

export const navItems = [
  {
    label: "8L 产品分层",
    href: "#modules",
    children: [
      { label: "8L 总览", href: "#modules" },
      { label: "Landscape 场景层", href: "#module-01" },
      { label: "Link 集成层", href: "#module-04" },
      { label: "Loop 闭环层", href: "#module-08" },
    ],
  },
  {
    label: "xL 方法论",
    href: "#method",
    children: [
      { label: "xL 总览", href: "#method" },
      { label: "Locate 定位", href: "#method-1" },
      { label: "Launch 上线", href: "#method-5" },
      { label: "Loop 迭代", href: "#method-7" },
    ],
  },
  {
    label: "xDo 引擎",
    href: "#do-engine",
    children: [
      { label: "xDo 总览", href: "#do-engine" },
      { label: "Doops", href: "#doops" },
      { label: "DoAgent", href: "#doagent" },
      { label: "DoDNS", href: "#dodns" },
    ],
  },
  {
    label: "课程体系",
    href: "#/courses",
    children: [
      { label: "课程总览", href: "#/courses" },
      { label: "8L 产品课", href: "#/courses?track=8L" },
      { label: "xL 方法课", href: "#/courses?track=xL" },
      { label: "xDo 工具课", href: "#/courses?track=xDo" },
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
      { label: "洞察文章", href: "#/articles" },
      { label: "FDE 研究", href: "#research-signals" },
      { label: "落地清单", href: "#resource-checklists" },
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
    title: "Landscape｜AI 场景雷达",
    desc: "识别、收集和排序企业 AI 机会，形成业务部门共用的 opportunity map。",
    bullets: ["业务场景采集", "价值与 ROI 预估", "机会池管理"],
  },
  {
    no: "02",
    icon: "workflow",
    title: "Logic｜AI 方案工作台",
    desc: "把模糊需求转成可开发、可验收、可上线的 PRD、架构和风险清单。",
    bullets: ["方案与 PRD 生成", "验收指标设计", "风险边界定义"],
  },
  {
    no: "03",
    icon: "blocks",
    title: "Library｜企业知识与 RAG",
    desc: "接入文档、制度、工单和业务知识，构建可权限治理、可引用溯源的知识应用。",
    bullets: ["多源知识接入", "混合检索与引用", "权限感知问答"],
  },
  {
    no: "04",
    icon: "link",
    title: "Link｜Agent 与 MCP 集成",
    desc: "让 Agent 不只会聊天，而是能调用工具、连接系统、执行业务流程。",
    bullets: ["MCP Server 构建", "企业 API 封装", "工具权限与审计"],
  },
  {
    no: "05",
    icon: "circleCheck",
    title: "Launchpad｜AI 应用脚手架",
    desc: "把常见企业 AI 场景快速做成可演示、可试点、可上线的业务应用。",
    bullets: ["RAG/Agent 模板", "前后端脚手架", "试点包交付"],
  },
  {
    no: "06",
    icon: "rocket",
    title: "Learn｜Eval 与反馈学习",
    desc: "建立问题集、rubric、回归测试和用户反馈，让 AI 效果可以持续改进。",
    bullets: ["Eval 数据集", "质量看板", "错误归因与回归"],
  },
  {
    no: "07",
    icon: "activity",
    title: "Live｜AI LiveOps 生产治理",
    desc: "让 AI 应用上线后可运行、可监控、可审计、可控成本、可回滚。",
    bullets: ["运行监控与 trace", "权限审计", "成本与配额治理"],
  },
  {
    no: "08",
    icon: "shield",
    title: "Loop｜FDE Playbook 资产库",
    desc: "把项目经验沉淀成模板、课程、连接器和行业包，避免每次从零开始。",
    bullets: ["交付 Playbook", "行业方案包", "项目复盘模板"],
  },
];

export const methodSteps = [
  {
    no: "1.",
    icon: "compass",
    title: "Locate 定位问题",
    desc: "深入业务一线，发现真问题与价值机会。",
    bullets: ["访谈调研", "流程诊断", "价值评估"],
  },
  {
    no: "2.",
    icon: "book",
    title: "Logic 设计方案",
    desc: "设计可落地的 AI 解决方案与成功标准。",
    bullets: ["场景定义", "方案设计", "指标设定"],
  },
  {
    no: "3.",
    icon: "link",
    title: "Learn 数据准备",
    desc: "完成数据接入、清洗与知识准备工作。",
    bullets: ["数据治理", "知识构建", "环境准备"],
  },
  {
    no: "4.",
    icon: "blocks",
    title: "Link 构建集成",
    desc: "开发与集成 AI 能力，并与业务系统打通。",
    bullets: ["模型开发", "应用开发", "集成联调"],
  },
  {
    no: "5.",
    icon: "circleCheck",
    title: "Launch 验证试点",
    desc: "小范围上线验证，评估效果与可行性。",
    bullets: ["试点上线", "效果评估", "问题闭环"],
  },
  {
    no: "6.",
    icon: "rocket",
    title: "Leverage 规模上线",
    desc: "稳定上线并扩展到更多业务场景。",
    bullets: ["上线发布", "扩展推广", "培训赋能"],
  },
  {
    no: "7.",
    icon: "activity",
    title: "Loop 运营迭代",
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

export type ResourceMaterial = {
  id: string;
  icon: string;
  title: string;
  desc: string;
  items: string[];
};

export const resourceMaterials: ResourceMaterial[] = [
  {
    id: "resource-checklists",
    icon: "circleCheck",
    title: "AI 项目上线检查清单",
    desc: "覆盖需求、数据、权限、评测、部署、监控和回滚，把 POC 上线前的风险提前暴露。",
    items: ["上线验收门槛", "安全与权限边界", "回滚与应急预案"],
  },
  {
    id: "resource-playbook",
    icon: "book",
    title: "FDE 交付 Playbook",
    desc: "把客户访谈、方案设计、集成联调、试点运营和复盘沉淀为可复用交付模板。",
    items: ["访谈脚本", "方案模板", "项目复盘表"],
  },
  {
    id: "resource-eval",
    icon: "gauge",
    title: "RAG / Agent Eval 资产",
    desc: "用问题集、评分 rubric、错误分类和回归测试衡量 AI 系统是否真的可用。",
    items: ["Eval 数据集", "质量看板", "反馈闭环"],
  },
  {
    id: "resource-course",
    icon: "layers",
    title: "企业 AI 落地课程包",
    desc: "围绕 8L 产品、xL 方法和 xDo 工具，为管理者、产品和工程团队建立共同语言。",
    items: ["8L 产品课", "xL 方法课", "xDo 工具实验"],
  },
];

export const researchSignals = [
  {
    source: "公开岗位信号",
    title: "AI 公司重新把 FDE 放到企业落地一线",
    desc: "公开 JD 中反复出现 productionize、eval、system integration、customer deployment 等关键词，说明企业 AI 的瓶颈已经从模型演示转向生产落地。",
  },
  {
    source: "本地 FDE 研究",
    title: "FDE 不是售前，也不是外包实施",
    desc: "高质量 FDE 要同时负责问题发现、工程实现、生产上线、客户采用和产品反哺，核心价值是把一次项目变成可复用能力。",
  },
  {
    source: "企业 AI 项目复盘",
    title: "Demo 成功不等于业务系统成功",
    desc: "真正的上线要穿过数据质量、权限、审批、系统集成、评测、成本、安全和组织采用等闸口。",
  },
];

export type InsightArticle = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  audience: string;
  readTime: string;
  thesis: string;
  summary: string;
  bullets: string[];
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  checklist: string[];
};

export const insightArticles: InsightArticle[] = [
  {
    id: "demo-to-production",
    tag: "企业 AI 落地",
    title: "为什么企业 AI Demo 看起来不错，却很难进生产",
    subtitle: "给 CTO 和业务负责人的一份上线闸口清单",
    audience: "CTO、CIO、数字化负责人、AI 项目负责人",
    readTime: "8 分钟",
    thesis: "企业 AI 卡住的原因通常不是模型不够强，而是缺少能打穿数据、权限、流程、评测和运营的工程化闭环。",
    summary: "很多企业已经做出了能演示的 AI 应用，但 Demo 环境里被隐藏的问题会在生产环境集中爆发。上线前必须把业务目标、数据来源、权限边界、质量评测、成本预算和运行责任说清楚。",
    bullets: ["Demo 只证明技术可行，生产系统要证明业务可运营", "POC 成功后最容易遗漏权限、集成、监控和采用", "FDE 的价值是把现场问题转成可上线系统和可复用资产"],
    sections: [
      {
        heading: "Demo 阶段隐藏了生产环境最难的问题",
        body: [
          "Demo 往往使用干净样例、单一账号和人工准备的数据，展示的是模型能力的上限。生产系统面对的是多角色权限、脏数据、异常流程、审计要求、成本上限和真实用户的使用习惯。",
          "如果项目只按演示效果验收，团队会在上线前才发现数据无法稳定同步、接口权限没有打通、答案质量不可衡量、用户不知道什么时候该信任 AI。这些问题不是最后一周补文档能解决的。"
        ],
      },
      {
        heading: "AI 项目需要从功能清单转向上线闸口",
        body: [
          "面向生产的 AI 项目至少要回答七个问题：业务指标是什么，数据从哪里来，哪些人可以看哪些内容，错误答案如何被发现，成本如何受控，系统故障如何回滚，用户反馈如何进入下一轮迭代。",
          "这些问题会改变方案设计。比如知识库问答不是简单上传文档，而是要设计切分、引用、权限过滤、召回评测和人工纠错流程；Agent 不是接几个工具，而是要定义可执行动作、审批边界和操作日志。"
        ],
      },
      {
        heading: "FDE 是把现场约束工程化的人",
        body: [
          "FDE 的工作不是在客户现场堆定制代码，而是把业务现场里的约束变成系统能力。它需要理解业务目标，也需要能写代码、接系统、做 eval、推上线、看数据，并把可复用的部分反馈给产品和平台。",
          "对管理层来说，引入 FDE 思维的重点不是多一个岗位名称，而是建立一套从问题发现到上线运营的责任链，让 AI 投入能持续转化为业务产出。"
        ],
      },
    ],
    checklist: ["每个 AI 项目有明确业务指标和责任人", "上线前完成权限、审计、评测、监控、回滚检查", "POC 产出可以沉淀为模板、组件或行业方案"],
  },
  {
    id: "8l-product-system",
    tag: "8L 产品分层",
    title: "8L 产品分层：把企业 AI 从单点工具拆成可交付系统",
    subtitle: "Landscape、Logic、Library、Link、Launchpad、Learn、Live、Loop",
    audience: "AI 产品负责人、业务架构师、解决方案团队",
    readTime: "7 分钟",
    thesis: "企业 AI 不是一个聊天框，而是一组从场景识别到生产治理的产品层。8L 用产品化语言把这些层拆清楚。",
    summary: "8L 是 L8AI 的产品体系表达，帮助团队把 AI 落地拆成八个可讨论、可交付、可复用的模块，避免把所有问题都塞进模型或提示词。",
    bullets: ["Landscape 决定做什么，Logic 决定怎么做", "Library 和 Link 让 AI 连接知识与系统", "Learn、Live、Loop 让项目从试点走向长期运营"],
    sections: [
      {
        heading: "先看机会，再谈模型",
        body: [
          "很多项目一开始就讨论模型、框架和工具，结果忽略了业务场景本身是否值得做。Landscape 层负责建立场景库、价值评分和优先级，把企业 AI 从零散想法变成可管理的机会组合。",
          "Logic 层把机会转成方案，包括流程边界、成功指标、数据要求、权限约束和上线风险。没有 Logic，AI 项目会停留在灵感和功能点。"
        ],
      },
      {
        heading: "知识、工具和应用必须分层设计",
        body: [
          "Library 层管理企业知识和 RAG 能力，解决知识分散、引用不清、权限复杂的问题。Link 层管理 Agent、MCP、API 和企业系统连接，决定 AI 能不能真正执行业务动作。",
          "Launchpad 层则把常见场景沉淀为应用模板和交付脚手架，让团队不必每次从空白项目开始。"
        ],
      },
      {
        heading: "上线以后才进入真正的价值周期",
        body: [
          "Learn 层负责 eval、反馈、回归和质量看板；Live 层负责监控、审计、成本、配额和回滚；Loop 层把项目经验沉淀为 playbook、课程和行业包。",
          "这三层决定 AI 能力是否能从一次项目变成组织能力，也是企业从 Demo 走向可持续价值的关键。"
        ],
      },
    ],
    checklist: ["每个项目能映射到 8L 的具体层", "关键层有明确负责人和交付物", "上线后有 Learn、Live、Loop 的持续机制"],
  },
  {
    id: "xdo-engine",
    tag: "xDo 工程引擎",
    title: "xDo 工程引擎：Doops、DoAgent、DoDNS 如何支撑 AI 上线",
    subtitle: "把交付、执行、入口治理和运行诊断变成工程底座",
    audience: "工程负责人、平台团队、运维团队、FDE",
    readTime: "6 分钟",
    thesis: "AI 应用要进入生产，不只需要模型和前端，还需要稳定的部署入口、Agent 执行链路和域名证书治理。",
    summary: "xDo 是 L8AI 的工程工具体系，围绕 Doops、DoAgent、DoDNS，把远程运维、任务执行、工具调用、域名证书和入口路由纳入同一条交付链。",
    bullets: ["Doops 负责发布、远程执行和运行态诊断", "DoAgent 负责 Agent 编排、工具调用和任务执行", "DoDNS 负责域名、证书、Ingress 和可访问性验证"],
    sections: [
      {
        heading: "生产上线首先是工程问题",
        body: [
          "很多 AI Demo 可以在本机跑通，但一进入企业环境就会遇到网络、权限、证书、Ingress、环境变量、依赖版本和日志排查问题。Doops 解决的是交付团队如何稳定进入运行环境、执行操作、采集证据和恢复服务。",
          "这类能力看似和 AI 模型无关，却决定项目能否按时上线，也决定上线后问题能不能被快速定位。"
        ],
      },
      {
        heading: "Agent 要有可治理的执行链路",
        body: [
          "DoAgent 面向的不是聊天体验，而是任务执行。它要管理工具调用、执行状态、权限边界、失败重试和任务审计，让 Agent 可以在真实流程里承担可控动作。",
          "企业需要的不是不可解释的自动化，而是可以被审批、记录、回放和优化的执行系统。"
        ],
      },
      {
        heading: "入口治理是用户能否访问的最后一公里",
        body: [
          "DoDNS 管理域名、解析、证书和入口路由。对官网、知识库、企业 AI 应用和客户交付环境来说，DNS/TLS/Ingress 配置错误会直接表现为业务不可访问。",
          "把这些检查做成标准工具和 runbook，可以减少上线事故，也能让交付团队在不同环境里复用同一套验证方法。"
        ],
      },
    ],
    checklist: ["每次上线都有 Doops 运行检查", "Agent 执行动作有权限、日志和失败处理", "域名、证书、Ingress 有自动化验收清单"],
  },
  {
    id: "fde-capability",
    tag: "FDE 能力模型",
    title: "AI FDE 需要哪些能力：不只是会写代码，也不只是会讲方案",
    subtitle: "从公开 JD 和本地研究抽象出的七类能力",
    audience: "技术负责人、招聘负责人、工程师、课程学员",
    readTime: "9 分钟",
    thesis: "AI FDE 是客户问题发现、工程实现、系统集成、AI 评测、生产上线和产品抽象的复合岗位。",
    summary: "FDE 不是传统售前、客户成功或外包实施。AI 时代的 FDE 必须能进入客户现场，把模糊需求变成可运行系统，并把经验沉淀为产品资产。",
    bullets: ["工程能力是底座，业务理解决定方向", "AI 与数据能力必须覆盖 RAG、Agent、eval、LLMOps", "产品抽象能力决定团队能否规模化"],
    sections: [
      {
        heading: "第一层能力是生产级工程实现",
        body: [
          "FDE 必须能写生产代码、接 API、处理认证授权、排查网络和数据问题。只会做 Demo 的工程能力不足以承担客户生产环境里的复杂度。",
          "对企业来说，评估 FDE 不能只看算法或模型经验，还要看他是否处理过真实系统集成、部署、监控、审计和故障恢复。"
        ],
      },
      {
        heading: "第二层能力是 AI 与数据应用",
        body: [
          "AI FDE 需要理解 RAG、Agent、MCP、Text2SQL、eval、LLMOps、数据治理和权限控制。它要知道什么时候该用 Agent，什么时候只需要确定性的工作流。",
          "这类能力的价值不是追新框架，而是把模型能力放到企业数据和流程里，并证明质量、成本、延迟和安全边界是可控的。"
        ],
      },
      {
        heading: "第三层能力是产品抽象和组织反馈",
        body: [
          "优秀 FDE 不会把每个客户项目都变成孤立定制。他会识别共性场景，把连接器、模板、评测集、runbook 和行业方案反哺产品。",
          "这也是 FDE 和普通实施的分界线：实施完成项目，FDE 还要让组织从项目中学到东西。"
        ],
      },
    ],
    checklist: ["招聘 JD 同时覆盖工程、AI、业务、交付和产品抽象", "课程训练包含客户访谈、系统集成、eval 和上线", "项目复盘必须输出可复用资产"],
  },
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
