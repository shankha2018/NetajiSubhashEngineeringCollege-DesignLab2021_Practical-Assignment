import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2  from '../images/feature_3.png';
import featureimage3  from '../images/feature_4.png';
function Feature() {
    return (
        <div id ='features'>
            <div className='a-container'>
                <FeatureBox image ={featureimage} title ='Cleaning Service' />
                <FeatureBox image ={featureimage1} title ='Pest Control' />
                <FeatureBox image ={featureimage2} title ='Courier' />
                <FeatureBox image ={featureimage3} title ='Relocation' />
            </div>
        </div>
        
    )
}
export default Feature;