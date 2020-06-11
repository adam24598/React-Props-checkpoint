import React from 'react'
import Picture from './profile/photo.png';
import ChildComponent from "./profile/childComponent";
function Profilecomponent() {
    const handleName=()=>{
        alert(this.props.fullName)
    }        

    return (
        <div className="profilecomponent">
         <ChildComponent
         fullName="Adam Ben Slama"
         bio="etc etc etc"
         profession="etudiant"
         ></ChildComponent>
                         <Picture key={picture.id} src={picture.src}>
</Picture>
        </div>
    )
}

export default Profilecomponent;
