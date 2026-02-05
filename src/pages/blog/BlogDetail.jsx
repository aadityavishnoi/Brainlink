import { useParams } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

export default function BlogDetail() {
  const { slug } = useParams();

  return (
    <>
      <Header />

      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">
          Blog Title for: {slug}
        </h1>

        <p>
          Blog content will come from database later.
        </p>
      </div>

      <Footer />
    </>
  );
}
