function gallery() {
    const bigPicture = document.querySelector('.product__image-big img');
    const thumbnails = document.querySelectorAll('.product__image-small img');

    thumbnails.forEach((item) => {
        item.addEventListener('click', () => {
            bigPicture.src = item.src;
        });
    });
}

export default gallery;
