import React, { Component } from 'react';
import './videoslist.css';
import axios from 'axios';

import { URL } from '../../../config';
import Button from '../Buttons/buttons';

class VideosList extends Component {

    state = {
        teams:[],
        videos:[],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount,
    }

    loadMore = () => {

    }

    renderButton = () => {
        console.log(this.props.loadmore)
        return this.props.loadmore ? 
        <Button 
        type="loadmore"
        loadmore={this.loadMore}
        cta="Load More Videos"
        />
        : 
        <Button type="LinkTo" cta="More videos" LinkTo="/videos" />;
    }

    renderTitle = () => {
        return this.props.title ? 
        <h3><strong>NBA</strong> Videos</h3>
        : null;
    }


    render()
    {
        return(
            <div className="videoList_wrapper">
                { this.renderTitle(this.props.title) }
                { this.renderButton() }
            </div>
        )
    }

}

export default VideosList;