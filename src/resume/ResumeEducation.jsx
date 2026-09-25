import {useState} from "react";

export function ResumeEducation({education}){
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
