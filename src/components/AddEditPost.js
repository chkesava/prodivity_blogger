// src/components/AddEditPost.js

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createPost, getPostById, updatePost } from '../utils/mockAPI';

import './addPost.css'



const AddEditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({ title: '', author: '', content: '' });

    useEffect(() => {
        if (id) {
            const existingPost = getPostById(id);
            if (existingPost) {
                setPost(existingPost);
            }
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            updatePost(id, post);
        } else {
            createPost(post);
        }
        navigate('/');
    };

    return (
        <div className='body'>
            <div className="center">
        <h1>Add/Edit Blog</h1>
        <form  onSubmit={handleSubmit}>
          <div className="inputbox">
          <input
                type="text"
                name="title"
                value={post.title}
                onChange={handleChange}
                placeholder="Title"
                required
            />
          </div>
          <div className="inputbox">
          <input
                type="text"
                name="author"
                value={post.author}
                onChange={handleChange}
                placeholder="Author"
                required
            />
          </div>
          <div className='inputbox'>
          <textarea
                name="content"
                value={post.content}
                onChange={handleChange}
                placeholder="Content"
                required
            />
          </div>
          <div className="inputbox">
          <input type="submit" value={id ? 'Update Post' : 'Add Post'} />
          </div>
        </form>
      </div>
        </div>
        
      
    );
};

export default AddEditPost;
