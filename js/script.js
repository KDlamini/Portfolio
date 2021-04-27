//-------------------Navbar buttons tab-------------------------

(() => {
    const navList = document.querySelector('.nav-list');
    const allPages = document.querySelector('.all-pages');
    
    navList.addEventListener('click', (event) => {
        let item = event.target;
        
        if(item.classList.contains('btn') || item.classList.contains('icon') && !item.classList.contains('active')) {
            let targetMainClass = item.classList[0];

            //deactivate existing active nav
            navList.querySelector(".btn.active").classList.remove("active");
            navList.querySelector(".icon.active").classList.remove("active");

            //add active to the clicked nav
            navList.querySelector("."+targetMainClass+".btn").classList.add("active");
            navList.querySelector("."+targetMainClass+".icon").classList.add("active");

            //deactivate existing page content
            allPages.querySelector('.page.active').classList.remove("active");

            if(allPages.querySelector('#technical_skills.page').classList.contains("active")) {
                allPages.querySelector('#technical_skills.page').classList.remove("active");
            }

            //activate new page content
            allPages.querySelector("#"+targetMainClass+ ".page").classList.add("active");

            if(targetMainClass === "info") {
                allPages.querySelector('#technical_skills.page').classList.add("active");
            }
        }
    })

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