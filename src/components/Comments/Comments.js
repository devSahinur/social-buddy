import React from 'react';

const Comments = (props) => {
    const {name, email} = props.comment;
    return (
        <div>
            <p>{name} : {email}</p>
        </div>
    );
};

export default Comments;