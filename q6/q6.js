document.getElementById("btn").onclick = function(){
    
    

    function sqroot(){
        var number = document.getElementById("number").value;
        

        var root = Math.sqrt(number) ;
        
        
        

       
        return root;
    }

    result.innerHTML=("Square Root is " + sqroot() );

    
};