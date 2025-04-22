// blogController.js
const db = require('../config/db'); // Import the DB connection

// Function to upload a new blog
const uploadBlog = async (req, res) => {
    try {
        const { topic, content, author_name, services, subservices } = req.body; // Destructure all at once
        const image_path = req.file ? req.file.path : null; // Handle optional file upload

        const query = `
            INSERT INTO blogs (topic, content, author_name, image_path, services, subservices)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const [results] = await db.promise().execute(query, [topic, content, author_name, image_path, services, subservices]);

        res.status(201).json({ message: 'Blog uploaded successfully', blogId: results.insertId });
    } catch (err) {
        console.error('Error uploading blog:', err);
        res.status(500).json({ message: 'Error uploading blog' });
    }
};


// Function to get all blogs
const getBlogs = async (req, res) => {
    try {
        const query = 'SELECT * FROM blogs ORDER BY created_at DESC';
        const [results] = await db.promise().query(query);

        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching blogs:', err);
        res.status(500).json({ message: 'Error fetching blogs' });
    }
};


// Get a single blog by ID
const getBlogById = async (req, res) => {
    const { blogId } = req.params;
    try {
        const query = 'SELECT * FROM blogs WHERE id = ?';
        const [result] = await db.promise().query(query, [blogId]);

        if (result.length === 0) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Adjusting image path if it exists
        if (result[0].image_path) {
            result[0].image_path = `${process.env.BASE_URL || 'https://finprimeconsulting.com'}/${result[0].image_path}`;
        }

        res.status(200).json(result[0]);
    } catch (err) {
        console.error('Error fetching blog by ID:', err);
        res.status(500).json({ message: 'Error fetching blog', error: err.message });
    }
};

// Function to update an existing blog
const updateBlog = async (req, res) => {
    const { blogId } = req.params;
    const { topic, content, author_name, services, subservices } = req.body;
    let image_path = req.file ? req.file.path : null; // Optional image field

    try {
        // If no new image is uploaded, don't overwrite the existing image_path
        if (!image_path) {
            const [existingBlog] = await db.promise().query('SELECT image_path FROM blogs WHERE id = ?', [blogId]);
            if (existingBlog.length > 0) {
                image_path = existingBlog[0].image_path; // Retain existing image
            } else {
                return res.status(404).json({ message: 'Blog not found' });
            }
        }

        const query = `
            UPDATE blogs
            SET topic = ?, content = ?, author_name = ?, services = ?, subservices = ?, image_path = ?
            WHERE id = ?
        `;

        const [result] = await db.promise().execute(query, [topic, content, author_name, services, subservices, image_path, blogId]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json({ message: 'Blog updated successfully' });
    } catch (err) {
        console.error('Error updating blog:', err);
        res.status(500).json({ message: 'Error updating blog', error: err.message });
    }
};



// Function to delete a blog
const deleteBlog = async (req, res) => {
    const { blogId } = req.params;

    try {
        const query = 'DELETE FROM blogs WHERE id = ?';
        const [result] = await db.promise().execute(query, [blogId]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (err) {
        console.error('Error deleting blog:', err);
        res.status(500).json({ message: 'Error deleting blog' });
    }
};

module.exports = { uploadBlog, getBlogs, getBlogById, updateBlog, deleteBlog };
