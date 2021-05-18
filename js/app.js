/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sec = Array.from(document.querySelectorAll('section'));
console.log(sec)
const nav = document.getElementById('navbar__items');
console.log(nav)
let navItemsNumber = sec.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createNavItems(){
    i = 0
    for (section of sec){
        section_title = section.getAttribute('sec_name')
        section_link = section.getAttribute('id')
    
        // Create Items to Be Appended to the Nav Bar
        section_item = document.createElement('li')        
        section_item.innerHTML = `<a class ='section_link' id="nav_item_${i++}" href = '#${section_link}' >${section_title}<a>`
        // Append Dynamically Nav Bar Items
        nav.appendChild(section_item)

    
    }
}

function sectionInView_port(elem){
    let sectionPosition = elem.getBoundingClientRect();
    console.log(sectionPosition)
    return (sectionPosition.top>=0);
}

function toggleActive(){
   for (section of sec){
       if(sectionInView_port(section)){
           if(! section.classList.contains('active')){
               section.classList.add('active')
               console.log(section)
           }       
        }
       else{
        section.classList.remove('active')
    }

   }
    
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createNavItems()

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', toggleActive)
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


