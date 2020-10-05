import postData from "../services/postData";

const form = () => {
    const messageBox = {
        success: "Спасибо, скоро мы с вами свяжемся",
        loading: "./assets/slick/ajax-loader.gif",
        failure: "Что-то пошло не так"
    };
    function bindPostData(formSelector) {
        const form = document.querySelectorAll(formSelector);
    
        form.forEach(form => {
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                let div = document.createElement('div');
                div.classList.add('form_loading');
                div.innerHTML = `
                    <img src=${messageBox.loading}>
                `;
                form.append(div);

                const formData = new FormData(form);

                postData("./assets/server.php", formData)
                    .then(data => data.text())
                    .then(data => {
                        console.log(data);
                        form.removeChild(div);
                        showThanksModal('.popup', messageBox.success);
                        showThanksModal('.popup_engineer', messageBox.success);
                    })
                    .catch(() => {
                        console.log('error');
                        showThanksModal('.popup', messageBox.failure);
                        showThanksModal('.popup_engineer', messageBox.failure);
                    })
                    .finally(() => {
                        form.reset();
                    });
            });
            
        });
    }

    function showThanksModal(parentSelector, message) {
        const parElement = document.querySelector(parentSelector);
        const prevModalDialog = parElement.querySelector('.popup_dialog');
        prevModalDialog.style.display = 'none';
        let div = document.createElement('div');
        div.classList.add('popup_dialog');
        div.innerHTML = `
            <div class="popup_content text-center">
                <button type="button" class="popup_close"><strong>&times;</strong></button>
                <h2>${message}</h2>
            </div>
        `;
        document.querySelector(parentSelector).append(div);
        setTimeout(() => {
            prevModalDialog.style.display = 'block';
            document.querySelector(parentSelector).removeChild(div);
        }, 15000);
    }
    bindPostData('form');
};

export default form;