let lastTouchY = 0;
const showWrapper = () => {
    $('.wrapper').stop().animate({ top: '0' }, 300, () => {
        $('.side').fadeIn(300);
    });
}

const hideWrapper = () => {
    $('.side').hide();
    $('.wrapper').stop().animate({ top: '100vh' }, 300);
}

$('.chevron-down').on('click', () => {
    showWrapper();
});

$('.head').on('touchmove', (e) => {
    e.preventDefault();
    const currentTouchY = e.originalEvent.touches[0].clientY;
    if (currentTouchY > lastTouchY) {
        showWrapper();
        lastTouchY = 0;
    } else {
        lastTouchY = currentTouchY;
    }
});

$('.wrapper').on('touchmove', (e) => {
    e.preventDefault();
    const currentTouchY = e.originalEvent.touches[0].clientY;
    if (currentTouchY < lastTouchY) {
        hideWrapper();
        lastTouchY = 0;
    } else {
        lastTouchY = currentTouchY;
    }
});

$('.head').on('mousewheel', (e) => {
    if (e.originalEvent.wheelDeltaY < 0 && $('.head').offset().top === 0) {
        showWrapper();
    }
});

$('.wrapper').on('mousewheel', (e) => {
    if (e.originalEvent.wheelDeltaY > 0 && $('.wrapper').offset().top === 0) {
        hideWrapper();
    }
});
