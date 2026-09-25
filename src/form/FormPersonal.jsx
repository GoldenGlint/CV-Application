import {InputArrayField} from "../inputs/InputArrayField";
import {InputField} from "../inputs/InputField";
import { useState } from 'react'

export function FormPersonal({setPerson}){
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