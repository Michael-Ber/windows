
import postData from "../services/postData";



const form = (select, enable, submitted) => {
    const messageBox = {
        success: "Спасибо, скоро мы с вами свяжемся",
        loading: "Идет загрузка",
        failure: "Что-то пошло не так"
    };

    let statusMessage;

    function bindPostData(formSelector) {
        const form = document.querySelectorAll(formSelector),
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
                if(form.getAttribute('data-end') == '') {
                    console.log(enable);
                    for(let key in select) {
                        formData.append(key, select[key]);
                    }
                }

                postData("./assets/server.php", formData)
                    .then(data => data.text())
                    .then(data => {
                        console.log(data);
                        form.removeChild(statusMessage);
                        getStatus(messageBox.success, form);
                    })
                    .catch(() => {
                        form.removeChild(statusMessage);
                        getStatus(messageBox.failure, form);
                    })
                    .finally(() => {
                        form.reset();
                        removeStatus(form);
                        submitted = true;
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

        function removeStatus(form) {
            setTimeout(() => {
                form.removeChild(statusMessage);
            }, 3000);
        }
    }
    bindPostData('form');
};



export default form;