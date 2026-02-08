import { Link } from "react-router-dom";

export default function BlogCard({ post, color }) {
  return (
    <div className={`${color} text-white p-6 rounded-xl`}>
      <h3 className="text-xl font-bold mb-2 font-outfit">
        {post.title}
      </h3>

      <p className="text-white-600 mb-4 font-outfit">
        {post.excerpt}
      </p>

      <Link
        to={`/blog/${post.slug}`}
        className="text-white-600 font-semibold font-outfit"
      >
        Read More →
      </Link>
    </div>
  );
}
