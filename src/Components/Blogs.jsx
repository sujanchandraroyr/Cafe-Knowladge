import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookMark}) => {
    const [blogs, setBlogs]= useState([])
    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="2/3">
            {
                blogs.map((blog) => <Blog key={blog.id} blog = {blog} handleBookMark = {handleBookMark}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    
    handleBookMark: PropTypes.func
}
export default Blogs;