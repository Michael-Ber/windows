
const modals = () =>  {
    function bindModal(modalSelector, openSelector, clickToOverlay = true) {
        const modal = document.querySelector(modalSelector),
              openBtn = document.querySelectorAll(openSelector),
              windows = document.querySelectorAll('[data-modal]');

        openBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                windows.forEach(window => {
                    closeModal(window);
                });
                openModal(modal);
            });
        });

        modal.addEventListener('click', (e) => {
            if(e.target.getAttribute('data-close') == '') {
                closeModal(modal);
                windows.forEach(window => {
                    closeModal(window);
                });
            }
            if(clickToOverlay && e.target == modal) {
                closeModal(modal);
                windows.forEach(window => {
                    closeModal(window);
                });
            }
        });

        
    }
    function openModal(modalElement){
        
        modalElement.style.display = 'block';
        document.body.overflow = 'hidden';
    }
    
    function closeModal(modalElement){
        modalElement.style.display = 'none';
        document.body.overflow = '';
    }
    
    function openModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.overflow = 'hidden';
        }, time);
    }


    // openModalByTime('.popup', 60000);
    bindModal('.popup_engineer', '.popup_engineer_btn');
    bindModal('.popup', '.phone_link');
    bindModal('.popup_calc', '.glazing_price_btn');
    bindModal('.popup_calc_profile', '.popup_calc_button', false);
    bindModal('.popup_calc_end', '.popup_calc_profile_button', false);
};
export default modals;