import React from 'react';
import ModaleProps from '../types';
import "./Modale.css";
/**
 * @description This is the modale component
 * @param {text} This is the text who need to be displayed on the modale, required param. Ex: text="Congratulations, you are now registered on blabla.com !"
 * @param {autoclose} Set a number on milliseconds, just the time you want the modal appears and dissapears after. Ex: autoclose={3000}. If set, the button will not appear, the modale only appears and disappears. And no action can be setting on the button.
 * @param {buttonText} This is the text who need to be displayed on the button, not required if autoclose param is set, but need to be set if not. It will be the text on the button to confirm an action. Ex: buttonText="Confirm"
 * @param {hideModale} Set a function you need to be called on the click of the button. Setting a state or anothers actions you need.
 * @param {colour} You can choose a color for the modale and the button. If not set, the default color is black. Ex: colour="#189ae6"
 */
declare const Modale: React.FC<ModaleProps>;
export default Modale;
