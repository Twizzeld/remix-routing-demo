import type { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export async function loader(args: LoaderFunctionArgs) {
  return {};
}

export default function SubPage3() {
  return (
    <div>
      <h2>SubPage 3 (page3.subpage3.tsx)</h2>
    </div>
  );
}
