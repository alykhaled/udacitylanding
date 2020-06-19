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

const navbar = document.querySelector("#navbar__list");
let sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function main()
{

    // build the nav
    for (item of sections) {
        const element = item.querySelector("h2").innerHTML;
        let nav = document.createElement("li");
        nav.innerHTML = element;
        nav.className = "menu__link"
        nav.id = element.replace(/\s/g, '').toLowerCase()+"nav";
        navbar.appendChild(nav);
    }

    // Add class 'active' to section when near top of viewport

    // Scroll to anchor ID using scrollTO event
}

function goTo(evt) {
    let ig = document.getElementById(evt.target.innerHTML.replace(/\s/g, '').toLowerCase());
    ig.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
main();
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
navbar.addEventListener('click', goTo);

// Set sections as active

function Active() {
	
    for (let item of sections) {
        
        window.addEventListener('scroll', function (e) {
            e.preventDefault();
            let boundries = item.getBoundingClientRect();
            
            if (boundries.top <= 50 && boundries.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&boundries.right <=(window.innerWidth || document.documentElement.clientWidth))
            {
                item.classList.add('your-active-class');
                
            }
            else{
                item.classList.remove('your-active-class');
               
            }
            navbar.style.display = "block";
            setTimeout(function(){ navbar.style.display = "none";      }, 3000);
           
        });

    };

}

Active()	

