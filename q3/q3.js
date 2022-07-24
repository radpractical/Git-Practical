document.getElementById("btn").onclick = function(){
    var name = document.getElementById("name").value;
    var birthday = document.getElementById("bd").value;

    function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

    alert(name + " is " + getAge(birthday) + " years old ") 
    
}