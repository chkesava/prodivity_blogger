// src/utils/mockAPI.js

// Generate a unique ID for new posts
const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

// Default blog posts
const defaultPosts = [
    {
        id: generateId(),
        title: "You Are Under Construction",
        author: "Author 1",
        summary: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        content: "Content of the first blog post.",
        createdAt: new Date().toISOString()
    },
    {
        id: generateId(),
        title: "qui est esse",
        author: "Author 2",
        summary: "Summary of the second blog post.",
        content: "Content of the second blog post.",
        createdAt: new Date().toISOString()
    },
    // Add 8 more blog posts here...
    {
        id: generateId(),
        title: "Third Blog Post",
        author: "Author 3",
        summary: "Summary of the third blog post.",
        content: "Content of the third blog post.",
        createdAt: new Date().toISOString()
    },
    {
        id: generateId(),
        title: "Fourth Blog Post",
        author: "Author 4",
        summary: "Summary of the fourth blog post.",
        content: "Content of the fourth blog post.",
        createdAt: new Date().toISOString()
    },
    {
        id: generateId(),
        title: "Fifth Blog Post",
        author: "Author 5",
        summary: "Summary of the fifth blog post.",
        content: "Content of the fifth blog post.",
        createdAt: new Date().toISOString()
    },
    {
        id: generateId(),
        title: "Sixth Blog Post",
        author: "Author 6",
        summary: "Summary of the sixth blog post.",
        content: "Content of the sixth blog post.",
        createdAt: new Date().toISOString()
    },
    {
        id: generateId(),
        title: "Seventh Blog Post",
        author: "Author 7",
        summary: "Summary of the seventh blog post.",
        content: "Content of the seventh blog post.",
        createdAt: new Date().toISOString()
    },
    {
        id: generateId(),
        title: "Eighth Blog Post",
        author: "Author 8",
        summary: "Summary of the eighth blog post.",
        content: "Content of the eighth blog post.",
        createdAt: new Date().toISOString()
    },
    {
        id: generateId(),
        title: "Ninth Blog Post",
        author: "Author 9",
        summary: "Summary of the ninth blog post.",
        content: "Content of the ninth blog post.",
        createdAt: new Date().toISOString()
    },
    {
        id: generateId(),
        title: "Tenth Blog Post",
        author: "Author 10",
        summary: "Summary of the tenth blog post.",
        content: "Content of the tenth blog post.",
        createdAt: new Date().toISOString()
    }
];

// Initialize default blog posts in localStorage if empty
const initializeDefaultPosts = () => {
    const posts = localStorage.getItem('blogPosts');
    if (!posts) {
        localStorage.setItem('blogPosts', JSON.stringify(defaultPosts));
    }
};

// Call the initialize function when the script is loaded
initializeDefaultPosts();

// Get all blog posts from localStorage
export const getPosts = () => {
    const posts = localStorage.getItem('blogPosts');
    return posts ? JSON.parse(posts) : [];
};

// Save all blog posts to localStorage
const savePosts = (posts) => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
};

// Create a new blog post
export const createPost = (post) => {
    const posts = getPosts();
    const newPost = { ...post, id: generateId(), createdAt: new Date().toISOString() };
    posts.push(newPost);
    savePosts(posts);
    return newPost;
};

// Get a specific blog post by ID
export const getPostById = (id) => {
    const posts = getPosts();
    return posts.find((post) => post.id === id);
};

// Update an existing blog post by ID
export const updatePost = (id, updatedPost) => {
    const posts = getPosts();
    const postIndex = posts.findIndex((post) => post.id === id);
    if (postIndex !== -1) {
        posts[postIndex] = { ...posts[postIndex], ...updatedPost, updatedAt: new Date().toISOString() };
        savePosts(posts);
        return posts[postIndex];
    }
    return null;
};

// Delete a blog post by ID
export const deletePost = (id) => {
    const posts = getPosts();
    const updatedPosts = posts.filter((post) => post.id !== id);
    savePosts(updatedPosts);
};
