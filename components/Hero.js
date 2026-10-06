export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <h1>
          Birds that swim <br />
          through ice.
        </h1>
        <p>
          There are about 18 kinds of penguins, from the 33&nbsp;cm little blue to the
          1.3&nbsp;m emperor. Learn how they live, then spin the globe to see where they are.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#globe">Open the globe</a>
          <a className="btn btn-ghost" href="#about">Read the details</a>
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="penguin">
          <div className="p-body">
            <div className="p-belly" />
            <div className="p-eye p-eye-l" />
            <div className="p-eye p-eye-r" />
            <div className="p-beak" />
          </div>
          <div className="p-wing p-wing-l" />
          <div className="p-wing p-wing-r" />
          <div className="p-foot p-foot-l" />
          <div className="p-foot p-foot-r" />
        </div>
        <div className="ice" />
      </div>
    </section>
  );
}
