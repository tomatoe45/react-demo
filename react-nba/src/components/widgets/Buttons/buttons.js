import React from 'react';
import { Link } from 'react-router-dom';

import './button.css';

const Button = (props) => {
    let template = null;
    switch(props.type)
    {
        case 'loadmore':
            template = (
                <div className="blue_btn"
                    onClick={props.loadMore}

                >
                    {props.cta} 
                </div>
            );
            break
        case 'LinkTo':
            template = (
                <Link to={props.LinkTo} className="blue_btn">{props.cta}</Link>
            )
            break
        default:
            template =null;
    }

    return template;
}

export default Button;