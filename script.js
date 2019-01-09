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