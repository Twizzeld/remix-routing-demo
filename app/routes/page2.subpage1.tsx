import type { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export async function loader(args: LoaderFunctionArgs) {
  return {};
}

export default function SubPage1() {
  return (
    <div>
      <h2>SubPage 1 (page2.subpage1.tsx)</h2>
    </div>
  );
}
