import React from 'react';

import NewsItem from './new_list_item';

const NewsList = (props) => {

    const items = props.news.map((item)=>{
        return (
           <NewsItem key={item.id} item={item}/>
        )
    });
    return (
        <div>
            {props.children}
            <h1>{items}</h1>
        </div>
    )
}

export default NewsList;