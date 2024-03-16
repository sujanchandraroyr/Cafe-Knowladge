import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";

const Blogs = ({handleBookMark}) => {
    const [blogs, setblogs]= useState([])
    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setblogs(data))
    }, [])
    return (
        <div className="2/3">
            {
                blogs.map((blog) => <Blog key={blog.id} blog = {blog} handleBookMark = {handleBookMark}></Blog>)
            }
        </div>
    );
};

export default Blogs;