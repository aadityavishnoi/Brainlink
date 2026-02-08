import { useParams } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { useEffect, useState } from "react";

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/posts/${slug}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setLoading(false);

        // SEO Meta Handling
        if (data?.meta_title)
          document.title = data.meta_title;

        if (data?.meta_description) {
          let meta = document.querySelector("meta[name='description']");
          if (!meta) {
            meta = document.createElement("meta");
            meta.name = "description";
            document.head.appendChild(meta);
          }
          meta.content = data.meta_description;
        }
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">

        {loading ? (
          <p className="text-center text-lg animate-pulse">
            Loading article...
          </p>
        ) : !post ? (
          <p className="text-center text-gray-500">
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
            <h1 className="text-4xl font-bold mb-4">
              {post.title}
            </h1>

            {/* Date */}
            <p className="text-gray-500 mb-6 text-sm">
              {new Date(post.created_at).toLocaleDateString()}
            </p>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-lg text-gray-700 mb-8 font-medium">
                {post.excerpt}
              </p>
            )}

            {/* Content */}
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Keywords */}
            {post.keywords?.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2">
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
