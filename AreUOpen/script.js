var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
        mapOption = { 
            center: new naver.maps.LatLng(37.606850, 127.042372), // 지도의 중심좌표
            level: 300// 지도의 확대 레벨
        };

var map = new naver.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    { title: '제나키친', closeD: "F", openH:"11", openM:"0", colseH:"20", colseM:"0", latlng: new naver.maps.LatLng(37.6036, 127.0417)},
    { title:"조아버거", closeD: "F", openH:"11", openM:"0", colseH:"20", colseM:"0", latlng: new naver.maps.LatLng(37.6042, 127.0408) },
    { title: '송송식탁', closeD: "F", openH:"11", openM:"0", colseH:"20", colseM:"0", latlng: new naver.maps.LatLng(37.604, 127.0427) },
    { title: '스시빈', closeD: "F", openH:"11", openM:"0", colseH:"20", colseM:"0", latlng: new naver.maps.LatLng(37.6039, 127.0432) },
    { title: '백소정', closeD: "F", openH:"11", openM:"0", colseH:"20", colseM:"0", latlng: new naver.maps.LatLng(37.6028, 127.0412)},
    { title:"서브웨이", closeD: "F", openH:"11", openM:"0", colseH:"20", colseM:"0", latlng: new naver.maps.LatLng(37.6039, 127.0427) },
    { title: '핏짜피자', closeD: "F", openH:"11", openM:"0", colseH:"20", colseM:"0", latlng: new naver.maps.LatLng(37.6039, 127.042) },
    { title: '샐러디', closeD: "F", openH:"11", openM:"0", colseH:"20", colseM:"0", latlng: new naver.maps.LatLng(37.6044,127.0428) }
];

 
    
for (var i = 0; i < positions.length; i ++) {

    
    // 마커를 생성합니다
    var marker = new naver.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    });
}




