import "@/app/globals.css"
import Link from 'next/link';
export default function Page() {
    const posts = [
        {
            id: 1,
            slug: "desc",
            title: "title"
        } 
    ]
    return <>
        <nav>

            <Link href={"/dashboard"}>dashboard</Link>
            <br />
            <Link href={"/signin"}>signin</Link>
        </nav>
        <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`} prefetch={false}>{post.title}</Link>
        </li>
      ))}
    </ul>
    </>;
}