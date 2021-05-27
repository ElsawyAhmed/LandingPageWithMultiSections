
/**
 * Define Global Variables
 * 
*/

const sec = document.getElementsByClassName('nav_item');
const nav = document.getElementById('navbar__items');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// firstly convert all sections into array of objects
convertSectionsIntoObjects = (sections)=>{
    var navObjects = []
    for (section of sections){
        let  sectionObj = {
            'name' : section.getAttribute('sec_name'),
            'id' : section.getAttribute('id')
    }
    navObjects.push(sectionObj)
    }
    return navObjects;
}

// map this array of objects into nav items and append them to the nav bar
 createNavItems = (items) =>{
    
    items.map((item, index )=>{
        let newItem = document.createElement('li')
        newItem.innerHTML = `<a href='#${item.id}' class=${item.id}  id="nav_item_${index}">${item.name}</a>`
        nav.appendChild(newItem)
    })
}

// implementing the functionality of deciding which section is to be active
function activateMe(){
   for (section of sec){
        let sectionPosition = section.getBoundingClientRect();
       if(sectionPosition.top<=100){
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
navItems = convertSectionsIntoObjects(sec)
createNavItems(navItems)

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', activateMe)
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


