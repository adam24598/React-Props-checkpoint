import React from 'react'

function childComponent(props) {
    const {
        fullName,
        profession,
        bio,
        handleName 
          } = props;

    return (
        <div className="childComponent">
            {props.handleName() }
            <h1>props.fullName</h1>
            <h2>props.profession</h2>
            <h3>props.bio</h3>
            
        </div>
    )
}
ChildComponent.defaultProps = {
    fullName: "no name",
    bio: "no bio",
    profession:"no profession"
  };
  ChildComponent.propTypes = {
     fullName:propTypes.string,
     profession:propTypes.string,
     bio:propTypes.string,

};
export default childComponent
