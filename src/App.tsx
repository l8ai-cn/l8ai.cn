import { useEffect, useState } from "react";
import logoUrl from "./assets/l8ai-logo.svg";
import { Icon } from "./components/Icon";
import {
  caseCards,
  company,
  courseCatalogIntro,
  courses,
  courseTracks,
  doEngineItems,
  footerColumns,
  heroProof,
  insightArticles,
  knowledgeItems,
  methodSteps,
  navItems,
  productModules,
  researchSignals,
  resourceMaterials,
} from "./data/siteContent";

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || "#/");

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || "#/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return hash;
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={close} aria-label="L8AI 首页">
        <img src={logoUrl} alt="L8AI" />
      </a>
      <nav className="desktop-nav" aria-label="主导航">
        {navItems.map((item) => (
          <div className="nav-item" key={item.href}>
            <a className="nav-link" href={item.href}>
              <span>{item.label}</span>
              {item.children && <span className="nav-caret">⌄</span>}
            </a>
            {item.children && (
              <div className="nav-submenu" role="menu">
                {item.children.map((child) => (
                  <a href={child.href} key={`${item.label}-${child.label}-${child.href}`} role="menuitem">
                    {child.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="header-actions">
        <a href="#login" className="login-link">
          登录
        </a>
        <a href="#contact" className="primary-button small">
          预约咨询
        </a>
      </div>
      <button
        className="mobile-menu"
        type="button"
        aria-label={open ? "关闭导航" : "打开导航"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name="menu" size={20} />
      </button>
      {open && (
        <nav className="mobile-nav" aria-label="移动导航">
          {navItems.map((item) => (
            <div className="mobile-nav-group" key={item.href}>
              <a href={item.href} onClick={close}>
                {item.label}
              </a>
              {item.children && (
                <div className="mobile-subnav">
                  {item.children.map((child) => (
                    <a href={child.href} key={`${item.label}-${child.label}-${child.href}`} onClick={close}>
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="#contact" className="mobile-nav-action" onClick={close}>
            预约咨询
          </a>
        </nav>
      )}
    </header>
  );
}

function HeroWorkbench() {
  const leftItems = ["问题与机会", "方案设计", "数据与知识", "模型与工具", "应用与集成", "评测与验证", "部署与运营", "效果与迭代"];
  const flowItems = ["问题与机会", "方案设计", "数据与知识", "模型与工具", "应用与集成", "评测与验证", "部署与运营", "效果与迭代"];

  return (
    <div className="workbench-card" aria-label="L8AI 企业 AI 落地工作台">
      <div className="workbench-title">L8AI 企业 AI 落地工作台</div>
      <div className="workbench-body">
        <div className="workbench-side">
          {leftItems.map((item, index) => (
            <div className={index === 0 ? "active" : ""} key={item}>
              <Icon name={index % 2 === 0 ? "circleCheck" : "workflow"} size={15} />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="workbench-flow">
          {flowItems.map((item, index) => (
            <div className="flow-node" key={item}>
              {index < flowItems.length - 2 && <span className="flow-line vertical" aria-hidden="true" />}
              {index % 2 === 0 && <span className="flow-line horizontal" aria-hidden="true" />}
              <Icon name={["search", "book", "layers", "blocks", "workflow", "circleCheck", "rocket", "activity"][index]} size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="metric-board">
          <span>业务价值看板</span>
          <strong>23</strong>
          <small>上线应用数</small>
          <strong>128 万</strong>
          <small>月度调用量</small>
          <strong>68%</strong>
          <small>业务覆盖率</small>
          <strong>4.7 / 5</strong>
          <small>综合满意度</small>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1>把 AI 从 Demo 推进到真实业务系统</h1>
          <p>
            L8AI 企业 AI 实战（FDE Forward Deployed Engineering）以工程化方法与业务闭环，帮助企业快速落地可运营、可度量、可持续进化的 AI 解决方案。
          </p>
          <div className="hero-actions">
            <a href="#contact" className="primary-button">
              预约咨询
            </a>
            <a href="#method" className="secondary-button">
              了解 FDE 方法论
            </a>
          </div>
        </div>
        <HeroWorkbench />
      </div>
      <div className="hero-proof">
        {heroProof.map((item) => (
          <div key={item.label}>
            <Icon name={item.icon} size={18} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section className="section modules-section" id="modules">
      <SectionTitle
        title="八大产品模块，构建企业 AI 落地操作系统"
        desc="从机会识别到持续运营，覆盖 AI 落地的全生命周期"
      />
      <div className="module-frame">
        {productModules.map((module) => (
          <article className="module-card" id={`module-${module.no}`} key={module.no}>
            <div className="module-badge">{module.no}</div>
            <Icon name={module.icon} size={40} />
            <div>
              <h3>{module.title}</h3>
              <p>{module.desc}</p>
              <ul>
                {module.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Method() {
  return (
    <section className="section method-section" id="method">
      <SectionTitle
        title="FDE 方法论：从问题到价值的工程化路径"
        desc="Forward Deployed Engineering，前沿部署工程，让 AI 真正产生业务价值"
      />
      <div className="method-chain">
        {methodSteps.map((step, index) => (
          <article className="method-card" id={`method-${step.no.replace(".", "")}`} key={step.no}>
            <span className="method-no">{step.no}</span>
            <div className="method-icon">
              <Icon name={step.icon} size={34} />
            </div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            <ul>
              {step.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            {index < methodSteps.length - 1 && <span className="method-arrow">›</span>}
          </article>
        ))}
      </div>
    </section>
  );
}

function DoEngine() {
  return (
    <section className="section do-engine-section" id="do-engine">
      <SectionTitle title="xDo 工程引擎：Do 系列工具支撑真实交付" desc="Doops、DoAgent、DoDNS 组成部署、执行、网络与治理的工程底座" />
      <div className="do-engine-grid">
        {doEngineItems.map((item) => (
          <article className="do-engine-card" id={item.id} key={item.id}>
            <Icon name={item.icon} size={36} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Knowledge() {
  return (
    <section className="section knowledge-section" id="knowledge">
      <SectionTitle title="知识库：AI 落地的实战指南与工程资产" desc="方法、模板、案例、工具一站式资源中心，助力团队少走弯路" />
      <div className="knowledge-grid">
        {knowledgeItems.map((item) => (
          <article id={item.id} key={item.title}>
            <Icon name={item.icon} size={34} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
      <a href="#resources" className="outline-button">
        进入知识库
      </a>
    </section>
  );
}

function Resources() {
  return (
    <section className="section resources-section" id="resources">
      <SectionTitle title="资源中心：把 FDE 经验沉淀成可复用资产" desc="清单、模板、评测集、课程包和研究信号，服务从试点到生产的完整路径" />
      <div className="resource-grid">
        {resourceMaterials.map((item) => (
          <article className="resource-card" id={item.id} key={item.id}>
            <div className="resource-icon">
              <Icon name={item.icon} size={28} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <ul>
              {item.items.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="research-panel" id="research-signals">
        <div>
          <span className="section-kicker">Research Signals</span>
          <h3>从公开岗位和本地研究提炼的 FDE 信号</h3>
          <p>这些信号说明企业 AI 落地正在从“做出 Demo”转向“部署、评测、治理、采用和产品化”。</p>
        </div>
        <div className="signal-list">
          {researchSignals.map((signal) => (
            <article key={signal.title}>
              <span>{signal.source}</span>
              <h4>{signal.title}</h4>
              <p>{signal.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="section insights-section" id="insights">
      <SectionTitle title="洞察文章：面向 CTO 的 AI 落地判断" desc="围绕 Demo 到生产、8L 产品分层、xDo 工程底座和 FDE 能力模型持续输出" />
      <div className="article-grid">
        {insightArticles.map((article) => (
          <article className="article-card" key={article.id}>
            <div className="article-card-top">
              <span>{article.tag}</span>
              <small>{article.readTime}</small>
            </div>
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <ul>
              {article.bullets.slice(0, 2).map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <a href={`#/articles/${article.id}`}>阅读全文 →</a>
          </article>
        ))}
      </div>
      <a href="#/articles" className="outline-button">
        查看全部文章
      </a>
    </section>
  );
}

function Cases() {
  return (
    <section className="section cases-section" id="cases">
      <SectionTitle title="实践证明：与领先企业共创真实价值" desc="深入业务一线，交付可衡量的结果" />
      <div className="case-grid">
        {caseCards.map((card) => (
          <article className="case-card" id={card.id} key={card.title}>
            <span>{card.tag}</span>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <div className="case-metrics">
              {card.metrics.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <small>{label}</small>
                </div>
              ))}
            </div>
            <a href="#contact">查看案例 →</a>
          </article>
        ))}
      </div>
      <a href="#contact" className="outline-button">
        查看更多案例
      </a>
    </section>
  );
}

function ArticlesPage() {
  return (
    <main>
      <section className="article-list-hero">
        <p className="course-eyebrow">L8AI Insights</p>
        <h1>企业 AI 落地文章与材料</h1>
        <p>从本地 FDE 研究、8L 产品规划、xDo 工具体系和真实交付问题中整理出的官网文章库。</p>
      </section>
      <section className="article-list-section">
        <div className="article-list">
          {insightArticles.map((article) => (
            <article className="article-list-item" key={article.id}>
              <div>
                <span className="article-tag">{article.tag}</span>
                <h2>{article.title}</h2>
                <p>{article.summary}</p>
              </div>
              <div className="article-list-meta">
                <span>{article.audience}</span>
                <strong>{article.readTime}</strong>
                <a href={`#/articles/${article.id}`}>阅读详情</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function ArticleDetailPage({ articleId }: { articleId: string }) {
  const article = insightArticles.find((item) => item.id === articleId);

  if (!article) {
    return <ArticleNotFound />;
  }

  return (
    <main>
      <section className="article-detail-hero">
        <a href="#/articles" className="course-eyebrow">
          返回文章列表 · {article.tag}
        </a>
        <h1>{article.title}</h1>
        <p>{article.subtitle}</p>
        <div className="article-hero-meta">
          <span>{article.audience}</span>
          <span>{article.readTime}</span>
        </div>
      </section>
      <section className="article-detail-layout">
        <aside className="article-aside">
          <h2>核心判断</h2>
          <p>{article.thesis}</p>
          <h3>决策清单</h3>
          <ul>
            {article.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
        <article className="article-content">
          <p className="article-lead">{article.summary}</p>
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>
      </section>
      <CTA />
    </main>
  );
}

function ArticleNotFound() {
  return (
    <main>
      <section className="article-list-hero">
        <p className="course-eyebrow">L8AI Insights</p>
        <h1>文章不存在</h1>
        <p>当前文章链接没有匹配到已发布内容。</p>
        <a href="#/articles" className="primary-button">
          返回文章列表
        </a>
      </section>
    </main>
  );
}

function CoursesCatalog() {
  const params = new URLSearchParams(window.location.hash.split("?")[1] ?? "");
  const track = params.get("track");
  const visibleCourses = track ? courses.filter((course) => course.track === track) : courses;

  return (
    <main>
      <section className="course-hero">
        <p className="course-eyebrow">L8AI Academy</p>
        <h1>{courseCatalogIntro.title}</h1>
        <p>{courseCatalogIntro.desc}</p>
        <div className="course-track-tabs">
          <a href="#/courses" className={!track ? "active" : undefined}>
            全部课程
          </a>
          {courseTracks.map((item) => (
            <a href={item.href} className={track === item.track ? "active" : undefined} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </section>
      <section className="course-list-section">
        <div className="course-list">
          {visibleCourses.map((course) => (
            <article className="course-card" key={course.id}>
              <div className="course-card-top">
                <span className="course-track">{course.track}</span>
                <span className="course-level">{course.level}</span>
              </div>
              <h2>{course.title}</h2>
              <p>{course.subtitle}</p>
              <dl>
                <div>
                  <dt>对象</dt>
                  <dd>{course.audience}</dd>
                </div>
                <div>
                  <dt>周期</dt>
                  <dd>{course.duration}</dd>
                </div>
                <div>
                  <dt>产出</dt>
                  <dd>{course.outcome}</dd>
                </div>
              </dl>
              <a href={`#/courses/${course.id}`} className="course-card-action">
                查看课程详情
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function CourseDetailPage({ courseId }: { courseId: string }) {
  const course = courses.find((item) => item.id === courseId);

  if (!course) {
    return <CourseNotFound />;
  }

  return (
    <main>
      <section className="course-detail-hero">
        <div className="course-detail-hero-grid">
          <div>
            <a href="#/courses" className="course-eyebrow">
              返回课程总览 · {course.track}
            </a>
            <h1>{course.pageTitle}</h1>
            <p>{course.summary}</p>
          </div>
          <div className="course-detail-panel">
            <h2>课程信息</h2>
            <div className="course-meta-grid">
              <div>
                <span>适合对象</span>
                <strong>{course.audience}</strong>
              </div>
              <div>
                <span>课程周期</span>
                <strong>{course.duration}</strong>
              </div>
              <div>
                <span>难度级别</span>
                <strong>{course.level}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="course-detail-section">
        <SectionTitle title="课程模块与交付产物" desc={course.outcome} />
        <div className="course-module-list">
          {course.modules.map((module, index) => (
            <article className="course-module-card" key={`${course.id}-${module.title}`}>
              <span className="course-module-no">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{module.title}</h3>
                <p>{module.objective}</p>
              </div>
              <strong>{module.deliverable}</strong>
            </article>
          ))}
        </div>
      </section>
      <section className="course-tools-section">
        <h2>配套工具与资产</h2>
        <div className="course-tools-grid">
          {course.tools.map((tool) => (
            <span className="course-tool-pill" key={`${course.id}-${tool}`}>
              {tool}
            </span>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}

function CourseNotFound() {
  return (
    <main>
      <section className="course-hero">
        <p className="course-eyebrow">L8AI Academy</p>
        <h1>课程不存在</h1>
        <p>当前课程链接没有匹配到已发布课程。</p>
        <a href="#/courses" className="primary-button">
          返回课程总览
        </a>
      </section>
    </main>
  );
}

function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div>
        <h2>从今天开始，让 AI 真正为业务创造价值</h2>
        <p>与 {company.brand} 专家团队交流，定制属于您的落地路径</p>
        <a href="mailto:contact@l8ai.cn" className="light-button">
          预约咨询
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="about">
      <div className="footer-company">
        <img src={logoUrl} alt="L8AI" />
        <p>{company.legalNameCn}</p>
        <p>{company.legalNameEn}</p>
        <p>{company.slogan}</p>
      </div>
      {footerColumns.map((column) => (
        <div className="footer-column" key={column[0]}>
          <h3>{column[0]}</h3>
          {column.slice(1).map((item) => (
            <a href="#top" key={item}>
              {item}
            </a>
          ))}
        </div>
      ))}
      <div className="qr-box">
        <div>QR</div>
        <span>关注 L8AI 公众号</span>
        <small>获取最新洞察与咨询</small>
      </div>
      <div className="footer-bottom">© 2026 {company.legalNameEn}. All rights reserved.</div>
    </footer>
  );
}

function SectionTitle({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

export function App() {
  const hash = useHashRoute();
  const courseDetailMatch = hash.match(/^#\/courses\/([^?]+)/);
  const articleDetailMatch = hash.match(/^#\/articles\/([^?]+)/);
  const isCourseCatalog = hash.startsWith("#/courses") && !courseDetailMatch;
  const isArticleList = hash.startsWith("#/articles") && !articleDetailMatch;

  return (
    <>
      <Header />
      {articleDetailMatch ? (
        <ArticleDetailPage articleId={articleDetailMatch[1]} />
      ) : isArticleList ? (
        <ArticlesPage />
      ) : courseDetailMatch ? (
        <CourseDetailPage courseId={courseDetailMatch[1]} />
      ) : isCourseCatalog ? (
        <CoursesCatalog />
      ) : (
        <main>
          <Hero />
          <Modules />
          <Method />
          <DoEngine />
          <Knowledge />
          <Resources />
          <Insights />
          <Cases />
          <CTA />
        </main>
      )}
      <Footer />
    </>
  );
}
