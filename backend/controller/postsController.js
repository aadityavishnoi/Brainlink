import { sql } from "../db/index.js";

export const getPosts = async (req, res) => {
try{
const posts = await sql`
SELECT id, title, slug, excerpt, created_at FROM posts WHERE status = 'published' ORDER BY created_at DESC
`;
res.json(posts);
} catch(err) {
res.status(500).json({ error: err.message });
}
};

// Get Single Post

export const getSinglePost = async(req, res) => {
    try {
        const post = await sql`SELECT * FROM posts WHERE slug = ${slug} AND status = 'published`;
        if(!post.length){
            return res.status(404).json({message: "Post Not Found!"})
        }
        res.json(post[0]);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
};