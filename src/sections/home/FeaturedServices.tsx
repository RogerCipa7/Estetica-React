import { ArrowRight, Clock, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getFeaturedServices } from '../../data/servicesData'

const featuredServices = getFeaturedServices();

const FeaturedServices = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=DM+Sans:wght@300;400;500&display=swap');

        .fs-section {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(180deg, #ffffff 0%, #fefefe 50%, #fafafa 100%);
          position: relative;
          overflow: hidden;
        }

        /* subtle divider from hero */
        .fs-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(236,72,153,0.15), transparent);
        }

        /* subtle grid pattern for light mode */
        .fs-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(236,72,153,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236,72,153,0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }

        /* soft ambient blobs for light mode */
        .fs-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          opacity: 0.5;
        }
        .fs-blob-1 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%);
          top: -80px; right: -80px;
        }
        .fs-blob-2 {
          width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%);
          bottom: -60px; left: -60px;
        }

        /* ── Section label ── */
        .fs-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px;
          border-radius: 999px;
          background: rgba(236,72,153,0.1);
          border: 1px solid rgba(236,72,153,0.2);
          color: #be185d;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        /* ── Heading ── */
        .fs-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2.4rem, 5vw, 4rem);
          line-height: 1.1;
          color: #1e293b;
          letter-spacing: -0.02em;
        }
        .fs-heading em {
          font-style: italic;
          background: linear-gradient(135deg, #db2777, #ec4899 50%, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .fs-subtitle {
          color: #475569;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.7;
          max-width: 460px;
        }

        /* ── Card ── */
        .fs-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 28px;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1),
                      border-color 0.3s ease,
                      box-shadow 0.3s ease;
          overflow: hidden;
          cursor: default;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);
        }

        .fs-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(236,72,153,0.03), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .fs-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.08), 0 10px 10px -5px rgba(0,0,0,0.03);
        }
        .fs-card:hover::before { opacity: 1; }

        /* soft glow behind card on hover - light mode version */
        .fs-card-glow {
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: -1;
        }
        .fs-card:hover .fs-card-glow { opacity: 1; }

        /* ── Icon ── */
        .fs-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
          flex-shrink: 0;
        }
        .fs-card:hover .fs-icon-wrap { transform: rotate(10deg) scale(1.1); }

        /* ── Tag badge ── */
        .fs-tag {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 999px;
          background: rgba(236,72,153,0.1);
          border: 1px solid rgba(236,72,153,0.2);
          color: #be185d;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          align-self: flex-start;
        }

        /* ── Card title ── */
        .fs-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 600;
          color: #1e293b;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        /* ── Card desc ── */
        .fs-card-desc {
          color: #475569;
          font-size: 0.88rem;
          font-weight: 300;
          line-height: 1.7;
          flex: 1;
        }

        /* ── Meta row ── */
        .fs-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid #e2e8f0;
        }
        .fs-duration {
          font-size: 0.78rem;
          color: #64748b;
          letter-spacing: 0.04em;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .fs-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-weight: 600;
          background: linear-gradient(135deg, #db2777, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── View all link ── */
        .fs-view-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #be185d;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          text-decoration: none;
          border-bottom: 1px solid rgba(190,24,93,0.3);
          padding-bottom: 2px;
          transition: color 0.25s ease, border-color 0.25s ease, gap 0.25s ease;
        }
        .fs-view-all:hover {
          color: #ec4899;
          border-color: #ec4899;
          gap: 12px;
        }

        /* ── Scroll reveal ── */
        @keyframes fsReveal {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fs-reveal { animation: fsReveal 0.7s ease both; }
        .fs-reveal-1 { animation-delay: 0.1s; }
        .fs-reveal-2 { animation-delay: 0.22s; }
        .fs-reveal-3 { animation-delay: 0.34s; }
        .fs-reveal-4 { animation-delay: 0.46s; }
      `}</style>

      <section className="fs-section py-28">
        <div className="fs-grid-bg" aria-hidden="true" />
        <div className="fs-blob fs-blob-1" aria-hidden="true" />
        <div className="fs-blob fs-blob-2" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ── Header row ── */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 fs-reveal fs-reveal-1">
            <div className="space-y-5">
              <span className="fs-label">
                <Sparkles className="w-3 h-3" />
                Nuestros Servicios
              </span>
              <h2 className="fs-heading">
                Lo que más<br />
                <em>enamora</em> a nuestras clientas
              </h2>
              <p className="fs-subtitle">
                Cada tratamiento está diseñado para revelar tu mejor versión — con técnicas de vanguardia y una atención completamente personalizada.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link to="/servicios" className="fs-view-all">
                Ver todos los servicios
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((s, i) => (
              <div
                key={i}
                className={`fs-card fs-reveal fs-reveal-${i + 2} ${s.borderHover} ${s.shadowHover}`}
              >
                {/* soft glow overlay - light mode */}
                <div
                  className="fs-card-glow"
                  style={{
                    boxShadow: `0 0 40px 8px rgba(236,72,153,0.08)`
                  }}
                />

                {/* top row: icon + tag */}
                <div className="flex items-start justify-between">
                  <div className={`fs-icon-wrap ${s.iconBg}`}>
                    <s.icon className={`w-5 h-5 ${s.iconColor}`} />
                  </div>
                  <span className="fs-tag">{s.tag}</span>
                </div>

                {/* title */}
                <h3 className="fs-card-title">{s.name}</h3>

                {/* desc */}
                <p className="fs-card-desc">{s.description}</p>

                {/* meta */}
                <div className="fs-meta">
                  <span className="fs-duration">
                    <Clock className="w-4 h-4" />
                    {s.duration}
                  </span>
                  <span className="fs-price">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedServices