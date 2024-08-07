let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter , i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        }, i*80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter , i)=>{
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText,3000);

// circle skill
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
       points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
    }
    elem.innerHTML = points;

    const pointsMarked =elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
       pointsMarked[i].classList.add('marked');
    }
});
// Active menu
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) { }

  menuLi.forEach(sec => sec.classList.remove("active"));

  if (menuLi[len] !== undefined) { // Check if it exists
    menuLi[len].classList.add("active");
  }
}
activeMenu();
window.addEventListener("scroll" , activeMenu);

// Sticky Navbar
const header = document.querySelector("header");
window.addEventListener("scroll" , function(){
  header.classList.toggle("sticky" , window.scrollY > 50)
});

// toggle icon navbar //////////////////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () =>{
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
}
window.onscroll = () =>{
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
}





///////////////////////////////////////////////////

jQuery(document).ready(function(){
  
    jQuery('.skill-1').click(function(){
      jQuery('.skill-target-2').hide();
      jQuery('.skill-target-3').hide();
      jQuery('.skill-target-4').hide();
      jQuery('.skill-target-1').show();
      
      // $('.skill-1').className.add("skillBackgroundcolor");
      // $('.skill-1').className.add("skillBackgroundcolor");
      $('.skill-1').css("background" , "var(--hover-color");
      $('.skill-1').css("color" , "var(--bg-color)");

      $('.skill-2').css("background" , "var(--bg-color)");
      $('.skill-2').css("color" , "var(--hover-color)");

      $('.skill-3').css("background" , "var(--bg-color)");
      $('.skill-3').css("color" , "var(--hover-color)");

      $('.skill-4').css("background" , "var(--bg-color)");
      $('.skill-4').css("color" , "var(--hover-color)");
      // jQuery('#pointstable1'+$(this).attr('target')).show();
    });
    jQuery('.skill-2').click(function(){
      jQuery('.skill-target-1').hide();
      jQuery('.skill-target-3').hide();
      jQuery('.skill-target-4').hide();
      jQuery('.skill-target-2').show();

      $('.skill-2').css("background" , "var(--hover-color");
      $('.skill-2').css("color" , "var(--bg-color)");

      $('.skill-1').css("background" , "var(--bg-color)");
      $('.skill-1').css("color" , "var(--hover-color)");

      $('.skill-3').css("background" , "var(--bg-color)");
      $('.skill-3').css("color" , "var(--hover-color)");

      $('.skill-4').css("background" , "var(--bg-color)");
      $('.skill-4').css("color" , "var(--hover-color)");
      // jQuery('#pointstable1'+$(this).attr('target')).show();
    });
    jQuery('.skill-3').click(function(){
      jQuery('.skill-target-1').hide();
      jQuery('.skill-target-2').hide();
      jQuery('.skill-target-4').hide();
      jQuery('.skill-target-3').show();
  
      $('.skill-3').css("background" , "var(--hover-color");
      $('.skill-3').css("color" , "var(--bg-color)");

      $('.skill-1').css("background" , "var(--bg-color)");
      $('.skill-1').css("color" , "var(--hover-color)");

      $('.skill-2').css("background" , "var(--bg-color)");
      $('.skill-2').css("color" , "var(--hover-color)");

      $('.skill-4').css("background" , "var(--bg-color)");
      $('.skill-4').css("color" , "var(--hover-color)");
      // jQuery('#pointstable1'+$(this).attr('target')).show();
    });
    jQuery('.skill-4').click(function(){
        jQuery('.skill-target-1').hide();
        jQuery('.skill-target-2').hide();
        jQuery('.skill-target-3').hide();
        jQuery('.skill-target-4').show();
    
        $('.skill-4').css("background" , "var(--hover-color");
      $('.skill-4').css("color" , "var(--bg-color)");

        $('.skill-1').css("background" , "var(--bg-color)");
        $('.skill-1').css("color" , "var(--hover-color)");

      $('.skill-2').css("background" , "var(--bg-color)");
      $('.skill-2').css("color" , "var(--hover-color)");

      $('.skill-3').css("background" , "var(--bg-color)");
      $('.skill-3').css("color" , "var(--hover-color)");

        // jQuery('#pointstable1'+$(this).attr('target')).show();
      });
});

////////////////SWIPER SLIDER//////////////////
// $(document).ready(function (){
// $('.swiper-slide').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// })
// });

// $(document).ready(function() {
//   $('#autoWidth').lightSlider({
//       autoWidth:true,
//       loop:true,
//       onSliderLoad: function() {
//           $('#autoWidth').removeClass('cS-hidden');
//       } 
//   });  
// });

/////////////////////// THEME SWITCH  ////////////////////////
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () =>{
  document.body.classList.add("darkmode")
  localStorage.setItem("darkmode" , "active")
}
const disableDarkmode = () =>{
  document.body.classList.remove("darkmode")
  localStorage.setItem("darkmode" , null)
}
if(darkmode === "active") enableDarkmode()
themeSwitch.addEventListener("click" , ()=>{
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})























