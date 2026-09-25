export function InputField({name="Default Label", msg="enter a value", fieldType="text", section, field, setPerson}){
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