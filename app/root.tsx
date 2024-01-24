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

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <h2>Global App Container (root.tsx)</h2>

        {/* Typically no additional content is add in this file. It's mostly used as scafolding. */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
