import {FormEducation} from "./FormEducation";
import {FormPersonal} from "./FormPersonal";
import {FormExperience} from "./FormExperience";


export function Form({setPerson, education, experience}){
  return(
    <div className="formGroup">
    <FormPersonal setPerson={setPerson}/>
    <FormEducation setPerson={setPerson} education={education}/>
    <FormExperience setPerson={setPerson} experience={experience}/>
    </div>
  )
}