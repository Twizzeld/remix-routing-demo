import { Link, Outlet } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/styles.css" },
  { rel: "stylesheet", href: "/bulma.min.css" },
];

export default function Page2() {
  return (
    <div className="container border-1">
      <h1 className="title">Page 2 Container</h1>
      <p className="subtitle">
        This page is rendered by the <code>app/routes/page2.tsx</code> file.
      </p>

      <div className="buttons">
        <button className="button is-info">
          <Link to="/page2/subpage1">Sub Page 1</Link>
        </button>
        <button className="button is-info">
          <Link to="/page2/subpage2">Sub Page 2</Link>
        </button>
        <button className="button is-info">
          <Link to="/page2/subpage3">Sub Page 3</Link>
        </button>

        <button className="button is-danger">
          <Link to="/page2">Reset</Link>
        </button>
        <button className="button is-danger">
          <Link to="/">Back To _index</Link>
        </button>
      </div>

      <Outlet />
    </div>
  );
}
