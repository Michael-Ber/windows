import resetInputs from "./resetInputs";

const modals = (enable) =>  {
    console.log(enable);
    const bindModal = (modalSelector, openSelector, enable, clickToOverlay = true) => {
        const modal = document.querySelector(modalSelector),
              openBtn = document.querySelectorAll(openSelector),
              windows = document.querySelectorAll('[data-modal]');
        
        openBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                if(!enable) {
                    windows.forEach(window => {
                        closeModal(window);
                    });
                    openModal(modal);
                }else if((enable.perm1 && enable.perm2 && enable.perm3) || enable.perm4) {
                    windows.forEach(window => {
                        closeModal(window);
                    });
                    openModal(modal);
                    moveToNull();
                    resetInputs();
                }else {
                    console.log('error');
                }
                
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

        
    };

    function moveToNull() {
        for(let key in enable) {
            enable[key] = false;
        }
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
    bindModal('.popup_engineer', '.popup_engineer_btn', null);
    bindModal('.popup', '.phone_link', null);
    bindModal('.popup_calc', '.glazing_price_btn', null);
    bindModal('.popup_calc_profile', '.popup_calc_button', enable, false);
    bindModal('.popup_calc_end', '.popup_calc_profile_button', enable, false);
};

function closeModalWhenSubmitted(modalElement) {
    setTimeout(() => {
        modalElement.forEach(window => {
            window.style.display = 'none';
            document.body.overflow = '';
        });
    }, 3000);
    
}

export default modals;
export {closeModalWhenSubmitted};