/**
 * Renders the root component of the application.
 * This component represents the global app container.
 * It includes the necessary HTML structure, meta tags, and links.
 * The main content of the application is rendered using the Outlet component.
 * The ScrollRestoration component ensures that the scroll position is restored when navigating between pages.
 * The Scripts component includes the necessary JavaScript files.
 * The LiveReload component enables live reloading during development.
 *
 * @returns The rendered root component.
 */

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { LinksFunction, MetaFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/styles.css" },
  { rel: "stylesheet", href: "/bulma.min.css" },
];

export const meta: MetaFunction = () => {
  return [{ title: "Remix Demo" }, { name: "description", content: "A demo showing how nested routes work" }];
};

export default function App() {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <div className="container border-1">
            <h1 className="title">Root Container</h1>
            <p className="subtitle">
              This is the root container. It is rendered by the <code>app/root.tsx</code> file.
            </p>
            <Outlet />
          </div>

          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </>
  );
}
