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

App: Owns info of the person
Form: Takes person and setPerson and uses setPerson to change person obj whenever edited
Resume: Takes person and only displays the information