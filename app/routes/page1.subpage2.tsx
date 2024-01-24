import type { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export async function loader(args: LoaderFunctionArgs) {
  return {};
}

export default function SubPage2() {
  return (
    <div>
      <h2>SubPage 2 (page1.subpage2.tsx)</h2>
    </div>
  );
}
