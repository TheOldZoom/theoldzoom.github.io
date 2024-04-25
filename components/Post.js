import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="card">
      <img src={post.frontmatter.cover_image} />

      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/posts/${post.slug}`}>
        <t className="btn">Read More</t>
      </Link>
    </div>
  );
}
