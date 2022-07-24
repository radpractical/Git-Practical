
document.getElementById("btn").onclick = function(){
    
    

    function areacal(){
        var width = document.getElementById("width").value;
        var height = document.getElementById("height").value;

        if (width<=0 || height<=0){
            alert("Incorect width or height!")
            var area="Incorrect";
        }
        else{
            var area = width*height;
        }
        
        
        

       
        return area;
    }

    result.innerHTML=("Area of rectangle is " + areacal() + "cm^2");

    
};