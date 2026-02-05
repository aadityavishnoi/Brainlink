import Header from "../../common/Header";
import Footer from "../../common/Footer";
import BlogCard from "../../components/blog/BlogCard";

const posts = [
  {
    title: "Website Cost in India",
    slug: "website-cost-india",
    excerpt: "Understand website development cost."
  },
  {
    title: "Why Every Business Needs Website",
    slug: "business-website",
    excerpt: "Website importance explained."
  }
];

export default function BlogList() {
  return (
    <>
      <Header />

      <div className="p-10 grid md:grid-cols-2 gap-6">
        {posts.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <Footer />
    </>
  );
}
