var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
        mapOption = { 
            center: new naver.maps.LatLng(37.6034270, 127.0416957), // 지도의 중심좌표
            zoom: 20 // 지도의 확대 레벨
        };

var map = new naver.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    { title: '제나키친', closeD: "F", openH:"11", openM:"0", colseH:"20", colseM:"0", latlng: new naver.maps.LatLng(37.6034, 127.04169) },
    { title:"조아버거", closeD: "F", openH:"11", openM:"0", colseH:"20", colseM:"0", latlng: new naver.maps.LatLng(37.6039015, 127.0408758) },
    { title: '송송식탁', closeD: "F", openH:"11", openM:"0", colseH:"20", colseM:"0", latlng: new naver.maps.LatLng(37.6038977, 127.0427576) },
    { title: '스시빈', closeD: "F", openH:"11", openM:"0", colseH:"20", colseM:"0", latlng: new naver.maps.LatLng(37.60385, 127.0433) },
    { title: '백소정', closeD: "F", openH:"11", openM:"0", colseH:"20", colseM:"0", latlng: new naver.maps.LatLng(37.6028850, 127.0412987)},
    { title:"서브웨이", closeD: "F", openH:"11", openM:"0", colseH:"20", colseM:"0", latlng: new naver.maps.LatLng(37.60384, 127.04272) },
    { title: '핏짜피자', closeD: "F", openH:"11", openM:"0", colseH:"20", colseM:"0", latlng: new naver.maps.LatLng(37.6037559, 127.0420138) },
    { title: '샐러디', closeD: "F", openH:"11", openM:"0", colseH:"20", colseM:"0", latlng: new naver.maps.LatLng(37.6041401,127.0428911) }
];

 
    
for (var i = 0; i < positions.length; i ++) {

    
    // 마커를 생성합니다
    var marker = new naver.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    });
}




