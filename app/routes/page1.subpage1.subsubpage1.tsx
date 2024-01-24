import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader(args: LoaderFunctionArgs) {
  return {};
}

export default function SubSubPage1() {
  return (
    <div>
      <h2>Sub-Sub-Page 1 (page1.subpage1.subsubpage1.tsx)</h2>
    </div>
  );
}
