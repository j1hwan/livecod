var position = new naver.maps.LatLng(33.382763, 126.522372);
var map = new naver.maps.Map("map", {
  center: position,
  zoom: 10,
  zoomControl: true, //줌 컨트롤의 표시 여부
  zoomControlOptions: { //줌 컨트롤의 옵션
            position: naver.maps.Position.TOP_RIGHT
  }
});

var markers = [];
var infowindows = [];
var markers_보건소 = [];
var infowindows_보건소 = [];
var markers_제주_국민안심병원 = [];
var infowindows_제주_국민안심병원 = [];

// console.log('제주지역선별진료소 마킹');
//선별진료소 마킹
for (var i = 0; i < 제주지역선별진료소.length; i++) {
    var lat = 제주지역선별진료소[i].lat;
    var lng = 제주지역선별진료소[i].lng;
    var name = 제주지역선별진료소[i]["이름"];
    var address = 제주지역선별진료소[i]["주소"];
    var phone = 제주지역선별진료소[i]["전화번호"];
    var 구분 = 제주지역선별진료소[i]["구분"];

    var markerOptions = {
      position: {
        lat: lat,
        lng: lng
      },
      map: map
    };

    var marker = new naver.maps.Marker(markerOptions);
    var infowindow = new naver.maps.InfoWindow({
      content:
        "<div style='font-size: small; margin:10px; padding:3px;'>이름 : " +
        name +
        "<br>구분 : " +
        구분 +
        "<br>주소 : " +
        address +
        "<br>전화번호 : <a href='tel:" +
        phone +
        "'>" +
        phone +
        "</a></div>"
    });

    markers.push(marker);
    infowindows.push(infowindow);
};
// for (var jejuMedicalCenter of 제주지역선별진료소) {
//   var lat = jejuMedicalCenter.lat;
//   var lng = jejuMedicalCenter.lng;
//   var name = jejuMedicalCenter["이름"];
//   var address = jejuMedicalCenter["주소"];
//   var phone = jejuMedicalCenter["전화번호"];
//   var 구분 = jejuMedicalCenter["구분"];
//
//   var markerOptions = {
//     position: {
//       lat: lat,
//       lng: lng
//     },
//     map: map
//   };
//
//   var marker = new naver.maps.Marker(markerOptions);
//   var infowindow = new naver.maps.InfoWindow({
//     content:
//       "<div style='font-size: small; margin:10px; padding:3px;'>이름 : " +
//       name +
//       "<br>구분 : " +
//       구분 +
//       "<br>주소 : " +
//       address +
//       "<br>전화번호 : <a href='tel:" +
//       phone +
//       "'>" +
//       phone +
//       "</a></div>"
//   });
//
//   markers.push(marker);
//   infowindows.push(infowindow);
// };
// for (var i = 0; i < 제주지역선별진료소.length; i++) {
//   console.log(infowindows[i]);
//   naver.maps.Event.addListener(markers[i], "click", function (e) {
//     if (infowindows[i].getMap()) {
//       infowindows[i].close();
//     } else {
//       infowindows[i].open(map, markers[i]);
//     }
//   });
// }
naver.maps.Event.addListener(markers[0], "click", function(e) {
  if (infowindows[0].getMap()) {
    infowindows[0].close();
  } else {
    infowindows[0].open(map, markers[0]);
  }
});

naver.maps.Event.addListener(markers[1], "click", function(e) {
  if (infowindows[1].getMap()) {
    infowindows[1].close();
  } else {
    infowindows[1].open(map, markers[1]);
  }
});

naver.maps.Event.addListener(markers[2], "click", function(e) {
  if (infowindows[2].getMap()) {
    infowindows[2].close();
  } else {
    infowindows[2].open(map, markers[2]);
  }
});

naver.maps.Event.addListener(markers[3], "click", function(e) {
  if (infowindows[3].getMap()) {
    infowindows[3].close();
  } else {
    infowindows[3].open(map, markers[3]);
  }
});

naver.maps.Event.addListener(markers[4], "click", function(e) {
  if (infowindows[4].getMap()) {
    infowindows[4].close();
  } else {
    infowindows[4].open(map, markers[4]);
  }
});


console.log('보건소 마킹');
//보건소 마킹
for (var jejuMedicalCenter of 제주지역보건소) {
  var lat = jejuMedicalCenter.lat;
  var lng = jejuMedicalCenter.lng;
  var name = jejuMedicalCenter["이름"];
  var address = jejuMedicalCenter["주소"];
  var phone = jejuMedicalCenter["전화번호"];
  var 구분 = jejuMedicalCenter["구분"];

  var markerOptions = {
    position: {
      lat: lat,
      lng: lng
    },
    map: map,
    icon: {
        content: '<img src="../img/pin_default.png" alt="" ' +
                 'style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; ' +
                 '-webkit-user-select: none; position: absolute; width: 22px; height: 35px; left: 0px; top: 0px;">',
        size: new naver.maps.Size(22, 35),
        anchor: new naver.maps.Point(11, 35)
    }
  };

  var marker = new naver.maps.Marker(markerOptions);
  var infowindow = new naver.maps.InfoWindow({
    content:
      "<div style='font-size: small; margin:10px; padding:3px;'>이름 : " +
      name +
      "<br>구분 : " +
      구분 +
      "<br>주소 : " +
      address +
      "<br>전화번호 : <a href='tel:" +
      phone +
      "'>" +
      phone +
      "</a></div>"
  });

  markers_보건소.push(marker);
  infowindows_보건소.push(infowindow);
};

naver.maps.Event.addListener(markers_보건소[0], "click", function(e) {
  if (infowindows_보건소[0].getMap()) {
    infowindows_보건소[0].close();
  } else {
    infowindows_보건소[0].open(map, markers_보건소[0]);
  }
});

naver.maps.Event.addListener(markers_보건소[1], "click", function(e) {
  if (infowindows_보건소[1].getMap()) {
    infowindows_보건소[1].close();
  } else {
    infowindows_보건소[1].open(map, markers_보건소[1]);
  }
});

naver.maps.Event.addListener(markers_보건소[2], "click", function(e) {
  if (infowindows_보건소[2].getMap()) {
    infowindows_보건소[2].close();
  } else {
    infowindows_보건소[2].open(map, markers_보건소[2]);
  }
});

naver.maps.Event.addListener(markers_보건소[3], "click", function(e) {
  if (infowindows_보건소[3].getMap()) {
    infowindows_보건소[3].close();
  } else {
    infowindows_보건소[3].open(map, markers_보건소[3]);
  }
});

naver.maps.Event.addListener(markers_보건소[4], "click", function(e) {
  if (infowindows_보건소[4].getMap()) {
    infowindows_보건소[4].close();
  } else {
    infowindows_보건소[4].open(map, markers_보건소[4]);
  }
});

naver.maps.Event.addListener(markers_보건소[5], "click", function(e) {
  if (infowindows_보건소[5].getMap()) {
    infowindows_보건소[5].close();
  } else {
    infowindows_보건소[5].open(map, markers_보건소[5]);
  }
});


console.log('국민안심병원 마킹');
//국민안심병원 마킹
for (var jejuMedicalCenter of 제주_국민안심병원) {
  var lat = jejuMedicalCenter.lat;
  var lng = jejuMedicalCenter.lng;
  var name = jejuMedicalCenter["이름"];
  var address = jejuMedicalCenter["주소"];
  var phone = jejuMedicalCenter["전화번호"];
  var 구분 = jejuMedicalCenter["구분"];

  var markerOptions = {
    position: {
      lat: lat,
      lng: lng
    },
    map: map,
    icon: {
        content: '<img src="../img/pin_green.png" alt="" ' +
                 'style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; ' +
                 '-webkit-user-select: none; position: absolute; width: 22px; height: 35px; left: 0px; top: 0px;">',
        size: new naver.maps.Size(22, 35),
        anchor: new naver.maps.Point(11, 35)
    }
  };

  var marker = new naver.maps.Marker(markerOptions);
  var infowindow = new naver.maps.InfoWindow({
    content:
      "<div style='font-size: small; margin:10px; padding:3px;'>이름 : " +
      name +
      "<br>구분 : " +
      구분 +
      "<br>주소 : " +
      address +
      "<br>전화번호 : <a href='tel:" +
      phone +
      "'>" +
      phone +
      "</a></div>"
  });

  markers_제주_국민안심병원.push(marker);
  infowindows_제주_국민안심병원.push(infowindow);
}

console.log('markers_제주_국민안심병원');
console.log(markers_제주_국민안심병원);
console.log(infowindows_제주_국민안심병원);

naver.maps.Event.addListener(markers_제주_국민안심병원[0], "click", function(e) {
  if (infowindows_제주_국민안심병원[0].getMap()) {
    infowindows_제주_국민안심병원[0].close();
  } else {
    infowindows_제주_국민안심병원[0].open(map, markers_제주_국민안심병원[0]);
  }
});

naver.maps.Event.addListener(markers_제주_국민안심병원[1], "click", function(e) {
  if (infowindows_제주_국민안심병원[1].getMap()) {
    infowindows_제주_국민안심병원[1].close();
  } else {
    infowindows_제주_국민안심병원[1].open(map, markers_제주_국민안심병원[1]);
  }
});
