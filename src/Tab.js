import React from 'react';
import './Tab.css';
import './App.css';

function Tabs(props){
    console.log("Alt = " + props.isExtended)
    /*console.log("Height: " + props.sty['height'])*/
    return(
        <>
            <p>Height:{props.height['height']}</p>
            <div className={"tabContent"} style={props.height}>
                {
                    props.content.map(item => (
                        <li className="tabListItem">{item.title} <a href={item.button.href}
                                                                    style={{right:0, justifyContent:"space-between", position:"absolute"}}
                                                                    className="tabButton">
                            {item.button.title}</a></li>
                    ))
                }
            </div>
        </>

    )
}

class Tab extends React.Component{
    constructor(props){
        super(props);
        this.state = {isExtended: false, sty:{height: 0 + 'px'}}
        console.log("Console Test: " + this.state.sty['height'])
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState(state =>({
            isExtended: !state.isExtended
        }));
        this.setState(state =>({
            /*height: (state.height === 'auto !important') ? '0px' : 'auto !important'*/
            sty : (state.sty['height'] === 0 + 'px') ? {height: 'auto !important'} : {height: '0px'}
        }))
        console.log(this.state.isExtended)
        console.log("height: " + this.state.sty['height'])
    }

    render(){
        return(
            <div className="tab">
                <div onClick={this.handleToggleClick} className="tabHeader">
                    <img src={this.props.src} alt={this.props.alt} style={{width: 50, marginLeft: 20}}/>
                    <h3 className="tabHeaderTitle">{this.props.title}</h3>
                </div>
                <Tabs content={this.props.content} isExtended={this.state.isExtended} height={this.state.sty}/>
            </div>
        )
    }
}

export default Tab