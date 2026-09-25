export function ResumeExperience({experience}){
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