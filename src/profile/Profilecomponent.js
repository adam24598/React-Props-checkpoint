import React from 'react'
import Picture from './photo.png';
import ChildComponent from "./childComponent";
function Profilecomponent() {
    const handleName=()=>{
        alert(this.props.fullName)
    }        

    return (
        <div className="profilecomponent">
         <handleName/>
         <ChildComponent
         fullName="Adam Ben Slama"
         bio="etc etc etc"
         profession="etudiant"
         >
              <img key={Picture.id} alt="erreur" src={Picture.src}/>

         </ChildComponent>
                        
        </div>
    )
}

export default Profilecomponent;
