import React, { useState } from 'react'

interface NavLink {
  name: string
  href: string
}

interface Product {
  id: number
  name: string
  desc: string
  icon: string
}

interface FDEStep {
  number: number
  name: string
  desc: string
}

interface Knowledge {
  id: number
  title: string
  desc: string
}

interface CaseItem {
  id: number
  tag: string
  title: string
  desc: string
  link: string
}

const App: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const navLinks: NavLink[] = [
    { name: '产品', href: '#products' },
    { name: '方案', href: '#solutions' },
    { name: '客户案例', href: '#cases' },
    { name: '文档', href: '#docs' },
    { name: '关于', href: '#about' },
  ]

  const products: Product[] = [
    { id: 1, name: '智能对话', desc: '自然语言处理与交互引擎', icon: '💬' },
    { id: 2, name: '文档分析', desc: '多格式文档智能理解', icon: '📄' },
    { id: 3, name: '数据挖掘', desc: '结构化数据深度分析', icon: '⛏️' },
    { id: 4, name: '代码生成', desc: '智能代码自动化生成', icon: '⚙️' },
    { id: 5, name: '图像识别', desc: '图像内容与场景理解', icon: '🖼️' },
    { id: 6, name: '知识库', desc: '企业知识智能管理', icon: '📚' },
    { id: 7, name: '流程自动化', desc: '业务流程智能化', icon: '🔄' },
    { id: 8, name: '实时决策', desc: '数据驱动决策引擎', icon: '🎯' },
  ]

  const fdeSteps: FDEStep[] = [
    { number: 1, name: '数据收集', desc: 'Fetch' },
    { number: 2, name: '数据清洗', desc: 'Clean' },
    { number: 3, name: '特征工程', desc: 'Extract' },
    { number: 4, name: '模型训练', desc: 'Train' },
    { number: 5, name: '模型评估', desc: 'Validate' },
    { number: 6, name: '部署推理', desc: 'Deploy' },
    { number: 7, name: '持续优化', desc: 'Optimize' },
  ]

  const knowledge: Knowledge[] = [
    { id: 1, title: '企业AI部署指南', desc: '详解如何在企业级应用中快速部署AI解决方案，包括架构设计和最佳实践' },
    { id: 2, title: 'LLM微调技巧', desc: '掌握大语言模型的微调方法，实现行业特定的高精度应用' },
    { id: 3, title: 'RAG知识库构建', desc: '构建检索增强型生成系统，提升AI应用的准确性和实时性' },
    { id: 4, title: '多模态应用开发', desc: '整合文本、图像、音频多个维度，打造综合性AI服务' },
  ]

  const cases: CaseItem[] = [
    {
      id: 1,
      tag: '金融',
      title: '风险识别系统',
      desc: '实现97%准确率的金融风险预测，日处理交易1000万+笔',
      link: '查看案例 →',
    },
    {
      id: 2,
      tag: '制造',
      title: '生产质检自动化',
      desc: '缺陷检出率提升45%，单位成本下降38%，产能提升20%',
      link: '查看案例 →',
    },
    {
      id: 3,
      tag: '医疗',
      title: '影像诊断辅助',
      desc: '医学影像分析精度达99.2%，诊疗效率提升60%以上',
      link: '查看案例 →',
    },
  ]

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <span>L8AI</span>
        </div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <button className="nav-cta">免费试用</button>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="section">
        <div className="container">
          <div className="hero">
            <div className="hero-content">
              <h1>企业级AI工作台</h1>
              <p>
                L8AI为企业提供端到端的人工智能解决方案，集成自然语言处理、计算机视觉、机器学习等核心能力，帮助企业快速构建和部署AI应用。
              </p>
              <button className="hero-cta">立即开始</button>
              <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
                ✓ 30分钟快速上手 &nbsp;&nbsp; ✓ 企业级安全认证 &nbsp;&nbsp; ✓ 24/7技术支持
              </p>
            </div>
            <div className="hero-workbench">
              <div style={{ width: '100%', marginBottom: '1rem' }}>
                <div className="workbench-grid">
                  <div className="workbench-cell">数据导入</div>
                  <div className="workbench-cell">模型选择</div>
                  <div className="workbench-cell">参数配置</div>
                  <div className="workbench-cell">训练调优</div>
                  <div className="workbench-cell">结果评估</div>
                  <div className="workbench-cell">云端部署</div>
                  <div className="workbench-cell">API调用</div>
                  <div className="workbench-cell">数据分析</div>
                  <div className="workbench-cell">监控预警</div>
                </div>
              </div>
              <div className="workbench-label">AI Workbench - 可视化工作平台</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section">
        <div className="container">
          <h2>核心产品模块</h2>
          <p style={{ marginBottom: '2rem' }}>
            8大产品能力覆盖企业AI应用全场景，开箱即用
          </p>
          <div className="products-grid">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card"
                style={hoveredProduct === product.id ? { transform: 'translateY(-4px)' } : undefined}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="product-icon">{product.icon}</div>
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FDE Method Section */}
      <section id="method" className="section">
        <div className="container">
          <h2>FDE七步方法论</h2>
          <p style={{ marginBottom: '2rem' }}>
            从数据到决策，科学的AI开发流程保证高质量交付
          </p>
          <div className="fde-steps">
            {fdeSteps.map((step) => (
              <div key={step.number} className="fde-step">
                <div className="fde-number">{step.number}</div>
                <h4>{step.name}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              color: '#9ca3af',
              fontSize: '0.9rem',
            }}
          >
            这套方法论已在1000+企业项目中验证成功，平均项目周期缩短45%，质量提升60%
          </p>
        </div>
      </section>

      {/* Knowledge Section */}
      <section id="knowledge" className="section">
        <div className="container">
          <h2>知识库与最佳实践</h2>
          <p style={{ marginBottom: '2rem' }}>
            从入门到精通，我们为您准备了完整的学习资源
          </p>
          <div className="knowledge-grid">
            {knowledge.map((item) => (
              <div key={item.id} className="knowledge-item">
                <div className="knowledge-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="section">
        <div className="container">
          <h2>客户案例</h2>
          <p style={{ marginBottom: '2rem' }}>
            看看其他企业如何通过L8AI实现AI驱动的业务增长
          </p>
          <div className="cases-grid">
            {cases.map((caseItem) => (
              <div key={caseItem.id} className="case-card">
                <div className="case-image">{caseItem.tag}</div>
                <div className="case-content">
                  <span className="case-tag">{caseItem.tag}</span>
                  <h3>{caseItem.title}</h3>
                  <p>{caseItem.desc}</p>
                  <a href="#" className="case-link">
                    {caseItem.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        style={{
          backgroundColor: '#f3f4f6',
          padding: '4rem 0',
          borderTop: '1px solid #bfdbfe',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2 style={{ color: '#1e40af' }}>开始您的AI之旅</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
            加入1000+企业，共同探索AI的无限可能
          </p>
          <button className="hero-cta">立即申请免费试用</button>
          <p style={{ marginTop: '1.5rem', color: '#9ca3af', fontSize: '0.9rem' }}>
            无需信用卡，5分钟即可获得完整体验
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>产品</h4>
              <ul>
                <li>
                  <a href="#products">所有模块</a>
                </li>
                <li>
                  <a href="#pricing">价格方案</a>
                </li>
                <li>
                  <a href="#api">API文档</a>
                </li>
                <li>
                  <a href="#sdk">SDK下载</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>方案</h4>
              <ul>
                <li>
                  <a href="#enterprise">企业解决方案</a>
                </li>
                <li>
                  <a href="#fintech">金融科技</a>
                </li>
                <li>
                  <a href="#manufacturing">制造业</a>
                </li>
                <li>
                  <a href="#healthcare">医疗健康</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>资源</h4>
              <ul>
                <li>
                  <a href="#blog">技术博客</a>
                </li>
                <li>
                  <a href="#cases">客户案例</a>
                </li>
                <li>
                  <a href="#webinar">在线讲座</a>
                </li>
                <li>
                  <a href="#community">开发者社区</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>公司</h4>
              <ul>
                <li>
                  <a href="#about">关于我们</a>
                </li>
                <li>
                  <a href="#contact">联系我们</a>
                </li>
                <li>
                  <a href="#careers">招聘信息</a>
                </li>
                <li>
                  <a href="#privacy">隐私政策</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2024 L8AI. All rights reserved. | 京ICP备xxxxxx号 | 隐私政策
              | 服务条款
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
