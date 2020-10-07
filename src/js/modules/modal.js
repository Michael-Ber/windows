const openModal = (modalElement) => {
    modalElement.style.display = 'block';
    document.body.overflow = 'hidden';
};

const closeModal = (modalElement) => {
    modalElement.style.display = 'none';
    document.body.overflow = '';
};
const modals = () =>  {
    function bindModal(modalSelector, openSelector) {
        const modal = document.querySelector(modalSelector),
              openBtn = document.querySelectorAll(openSelector);

        openBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(modal);
            });
        });

        modal.addEventListener('click', (e) => {
            if(e.target == modal || e.target.getAttribute('data-close') == '') {
                closeModal(modal);
            }
        });
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
};
export default modals;
export {openModal, closeModal};