ymaps.ready(init);
function init() {
  var map = new ymaps.Map('map', {
    center: [-0.13968631031941695, 51.52437396304669],
    zoom: 13,
  });
  var myPlacemark = new ymaps.Placemark([57.763089, 40.964524],{
    hintContent:"Московская область, дер.Савельево",
    ballonContentHeader: "<h2>Зеленое единство России</h2>" +
    '<span>100 000 деревьев для будущего.</span>',

    ballonContentBody:'<div class="images"><img src="./1.png">' +
    '<h5>regergre</h5>' +
    '<span>fwefwefewgew</span>'+
    '<br><span>ewwwwwwwwwbbbbbbbbb</span>',

  });

  myMap.geoObjects.add(myPlacemark);
}