import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <h1>This page could not be found</h1>
        <p>The page you are looking for may have moved. Let us guide you back to the community.</p>
        <div className="btn-row">
          <Link className="btn btn-gold" href="/" prefetch={false}>Back to home</Link>
          <Link className="btn btn-outline" href="/classes" prefetch={false}>See this week&apos;s classes</Link>
        </div>
      </div>
    </section>
  );
}
