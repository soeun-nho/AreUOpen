function start() {
    $("#start").hide();
    $("#q1").show();
}
function q1(){
    $("#q1").hide();
    $("#q2").show();
}
function q2(){
    $("#q2").hide();
    $("#q3").show();
}
function q3(){
    $("#q3").hide();
    $("#q4").show();
}
function q4(){
    $("#q4").hide();
    $("#q5").show();
}
function q5(){
    $("#q5").hide();
    $("#q6").show();
}
function q6(){
    $("#q6").hide();
    $("#q7").show();
}
function q7(){
    $("#q7").hide();
    $("#q8").show();
}
function q8(){
    $("#q8").hide();
    $("#q9").show();
}
function q9(){
    $("#q9").hide();
    $("#res").show();
}

var cnt=0;

function cntChoice1(choice){
    if(choice=='D')
    cnt++;
}
function cntChoice2(choice){
    if(choice=='A')
    cnt++;
}
function cntChoice3(choice){
    if(choice=='H')
    cnt++;
}

function getChoice1(){
    var x;

    if(cnt>=2) // d == 0 
        x=0;
    else x=1;
    return x*100;    
}
function getChoice3(){ 
    var x;

    if(cnt>=2) //h==0 
        x=0;
    else x=1;    
    return x*10;
}
function getChoice2(){
    var x;

    if(cnt>=2) //a ==0
        x=0;
    else x=1;
    return x;    
}

function answer(){
    res = getChoice1()+getChoice2()+getChoice3();
    
}