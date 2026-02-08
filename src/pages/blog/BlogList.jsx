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
  const[posts, setPosts] = useState([]);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://brainlink.in/api/posts")
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
      <div className="flex flex-col items-center p-6 font-outfit">
        <h1 className="text-2xl font-semibold">Brainlink Blogs</h1>
      </div>
      {loading ? (
        <p className="text-center text-lg font-outfit">Loading Blogs. Please Wait!</p>
      ) : (
      <div className="p-10 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-6">
        {posts.map((post, index) => (
            <BlogCard
            key={index}
            post={post}
            color={colors[index % colors.length]}
            />
          ))}
      </div>
      )}
      <Footer />
    </>
  );
}
