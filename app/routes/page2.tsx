import type { LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export async function loader(args: LoaderFunctionArgs) {
  return {};
}

export default function Page2() {
  return (
    <div>
      <h2>Main Page 2 Title (page2.tsx)</h2>
      <button>
        <Link to="/page2/subpage1">SubPage 1</Link>
      </button>
      <button>
        <Link to="/page2/subpage2">SubPage 2</Link>
      </button>
      <button>
        <Link to="/page2/subpage3">SubPage 3</Link>
      </button>
      <br />
      <br />
      <button>
        <Link to="/page2">Reset</Link>
      </button>
      <button>
        <Link to="/">Back To _index</Link>
      </button>

      <Outlet />
    </div>
  );
}
