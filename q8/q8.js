var amount = document.getElementById("number").value;

document.getElementById("btn").onclick = function(){
    
    var amount = document.getElementById("number").value;

    function pc(amount){
        var presntage =amount*(20/100);

        return presntage;
    }
    function total(){
        var tot = presntage + amount;

        return tot;
    } 
    
    result.innerHTML=("20% of Value: " + pc(amount) );
    result2.innerHTML=("Total: " + amount + "+" + pc(amount) + "=" + total() );
    
}