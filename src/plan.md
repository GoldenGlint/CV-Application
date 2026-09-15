Components:
function App(){
    function Resume(){
        function ResumeGeneral(){}
        function ResumeEducation(){}
        function ResumeExperience(){}
    }
    function Form(){
        function FormGeneral(){}
        function FormEducation(){}
        function FormExperience(){}
    }

}

InputField takes in (label="Default Label", value="text", onChange)
then we call this thing with different labels for different forms.
App.person prop uses onChange to set the new info, which uses setPerson which is passed down.

App: Owns info of the person
Form: Takes person and setPerson and uses setPerson to change person obj whenever edited
Resume: Takes person and only displays the information