import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/styles.css" },
  { rel: "stylesheet", href: "/bulma.min.css" },
];

export default function SubPage2() {
  return (
    <div className="container border-1">
      <h1 className="title">Sub Page 2</h1>
      <p className="subtitle">
        This page is rendered by the <code>app/routes/page3.subpage2.tsx</code> file.
      </p>
    </div>
  );
}
