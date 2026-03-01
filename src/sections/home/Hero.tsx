import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
            />
            <style>{`
                .hero-section {
                    font-family: 'DM Sans', sans-serif;
                }

                /* ── Grain overlay ── */
                .hero-section::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
                    pointer-events: none;
                    opacity: 0.35;
                }

                /* ── Animated mesh blobs ── */
                .blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(90px);
                    animation: blobFloat 8s ease-in-out infinite;
                }
                .blob-1 {
                    width: 520px; height: 520px;
                    background: radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%);
                    top: -100px; left: -80px;
                    animation-delay: 0s;
                }
                .blob-2 {
                    width: 400px; height: 400px;
                    background: radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%);
                    bottom: -60px; right: -60px;
                    animation-delay: -3s;
                }
                .blob-3 {
                    width: 280px; height: 280px;
                    background: radial-gradient(circle, rgba(251,207,232,0.12) 0%, transparent 70%);
                    top: 50%; left: 45%;
                    animation-delay: -5s;
                }

                @keyframes blobFloat {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33%       { transform: translate(24px, -18px) scale(1.04); }
                    66%       { transform: translate(-16px, 12px) scale(0.97); }
                }

                /* ── Badge ── */
                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 18px;
                    border-radius: 999px;
                    background: rgba(236, 72, 153, 0.08);
                    border: 1px solid rgba(236, 72, 153, 0.22);
                    color: #f9a8d4;
                    font-size: 0.78rem;
                    font-weight: 500;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    animation: fadeSlideUp 0.7s ease both;
                }

                /* ── Heading ── */
                .hero-h1 {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 300;
                    font-size: clamp(3rem, 7vw, 5.5rem);
                    line-height: 1.05;
                    color: #f8fafc;
                    letter-spacing: -0.02em;
                    animation: fadeSlideUp 0.7s ease 0.15s both;
                }

                .hero-h1 em {
                    font-style: italic;
                    background: linear-gradient(135deg, #f9a8d4 0%, #ec4899 45%, #c084fc 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                /* ── Body ── */
                .hero-body {
                    color: #94a3b8;
                    font-size: 1.05rem;
                    font-weight: 300;
                    line-height: 1.75;
                    max-width: 460px;
                    animation: fadeSlideUp 0.7s ease 0.3s both;
                }

                /* ── Primary CTA ── */
                .cta-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 16px 32px;
                    background: linear-gradient(135deg, #f472b6, #ec4899 55%, #db2777);
                    color: white;
                    font-size: 0.9rem;
                    font-weight: 600;
                    letter-spacing: 0.03em;
                    border-radius: 999px;
                    text-decoration: none;
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                                box-shadow 0.3s ease;
                    box-shadow: 0 6px 28px rgba(236, 72, 153, 0.4),
                                0 1px 0 rgba(255,255,255,0.2) inset;
                    animation: fadeSlideUp 0.7s ease 0.45s both;
                }
                .cta-primary::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .cta-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 12px 40px rgba(236, 72, 153, 0.5);
                }
                .cta-primary:hover::after { opacity: 1; }
                .cta-primary:active { transform: translateY(0); }

                .cta-arrow {
                    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .cta-primary:hover .cta-arrow { transform: translateX(4px); }

                /* ── Secondary CTA ── */
                .cta-secondary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 15px 28px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.12);
                    color: #cbd5e1;
                    font-size: 0.9rem;
                    font-weight: 500;
                    border-radius: 999px;
                    text-decoration: none;
                    transition: all 0.25s ease;
                    animation: fadeSlideUp 0.7s ease 0.55s both;
                    backdrop-filter: blur(8px);
                }
                .cta-secondary:hover {
                    background: rgba(255,255,255,0.08);
                    border-color: rgba(255,255,255,0.2);
                    color: white;
                }

                /* ── Stats row ── */
                .stats-row {
                    display: flex;
                    gap: 32px;
                    padding-top: 8px;
                    animation: fadeSlideUp 0.7s ease 0.65s both;
                }
                .stat-item {
                    display: flex;
                    flex-direction: column;
                }
                .stat-num {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.75rem;
                    font-weight: 600;
                    color: white;
                    line-height: 1;
                    background: linear-gradient(135deg, #f9a8d4, #ec4899);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .stat-label {
                    font-size: 0.75rem;
                    color: #64748b;
                    font-weight: 400;
                    letter-spacing: 0.04em;
                    margin-top: 2px;
                }
                .stat-divider {
                    width: 1px;
                    background: rgba(255,255,255,0.08);
                    align-self: stretch;
                }

                /* ── Image panel ── */
                .hero-image-wrap {
                    position: relative;
                    animation: fadeSlideRight 0.9s ease 0.2s both;
                }

                @keyframes fadeSlideRight {
                    from { opacity: 0; transform: translateX(40px); }
                    to   { opacity: 1; transform: translateX(0); }
                }

                .hero-img-card {
                    position: relative;
                    border-radius: 2rem;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.07);
                    box-shadow: 0 40px 80px rgba(0,0,0,0.5),
                                0 0 0 1px rgba(236,72,153,0.08);
                    aspect-ratio: 3/4;
                }

                .hero-img-card img {
                    width: 100%; height: 100%;
                    object-fit: cover;
                    transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                .hero-img-card:hover img { transform: scale(1.04); }

                /* color tint over image */
                .hero-img-card::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to bottom,
                        transparent 40%,
                        rgba(15, 10, 30, 0.7) 100%
                    );
                }

                /* ── Floating card ── */
                .float-card {
                    position: absolute;
                    background: rgba(15, 10, 30, 0.7);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(236, 72, 153, 0.2);
                    border-radius: 16px;
                    padding: 14px 18px;
                    animation: floatCard 4s ease-in-out infinite;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                }

                .float-card-1 {
                    bottom: 28px;
                    left: -28px;
                    animation-delay: 0s;
                }
                .float-card-2 {
                    top: 36px;
                    right: -24px;
                    animation-delay: -2s;
                }

                @keyframes floatCard {
                    0%, 100% { transform: translateY(0); }
                    50%       { transform: translateY(-8px); }
                }

                .float-card-label {
                    font-size: 0.7rem;
                    color: #94a3b8;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    margin-bottom: 4px;
                }
                .float-card-value {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.1rem;
                    color: white;
                    font-weight: 600;
                }
                .float-card-dot {
                    display: inline-block;
                    width: 7px; height: 7px;
                    border-radius: 50%;
                    background: #4ade80;
                    margin-right: 6px;
                    box-shadow: 0 0 8px rgba(74, 222, 128, 0.7);
                    animation: pulse-dot 2s ease-in-out infinite;
                }
                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50%       { opacity: 0.6; transform: scale(0.8); }
                }

                /* ── Decorative line ── */
                .deco-line {
                    position: absolute;
                    top: -20px; right: 60px;
                    width: 1px; height: 80px;
                    background: linear-gradient(to bottom, transparent, rgba(236,72,153,0.4), transparent);
                }

                /* ── Scroll hint ── */
                .scroll-hint {
                    position: absolute;
                    bottom: 32px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 6px;
                    color: #475569;
                    font-size: 0.7rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    animation: fadeSlideUp 0.7s ease 1s both;
                }
                .scroll-mouse {
                    width: 22px; height: 34px;
                    border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 999px;
                    display: flex;
                    justify-content: center;
                    padding-top: 6px;
                }
                .scroll-wheel {
                    width: 3px; height: 8px;
                    background: rgba(236,72,153,0.6);
                    border-radius: 99px;
                    animation: scrollWheel 1.8s ease-in-out infinite;
                }
                @keyframes scrollWheel {
                    0%   { transform: translateY(0); opacity: 1; }
                    80%  { transform: translateY(8px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 0; }
                }

                /* ── Entrance animations ── */
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                /* ── Responsive ── */
                @media (max-width: 768px) {
                    .stats-row { gap: 20px; }
                    .float-card-1 { left: 8px; }
                    .float-card-2 { right: 8px; }
                }
            `}</style>

            <section className="hero-section relative min-h-screen flex items-center overflow-hidden"
                style={{ background: 'linear-gradient(160deg, #0a0614 0%, #0f0a1e 40%, #120818 70%, #0a0614 100%)' }}
            >
                {/* Blobs */}
                <div className="absolute inset-0 z-0" aria-hidden="true">
                    <div className="blob blob-1" />
                    <div className="blob blob-2" />
                    <div className="blob blob-3" />
                </div>

                {/* Subtle grid lines */}
                <div className="absolute inset-0 z-0" aria-hidden="true"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
                        backgroundSize: '80px 80px',
                    }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                        {/* ── Left copy ── */}
                        <div className="space-y-8">
                            {/* Badge */}
                            <div>
                                <span className="hero-badge">
                                    <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                                    Tu Belleza, Nuestra Pasión
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="hero-h1">
                                Realza tu<br />
                                <em>Brillo Natural</em><br />
                                con arte
                            </h1>

                            {/* Body */}
                            <p className="hero-body">
                                Tratamientos personalizados que cuidan de ti por dentro y por fuera.
                                Una experiencia de bienestar diseñada para hacerte sentir extraordinaria.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-4 pt-2">
                                <Link to="/contacto" className="cta-primary">
                                    <Calendar className="w-4 h-4" />
                                    <span>Agendar Cita</span>
                                    <ArrowRight className="w-4 h-4 cta-arrow" />
                                </Link>
                                <Link to="/servicios" className="cta-secondary">
                                    Ver Servicios
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-num">500+</span>
                                    <span className="stat-label">Clientas felices</span>
                                </div>
                                <div className="stat-divider" />
                                <div className="stat-item">
                                    <span className="stat-num">8</span>
                                    <span className="stat-label">Años de experiencia</span>
                                </div>
                                <div className="stat-divider" />
                                <div className="stat-item">
                                    <span className="stat-num">20+</span>
                                    <span className="stat-label">Tratamientos</span>
                                </div>
                            </div>
                        </div>

                        {/* ── Right image ── */}
                        <div className="hero-image-wrap hidden lg:block">
                            <div className="deco-line" />

                            <div className="hero-img-card">
                                <img
                                    src="https://radiomariajuana.com/wp-content/uploads/2024/03/tendencias-estetica.jpg"
                                    alt="Centro de estética GlowBook"
                                />
                            </div>

                            {/* Floating card — bottom left */}
                            <div className="float-card float-card-1">
                                <div className="float-card-label">Próxima disponibilidad</div>
                                <div className="float-card-value">
                                    <span className="float-card-dot" />
                                    Hoy · 3:00 PM
                                </div>
                            </div>

                            {/* Floating card — top right */}
                            <div className="float-card float-card-2">
                                <div className="float-card-label">Reseñas</div>
                                <div className="float-card-value" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <span style={{ color: '#fbbf24', fontSize: '0.9rem' }}>★★★★★</span>
                                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'DM Sans' }}>5.0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll hint */}
                <div className="scroll-hint hidden md:flex">
                    <div className="scroll-mouse">
                        <div className="scroll-wheel" />
                    </div>
                    <span>Scroll</span>
                </div>
            </section>
        </>
    );
};

export default Hero;
