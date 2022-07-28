function start() {
    $("#start").hide();
    $("#q1").show();
}

var num=1;
var DU=0;
var HS=0;
var AT=0;

function next(){
    if(num == 9){
        var result = "";
        (DU < 2) ? result += "U" : result += "D";
        (HS < 2) ? result += "S" : result += "H";
        (AT < 2) ? result += "T" : result += "A";
 
        window.location.href = "./result/" + result +".html";
    }
    else{
        var next = num+1;
        $("#q"+num).hide();
        $("#q"+next).show();
        num++;
    }
}


function count(choice){
    if(choice=='D') { DU++; }
    if(choice=='H') { HS++; }
    if(choice=='A') { AT++; }
    next();
}

