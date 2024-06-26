// src/components/BlogPostList.js

import React, { useState, useEffect } from 'react';
import { getPosts, deletePost } from '../utils/mockAPI';
import { Link } from 'react-router-dom';
import './BlogPostList.css'; // Import the CSS file



const BlogPostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(getPosts());
    }, []);

    const handleDelete = (id) => {
        deletePost(id);
        setPosts(getPosts());
    };

    return (
        <div>
    {posts.length > 0 ? (
        <div className='body2'>
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>by {post.author}</p>
                    <p>{post.summary}</p>
                    <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                    <Link to={`/post/${post.id}`}>Read More</Link>
                    <br />
                    <Link to={`/edit/${post.id}`}>Edit</Link>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    ) : (
        <div className='body'>
            <p>No blogs available.</p>
            <Link to="/add">Add New Post</Link>
        </div>
    )}
</div>

    );
};

export default BlogPostList;
