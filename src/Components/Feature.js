import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage from '../assets/window-shopping.svg'
import featureimage1 from '../assets/grocrey.svg'
import featureimage2 from '../assets/electronics.svg'
import featureimage3 from '../assets/unique.svg'

function Feature() {
    return (
        <div id="feat">
        <div id="features">
        <div className="a-container">
        <FeatureBox image= {featureimage}  title="Fashion" />
        <FeatureBox image= {featureimage2} title="Electronics"/>
        <FeatureBox image= {featureimage1} title="Groceries"/>
        <FeatureBox image= {featureimage3} title="Home Appliances" />
      
    </div>
    </div>
    </div>
    )
}

export default Feature
