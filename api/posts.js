import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  try {
    const { slug } = req.query;

    // 👉 Single post
    if (slug) {
      const result = await sql`
        SELECT *
        FROM posts
        WHERE slug = ${slug}
        LIMIT 1
      `;

      if (!result.length) {
        return res.status(404).json({
          message: "Post not found"
        });
      }

      return res.status(200).json(result[0]);
    }

    // 👉 All published posts list
    const posts = await sql`
      SELECT id, title, slug, excerpt, created_at
      FROM posts
      WHERE status='published'
      ORDER BY created_at DESC
    `;

    return res.status(200).json(posts);

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Server error"
    });
  }
}
