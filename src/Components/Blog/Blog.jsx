
import { FaRegBookmark } from "react-icons/fa";
import PropTypes from 'prop-types'

const Blog = ({blog, handleBookmarks, handleMarkAsRead}) => {

    const {id, cover, title, author, author_img, posted_date, reading_time, hashtags} = blog

    return (
        <div className="space-y-3 border-b-2 border-[#1111111A] pb-10">
            <img className="w-full rounded-xl" src={cover} alt="" />

            {/* author */}
            <div className='flex justify-between items-center'>
                <div className='flex gap-7 items-center'>
                    <div>
                    <img className="w-16" src={author_img} alt="" />
                    </div>
                    <div>
                        <h4 className='text-[#111111] font-bold text-2xl'>{author}</h4>
                        <p className='text-[#11111199] font-semibold text-base'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3'> 
                    <span className='text-[#11111199] font-medium text-xl'>{reading_time} min read</span>
                    <button onClick={() => handleBookmarks(blog)} className='text-xl text-[#11111199]'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            {/* title */}
            <h3 className='text-[#111111] font-bold text-[40px]'>{title}</h3>
            {/* hashtag */}
            <p className='space-x-3 text-[#11111199] font-medium text-xl'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button className="text-[#6047EC] font-semibold text-xl underline" onClick={() => handleMarkAsRead(id, reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    handleBookmarks: PropTypes.func,
    blog: PropTypes.object.isRequired
}


export default Blog;