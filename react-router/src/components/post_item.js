import React from 'react';

const PostItem = (props) => {

    console.log(props);
    return(
        <div>
            Post Details Id:  {props.match.params.id} : {props.match.params.username}
        </div>
    )
}

export default PostItem;