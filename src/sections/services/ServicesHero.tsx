import { Sparkles } from 'lucide-react';

const ServicesHero = () => {
    return (
        <>
            <style>{`
                .sh-section {
                    font-family: 'DM Sans', sans-serif;
                    background: linear-gradient(180deg, #0a0614 0%, #0f0a1e 60%, #0a0614 100%);
                    position: relative;
                    overflow: hidden;
                }

                .sh-section::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(236,72,153,0.3), transparent);
                }

                .sh-grid {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px);
                    background-size: 80px 80px;
                    pointer-events: none;
                }

                .sh-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(90px);
                    pointer-events: none;
                }
                .sh-blob-1 {
                    width: 560px; height: 560px;
                    background: radial-gradient(circle, rgba(236,72,153,0.14) 0%, transparent 65%);
                    top: -160px; left: 50%;
                    transform: translateX(-50%);
                }
                .sh-blob-2 {
                    width: 340px; height: 340px;
                    background: radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%);
                    top: 40px; left: -80px;
                }
                .sh-blob-3 {
                    width: 300px; height: 300px;
                    background: radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%);
                    bottom: -40px; right: -60px;
                }

                /* Decorative rings */
                .sh-ring {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                    border: 1px solid rgba(236,72,153,0.06);
                    pointer-events: none;
                }
                .sh-ring-1 { width: 700px; height: 700px; }
                .sh-ring-2 { width: 500px; height: 500px; border-color: rgba(168,85,247,0.05); }

                /* Label */
                .sh-label {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 7px 18px;
                    border-radius: 999px;
                    background: rgba(236,72,153,0.08);
                    border: 1px solid rgba(236,72,153,0.2);
                    color: #f9a8d4;
                    font-size: 0.72rem;
                    font-weight: 500;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    animation: shReveal 0.6s ease 0.1s both;
                }

                /* Heading */
                .sh-heading {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 300;
                    font-size: clamp(3rem, 7vw, 5.5rem);
                    line-height: 1.08;
                    color: #f8fafc;
                    letter-spacing: -0.02em;
                    animation: shReveal 0.6s ease 0.2s both;
                }
                .sh-heading em {
                    font-style: italic;
                    background: linear-gradient(135deg, #f9a8d4 0%, #ec4899 50%, #c084fc 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .sh-body {
                    color: #64748b;
                    font-size: 1rem;
                    font-weight: 300;
                    line-height: 1.75;
                    max-width: 500px;
                    margin: 0 auto;
                    animation: shReveal 0.6s ease 0.35s both;
                }

                /* Divider line */
                .sh-divider {
                    width: 60px; height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(236,72,153,0.5), transparent);
                    margin: 0 auto;
                    animation: shReveal 0.6s ease 0.45s both;
                }

                /* Bottom edge */
                .sh-section::after {
                    content: '';
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(236,72,153,0.15), transparent);
                }

                @keyframes shReveal {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .sh-sparkle {
                    animation: shSparkle 2.5s ease-in-out infinite;
                }
                @keyframes shSparkle {
                    0%, 100% { transform: scale(1) rotate(0deg); }
                    50%       { transform: scale(1.2) rotate(15deg); }
                }
            `}</style>

            <section className="sh-section py-36">
                <div className="sh-grid" aria-hidden="true" />
                <div className="sh-blob sh-blob-1" aria-hidden="true" />
                <div className="sh-blob sh-blob-2" aria-hidden="true" />
                <div className="sh-blob sh-blob-3" aria-hidden="true" />
                <div className="sh-ring sh-ring-1" aria-hidden="true" />
                <div className="sh-ring sh-ring-2" aria-hidden="true" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">

                    <div>
                        <span className="sh-label">
                            <Sparkles className="w-3 h-3 sh-sparkle" />
                            Experiencias de Lujo & Bienestar
                        </span>
                    </div>

                    <h1 className="sh-heading">
                        Nuestros<br />
                        <em>Servicios</em>
                    </h1>

                    <div className="sh-divider" />

                    <p className="sh-body">
                        Descubre nuestra gama de tratamientos diseñados para realzar tu belleza natural y proporcionarte un momento de relajación inigualable.
                    </p>

                </div>
            </section>
        </>
    );
};

export default ServicesHero;