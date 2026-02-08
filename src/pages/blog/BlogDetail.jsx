import { useParams } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { useEffect, useState } from "react";

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/posts/${slug}`, {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY
          }
        });

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();

        // API returning array -> take first item
        const postData = Array.isArray(data) ? data[0] : data;

        setPost(postData || null);

        // SEO meta handling
        if (postData?.meta_title) {
          document.title = postData.meta_title;
        } else if (postData?.title) {
          document.title = postData.title;
        }

        if (postData?.meta_description) {
          let meta = document.querySelector(
            "meta[name='description']"
          );

          if (!meta) {
            meta = document.createElement("meta");
            meta.name = "description";
            document.head.appendChild(meta);
          }

          meta.content = postData.meta_description;
        }

      } catch (err) {
        console.error("Blog fetch error:", err);
        setPost(null);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">

        {loading ? (
          <p className="text-center text-lg animate-pulse font-outfit">
            Loading article...
          </p>
        ) : !post ? (
          <p className="text-center text-gray-500 font-outfit">
            Blog not found.
          </p>
        ) : (
          <article>

            {/* Featured Image */}
            {post.featured_image && (
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full rounded-xl mb-8 object-cover max-h-[450px]"
              />
            )}

            {/* Title */}
            <h1 className="text-4xl font-bold mb-4 font-outfit">
              {post.title}
            </h1>

            {/* Date */}
            {post.created_at && (
              <p className="text-gray-500 mb-6 text-sm font-outfit">
                {new Date(post.created_at).toLocaleDateString()}
              </p>
            )}

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-lg text-gray-700 mb-8 font-medium font-outfit">
                {post.excerpt}
              </p>
            )}

            {/* Content (safe fallback if missing) */}
            {post.content ? (
              <div
                className="prose max-w-none font-outfit"
                dangerouslySetInnerHTML={{
                  __html: post.content,
                }}
              />
            ) : (
              <p>No content added yet.</p>
            )}

            {/* Keywords */}
            {post.keywords?.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2 font-outfit">
                {post.keywords.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

          </article>
        )}

      </main>

      <Footer />
    </>
  );
}
