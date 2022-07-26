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
    $(".start").hide();
    $(".question").show();
    next();
}


//다음 페이지 넘어가는 함수
function next() { 
    if(num==10) {
        var mbti = ""; 
    
      ($("#UD").val() < 2) ? mbti += "0" : mbti += "1";
      ($("#HS").val() < 2) ? mbti += "2" : mbti += "3";
      ($("#AT").val() < 2) ? mbti += "4" : mbti += "5";

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

//답변 누르면
$("#A").click(function () {
    var type = $("#type").val();
    var preValue = $("#" + type).val();
    $("#" + type).val(parseInt(preValue) + 1);
    next();
});
$("#B").click(function () {
    next();
});

