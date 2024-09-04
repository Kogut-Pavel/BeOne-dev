
import mobileNav from './modules/mobile-nav.js';
import sliders from './modules/sliders.js';
import productCounter from './modules/productCounter.js';
import accordeon from './modules/accordeon.js';
import productSizes from './modules/productSizes.js';
import miniCatalog from './modules/miniCatalog.js';
import catalogFilter from './modules/catalogFilter.js';
import modals from './modules/modals.js';
import gallery from './modules/gallery.js';


document.addEventListener('DOMContentLoaded', () => {

	// Мобильная навигация
	mobileNav();

	// Слайдеры
	sliders();

	// Счетчик товара							
	productCounter();

	// Аккордеон на странице товара
	accordeon();

	// Переключение размера у продукта
	productSizes();

	// Каталог на главной странице
	miniCatalog();

	// Каталог на странице "каталог"
	catalogFilter();

	// Модальные окна
	modals();

	gallery();

	// filterSelection('all');
	// // Добавить активный класс к текущей кнопке управления (выделите ее)
	// var btnContainer = document.querySelector('.catalog__tabs-row-bottom ul');
	// var btns = btnContainer.querySelectorAll('li');
	// if (btnContainer && btns) {
	// 	btns.forEach(btn => {
	// 		btn.addEventListener('click', () => {
	// 			let currentBtn = document.querySelector('.catalog__tabs-row-bottom ul li.active');
	// 			currentBtn.classList.remove('active');
	// 			btn.classList.add('active');

				
	// 		});
	// 	});
	// }

	// function stylesCards() {
	// 	let cards = document.querySelectorAll('.card');

	// 	for (let i = 0; i < cards.length; i++) {
	// 		if (i < 4) {
	// 			cards[i].style.cssText = `border-bottom: 0.5px solid var(--linii);`;
	// 		}
			
	// 		if (i % 4 === 0) {
	// 			cards[i].style.cssText = `   
	// 				padding-right: 0;
	// 				border-right: none;`;
	// 		}

	// 		if (i % 5 === 0) {
	// 			cards[i].style.cssText = `padding-left: 0;`;
	// 		}
			
	// 	}
	// }

	// stylesCards();

	
});
