

// FOR FOOTER YEAR

const date = new Date();
const currentYear = date.getFullYear();


const footerYear = document.querySelector('.year');
footerYear.textContent = currentYear;

// FOR MOBILE NAV

const btnNavEL = document.querySelector(' .btnMobileNav');
const headerEL = document.querySelector(' .header');
btnNavEL.addEventListener('click', function() {
    headerEL.classList.toggle('navOpen');
})


function addNumber (num1, num2) {
    return num1 + num2
}
console.log(addNumber(60, 40));






// ADDING SCROLL EFFECT ON PAGE

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link){
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = link.getAttribute('href');

        //SCROLLING TO THE TOP

        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }


        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: 'smooth'});
            headerEL.classList.toggle('navOpen');
        }
    })
})   
// FOR THE STICKY NAVIGATION
const sectionHero = document.querySelector('.sectionHero');


//OBSERVE THE WEB PAGE
const obs = new IntersectionObserver(function(entries){
    const entry = entries[0];
    if (entry.isIntersecting === false) {
        document.body.classList.add('sticky');
    }

    if (entry.isIntersecting === true) {
        document.body.classList.remove('sticky');
    }
  
}, {
    root: null,
    threshold: 0,
    rootMargin: '-80px'
});
obs.observe(sectionHero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();