
function HeroSection() {
    const ASSETS_PATH = import.meta.env.VITE_ASSETS_PATH;
    return (
        <main style={{
            background: `url(${ASSETS_PATH}/hero-bulldozor1.jpg) no-repeat fixed`,
            backgroundSize: 'cover',
            backgroundPositionY: -300, paddingLeft: 130
        }}>
            <section style={{ maxWidth: '45rem', padding: '50px 50px 60px' }}>
                <p style={{
                    margin: 0, fontSize: '7rem', fontFamily: 'IBM Plex Serif,serif', fontWeight: '700',
                    color: '#355070',
                    width: '80rem'
                }}>Global General Construction</p>
                <p style={{
                    fontWeight: '600', color: '#293241',
                    fontSize: '5rem',
                    width: '80rem'
                }}>Tailored Construction Services for Your Success</p>
                <p style={{
                    lineHeight: 1.7, fontSize: '2rem',
                    marginTop: 30,
                    width: '80rem',
                    background: 'rgba(255, 255, 255, 0.158)',
                    paddingLeft: '20px',
                }}>
                    Established in 2016, our commitment to excellence shines through as we bring a wealth of expertise to General Contracting, Building, and Water works. With a focus on both negotiated and competitive bids, we are a local company passionately dedicated to meeting the country's necessities for the benefit of all.
                </p>
            </section>
        </main>
    )
}

export default HeroSection
