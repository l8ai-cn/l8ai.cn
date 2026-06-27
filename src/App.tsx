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
  knowledgeItems,
  methodSteps,
  navItems,
  productModules,
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
      <span className="anchor-target" id="resources" aria-hidden="true" />
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
  const isCourseCatalog = hash.startsWith("#/courses") && !courseDetailMatch;

  return (
    <>
      <Header />
      {courseDetailMatch ? (
        <CourseDetailPage courseId={courseDetailMatch[1]} />
      ) : isCourseCatalog ? (
        <CoursesCatalog />
      ) : (
        <main>
          <Hero />
          <Modules />
          <Method />
          <Knowledge />
          <Cases />
          <CTA />
        </main>
      )}
      <Footer />
    </>
  );
}
