import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/styles.css" },
  { rel: "stylesheet", href: "/bulma.min.css" },
];

export default function SubPage1() {
  return (
    <div className="container border-1">
      <h1 className="title">Sub Page 1</h1>
      <p className="subtitle">
        This page is rendered by the <code>app/routes/page2.subpage1.tsx</code> file.
      </p>
    </div>
  );
}
