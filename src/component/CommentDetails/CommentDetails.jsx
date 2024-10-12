// import PropTypes from 'prop-types';

import { useLoaderData } from "react-router-dom";

const CommentDetails = () => {
    const comment = useLoaderData()
    const {id, name, email, body} = comment
    return (
        <div>
            <h3>Comment Id: {id} </h3>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

// CommentDetails.propTypes = {
    
// };

export default CommentDetails;