const productCounter = function() {
    let buttonCountMinus = document.querySelector('.counter-minus');
    let buttonCountPlus = document.querySelector('.counter-plus');

    let count = document.querySelector('.counter-number');
    let number = 1;

    if (buttonCountPlus && buttonCountMinus) {
        buttonCountPlus.addEventListener('click', function() {
            number++;
            count.textContent = number;
        });

        buttonCountMinus.addEventListener('click', function() {
            if (number !== 1) {
                number--;
                count.textContent = number;
            }
        });
    }
};

export default productCounter;
