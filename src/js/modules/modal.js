const modal = ({modalSelector, openSelector, closeSelector}) =>  {
    const modal = document.querySelector(modalSelector),
          openBtn = document.querySelector(openSelector),
          closeBtn = modal.querySelector(closeSelector);
    openBtn.addEventListener('click', (e) => openModal(modal, e));
    closeBtn.addEventListener('click', () => closeModal(modal));

    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal(modal);
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.code == 'Escape') {
            closeModal(modal);
        }
    });

    if(modalSelector == '.popup') {
        setTimeout(() => {
            openModal(modal);
        }, 60000);
    }

    function openModal(modal, e=1) {
        if(e != 1) {
            e.preventDefault();
        }
        modal.classList.add('show');
        modal.classList.remove('hide');
    }

    function closeModal(modal) {
            modal.classList.add('hide');
            modal.classList.remove('show');
    }
    
}
export default modal;
