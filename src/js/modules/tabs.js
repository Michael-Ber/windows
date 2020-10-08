

const tabs = (tabItemSelector, tabParentSelector, tabContentSelector, activeClass, display = 'block') => {

    const tabItem = document.querySelectorAll(tabItemSelector),
            tabParent = document.querySelector(tabParentSelector),
            tabContent = document.querySelectorAll(tabContentSelector);

    hideTabContent(tabContent, tabItem, activeClass);
    showTabContent(tabContent, tabItem, activeClass);

    tabParent.addEventListener('click', (e) => {
        const target = e.target;
        if(target && (target.classList.contains(tabItemSelector.replace(/\./, "")) || 
        target.parentNode.classList.contains(tabItemSelector.replace(/\./, "")))) {
            tabItem.forEach((item, i) => {
                if(target && (target == item || target.parentNode == item)) {
                    hideTabContent(tabContent, tabItem, activeClass);
                    showTabContent(tabContent, tabItem, activeClass ,i);  
                }
            });
        }
        
    });

    function showTabContent(content, item, activeClass, i=0) {
        content[i].style.display = display;
        item[i].classList.add(activeClass);
    }
    
    function hideTabContent(content, item, activeClass) {
        item.forEach(item => {
            item.classList.remove(activeClass);
        });
        content.forEach(item => {
            item.style.display = 'none';
        });
        
    }
    

};

export default tabs;