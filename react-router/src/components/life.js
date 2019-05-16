import React, { PureComponent } from 'react';


class Life extends PureComponent {

    // 1: Get default props
    // 2: Set default state
    state = {
        title: 'Life Cycle'
    }
    

    // // 3: Before render (execute first)
    // componentWillMount()
    // {
    //     console.log("3: Before Render");
    // }
    // // 4: Render jxs

    // componentWillUpdate()
    // {
    //     console.log('before update');
    // }

    // componentDidUpdate()
    // {
    //     console.log('after update');
    // }
   
    // shouldComponentUpdate(nextProps, nextState)
    // {
    //     //console.log(this.state.title);
    //     //console.log(nextState.title);
    //     //console.log(nextProps);
    //     if(nextState.title === this.state.title)
    //     {
    //         return false;
    //     }
    //     return true;
    // }

    // componentWillReceiveProps()
    // {
    //     console.log('Before receive props');
    // }

    // componentWillUnmount()
    // {
    //     console.log("COMPONENT WILL UNMOUNT");
    // }

    
    // // 5: after jxs (execute last)
    // componentDidMount()
    // {
    //     console.log("5: After Render");
    //     document.querySelector('h3').style.color = 'red';
    // }

    render()
    {
        console.log('RENDERED');
        return(
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={() => {this.setState({title: 'Something else'})}}>
                    CLICK TO CHANGE
                </div>
            </div>
        )
    }

}

export default Life;