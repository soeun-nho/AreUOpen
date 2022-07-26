//시작하기 누르면 시작페이지 사라지고 문제페이지 보임
function start() {
    $("#start").hide();
    $("#question").show();
    next();
}

var num = 1; //현재 몇번 문제에 있는지를 나타내는 변수
var q = {
   1: {"title": "1번 문제", "type": "UD", "A": "대답 U", "B": "대답 D"},
   2: {"title": "2번 문제", "type": "UD", "A": "대답 U", "B": "대답 D"},
   3: {"title": "3번 문제", "type": "UD", "A": "대답 U", "B": "대답 D"},
   
   4: {"title": "4번 문제", "type": "HS", "A": "대답 H", "B": "대답 S"},
   5: {"title": "5번 문제", "type": "HS", "A": "대답 H", "B": "대답 S"},
   6: {"title": "6번 문제", "type": "HS", "A": "대답 H", "B": "대답 S"},

   7: {"title": "7번 문제", "type": "AT", "A": "대답 A", "B": "대답 T"},
   8: {"title": "8번 문제", "type": "AT", "A": "대답 A", "B": "대답 T"},
   9: {"title": "9번 문제", "type": "AT", "A": "대답 A", "B": "대답 T"}
}
function next() { 
    $("#title").html(q[num]["title"]); 
    $("#type").val(q[num]["type"]); 
    $("#A").html(q[num]["A"]); 
    $("#B").html(q[num]["B"]);
    num++; 
 }
 //답안 버튼 눌렀을 때
 $("#A").click(function () {
    //next();
    document.write($("#title").val("어쩌구"));
});
$("#B").click(function () {
    next();
});