
import Bookmark from '../Bookmark/Bookmark';
import PropTypes from 'prop-types';


const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks)
    
    return (
        <div className="w-1/3 bg-gray-300 p-6 mt-3 rounded-md">
            <p className="text-2xl font-bold">Bookmarks Blogs: {bookmarks.length}</p>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark = {bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;