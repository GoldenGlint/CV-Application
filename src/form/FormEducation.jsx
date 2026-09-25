import {InputArrayField} from "../inputs/InputArrayField";
import {InputField} from "../inputs/InputField";
import {useState} from 'react'
import React from "react";  

export function FormEducation({setPerson, education}){
  const [openEducationId, setOpenEducationId] = useState(null);
  
  function addEducation(){
    
    setPerson((prevPerson) => ({
      ...prevPerson,
      education:[
        ...prevPerson.education,
        {
          
          id: crypto.randomUUID(),
          school: "",
          degree: "",
          eduStartDate: "",
          eduEndDate: "",
          eduLocation: ""
          
        }
      ]
    }))
  }

  function removeEducation(id){
    setPerson((prevPerson)=>{
      const newEdu=prevPerson.education.filter(
        (edu) => {
          return edu.id!==id;
        })
      return{
        ...prevPerson,
        education: newEdu
      }
    })
  }
  
  return(
    <div className="formEducation">
       <h1 className="formEducationHeader">Education</h1>
     { education.map((edu) => (
      <div className="educationFormItem" key={edu.id}>
        <button
            onClick={() => {
              setOpenEducationId(
                openEducationId === edu.id ? null : edu.id
              );
            }}
          >
            {edu.school || "Example Education"}
          </button>
        {openEducationId === edu.id && (
        <div className="educationFields">
        <InputArrayField className="inputField" name="School" msg="School" fieldType="text" section="education" field="school" setPerson={setPerson} id={edu.id} value={edu.school}/>
        <InputArrayField className="inputField" name="Degree" msg="Degree" fieldType="text" section="education" field="degree" setPerson={setPerson} id={edu.id} value={edu.degree}/>
        <InputArrayField className="inputField" name="Start Date" msg="Start Date" fieldType="text" section="education" field="eduStartDate" setPerson={setPerson} id={edu.id} value={edu.eduStartDate}/>
        <InputArrayField className="inputField" name="End Date" msg="End Date" fieldType="text" section="education" field="eduEndDate" setPerson={setPerson} id={edu.id} value={edu.eduEndDate}/>
        <InputArrayField className="inputField" name="Location" msg="Location" fieldType="text" section="education" field="eduLocation" setPerson={setPerson} id={edu.id} value={edu.eduLocation}/>
        <button className="formDeleteEducationButton" onClick={() => removeEducation(edu.id)}>Delete Button</button>
        </div>)}
      </div>

      ))}

      <button className="formAddEducationButton" onClick={addEducation}>Add Education</button>
      
    </div>
  )
}