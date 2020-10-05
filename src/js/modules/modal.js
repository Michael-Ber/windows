const modals = () =>  {
    function bindModal(modalSelector, openSelector, closeSelector) {
        const modal = document.querySelector(modalSelector),
              openBtn = document.querySelectorAll(openSelector),
              closeBtn = modal.querySelector(closeSelector);

        openBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'block';
                document.body.overflow = 'hidden';
            });
        });

        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'none';
            document.body.overflow = '';
  
        });



        modal.addEventListener('click', (e) => {
            if(e.target && e.target == modal) {
                console.log(e.target);
                modal.style.display = 'none';
                document.body.overflow = '';
            }
        });
    }
    
    function openModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.overflow = 'hidden';
        }, time);
    }

    openModalByTime('.popup', 60000);
    bindModal('.popup_engineer', '.popup_engineer_btn', '.popup_close');
    bindModal('.popup', '.phone_link','.popup_close');
};
export default modals;