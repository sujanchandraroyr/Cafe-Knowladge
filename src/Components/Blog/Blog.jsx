import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';
const Blog = ({blog, handleBookMark}) => {
    const {id, cover, title, author, author_img, post_date, reading_time, hashtags} = blog
    return (
        <div className='border-b  space-y-6 my-3'>
            <img src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
                    <div>
                    <p className='text-2xl font-bold'>{author}</p>
                    <p><small>{post_date}</small></p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <span>{reading_time} min read</span>
                    <button onClick={handleBookMark} className="text-red-500 text-lg font-semibold"><CiBookmark /></button>
                </div>
            </div>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='mb-4'>
                {
                    hashtags.map((has, indx) => <span key = {indx}><a href="">{has}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;