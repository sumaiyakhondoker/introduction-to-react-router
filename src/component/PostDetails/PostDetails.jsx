import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate()

    const {postId} = useParams()
    console.log(postId);

    const {id, title, body} = post

    const handleGoBackBtn = ()=>{
        // navigate('/posts')
        navigate(-1)
    }
    return (
        <div>
            <h2>Post details about: {id}</h2>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBackBtn}>Go back</button>
        </div>
    );
};

export default PostDetails;