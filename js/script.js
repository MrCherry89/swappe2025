
function switchTab(index) {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
      contents[i].classList.toggle('active', i === index);
    });
  }

  const swiper = new Swiper(".businessSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    on: {
      init: function () {
        togglePagination(this);
      },
      resize: function () {
        togglePagination(this);
      },
    },
  });
  
  function togglePagination(swiperInstance) {
    if (window.innerWidth >= 768) {
      if (swiperInstance.pagination.el) {
        swiperInstance.pagination.el.style.display = 'none';
      }
    } else {
      if (swiperInstance.pagination.el) {
        swiperInstance.pagination.el.style.display = 'block';
      }
    }
  }
  

  $(".drop-menu-main").on("click", function(){
    $(".menu-wrap-main").addClass("open");
    $("html, body").addClass("overflow");
  })

  $(".menu-wrap-main .close-menu").on("click", function(){
    $(".menu-wrap-main").removeClass("open");
    $("html, body").removeClass("overflow");
  })

  $(".favorite").on("click", function(){
    $(this).toggleClass("open");
  })

  function copyToClipboard() {
    const linkText = document.getElementById('refLink').innerText;
    navigator.clipboard.writeText(linkText).then(() => {
        alert('Ссылка скопирована!');
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
    });
}

const tabButtons = document.querySelectorAll('.private-police-wrap .tab-button');
const tabContents = document.querySelectorAll('.private-police-wrap .tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Сброс активных классов
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Добавляем активный класс
    button.classList.add('active');
    const target = document.getElementById(button.dataset.tab);
    target.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const switchElement = document.getElementById('mySwitch');
  if (switchElement) {
    switchElement.addEventListener('click', () => {
      switchElement.classList.toggle('active');
    });
  } else {
    console.warn('Элемент с id="mySwitch" не найден');
  }
});

$(".not-icon").on("click", function(e) {
  e.preventDefault();
  e.stopPropagation(); // предотвращаем всплытие
  $(".notifications").toggleClass("show");
});

// Закрытие при клике вне блока .notifications
$(document).on("click", function(e) {
  if (!$(e.target).closest('.notifications').length) {
    $(".notifications").removeClass("show");
  }
});

// Не закрывать при клике внутри .notifications
$(".notifications").on("click", function(e) {
  e.stopPropagation();
});

$(".notifications .top-mob .back").on("click", function(e) {
  e.preventDefault();
  $(".notifications").removeClass("show");
});

$(".filter-btn").on("click", function(e) {
  e.preventDefault();
  $(".search-filter-wrap").addClass("show");
  $("body, html").addClass("overflow");
});

$(".search-filter-wrap .close").on("click", function() {
  $(".search-filter-wrap").removeClass("show");
  $("body, html").removeClass("overflow");
});

function setupSlider(sliderId, minId, maxId) {
  const container = document.getElementById(sliderId);
  const minOutput = document.getElementById(minId);
  const maxOutput = document.getElementById(maxId);

  if (!container || !minOutput || !maxOutput) {
    console.warn(`Не найден один из элементов: ${sliderId}, ${minId}, ${maxId}`);
    return;
  }

  const inputs = container.querySelectorAll('input');
  const track = container.querySelector('.slider-track');

  if (inputs.length < 2 || !track) {
    console.warn(`Недостаточно input'ов или отсутствует .slider-track в #${sliderId}`);
    return;
  }

  const input1 = inputs[0];
  const input2 = inputs[1];

  function updateTrack() {
    let min = parseInt(input1.value);
    let max = parseInt(input2.value);
    if (min > max) [min, max] = [max, min];

    minOutput.textContent = '₽' + min;
    maxOutput.textContent = '₽' + max;

    const percent1 = (min / 100000) * 100;
    const percent2 = (max / 100000) * 100;

    track.style.left = percent1 + '%';
    track.style.width = (percent2 - percent1) + '%';
    track.style.background = '#1e4023';
  }

  input1.addEventListener('input', updateTrack);
  input2.addEventListener('input', updateTrack);

  updateTrack(); // Initial position
}

const thumbsSwiper = new Swiper('.thumbs', {
  slidesPerView: 3,
  spaceBetween: 10,
  watchSlidesProgress: true,
});

// Основной слайдер
const mainSwiper = new Swiper('.main-slider', {
  spaceBetween: 10,
  speed: 500, // Плавность переключения — 500 мс
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: thumbsSwiper,
  },
});