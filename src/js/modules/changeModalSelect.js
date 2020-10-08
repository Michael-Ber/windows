
const changeModalSelect = (select) => {

    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');


    checkInput(windowWidth);
    checkInput(windowHeight);

    bindWindowData(windowForm, 'click', 'form');
    bindWindowData(windowWidth, 'input', 'width');
    bindWindowData(windowHeight, 'input', 'height');
    bindWindowData(windowProfile, 'change', 'profile');
    bindWindowData(windowType, 'change', 'type');
    

    function bindWindowData(elem, event, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        select[prop] = i;
                        break;
                    case 'INPUT' :
                        if(item.getAttribute('type') == 'checkbox') {
                            i === 0 ? select[prop] = "Холодное" : select[prop] = "Теплое";
                            elem.forEach((element, j) => {
                                element.checked = false;
                                if(i == j) {
                                    element.checked = true;
                                }
                            });
                        }else {
                            select[prop] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        select[prop] = item.value;
                        console.log(select);
                        break;   
                }
            });
           
            
        });
    }



    function checkInput(inputElement) {
        inputElement.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/ig, "");
            });
        });
    }   

    // open & close modals      
  


    // pictures in modalCalc

    // hideTabContent(bigImgParent.children, calcIcons, 'do_image_more');
    // showTabContent(bigImgParent.children, calcIcons, 'do_image_more');

    // calcIcons.forEach(icon => {
    //     icon.style.cursor = 'pointer';
    // });

    // calcIconsParent.addEventListener('click', (e) => {
    //     const target = e.target;
    //     if(target && target.classList.contains('.balcon_icons_img'.replace(/\./, "")) || 
    //         target.parentNode.classList.contains('.balcon_icons_img'.replace(/\./, ""))) {
    //             calcIcons.forEach((icon, i) => {
    //                 if(target == icon || target.parentNode == icon) {
    //                     hideTabContent(bigImgParent.children, calcIcons, 'do_image_more');
    //                     showTabContent(bigImgParent.children, calcIcons, 'do_image_more', i);
    //                     // typeOfBalcony = target.getAttribute('alt');
    //                     dataObj['форма балкона'] = target.getAttribute('alt');
    //                 }
    //             });
    //         }
    // });

    // Inputs in modalCalc


    

    //checkboxes in modalProfile

    // checkBoxes.forEach((checkbox, i) => {
    //     checkbox.addEventListener('click', () => {
    //         removeCheckbox();
    //         checkbox.checked = true;
    //     });
    // });

    // function removeCheckbox() {
    //     checkBoxes.forEach(checkbox => {
    //         checkbox.checked = false;
    //     });
    // }

    //Next Buttons

    // calcNextBtn.addEventListener('click', () => {
    //     if(widthInput.value && heightInput.value) {
    //         closeModal(modalCalc);
    //         openModal(modalProfile);
    //         // resCalc = widthInput.value * heightInput.value;
    //         dataObj['размеры'] = widthInput.value * heightInput.value;
    //         widthInput.value = '';
    //         heightInput.value = '';
    //     }
    // });

    // profileNextBtn.addEventListener('click', () => {
    //     checkBoxes.forEach(checkbox => {
    //         if(checkbox.checked) {
    //             closeModal(modalProfile);
    //             openModal(modalEnd);
    //             // typeOfGlazing = glazingType.value;
    //             // profileOfGlazing = checkbox.nextElementSibling.getAttribute('id');
    //             dataObj['тип остекления'] = glazingType.value;
    //             dataObj['профиль'] = checkbox.nextElementSibling.getAttribute('id');
                
    //             document.querySelector('.popup_calc_end form').addEventListener('submit', () => {
    //                 postDataJSON('./assets/server1.php', dataObj)
    //                 .then(data => data.text())
    //                 .then(data => console.log(data))
    //                 .catch(() => console.log('error'));
       
    //             });

    //         }
    //     });
    // });


};

export default changeModalSelect;