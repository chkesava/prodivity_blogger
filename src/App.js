import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPost from './components/BlogPost';
import AddEditPost from './components/AddEditPost';
import ButtonAppBar from './components/navbar';  // Import the ButtonAppBar component

const App = () => {
    return (
        <>
            <Router>
                <ButtonAppBar />  {/* Include ButtonAppBar component here */}
                <Routes>
                    <Route exact path="/" element={<BlogPostList />} />
                    <Route path="/post/:id" element={<BlogPost />} />
                    <Route path="/add" element={<AddEditPost />} />
                    <Route path="/edit/:id" element={<AddEditPost />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
