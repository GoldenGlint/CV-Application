import {InputArrayField} from "../inputs/InputArrayField";
import {InputField} from "../inputs/InputField";
import { useState } from 'react'

export function FormExperience({setPerson, experience}){

  const [openExperienceID, setExperienceID] = useState(null);

  function addExperience(){
    setPerson((prevPerson) => ({
      ...prevPerson,
      experience:[
        ...prevPerson.experience,
        {
          id: crypto.randomUUID(),
          companyName: "",
          positionTitle: "",
          expStartDate: "",
          expEndDate: "",
          expLocation: "",
          expDescription: ""
        }
      ]
    }))
  }

  function removeExperience(id){
    setPerson((prevPerson)=>{
      const newExp=prevPerson.experience.filter(
        (edu) => {
          return edu.id!==id;
        })
      return{
        ...prevPerson,
        experience: newExp
      }
    })
  }

  return(
    <div className="formExperience">
      <h1 className="formExperienceHeader">Experience</h1>
     { experience.map((exp) => (
      <div className="educationFormExperience" key={exp.id}>
        <button onClick={()=>{
          setExperienceID(openExperienceID===exp.id ? null : exp.id)
        }}>
        {exp.companyName||"Placeholder Company"}
        </button>
        {(openExperienceID===exp.id &&
        <div className="experienceFields">
        <InputArrayField className="inputField" name="Company Name" msg="Company Name" fieldType="text" section="experience" field="companyName" setPerson={setPerson} id={exp.id} value={exp.companyName}/>
        <InputArrayField className="inputField" name="Position Title" msg="Position Title" fieldType="text" section="experience" field="positionTitle" setPerson={setPerson} id={exp.id} value={exp.positionTitle}/>
        <InputArrayField className="inputField" name="Start Date" msg="Start Date" fieldType="text" section="experience" field="expStartDate" setPerson={setPerson} id={exp.id} value={exp.expStartDate}/>
        <InputArrayField className="inputField" name="End Date" msg="End Date" fieldType="text" section="experience" field="expEndDate" setPerson={setPerson} id={exp.id} value={exp.expEndDate}/>
        <InputArrayField className="inputField" name="Location" msg="Location" fieldType="text" section="experience" field="expLocation" setPerson={setPerson} id={exp.id} value={exp.expLocation}/>
        <InputArrayField className="inputField" name="Description" msg="Description" fieldType="text" section="experience" field="expDescription" setPerson={setPerson} id={exp.id} value={exp.expDescription}/>
        <button className="formDeleteExperienceButton" onClick={() => removeExperience(exp.id)}>Delete Button</button>
        </div>
        )}
      </div>

      ))}
      <button className="formAddExperienceButton" onClick={addExperience}>Add Experience</button>
      
      
    </div>
  )
}