$(document).ready(function(){
  videoModal();
});
/* map */
// function initialize_map() {
//   var latlng = new google.maps.LatLng(35.665071, 139.751127);
//   var myOptions = {
//     zoom: 15,
//     center: new google.maps.LatLng(35.665733, 139.754296),
//     mapTypeId: google.maps.MapTypeId.ROADMAP, //
//     // panControl: true, //1.左上の丸いの表示
//     streetViewControl: true, //2.左の黄色い人形(pegman=ペグマン)表示
//     zoomControl: true, //3.左の上下スライダー表示
//     mapTypeControl: false, //4.右上の「地図/航空写真」表示
//     scaleControl: true, //5.右下の定規の表示
//     // overviewMapControl: false //6.右下の概観マップの表示
//     //disableDefaultUI: true  //全コントローラを非表示
//     scrollwheel: false
//   };
//   var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
//   var marker = new google.maps.Marker({
//     position: latlng,
//     map: map,
//     title: 'アイティ・コネクト株式会社'
//   });
// }

function infomation_mail() {
  var mailto_utl = $.mailto.call({
    to : "contact@it-connect.co.jp"
  });

  encodeURIComponent(mailto_utl);
}

function recruite_mail() {
  var mailto_utl = $.mailto.call({
    to : "contact@it-connect.co.jp"
  });

  encodeURIComponent(mailto_utl);
}

function videoModal(){
    $('#vModal').click(function () { // #vModalをクリックしたとき
    var idname = $(this).attr('data-target'); // 各動画のid
    var src = [];

    $.each($(idname).find('iframe'), function (index, value) { 
      src.push(value.src);
    });
    
    $(idname).on('hidden.bs.modal', function () {
      $(idname).find('iframe').removeAttr('src'); // モーダルを閉じたら動画を停止
        $.each(src,function(index, value){
          $(idname).find('iframe')[index].src = value;  // iframeのsrc属性を再設定
        });
    });
  });
}
