
        window.addEventListener("scroll", () =>{
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0)
        })
    
    
    
        const toggleBtn = document.getElementsByClassName('toggle-btn')[0]
        const navLinks = document.getElementsByClassName('links')[0]
        console.log(navLinks)
        toggleBtn.addEventListener('click', () =>{
            navLinks.classList.toggle('active')
        })


        // animation
         // Target element
    const scrollOffset = 200;
    const scrollElement = document.querySelector(".gmail-icon");
    // Detecting when elemnt is in view
    const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset));
    };
    //Assign class name to element
    const displayScrollElement = () => {
        scrollElement.classList.add('bounceDown');
    }

    const hideScrollElement = () => {
        scrollElement.classList.remove('bounceDown');
    }

    //Method to call element
    const handleScrollAnimation = () => {
        if (elementInView(scrollElement, scrollOffset)) {
            displayScrollElement();
        } else {
            hideScrollElement();
        }
    }
    //Finally we pass method into scroll on the window
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    })
        
        
    