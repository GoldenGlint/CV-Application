import {ResumeHeader} from "./ResumeHeader";
import {ResumeEducation} from "./ResumeEducation";
import {ResumeExperience} from "./ResumeExperience";

export function Resume({person}){
  return(
    <div className="resumeGroup">
    <ResumeHeader person={person}/>
    <ResumeEducation education={person.education}/>
    <ResumeExperience experience={person.experience}/>
    </div>
  )

}