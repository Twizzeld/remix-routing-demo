import type { LinksFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/styles.css" },
  { rel: "stylesheet", href: "/bulma.min.css" },
];

export default function SubPage1() {
  return (
    <div className="container border-1">
      <h1 className="title">Sub Page 1</h1>
      <p className="subtitle">
        This page is rendered by the <code>app/routes/page1.subpage1.tsx</code> file.
      </p>
      <p>Each page can have it's own Outlet for additional nested routes to use.</p>
      <br />
      <button className="button is-link">
        <Link to="/page1/subpage1/subsubpage1">Sub-Sub-Page 1</Link>
      </button>

      <Outlet />
    </div>
  );
}
