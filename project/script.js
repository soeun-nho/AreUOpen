var num = 1; //현재 몇번 문제에 있는지를 나타내는 변수
var q = { //문제 및 답변 내용
   1: {"title": "1번 문제", "type": "EI", "A": "대답 E1", "B": "대답 I1"},
   2: {"title": "2번 문제", "type": "EI", "A": "대답 E2", "B": "대답 I2"},
   3: {"title": "3번 문제", "type": "EI", "A": "대답 E3", "B": "대답 I3"},
   
   4: {"title": "4번 문제", "type": "NS", "A": "대답 N1", "B": "대답 S1"},
   5: {"title": "5번 문제", "type": "NS", "A": "대답 N2", "B": "대답 S2"},
   6: {"title": "6번 문제", "type": "NS", "A": "대답 N3", "B": "대답 S3"},

   7: {"title": "7번 문제", "type": "FT", "A": "대답 F1", "B": "대답 T1"},
   8: {"title": "8번 문제", "type": "FT", "A": "대답 F2", "B": "대답 T2"},
   9: {"title": "9번 문제", "type": "FT", "A": "대답 F3", "B": "대답 T3"},

   10: {"title": "10번 문제", "type": "PJ", "A": "대답 P1", "B": "대답 J1"},
   11: {"title": "11번 문제", "type": "PJ", "A": "대답 P2", "B": "대답 J2"},
   12: {"title": "12번 문제", "type": "PJ", "A": "대답 P3", "B": "대답 J3"}
}

//시작하기 누르면 시작페이지 사라지고 문제페이지 보임
function start() {
    $(".start").hide();
    $(".question").show();
    next();
}


//다음 페이지 넘어가는 함수
function next() {
    if (num == 13) { //1번
       var mbti = ""; //2번
       //3번
       ($("#EI").val() < 2) ? mbti += "I" : mbti += "E";
       ($("#NS").val() < 2) ? mbti += "S" : mbti += "N";
       ($("#FT").val() < 2) ? mbti += "T" : mbti += "F";
       ($("#PJ").val() < 2) ? mbti += "J" : mbti += "P";
 
       window.location.href = "./result/" + mbti; //4번
 
    } else {
       //앞서 작성된 내용
       $(".q-num").html('Q' + num);
       $(".progress-txt").html(num + ' / 12');
       $(".progress-bar").attr('style', 'width: calc(100/12*' + num + '%)');
       $("#title").html(q[num]["title"]);
       $("#type").val(q[num]["type"]);
       $("#A").html(q[num]["A"]);
       $("#B").html(q[num]["B"]);
       num++;
    }
 }

//답변 누르면
$(document).on("click", "#A", function () {
    var type = $("#type").val();
    var preValue = $("#" + type).val();
    $("#" + type).val(parseInt(preValue) + 1);
    next();
});
$(document).on("click", "#B", function () {
    next();
});

