/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the blur-header class to the header tag
   this.scrollY >= 50 ? header.classList.add('blur-header')
                      : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
        const scrollY = window.pageYOffset

        sections.forEach(current =>{
                const sectionHeight = current.offsetHeight,
                        sectionTop = current.offsetTop - 58,
                        sectionId = current.getAttribute('id'),
                        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    sectionsClass.classList.add('active-link')
                }else{
                    sectionsClass.classList.remove('active-link')
                }
        })
}
window.addEventListener('scroll', scrollActive)

/*--------------- EMAIL JS ---------------*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message'),
contactUser = document.getElementById('contact-user')

const sendEmail = (e) =>{
e.preventDefault()

// Check if the field has a value
if(contactUser.value === ''){
  // Add and remove color
  contactMessage.classList.remove('color-green')
  contactMessage.classList.add('color-red')

  // Show message
  contactMessage.textContent = 'You must enter your email ☝'

  //Remove message three after seconds
  setTimeout(() =>{
      contactMessage.textContent = ''
  }, 3000)
} else{
  // serviceID - templateID - #form - publickey
  emailjs.sendForm('service_syzvdip','template_n6fh9bu','#contact-form','34-r2Pl96grRxQLT6')
      .then(() =>{
          // Show message and add color
          contactMessage.classList.add('color-green')
          contactMessage.textContent = 'You registered seccessfully'

          // Remove message after three seconds
          setTimeout(() =>{
              contactMessage.textContent = ''
          }, 3000)
      }, (error) =>{
          // Mail sending error
          alert('OOPS! SOMETHING WENT WRONG...', error)
      })
  
  // To clear the input field
  contactUser.value = ''
}
}

contactForm.addEventListener('submit', sendEmail)

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured_content', {
	selectors: {
		target: '.featured_card'
	},
	animation: {
		duration: 300
	}
});

	

	/* Link active featured */ 
	const linkFeatured = document.querySelectorAll('.featured_item')
	
	function activeFeatured(){
		linkFeatured.forEach(l=> l.classList.remove('active-featured'))
		this.classList.add('active-featured')
	}
	linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
   // reset: true //animation repeat
})

sr.reveal(`.home__data, .explore__data, .explore__user`)
sr.reveal(`.home__card`, {delay: 600, distance: '100px', interval: 100})
sr.reveal(`.about__data, .join__image`, {origin: 'right'})
sr.reveal(`.about__image, .join__data`, {origin: 'left'})
sr.reveal(`.popular__card`, {interval: 200})
