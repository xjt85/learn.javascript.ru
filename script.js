//-----------------------Выпадающее меню----------------------->>
//собрать коллекцию
var el = document.getElementsByClassName('menu-item');
//обход циклом
for (let i = 0; i < el.length; i++) {
    //назначаем слушателей событий на i-й элемент коллекции
    el[i].addEventListener('mouseenter', showSub, false); //наведение мыши
    el[i].addEventListener('mouseleave', hideSub, false); //сход мыши
}

//функция ПОКАЗАТЬ ПОДМЕНЮ
function showSub() {
    if (this.children.length > 1) { //если у элемента, на котором сработал Листенер, потомков больше 1, то есть, если помимо основного пункта меню есть и подпункты
        this.children[1].style.height = 'auto'; //потомок с индексом 1 - это и есть весь список sub-menu
        this.children[1].style.opacity = '1';
        this.children[1].style.overflow = 'visible';
    } else {
        return false;
    }
}

//функция СКРЫТЬ ПОДМЕНЮ
function hideSub() {
    if (this.children.length > 1) { //если у элемента, на котором сработал Листенер, потомков больше 1, то есть, если помимо основного пункта меню есть и подпункты
        this.children[1].style.height = '0'; //потомок с индексом 1 - это и есть весь список sub-menu
        this.children[1].style.opacity = '0';
        this.children[1].style.overflow = 'hidden';
    } else {
        return false;
    }
}

//------------------------------ТАБЫ----------------------------------------
var tab;
var tabContent;

window.onload = function () {
    tab = document.getElementsByClassName('tab');
    tabContent = document.getElementsByClassName('tabcontent');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');

    }
}

document.getElementById('tabs').onclick = function (event) {
    var target = event.target;
    if (target.className == 'tab') {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.add('show');
        tabContent[b].classList.remove('hide');
    }
}

//--------------------МОДАЛЬНОЕ ОКНО-------------------------------------

var modal = document.getElementById('mymodal');
var btn = document.getElementById('mybtn');
var span = document.getElementsByClassName('close')[0];

//при клике на btn - отображаем модальное окно
btn.onclick = function () {
    modal.style.display = 'block';
}

//при клике на кнопку close - открываем модальное окно
span.onclick = function () {
    modal.style.display = 'none';
}

//при клике на окно браузера мимо контента модалки - закрываем модальное окно
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

//---------------------------------АНИМАЦИЯ---------------------------------------------

var abtn = document.getElementById('anim_button');

abtn.onclick = function () {
    var move = document.getElementsByClassName('move')[0];
    move.style.top = 250 + 'px';
    move.style.left = 250 + 'px';
}

//-----------------------СЛАЙДЕР--------------------------------------------------------

var slideIndex = 1; //задаем номер начального слайда
showSlides(slideIndex); //вызываем функцию ShowSlides

//переключение слайдов вперед и назад
function plusSlide(n) {
    showSlides(slideIndex += n);
}

//функция для клика по DOT
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//функция showSlides
function showSlides(n) {
    var i = n;
    var slides = document.getElementsByClassName('slide'); //получаем элементы slide
    var dots = document.getElementsByClassName('dot'); //получаем элементы dot

    //TODO:
    //Если дошли до последнего слайда
    if (n > slides.length) {
        slideIndex = 1; //...то крутим на 1-й слайд
    }

    //Если дошли до первого слайда
    if (n < 1) {
        slideIndex = slides.length; //...то крутим на последний слайд
    }

    //сначала скрываем все слайды и dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove('active');
    }

    //p
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active ', ''); //...убираем active у точки
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');

}

//--------------------------------------ФИЛЬТР-------------------------------------------------------

function myFilter() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('mylist');
    li = ul.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName('a')[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            a.style.display = '';
        } else {
            a.style.display = 'none';
        }
    }
}

//-------------------------------Google карта------------------------------------------------

function initMap() {
    // The location of Uluru
    var uluru = {
        lat: 48,
        lng: 135
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

//-------------------------------Модальные картинки------------------------------------------------

var modal = document.getElementById('modal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById('modal__img');
var captionText = document.getElementById('caption');

img.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText = this.alt;
}

var span = document.getElementsByClassName('modal__close')[0];

span.onclick = function () {
    modal.style.display = 'none';

}

//---------------------------13. ПРОГРЕСС-БАР---------------------------------------------------

function move() {
    var elem = document.getElementById('mybar');
    var width = 10;
    var id = setInterval(frame, 10);
    
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById('label').innerHTML = width + '%';
        }
    }
}

//---------------------------14. POPUP---------------------------------------------------------

function myPopup() {
    var popup = document.getElementById('popup__text');
    popup.classList.toggle('show');
}