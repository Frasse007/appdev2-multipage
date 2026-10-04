import './Hero.css';

function Hero ({ title, subtitle, heroImage, callToAction }) {
    return (
        <section className='hero' style={{ backgroundImage: `url(${heroImage})` }}>
            <div className='hero-overlay'>
                <h1 className='title'>{title}</h1>
                <p className='subtitle'>{subtitle}</p>
                <button className='cta-button'>{callToAction}</button>
            </div>
        </section>
    );
}

export default Hero;