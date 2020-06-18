import React from 'react'
import PropTypes from 'prop-types';

function childComponent(props) {
    const {
        fullName,
        profession,
        bio,
        
        
    } = props;
    const handleName=()=>{
        alert(fullName);
    }        

    return (
        <div className="childComponent">
            
            <h1>{fullName}</h1>
            <h2>{profession}</h2>
            <h3>{bio}</h3>
            <button onClick={handleName}>Click Here</button>
        </div>
    )
}
childComponent.defaultProps = {
    fullName: "no name",
    bio: "no bio",
    profession:"no profession"
  };
  childComponent.propTypes = {
     fullName:PropTypes.string,
     profession:PropTypes.string,
     bio:PropTypes.string,

};
export default childComponent
