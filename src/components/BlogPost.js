// src/components/BlogPost.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../utils/mockAPI';
import styled from 'styled-components';
import './index.css'

const PostDetail = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px 0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background: linear-gradient(45deg, greenyellow, dodgerblue);
  font-family: "Sansita Swashed", cursive;
  min-height:100vh;
`;

const BlogPost = () => {
    const { id } = useParams();
    const post = getPostById(id);

    if (!post) return <div>Post not found</div>;

    return (
        <>
        
        <PostDetail>
        <img src='https://cdn.pixabay.com/photo/2014/08/27/08/11/blogging-428955_1280.jpg' alt='demo-image' className='blog-image'/>
            <h1>{post.title}</h1>
            <p>by {post.author}</p>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
            <p>{post.content}</p>
        </PostDetail>
        </>
    );
};

export default BlogPost;
