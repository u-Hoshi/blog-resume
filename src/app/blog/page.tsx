import { Link } from "@kuma-ui/core";

import { getList } from "../../../libs/microcms";

export default async function StaticPage() {
  const { contents } = await getList();
  const time = new Date().toLocaleString();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <h1>{time}</h1>
      <ul>
        {contents.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
