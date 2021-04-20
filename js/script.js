const swup = new Swup();

//-------------------Navbar buttons tab-------------------------

(() => {
    const navList = document.querySelector('.nav-list');
    
    navList.addEventListener('click', (event) => {
        let targetClasses = event.target.classList
        localStorage.setItem('navbtn', targetClasses);
    })

})();

(() => {
    let clickedNavBtn = localStorage.getItem('navbtn');
    let previousActiveBtn = document.querySelector('.btn.active');
    let previousActiveIcon = document.querySelector('.icon.active')

    previousActiveBtn.classList.remove("active");
    previousActiveIcon.classList.remove("active");

    let clickedClasses = clickedNavBtn.split(" ");

    document.querySelector("."+ clickedClasses[0] + ".btn").classList.add("active");
    document.querySelector("."+ clickedClasses[0] + ".icon").classList.add("active");
})();

//-------------------About Section tabs-------------------------
(() => {

    const expertiseSection = document.querySelector('.expertise-section');
    const tabsContainer = document.querySelector('.about-tabs')

    if(tabsContainer !== null) {
        tabsContainer.addEventListener('click', (event) => {
            let item = event.target;
    
            if(item.classList.contains('tab-item') && !item.classList.contains('active')) {
    
                const target = event.target.getAttribute('data-target')
                //deactivate existing active tab
                tabsContainer.querySelector(".active").classList.remove("active");
    
                //add active to the clicked tab
                item.classList.add("active");
    
                //deactivate existing tab content
                expertiseSection.querySelector('.tab-content.active').classList.remove("active");
    
                //activate new tab-content
                expertiseSection.querySelector(target).classList.add("active");
            }
            
        })
    }
})();

//-------------------Portfolio Section tabs-------------------------
(() => {

    const portfolioSection = document.querySelector('.portfolio-container');
    const filterContainer = document.querySelector('.portfolio-filter');

    if(filterContainer !== null) {
        filterContainer.addEventListener('click', (event) => {
            let item = event.target;
    
            if(item.classList.contains('filter-item') && !item.classList.contains('active')) {
    
                const target = event.target.getAttribute('data-target')
                //deactivate existing active project tab
                filterContainer.querySelector(".active").classList.remove("active");
    
                //add active to the clicked project tab
                item.classList.add("active");
    
                // //deactivate existing active projects
                let activeProjects = document.querySelectorAll('.project-card.active');
                
                [].forEach.call(activeProjects, (project) => {
                    project.classList.remove("active");

                });
                
    
                // //activate new active project(s)
                let newActiveProjects = portfolioSection.querySelectorAll(target);

                [].forEach.call(newActiveProjects, (project) => {
                    project.classList.add("active");
                });
            }
            
        })
    }
})();