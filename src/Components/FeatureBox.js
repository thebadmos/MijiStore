import React from 'react'

function FeatureBox(props) {
    return (
        <div className="a-box">
        <div className="a-b-img">
            <img src={props.image} alt="im"/>
            
        </div>
        <div className="s-b-text">
            <h4> {props.title}</h4>
           
        </div>
    </div>
    )
}

export default FeatureBox
