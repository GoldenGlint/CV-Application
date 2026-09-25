export function InputArrayField({name="Default Label", msg="enter a value", fieldType="text", section, field, setPerson, id, value}){
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