

const Blog = ({blog}) => {
    console.log(blog)
    const {id, cover} = blog;
    return (
        <div>
            <h2>Id: {id}</h2>
            <img src={cover} alt="" />
        </div>
    );
};

export default Blog;