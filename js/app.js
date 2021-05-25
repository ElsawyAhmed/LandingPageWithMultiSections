
/**
 * Define Global Variables
 * 
*/

const sec = document.querySelectorAll('section');
// console.log(sec)
console.log(document.querySelectorAll('section')[0])
const nav = document.getElementById('navbar__items');
// console.log(nav)
let navItemsNumber = sec.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
 createNavItems = () =>{
    
    for (i = 0; i<sec.length; i++){
        section_title = sec[i].getAttribute('sec_name')
        console.log("section title", section_title)
        section_link = sec[i].getAttribute('id')
        // Create Items to Be Appended to the Nav Bar
        section_item = document.createElement('li')        
        section_item.innerHTML = `<a class ='section_link' id="nav_item_${i}" href = '#${section_link}' >${section_title}<a>`
        // Append Dynamically Nav Bar Items
        nav.appendChild(section_item)
    }
}

activeSection = (section) =>{
    let sectionPosition = section.getBoundingClientRect();
    return (sectionPosition.top<=100);
}

function toggleActive(){
   for (section of sec){
       if(activeSection(section)){
           if(! section.classList.contains('active')){
               section.classList.add('active')
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


