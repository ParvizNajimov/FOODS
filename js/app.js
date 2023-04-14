// carousel

const slides = document.querySelectorAll('.offer__slide')
const offer__slider_prev = document.querySelector('.offer__slider-prev')
const offer__slider_next = document.querySelector('.offer__slider-next')
const current = document.querySelector('#current')
const total = document.querySelector('#total')


let slideIndex = 0
showSlides(slideIndex)

function showSlides(n) {
    
    if(slideIndex > slides.length - 1) {
        slideIndex = 0
    }
    if(slideIndex < 0) {
        slideIndex = slides.length - 1
    }

    current.innerHTML = slideIndex + 1

    slides.forEach(el => el.style.display = "none")
    
    slides[slideIndex].style.display = "block"
    slides[slideIndex].classList.add('fade')
   

}


offer__slider_next.onclick = () => {
    slideIndex++

    showSlides(slideIndex)
}
offer__slider_prev.onclick = () => {
    slideIndex--

    showSlides(slideIndex)
}





let tabcontents = document.querySelectorAll('.tabcontent')
let btns = document.querySelectorAll('.tabheader__item')

showTabs()

function showTabs(n = 0) {
    tabcontents.forEach(element => {
        element.style.display = "none"
        element.classList.remove('fade')
    });
    tabcontents[n].classList.add('fade')
    tabcontents[n].style.display = "block"
}


btns.forEach((btn, index) => {
    btn.onclick = () => {
        btns.forEach(el => el.classList.remove('tabheader__item_active'))

        btn.classList.add('tabheader__item_active')
        showTabs(index)
    }
}) 




let call = document.querySelectorAll('.btn')
let modal = document.querySelector('.modaal')
let modal_bg = document.querySelector('.modal_bg')


  call.forEach((i) => {
    i.onclick = () => {
        modal.style.display ='block'   
        modal_bg.style.display ='block'   
     }
  })

  modal_bg.onclick = () => {
    modal.style.display ='none'   
    modal_bg.style.display ='none'   
 }





