function productSizes() {
   const productSizesList = document.querySelectorAll('.product__sizes ul li');

   if (productSizesList) {
        productSizesList.forEach(size => {
            size.addEventListener('click', () => {
                let currentActiveSize = document.querySelector('.product__sizes ul li.active');
                currentActiveSize.classList.remove('active');
                size.classList.add('active');
            });
        });
   }
}

export default productSizes;