function accordeon() {
    const titles = document.querySelectorAll('.product__acc-item-header');

    titles.forEach(function(item) {
        item.addEventListener('click', function() {
            let accordeonContent = this.nextElementSibling;

            if (accordeonContent) {
                this.closest('.product__acc-item').classList.toggle('active');
                accordeonContent.classList.toggle('active');
            }
        });
    });
}

export default accordeon;
