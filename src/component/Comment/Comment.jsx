import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
const Comment = ({comment}) => {
    const {id,name, email} = comment
    const commentBoxStyle = {
        border: '2px solid pink',
        borderRadius: '15px',
        padding: '5px',

    }

    const btnStyle = {
        backgroundColor: 'pink',
        
    }
    return (
        <div style={commentBoxStyle}>
            <h4>{name}</h4>
            <p>{email}</p>
            <Link to={`/comment/${id}`}><button style={btnStyle}>Details</button></Link>
        </div>
    );
};

Comment.propTypes = {
    comment : PropTypes.object,
}

export default Comment;