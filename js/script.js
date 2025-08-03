
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