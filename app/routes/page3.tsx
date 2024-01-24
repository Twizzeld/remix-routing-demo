import type { LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export async function loader(args: LoaderFunctionArgs) {
  return {};
}

export default function Page3() {
  return (
    <div>
      <h2>Main Page 3 Title (page3.tsx)</h2>
      <button>
        <Link to="/page3/subpage1">SubPage 1</Link>
      </button>
      <button>
        <Link to="/page3/subpage2">SubPage 2</Link>
      </button>
      <button>
        <Link to="/page3/subpage3">SubPage 3</Link>
      </button>
      <br />
      <br />
      <button>
        <Link to="/page3">Reset</Link>
      </button>
      <button>
        <Link to="/">Back To _index</Link>
      </button>

      <Outlet />
    </div>
  );
}
