var num = 1; //현재 몇번 문제에 있는지를 나타내는 변수
var q = { //문제 및 답변 내용
   1: {"title": "1번 문제", "type": "UD", "A": "대답 U1", "B": "대답 D1"},
   2: {"title": "2번 문제", "type": "UD", "A": "대답 U2", "B": "대답 D2"},
   3: {"title": "3번 문제", "type": "UD", "A": "대답 U3", "B": "대답 D3"},
   
   4: {"title": "4번 문제", "type": "HS", "A": "대답 H1", "B": "대답 S1"},
   5: {"title": "5번 문제", "type": "HS", "A": "대답 H2", "B": "대답 S2"},
   6: {"title": "6번 문제", "type": "HS", "A": "대답 H3", "B": "대답 S3"},

   7: {"title": "7번 문제", "type": "AT", "A": "대답 A1", "B": "대답 T1"},
   8: {"title": "8번 문제", "type": "AT", "A": "대답 A2", "B": "대답 T2"},
   9: {"title": "9번 문제", "type": "AT", "A": "대답 A3", "B": "대답 T3"}
}

//시작하기 누르면 시작페이지 사라지고 문제페이지 보임
function start() {
    $("#start").hide();
    $("#question").show();
    next();
}

//버튼 누르면 다음 문제 내용 불러오는 함수
function next() { 
    if(num==10) {
        var mbti = ""; 
    
      ($("#UD").val() < 2) ? mbti += "D" : mbti += "U";
      ($("#HS").val() < 2) ? mbti += "S" : mbti += "H";
      ($("#AT").val() < 2) ? mbti += "T" : mbti += "A";

      window.location.href = mbti+".html";
    }
    else{
        $("#title").html(q[num]["title"]); 
        $("#type").val(q[num]["type"]); 
        $("#A").html(q[num]["A"]); 
        $("#B").html(q[num]["B"]);
        num++; 
    }
 }
 //답안 버튼 눌렀을 때
 $("#A").click(function () {
    var type = $("#type").val();
    var preValue = $("#" + type).val();
    $("#" + type).val(parseInt(preValue) + 1);
    next();
    
});
$("#B").click(function () {
    next();
});
