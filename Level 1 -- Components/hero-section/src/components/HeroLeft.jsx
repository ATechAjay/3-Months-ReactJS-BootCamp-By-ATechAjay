import './HeroLeft.css'
function HeroLeft() {
  return (
    <div className="hero__left">
      <p className="hero__left--cta-para">Availabe for new projects</p>
      <h1 className="hero__left--heading">Design made simple</h1>
      <p className="hero__left--detail">
        Getting quality designs quickly is not a struggle anymore. Subscribe and
        get access to unlimited custom designs. Rapid delivery. No long term
        contracts. Cancel at any time.
      </p>

      <div className="cta-link">
        <a className="hero__left--primary-link" href="#">
          Get Started
        </a>
        <a className="hero__left--secondry-link" href="#">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default HeroLeft;
