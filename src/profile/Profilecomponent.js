import React from 'react'
import Picture from './photo.png';
import ChildComponent from "./childComponent";
function Profilecomponent() {
    const handleName=()=>{
        alert("adf")
    }        

    return (
        <div className="profilecomponent">
         
         <ChildComponent
         fullName="Adam Ben Slama"
         bio="etc etc etc"
         profession="etudiant"
         handleName={handleName}
         >
              <img key={Picture.id} alt="erreur" src={Picture.src}/>

         </ChildComponent>
                        
        </div>
    )
}

export default Profilecomponent;
