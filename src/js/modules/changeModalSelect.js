

const changeModalSelect = (select, enable) => {

    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');


    checkInput(windowWidth, 'perm2');
    checkInput(windowHeight, 'perm3');

    bindWindowData(windowForm, 'click', 'form');
    bindWindowData(windowWidth, 'input', 'width');
    bindWindowData(windowHeight, 'input', 'height');
    bindWindowData(windowProfile, 'change', 'profile');
    bindWindowData(windowType, 'change', 'type');

    
    windowType.forEach(item => {
        select['type'] = item.value;
    });

    windowForm.forEach((item, i) => {
        if(item.classList.contains('do_image_more')) {
            enable.perm1 = true;
        }
    });

    function bindWindowData(elem, event, prop) {
        elem.forEach((item, i) => {
            
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        enable.perm1 = true;
                        select[prop] = i;
                        break;

                    case 'INPUT' :
                        if(item.getAttribute('type') == 'checkbox') {
                            i === 0 ? select[prop] = "Холодное" : select[prop] = "Теплое";
                            elem.forEach((element, j) => {
                                element.checked = false;
                                if(i == j) {
                                    element.checked = true;
                                    enable.perm4 = true;
                                }
                            });
                        }else {
                            select[prop] = item.value;
                        }
                        break;

                    case 'SELECT' :
                        select[prop] = item.value;
                        break;   
                }
            });
        });
    }

    function checkInput(inputElement, enableProp) {
        inputElement.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/ig, "");
                if(item.value) {
                    enable[enableProp] = true;
                }
            });
            
        }); 
    }
};

export default changeModalSelect;