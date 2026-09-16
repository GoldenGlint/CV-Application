import { useState } from 'react'
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

function ResumeEducation(){
  return (
    <>
      <h1 className="resumeEducationHeader">Education</h1>

      <div className="educationList">
        <div className="educationItem">
          
          <div className="leftEducation">
            <h3 className="resumeEducationDate">08/2024-Present</h3>
            <h3 className="resumeUniversityLocation">Waterloo, CA</h3>
          </div>

          <div className="rightEducation">
            <h3 className="resumeUniversity">Cool University</h3>
            <h3 className="resumeDegree">Bachelors in Computer Science</h3>
          </div>

        </div>

      </div>
    </>
  )
}

function ResumeExperience(){
  return(
    <>
      <h1 className="resumeExperienceHeader">Professional Experience</h1>
      <div className="experienceList">
        <div className="experienceItem">
          <div className="leftExperience">
            <h3 className="resumeExperienceDate">08/2020-present</h3>
            <h3 className="resumeExperienceLocation">New York City, US</h3>
          </div>
          <div className="rightExperience">
            <h3 className="resumeCompany">Bank</h3>
            <h3 className="resumePosition">AI Governance</h3>
            <h3 className="resumeDescription">Designed AI Workflows using PowerAutomate</h3>
          </div>
        </div>
      </div>
    
    </>
  )
}

function Resume({person}){
  return(
    <div className="resumeGroup">
    <ResumeHeader person={person}/>
    <ResumeEducation/>
    <ResumeExperience/>
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
     <InputField className="inputField" name="FirstName" msg="Full Name" fieldType="text" section="personal" field="name" setPerson={setPerson}/>
     <InputField className="inputField" name="Email" msg="Email" fieldType="text" section="personal" field="email" setPerson={setPerson}/>
     <InputField  className="inputField" name="PhoneNumber" msg="Phone Number" fieldType="text" section="personal" field="phoneNumber" setPerson={setPerson}/>
     <InputField  className="inputField" name="Address" msg="Address" fieldType="text" section="personal" field="address" setPerson={setPerson}/>
    </div>
   )
}

function InputArrayField({name="Default Label", msg="enter a value", fieldType="text", section, field, setPerson, id}){
 return (
    <>
      <label htmlFor={name}>{msg}</label>

      <input
        type={fieldType}
        name={name}
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
  return(
    <div className="formEducation">
     { education.map((edu) => (
      <div className="educationFormItem" key={edu.id}>

        <InputArrayField className="inputField" name="School" msg="School" fieldType="text" section="education" field="school" setPerson={setPerson} id={edu.id}/>
        <InputArrayField className="inputField" name="Degree" msg="Degree" fieldType="text" section="education" field="degree" setPerson={setPerson} id={edu.id}/>
        <InputArrayField className="inputField" name="Start Date" msg="Start Date" fieldType="text" section="education" field="eduStartDate" setPerson={setPerson} id={edu.id}/>
        <InputArrayField className="inputField" name="End Date" msg="End Date" fieldType="text" section="education" field="eduEndDate" setPerson={setPerson} id={edu.id}/>
        <InputArrayField className="inputField" name="Location" msg="Location" fieldType="text" section="education" field="eduLocation" setPerson={setPerson} id={edu.id}/>
      </div>

      ))}
      
      
    </div>
  )
}

function FormExperience({setPerson, experience}){

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

  return (
    
    <div className="App">
      <Form setPerson={setPerson} education={person.education} experience={person.experience}/>
      <Resume person={person}/>
    </div>
    
  )
}

export default App
