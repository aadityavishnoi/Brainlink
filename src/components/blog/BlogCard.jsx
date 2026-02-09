import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">

      {/* Featured Image */}
      {post.featured_image && (
        <img
          src={post.featured_image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6">

        <h3 className="text-xl font-bold mb-2 font-outfit text-gray-800">
          {post.title}
        </h3>

        <p className="text-gray-600 mb-4 font-outfit">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          className="text-blue-600 font-semibold font-outfit"
        >
          Read More →
        </Link>

      </div>
    </div>
  );
}
