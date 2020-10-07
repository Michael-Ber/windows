import "./slider";
import modals from "./modules/modal";
import form from "./modules/form";
import tabs from "./modules/tabs";
import calculator from "./modules/calculator";

window.addEventListener('DOMContentLoaded', () => {

    modals();
    form();
    tabs('.glazing_block','.glazing_slider', '.glazing_content', 'active');
    tabs('.decoration_item_link', '.decoration_slider', '.decoration_content > div > div', 'after_click');
    calculator();
});