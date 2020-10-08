import "./slider";
import modals from "./modules/modal";
import form from "./modules/form";
import tabs from "./modules/tabs";
import changeModalSelect from "./modules/changeModalSelect";

window.addEventListener('DOMContentLoaded', () => {

    let modalSelect = {};

    changeModalSelect(modalSelect);

    modals();
    form();
    tabs('.glazing_block','.glazing_slider', '.glazing_content', 'active');
    tabs('.decoration_item_link', '.decoration_slider', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons_img', '.balcon_icons', '.big_img > img','do_image_more', 'inline-block');
    
});