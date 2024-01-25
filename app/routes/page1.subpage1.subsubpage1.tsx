import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/styles.css" },
  { rel: "stylesheet", href: "/bulma.min.css" },
];

export default function SubSubPage1() {
  return (
    <div className="container border-1">
      <h1 className="title">Sub Sub Page 1</h1>
      <p className="subtitle">
        This page is rendered by the <code>app/routes/page1.subpage1.subsubpage1.tsx</code> file.
      </p>
    </div>
  );
}
