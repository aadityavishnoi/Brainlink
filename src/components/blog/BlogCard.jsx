import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold mb-2">
        {post.title}
      </h3>

      <p className="text-gray-600 mb-4">
        {post.excerpt}
      </p>

      <Link
        to={`/blog/${post.slug}`}
        className="text-blue-600 font-semibold"
      >
        Read More →
      </Link>
    </div>
  );
}
