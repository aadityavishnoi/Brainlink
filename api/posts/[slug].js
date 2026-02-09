import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {

  try {
    const { slug } = req.query;

    if (!slug) {
      return res.status(400).json({
        error: "Slug is required"
      });
    }

    const result = await sql`
      SELECT *
      FROM posts
      WHERE slug=${slug}
      AND status='published'
      LIMIT 1
    `;

    if (!result.length) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    res.status(200).json(result[0]);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Server error"
    });
  }
}
