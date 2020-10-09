import "./slider";
import changeModalSelect from "./modules/changeModalSelect";
import modals from "./modules/modal";
import form from "./modules/form";
import tabs from "./modules/tabs";


window.addEventListener('DOMContentLoaded', () => {

    let modalSelect = {},
        enable = {
            perm1: false,
            perm2: false, 
            perm3: false,
            perm4: false
        };
    changeModalSelect(modalSelect, enable);
    
    modals(enable);
    form(modalSelect, enable);
    tabs('.glazing_block','.glazing_slider', '.glazing_content', 'active');
    tabs('.decoration_item_link', '.decoration_slider', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons_img', '.balcon_icons', '.big_img > img','do_image_more', 'inline-block');
    
});