import React from 'react';

import { Link } from 'react-router-dom';

const Post = () => {

    const ids = [
        {id: '1', name:'Post 1'},
        {id: '2', name:'Post 2'},
        {id: '3', name:'Post 3'}
    ]

    const list = ids.map( item => {
        return (
            <span key={item.id}>
                <Link to={{pathname:`/post/${item.id}`}}>{item.name}</Link><br/>
            </span>
        )
    });

    return(
        <div>
            {/* <Link to="/post/1">Post 1</Link><br/>
            <Link to="/post/2">Post 2</Link><br/>
            <Link to="/post/3">Post 3</Link> */}
            {list}
        </div>
    )

    // Same result
    // return ids.map(item => {
    //     return (
    //         <span key={item.id}>
    //             <Link to={item.id}>{item.name}</Link><br/>
    //         </span>
    //     )
    // })
    // return [
    //     <div key="1">Hello! </div>,
    //     <div key="2">I am </div>,
    //     <div key="3">react app</div>
    // ]
}

export default Post;