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

import type { MetaFunction } from "@remix-run/node";
import { Outlet, Link } from "@remix-run/react";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

/**
 * The main index page component.
 */
export default function Index() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <h2>Default Index File (_index.tsx)</h2>

      {/*
       * Each Link (page) will be displayed in the root.tsx <Outlet /> componenent.
       *
       */}
      <button>
        <Link to="/page1">Main Page 1</Link>
      </button>
      <button>
        <Link to="/page2">Main Page 2</Link>
      </button>
      <button>
        <Link to="/page3">Main Page 3</Link>
      </button>
    </>
  );
}
