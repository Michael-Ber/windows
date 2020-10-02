import "./slider";
import modal from "./modules/modal";

window.addEventListener('DOMContentLoaded', () => {

    modal({
        modalSelector: '.popup_engineer',
        openSelector: '.popup_engineer_btn',
        closeSelector: '.popup_close'
    });

    modal({
        modalSelector: '.popup',
        openSelector: '.feedback_block .phone_link',
        closeSelector: '.popup_close'
    });
    modal({
        modalSelector: '.popup',
        openSelector: '.contact_us_wrap .phone_link',
        closeSelector: '.popup_close'
    });
});