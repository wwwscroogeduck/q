var myMap;

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [57.8021, 40.9781],
        zoom: 12,
    },{
        searchControlProvider: 'yandex#search'
    });

    var placemark = new ymaps.Placemark ([57.7615040066521,40.97267160763558], {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<div style="position: relative; display: flex; justify-content: space-between; align-items: center; padding: 10px; background-color: #f0f0f0; border-radius: 10px;"><h4 style="margin: 0; font-size: 16px;">Номер музея <br>во всероссийском музее</h4><div style="background-color: #f00; color: #fff; padding: 5px 10px; border-radius: 10px;">№14698</div></div>',
        balloonContentBody: '<div style="padding: 10px;"><h3 style="font-size: 24px; margin: 0 0 10px;line-height: 1.1;">Музей Боевой и Воинской Славы 3-го Ленинградского артиллерийского училища</h3>' +
            '<div style="font-size: 16px; margin-bottom: 10px;">Образовательная организация: Лицей №34<br>Адрес: ул. Никитская 106 А, г. Кострома</div>' +
            '<h3 style="font-size: 20px; margin-bottom: 10px;">Профиль школьного музея:</h3>' +
            '<p style="font-size: 16px; margin-bottom: 10px;">Военно-исторический</p>'+
            '<h3 style="font-size: 20px; margin-bottom: 10px;">Руководитель:</h3>' +
            '<p style="font-size: 16px; margin-bottom: 10px;">Береснев Геннадий Александрович</p>' +
            '<h3 style="font-size: 20px; margin-bottom: 10px;">Краткая характеристика фонда:</h3>' +
            '<p style="font-size: 16px; margin-bottom: 10px;">Трофеи Великой Отечественной войны, более 400 анкет и фотографий ветеранов и курсантов 3-го ЛАУ, 95 сочинений о прабабушках и прадедушках, участниках ВОВ, 50 воспоминаний ветеранов, 16 видеокассет воспоминаний ветеранов и о боевом пути 3-го ЛАУ</p>' +
            '<h3 style="font-size: 20px; margin-bottom: 10px;">Контактная информация</h3>' +
            '<p style="font-size: 16px; margin-bottom: 5px;"><img src="/images/phone.png" height="20" width="20" style="vertical-align: middle;"> <a href="tel:+7-915-914-47-38">+7 (915) 914-47-38</a></p>' +
            '<p style="font-size: 16px; margin-bottom: 5px;"><img src="/images/mail.png" height="20" width="20" style="vertical-align: middle;"> <a href="mailto:info@example.com">moy-34k@yandex.ru</a></p></div>'+
            '<img src = "/images/1.png" height = "400" width = "500">',
    });

    var placemark2 = new ymaps.Placemark ([57.763110069231644,40.96421068154524], {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<div style="position: relative; display: flex; justify-content: space-between; align-items: center; padding: 10px; background-color: #f0f0f0; border-radius: 10px;"><h4 style="margin: 0; font-size: 16px;">Номер музея <br>во всероссийском музее</h4><div style="background-color: #f00; color: #fff; padding: 5px 10px; border-radius: 10px;">№1224</div></div>',
        balloonContentBody: '<div style="padding: 10px;"><h3 style="font-size: 24px; margin: 0 0 10px;line-height: 1.1;">Музей "Мы этой памяти верны" </h3>' +
            '<div style="font-size: 16px; margin-bottom: 10px;">Образовательная организация: М​БОУ города Костромы ​​"СОШ № 38 имени выдающегося земляка дважды Героя Советского Союза Афанасия Петровича Шилина<br>Адрес: ул. Никитская, д.70, г. Кострома</div>' +
            '<h3 style="font-size: 20px; margin-bottom: 10px;">Профиль школьного музея:</h3>' +
            '<p style="font-size: 16px; margin-bottom: 10px;">Историко-краеведческий</p>'+
            '<h3 style="font-size: 20px; margin-bottom: 10px;">Руководитель:</h3>' +
            '<p style="font-size: 16px; margin-bottom: 10px;">Костельцева Юлия Александровна</p>' +
            '<h3 style="font-size: 20px; margin-bottom: 10px;">Краткая характеристика фонда:</h3>' +
            '<p style="font-size: 16px; margin-bottom: 10px;">Фонд школьного музея состоит из основного музейного и научно-вспомогательного фондов.</p>' +
            '<h3 style="font-size: 20px; margin-bottom: 10px;">Основной фонд:</h3>' +
            '<p style="font-size: 16px; margin-bottom: 10px;">а) вещественные памятники: одежда - военная форма, нумизматические материалы, боеприпасы, элементы амуниции, пионерская и комсомольская атрибутика, атрибутика школьной жизни. <br> б) изобразительные произведения: фотографии, предметы живописи, плакаты, карты;<br> в) письменные памятники – газеты, книги, журналы, документы, письма, дневники, грамоты, воспоминания, удостоверения, свидетельства, членские билеты, листовки, т.п. </p>' +
            '<h3 style="font-size: 20px; margin-bottom: 10px;">Вспомогательный фонд:</h3>' +
            '<p style="font-size: 16px; margin-bottom: 10px;">Материалы, изготовленные для нужд экспозиций: схемы, модели, муляжи, репродукции, фото- и ксерокопии и т.п. </p>' +
            '<h3 style="font-size: 20px; margin-bottom: 10px;">Контактная информация</h3>' +
            '<p style="font-size: 16px; margin-bottom: 5px;"><img src="/images/phone.png" height="20" width="20" style="vertical-align: middle;"> <a href="tel:+7-915-914-47-38">​​(4942) 42-5​2-49</a></p>' +
            '<p style="font-size: 16px; margin-bottom: 5px;"><img src="/images/mail.png" height="20" width="20" style="vertical-align: middle;"> <a href="mailto:info@example.com">moy-34k@yandex.ru</a></p></div>'+
            '<img src = "/images/2.png" height = "400" width = "500">',
    });

    var myPolygon = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        [
            [41.02230963547789,57.68456134443197],[41.025699947672614,57.68658404462059],[41.02986273606371,57.68726208354509],[41.02977690537524,57.68805502816575],
            [41.03190121491507,57.68883646380295],[41.030699585276395,57.689491477702745],[41.030935619669705,57.68989367332536],[41.03009877045706,57.6910657607228],
            [41.030806873637026,57.691732224842305],[41.03196558793146,57.69226079106416],[41.03020605881771,57.69290425253897],[41.030849788981286,57.693639623034684],
            [41.028489445048166,57.69458179458561],[41.031321857767885,57.69630521548206],[41.03351054032406,57.69885572737038],[41.03110728104671,57.70200340791235],
            [41.02303919632992,57.70007347576763],[41.024412487345536,57.69795962211369],[41.02312502701839,57.697706870453686],[41.023167942362626,57.69812046315738],
            [41.02063593705256,57.69828130348416],[41.01939139206965,57.69743113935098],[41.017588947611635,57.69729327300957],[41.01449904282649,57.69802855407735],
            [41.01338324387629,57.69697158283122],[41.018318508463686,57.69584564462369],[41.0186618312176,57.6955239415405],[41.02145132859314,57.695133298235085],
            [41.01973471482359,57.68982472586311],[41.01990637620054,57.68922717532258],[41.02230963547789,57.68456134443197]
        ]
    ],
    // Описываем свойства геообъекта.
    {
        // Содержимое балуна.
        balloonContent: "Рыбные места"
    }, {
        // Описываем опции геообъекта.
        // Фоновое изображение.
        // Тип заливки фоном.
        fillColor: "#DB709377",
        // Убираем видимость обводки.
        stroke: false
    }
);

// Добавляем многоугольник на карту.
myMap.geoObjects.add(myPolygon);
    // Добавим метку на карту.
myMap.geoObjects.add(placemark);
myMap.geoObjects.add(placemark2);
    // Откроем балун на метке.
    // placemark.balloon.open();
}

 // balloonContentFooter: 'Информация предоставлена:<br>OOO "Рога и копыта"',
 // hintContent: 'Рога и копыта'



