/**
 * This is the default page for the root.tsx <Outlet /> component. It is
 * displayed when the user navigates to the root of the site. It is also
 * displayed when the user navigates to a page that does not have a matching
 * route. For example, if the user navigates to /page1/subpage4, the
 * app/routes/page1.subpage4.tsx file does not exist, so the app/routes/_index.tsx
 * file is displayed instead.
 *
 * It is considered best practice for _index.tsx to not have nested child routes.
 * Instead, it should be used as a landing page for the root of the site.
 */
import { Link } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/styles.css" },
  { rel: "stylesheet", href: "/bulma.min.css" },
];

/**
 * The main index page component.
 */
export default function Index() {
  return (
    <div className="container border-1">
      <h1 className="title">Index Container</h1>
      <p className="subtitle">
        This page is rendered by the <code>app/routes/_index.tsx</code> file.
      </p>

      <div className="buttons">
        <button className="button is-success">
          <Link to="/page1">Main Page 1</Link>
        </button>
        <button className="button is-success">
          <Link to="/page2">Main Page 2</Link>
        </button>
        <button className="button is-success">
          <Link to="/page3">Main Page 3</Link>
        </button>
      </div>
    </div>
  );
}
