import {openModal, closeModal} from "./modal";
import {showTabContent, hideTabContent} from "./tabs";
import postData from "../services/postData";


const calculator = () => {
    const trigger = document.querySelectorAll('.glazing_price_btn'),
          modalCalc = document.querySelector('.popup_calc'),
          modalProfile = document.querySelector('.popup_calc_profile'),
          modalEnd = document.querySelector('.popup_calc_end'),
          closeCalc = document.querySelector('.popup_calc_close'),
          closeProfile = document.querySelector('.popup_calc_profile_close'),
          closeEnd = document.querySelector('.popup_calc_end_close'),
          calcIconsParent = document.querySelector('.balcon_icons'),
          calcIcons = document.querySelectorAll('.balcon_icons_img'),
          bigImgParent = document.querySelector('.big_img'),
          widthInput = document.querySelector('#width'),
          heightInput = document.querySelector('#height'),
          calcNextBtn = document.querySelector('.popup_calc_button'),
          profileNextBtn = document.querySelector('.popup_calc_profile_button'),
          checkBoxes = document.querySelectorAll('.checkbox'),
          glazingType = document.querySelector('#view_type');

    let resCalc, typeOfBalcony, typeOfGlazing, profileOfGlazing;

    let dataObj = {
        'размеры': resCalc,
        'форма балкона': typeOfBalcony,
        'тип остекления': typeOfGlazing,
        'профиль': profileOfGlazing
    };


    // open & close modals      
    trigger.forEach(button => {
        button.addEventListener('click', () => {
            openModal(modalCalc);
        });
    });

    closeModalTemp(closeCalc, modalCalc);
    closeModalTemp(closeProfile, modalProfile);
    closeModalTemp(closeEnd, modalEnd);

    function closeModalTemp(btn, modalElement) {
        btn.addEventListener('click', () => {
            closeModal(modalElement);
        });
    }

    // pictures in modalCalc

    hideTabContent(bigImgParent.children, calcIcons, 'do_image_more');
    showTabContent(bigImgParent.children, calcIcons, 'do_image_more');

    calcIcons.forEach(icon => {
        icon.style.cursor = 'pointer';
    });

    calcIconsParent.addEventListener('click', (e) => {
        const target = e.target;
        if(target && target.classList.contains('.balcon_icons_img'.replace(/\./, "")) || 
            target.parentNode.classList.contains('.balcon_icons_img'.replace(/\./, ""))) {
                calcIcons.forEach((icon, i) => {
                    if(target == icon || target.parentNode == icon) {
                        hideTabContent(bigImgParent.children, calcIcons, 'do_image_more');
                        showTabContent(bigImgParent.children, calcIcons, 'do_image_more', i);
                        typeOfBalcony = target.getAttribute('alt');
                    }
                });
            }
    });

    // Inputs in modalCalc

    checkInput(widthInput);
    checkInput(heightInput);

    function checkInput(inputElement) {
        inputElement.addEventListener('input', () => {
            inputElement.value = inputElement.value.replace(/\D/ig, "");
        });
    }

    //checkboxes in modalProfile

    checkBoxes.forEach((checkbox, i) => {
        checkbox.addEventListener('click', () => {
            removeCheckbox();
            checkbox.checked = true;
        });
    });

    function removeCheckbox() {
        checkBoxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    }

    //Next Buttons

    calcNextBtn.addEventListener('click', () => {
        if(widthInput.value && heightInput.value) {
            closeModal(modalCalc);
            openModal(modalProfile);
            resCalc = widthInput.value * heightInput.value;
            widthInput.value = '';
            heightInput.value = '';
        }
    });

    profileNextBtn.addEventListener('click', () => {
        checkBoxes.forEach(checkbox => {
            if(checkbox.checked) {
                closeModal(modalProfile);
                openModal(modalEnd);
                typeOfGlazing = glazingType.value;
                profileOfGlazing = checkbox.nextElementSibling.getAttribute('id');
                console.log(Object.entries(dataObj));
            }
        });
    });

    //form sending

    document.querySelector('.popup_calc_end form').addEventListener('submit', () => {
        postData("./assets/server.php", dataObj)
        .then(data => data.text())
        .then(data => console.log(data));
    });


};

export default calculator;