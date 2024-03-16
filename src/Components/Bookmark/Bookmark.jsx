
import PropTypes from 'prop-types';
const Bookmark = ({ bookmark }) => {
    console.log(bookmark)
    const {title} = bookmark;
    
    return (
        <div className=''>
            <h2 className='text-lg font-semibold bg-slate-200 my-3 p-5 rounded-lg'>{title}</h2>
            
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;