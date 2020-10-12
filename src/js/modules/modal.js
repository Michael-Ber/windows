import resetInputs from "./resetInputs";

const modals = (enable) =>  {
    console.log(enable);
    const bindModal = (modalSelector, openSelector, enable, clickToOverlay = true) => {
        const modal = document.querySelector(modalSelector),
              openBtn = document.querySelectorAll(openSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scrollWidth = getScrollWidth();
        
        openBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                if(!enable) {
                    // clearTimeout(timerId);
                    windows.forEach(window => {
                        closeModal(window);
                    });
                    openModal(modal);
                    document.body.style.marginRight = `${scrollWidth}px`;
                }else if((enable.perm1 && enable.perm2 && enable.perm3) || enable.perm4) {
                    // clearTimeout(timerId);
                    windows.forEach(window => {
                        closeModal(window);
                    });
                    openModal(modal);
                    document.body.style.marginRight = `${scrollWidth}px`;
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
                document.body.style.marginRight = `0`;
                windows.forEach(window => {
                    closeModal(window);
                });
            }
            if(clickToOverlay && e.target == modal) {
                closeModal(modal);
                document.body.style.marginRight = `0`;
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
        clearTimeout(timerId);
        modalElement.style.display = 'block';
        document.body.style.overflow = 'hidden'; // экран прыгает из-за полосы прокрутки
    }
    
    function closeModal(modalElement){
        modalElement.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    function openModalByTime(selector, time) {
        let timerId = setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${getScrollWidth()}px`;
        }, time);
        return timerId;
    }

    function getScrollWidth() {
        let div = document.createElement('div');
        div.style.width = `${50}px`;
        div.style.height = `${50}px`;
        div.style.overflowY = `scroll`;
        div.style.visibility = `hidden`;
        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    let timerId = openModalByTime('.popup', 60000);
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
            document.body.style.overflow = '';
            document.body.style.marginRight = `0`;
        });
    }, 3000);
    
}

export default modals;
export {closeModalWhenSubmitted};