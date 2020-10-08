import postData from "../services/postData";

const form = () => {
    const messageBox = {
        success: "Спасибо, скоро мы с вами свяжемся",
        loading: "Идет загрузка",
        failure: "Что-то пошло не так"
    };
    let statusMessage;
    function bindPostData(formSelector) {
        const form = document.querySelectorAll(formSelector),
              inputs = document.querySelectorAll('input'),
              phoneInputs = document.querySelectorAll('input[name="user_phone"]');
        
        phoneInputs.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/\D/ig, '');
            });
            
        });

        form.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                

                getStatus(messageBox.loading, form);
                const formData = new FormData(form);

                postData("./assets/server.php", formData)
                    .then(data => data.text())
                    .then(data => {
                        console.log(data);
                        form.removeChild(statusMessage);
                        getStatus(messageBox.success, form);
                        // showThanksModal('.popup', messageBox.success);
                        // showThanksModal('.popup_engineer', messageBox.success);
                        // showThanksModal('.popup_calc_end', messageBox.success);
                    })
                    .catch(() => {
                        form.removeChild(statusMessage);
                        getStatus(messageBox.failure, form);
                        // showThanksModal('.popup', messageBox.failure);
                        // showThanksModal('.popup_engineer', messageBox.failure);
                        // showThanksModal('.popup_calc_end', messageBox.failure);
                    })
                    .finally(() => {
                        form.reset();
                        form.removeChild(statusMessage);
                    });
            });
        });

        function getStatus(message, form) {
            statusMessage = document.createElement('div');
            statusMessage.classList.add('form_status');
            
            statusMessage.innerHTML = `
                <span>${message}</span>
            `;
            form.append(statusMessage);
        }

    }

    // function showThanksModal(parentSelector, message) {
    //     const parElement = document.querySelector(parentSelector);
    //     const prevModalDialog = parElement.querySelector('.popup_dialog');
    //     openModal(document.querySelector('.popup_engineer'));
    //     prevModalDialog.style.display = 'none';
    //     let thanksModal = document.createElement('div');
    //     thanksModal.classList.add('popup_dialog');
    //     thanksModal.innerHTML = `
    //         <div class="popup_content text-center">
    //             <button type="button" class="popup_close"><strong data-close>&times;</strong></button>
    //             <h3 class="statusMes">${message}</h3>
    //         </div>
    //     `;
    //     document.querySelector(parentSelector).append(thanksModal);
    //     setTimeout(() => {
    //         prevModalDialog.style.display = 'block';
    //         closeModal(document.querySelector('.popup'));
    //         closeModal(document.querySelector('.popup_engineer'));
    //         document.querySelector(parentSelector).removeChild(thanksModal);
    //     }, 3000);
    // }
    
    bindPostData('form');
};

export default form;