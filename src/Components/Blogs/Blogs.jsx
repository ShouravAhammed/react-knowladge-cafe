import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'


const Blogs = ({handleBookmarks, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:col-span-2 col-span-1 space-y-5 md:space-y-12">
            {/* <h3>Blogs: {blogs.length}</h3> */}
            {
                blogs.map(blog => <Blog 
                key={blog.id}
                blog={blog}
                handleBookmarks={handleBookmarks}
                handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func
}

export default Blogs;