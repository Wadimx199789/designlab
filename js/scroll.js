const headerTopContainer = document.querySelector(".header__top-container");
const labDesignBlock = document.querySelector(".lab");
const footerMenuLinks = document.querySelectorAll(".footer__menu-link");


function getCoords(block) {
  let box = block.getBoundingClientRect();
  return {
    top: box.top,
    left: box.left
  };
}


window.onscroll = function() {
    // We add pageYOffset for compatibility with IE.
    if (getCoords( headerTopContainer).top > getCoords(labDesignBlock).top ) {
        headerTopContainer.classList.add("active");

    } else {
        headerTopContainer.classList.remove("active");

    }

    getCoords( headerTopContainer).top
};

for (let i = 0; i < footerMenuLinks.length; i++) {

    footerMenuLinks[i].addEventListener('click', function () {

        scrollMenu(this.getAttribute('href'));
    })

}



function scrollMenu(blockId) {
    let temp, start, from, to;
    //scroll animation
    cancelAnimationFrame(temp);
    start = performance.now();
    from = window.pageYOffset || document.documentElement.scrollTop;
    to = document.querySelector(blockId).getBoundingClientRect().top;
    const { height } = document.querySelector(blockId).getBoundingClientRect();

    // if (blockId === "#services") {
    //     to = document.querySelector(blockId).getBoundingClientRect().top - document.body.clientHeight + height;
    // }
    // else {
    to = document.querySelector(blockId).getBoundingClientRect().top;
    // }
    duration = 1000 * Math.abs(to) / 10000;

    // scroll
    requestAnimationFrame(function step(timestamp, e) {
        var progress = (timestamp - start) / duration;
        1 <= progress && (progress = 1);
        window.scrollTo(0, from + to * progress | 0);
        (1 > progress) ? temp = requestAnimationFrame(step) : (document.location.hash = blockId);
        document.addEventListener("wheel", function () {
            cancelAnimationFrame(temp);
        })
    })
}
