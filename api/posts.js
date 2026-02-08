import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  try {
    const { slug } = req.query;

    // 👉 Single post
    if (slug) {
      const post = await sql`
        SELECT *
        FROM posts
        WHERE slug = ${slug}
        AND status = 'published'
      `;

      if (!post.length) {
        return res.status(404).json({ message: "Post Not Found!" });
      }

      return res.status(200).json(post[0]);
    }

    // 👉 All posts
    const posts = await sql`
      SELECT id, title, slug, excerpt, created_at
      FROM posts
      WHERE status = 'published'
      ORDER BY created_at DESC
    `;

    res.status(200).json(posts);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
