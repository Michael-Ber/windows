const tabs = () => {

    function bindTabs(tabItemSelector, tabParentSelector, tabContentSelector, activeClass) {
        const tabItem = document.querySelectorAll(tabItemSelector),
              tabParent = document.querySelector(tabParentSelector),
              tabContent = document.querySelectorAll(tabContentSelector);
  
        hideTabContent();
        showTabContent();

        tabParent.addEventListener('click', (e) => {
            const target = e.target;
            tabItem.forEach((item, i) => {
                if(target && (target == item || target.parentNode == item)) {
                    hideTabContent();
                    showTabContent(i);  
                }
            });
        });

        function showTabContent(i=0) {
            tabContent[i].style.display = "block";
            tabItem[i].classList.add(activeClass);
        }

        function hideTabContent() {
            tabItem.forEach(item => {
                item.classList.remove(activeClass);
            });
            tabContent.forEach(item => {
                item.style.display = 'none';
            });
           
        }
    }

    bindTabs('.glazing_block','.glazing_slider', '.glazing_content', 'active');
    
    bindTabs('.decoration_item_link', '.decoration_slider', '.decoration_content > div > div', 'after_click');
};

export default tabs;