import type { LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export async function loader(args: LoaderFunctionArgs) {
  return {};
}

export default function SubPage1() {
  return (
    <div>
      <h2>SubPage 1 (page1.subpage1.tsx)</h2>
      <p>Each page can have it's own Outlet for additional nested routes to use.</p>
      <button>
        <Link to="/page1/subpage1/subsubpage1">Sub-Sub-Page 1</Link>
      </button>

      <Outlet />
    </div>
  );
}
