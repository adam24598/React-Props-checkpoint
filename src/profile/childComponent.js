import React from 'react'
import PropTypes from 'prop-types';

function childComponent(props) {
    const {
        fullName,
        profession,
        bio,
        handleName,
        handleAlert
          } = props;

    return (
        <div className="childComponent">
            {handleName() }
            <h1>{fullName}</h1>
            <h2>{profession}</h2>
            <h3>{bio}</h3>
            <button onClick={() => handleAlert()}>Click Here</button>
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
