import { useState } from 'react'
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {Form} from "./form/Form";
import {Resume} from "./resume/Resume";



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
