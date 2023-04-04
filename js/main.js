const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus' ,function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
//반대로 블러 되게 코드 작성 (통합검색 글씨 사라지게 하기)
searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});




const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500){
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6 , {
      opacity:0,
      display:'none'
    });
  }else {
    //배지 보이기
    gsap.to(badgeEl, .6 , {
      opacity:1,
      display:'block'
    });
  }
}, 300));
// _.throttle(함수, 시간) 

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1)*.7,
    opacity:1
  });
});

//공지사항  new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction:'vertical',
  autoplay:true,
  loop:true //반복재생여부
});

new Swiper('.promotion .swiper-container', {
  slidsPreView:3,//한번에 보여줄 슬라이드 개수
  spaceBetween:10,// 슬라이드 사이 여백
  centeredSlides:true,//1번 슬라이드가 가운데 보이기
  loop:true,
  autoplay: {
    delay:5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', 
    clickable: true,
  },
  navigation:{
    prevEl:'.promtion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});