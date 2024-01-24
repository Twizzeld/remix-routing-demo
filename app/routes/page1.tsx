import type { LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export async function loader(args: LoaderFunctionArgs) {
  return {};
}

export default function Page1() {
  return (
    <div>
      <h2>Main Page 1 (page1.tsx)</h2>
      <button>
        <Link to="/page1/subpage1">SubPage 1</Link>
      </button>
      <button>
        <Link to="/page1/subpage1/subsubpage1">Sub-Sub-Page 1</Link>
      </button>
      <button>
        <Link to="/page1/subpage2">SubPage 2</Link>
      </button>
      <button>
        <Link to="/page1/subpage3">SubPage 3</Link>
      </button>
      <br />
      <br />
      <button>
        <Link to="/page1">Reset</Link>
      </button>
      <button>
        <Link to="/">Back To _index</Link>
      </button>

      <Outlet />
    </div>
  );
}
