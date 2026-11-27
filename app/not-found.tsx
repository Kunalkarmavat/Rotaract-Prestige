import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap narrow center">
        <h1 className="h1">That page does not exist</h1>
        <p className="lead">The link may be old or mistyped. Head back home and try again.</p>
        <div className="actions center-actions">
          <Link className="btn btn-primary" href="/">Go to home</Link>
        </div>
      </div>
    </section>
  );
}
