export default function PageHero({ title, intro, children }) {
  return (
    <section className="page-hero cream">
      <div className="container">
        <h1>{title}</h1>
        {intro ? <p>{intro}</p> : null}
        {children}
      </div>
    </section>
  );
}
