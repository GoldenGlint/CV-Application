import { useState } from 'react'
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function ResumeHeader({person}){
    return (
      <>
      <h1 className="resumeName">{person.personal.name||"Lebron James"}</h1>
      <div className="contact">
        <div className="emailContainer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
          <h3 className="resumeEmail">{person.personal.email||"abc@gmail.com"}</h3>
        </div>
        <div className="phoneContainer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
          <h3 className="resumePhone">{person.personal.phoneNumber||"123-456-7890"}</h3>
        </div>
        <div className="locationContainer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
          <h3 className="locationResume">{person.personal.address||"1234 Drive"}</h3>
        </div>
      </div>
      
      </>
    )
}

function ResumeEducation({education}){
  return (
    <>
      <h1 className="resumeEducationHeader">Education</h1>
      <div className="educationList">
        {education.map((edu)=>(

          <div className="educationItem" key={edu.id}>
            
            <div className="leftEducation">
              <h3 className="resumeEducationDate">{edu.eduStartDate || "08/2024"} - {edu.eduEndDate || "Present"}</h3>
              <h3 className="resumeUniversityLocation">{edu.eduLocation||"Harvard, CA"}</h3>
            </div>

            <div className="rightEducation">
              <h3 className="resumeUniversity">{edu.school||"Cool University"}</h3>
              <h3 className="resumeDegree">{edu.degree||"Bachelors in Computer Science"}</h3>
            </div>

           </div>

        ))}
      </div>
      
    </>
  )
}


function ResumeExperience({experience}){
  return(
    <>
      <h1 className="resumeExperienceHeader">Professional Experience</h1>
      <div className="experienceList">
        {experience.map((exp) => (
          <div key={exp.id} className="experienceItem">
            <div className="leftExperience">
              <h3 className="resumeExperienceDate">{exp.expStartDate || "08/2020"} - {exp.expEndDate || "present"}</h3>
              <h3 className="resumeExperienceLocation">{exp.expLocation||"New York City, US"}</h3>
            </div>
            <div className="rightExperience">
              <h3 className="resumeCompany">{exp.companyName||"Bank"}</h3>
              <h3 className="resumePosition">{exp.positionTitle||"AI Governance"}</h3>
              <h3 className="resumeDescription">{exp.expDescription||"Designed AI Workflows using PowerAutomate"}</h3>
            </div>
          </div>
        ))}
          

      </div>
    
    </>
  )
}


function Resume({person}){
  return(
    <div className="resumeGroup">
    <ResumeHeader person={person}/>
    <ResumeEducation education={person.education}/>
    <ResumeExperience experience={person.experience}/>
    </div>
  )

}

function Form({setPerson, education, experience}){
  return(
    <div className="formGroup">
    <FormPersonal setPerson={setPerson}/>
    <FormEducation setPerson={setPerson} education={education}/>
    <FormExperience setPerson={setPerson} experience={experience}/>
    </div>
  )
}


function InputField({name="Default Label", msg="enter a value", fieldType="text", section, field, setPerson}){
  return (
    <>
      <label htmlFor={name}>{msg}</label>
      <input type={fieldType} name={name} onChange={
        (event) => {
          setPerson((prevPerson) =>
             ({...prevPerson, 
              [section]: {
                ...prevPerson[section],
                [field]: event.target.value
              }

             }));
        }
      }/>
    </>
  )
}



function FormPersonal({setPerson}){
  return(
    <div className="formPerson">
      <h1 className="formPersonalHeader">Personal</h1>
     <InputField className="inputField" name="FirstName" msg="Full Name" fieldType="text" section="personal" field="name" setPerson={setPerson}/>
     <InputField className="inputField" name="Email" msg="Email" fieldType="text" section="personal" field="email" setPerson={setPerson}/>
     <InputField  className="inputField" name="PhoneNumber" msg="Phone Number" fieldType="text" section="personal" field="phoneNumber" setPerson={setPerson}/>
     <InputField  className="inputField" name="Address" msg="Address" fieldType="text" section="personal" field="address" setPerson={setPerson}/>
    </div>
   )
}



function InputArrayField({name="Default Label", msg="enter a value", fieldType="text", section, field, setPerson, id, value}){
 return (
    <>
      <label htmlFor={name}>{msg}</label>

      <input
        type={fieldType}
        name={name}
        value={value}
        onChange={(event) => {
          setPerson((prevPerson) => {
            const newSection = prevPerson[section].map((item) => {
              if (item.id === id) {
                return {
                  ...item,
                  [field]: event.target.value
                };
              }

              return item;
            });

            return{
              ...prevPerson,
              [section]: newSection
            }
            
          })
          
        }
      }
      />

    </>
  );
}



function FormEducation({setPerson, education}){
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


function FormExperience({setPerson, experience}){

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

function App() {
  const [person, setPerson] = useState({
    personal:{
      name: "",
      email: "",
      phoneNumber: "",
      address: ""
    },
    education: [
      {
        id: crypto.randomUUID(),
        school: "",
        degree: "",
        eduStartDate: "",
        eduEndDate: "",
        eduLocation: ""
      },
      {
        id: crypto.randomUUID(),
        school: "",
        degree: "",
        eduStartDate: "",
        eduEndDate: "",
        eduLocation: ""
      }
    ],
    experience: [
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
  })

  console.log(person);

  const resumeRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Resume",
  });

  return (
  <div className="App">

    <Form
      setPerson={setPerson}
      education={person.education}
      experience={person.experience}
    />

      <div className="resumeWrapper">

        <button
          className="printResumeButton"
          onClick={() => window.print()}
        >
          Print
        </button>

        <div className="resume">
          <Resume person={person}/>
        </div>

      </div>

    </div>
  );
}

export default App
