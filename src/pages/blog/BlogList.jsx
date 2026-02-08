import Header from "../../common/Header";
import Footer from "../../common/Footer";
import BlogCard from "../../components/blog/BlogCard";
import { useEffect, useState } from "react";

const colors = [
  "bg-blue-600",
  "bg-green-600",
  "bg-purple-600",
  "bg-red-600"
];

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />

      {/* HERO / BLOG HEADER */}
      <section className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold mb-3 font-outfit">Brainlink Blogs</h1>
        <p className="text-gray-600 max-w-xl mx-auto font-outfit">
          Insights, tutorials, tech updates and practical knowledge from our team.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        {loading ? (
          <p className="text-center text-lg font-medium animate-pulse font-outfit">
            Loading blogs...
          </p>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-500">
            No blog posts yet.
          </p>
        ) : (
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4">
            {posts.map((post, index) => (
              <BlogCard
                key={post.id || index}
                post={post}
                color={colors[index % colors.length]}
              />
            ))}
          </div>
        )}

      </main>

      <Footer />
    </>
  );
}
