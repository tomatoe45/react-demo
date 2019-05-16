import React from 'react';

import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newslist';
import VideosList from '../widgets/VideosList/videoslist';

const Home = () => {
    return (
        <div>
            {/* if want another feature just duplicate and rename whatever name want */}
            <NewsSlider
                type="featured"
                start = {0}
                amount= {3}
                settings = {{
                    dots: false
                }}
            />
            <NewsList
                type="card"
                loadMore={true}
                start={3}
                amount={3}
            />
            <VideosList
                type="card"
                title={true}
                loadMore = {false}
                start ={0}
                amount={3}
            />
        </div>
    )
}

export default Home;