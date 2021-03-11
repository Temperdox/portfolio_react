import React from 'react';
import './App.css';

function Tabs(props){
    console.log("Alt = " + props.isExtended)
    if(!props.isExtended) {
        return null;
    }
    return(
        <>
            <div>
                {
                    props.content.map(item => (
                        <li>{item}</li>
                    ))
                }
            </div>
        </>
    )
}

class Tab extends React.Component{
    constructor(props){
        super(props);
        this.state = {isExtended: false}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState(state =>({
            isExtended: !state.isExtended

        }));
        console.log(this.state.isExtended)
    }

    render(){
        return(
            <>
                <div onClick={this.handleToggleClick} >
                    <img src={this.props.src} alt={this.props.alt}/>
                    <h3>{this.props.title}</h3>
                </div>
                <Tabs content={this.props.content} isExtended={this.state.isExtended}/>
            </>
        )
    }
}

export default Tab