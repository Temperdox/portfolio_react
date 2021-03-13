import React, {useState} from 'react';
import './Tab.css';
import './App.css';

function Tab(props){
    const [showMessage, setShowMessage] = useState(false);
    let name = ''
    if(showMessage){
        name = '.extended'
    }else{name=''}
    return(
        <>
            <div className="tab">
                <div onClick={() => setShowMessage(!showMessage)} className={"tabHeader" + name}>
                    <img src={props.src} alt={props.alt} style={{width: 50, marginLeft: 20}}/>
                    <h3 className="tabHeaderTitle">{props.title}</h3>
                </div>
            </div>
            <div className={'tabContent' + name}>
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

export default Tab