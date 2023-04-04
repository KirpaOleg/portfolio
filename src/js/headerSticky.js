/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

/**
 * header sticky & go to top
 */

const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 10) {
    header.classList.add('active');
    goTopBtn.classList.add('active');
  } else {
    header.classList.remove('active');
    goTopBtn.classList.remove('active');
  }
});
