"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
require("./Modale.css");
/**
 * @description This is the modale component
 * @param {string} text This is the text who need to be displayed on the modale, required param. Ex: text="Congratulations, you are now registered on blabla.com !"
 * @param {number} autoclose Set a number on milliseconds, just the time you want the modal appears and dissapears after. Ex: autoclose={3000}. If set, the button will not appear, the modale only appears and disappears. And no action can be setting on the button.
 * @param {string} buttonText This is the text who need to be displayed on the button, not required if autoclose param is set, but need to be set if not. It will be the text on the button to confirm an action. Ex: buttonText="Confirm"
 * @param {function} hideModale Set a function you need to be called on the click of the button. Setting a state or anothers actions you need.
 * @param {string} colour You can choose a color for the modale and the button. If not set, the default color is black. Ex: colour="#189ae6"
 */
var Modale = function (_a) {
    var text = _a.text, buttonText = _a.buttonText, autoclose = _a.autoclose, colour = _a.colour, hideModale = _a.hideModale;
    // if no colour props set, make default color in black
    if (colour === "" || colour === undefined) {
        colour = "#000";
    }
    var StyledModale = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft:50%;\n\t\ttransform: translate(-50%,-50%);\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tpadding: 15px 15px;\n\t\t/* margin-bottom: 10px; */\n\t\twidth: 250px;\n\t\theight: fit-content;\n\t\tborder-radius: 20px;\n\t\tbackground-color: #ffffff;\n\t\tbox-shadow: 0 0 1px 1px ", ", 0 0 2px 2px ", ", inset 0 0 1px 1px ", ", inset 0 0 2px 2px ", ";\n\t\tz-index: 200;\n\t\ttransition: all 1s ease;\n\t"], ["\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft:50%;\n\t\ttransform: translate(-50%,-50%);\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tpadding: 15px 15px;\n\t\t/* margin-bottom: 10px; */\n\t\twidth: 250px;\n\t\theight: fit-content;\n\t\tborder-radius: 20px;\n\t\tbackground-color: #ffffff;\n\t\tbox-shadow: 0 0 1px 1px ", ", 0 0 2px 2px ", ", inset 0 0 1px 1px ", ", inset 0 0 2px 2px ", ";\n\t\tz-index: 200;\n\t\ttransition: all 1s ease;\n\t"])), colour, colour, colour, colour);
    var StyledText = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t\ttext-align: center;\n\t\t/* margin-top: -5px; */\n\t\t/* margin-bottom: 15px; */\n\t\twidth: fit-content;\n\t\theight: auto;\n\t\tfont-family: Neucha, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n\t\t'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n\t\tsans-serif;\n\t\tfont-size: 1rem;\n\t"], ["\n\t\ttext-align: center;\n\t\t/* margin-top: -5px; */\n\t\t/* margin-bottom: 15px; */\n\t\twidth: fit-content;\n\t\theight: auto;\n\t\tfont-family: Neucha, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n\t\t'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n\t\tsans-serif;\n\t\tfont-size: 1rem;\n\t"])));
    var StyledButton = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t\tpadding: 6px;\n\t\t/* position: relative; */\n\t\twidth: fit-content;\n\t\ttransition: all 0.2s ease;\n\t\t/* left: 50%; */\n\t\t/* bottom: 15px; */\n\t\t/* transform: translateX(-50%); */\n\t\tborder-radius: 5px;\n\t\tmargin-top: 15px;\n\t\tmargin-bottom: 5px;\n\t\tcursor: pointer;\n\t\tbackground: ", ";\n\t\tcolor: white;\n\t\tfont-family: Neucha, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n\t\t'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n\t\tsans-serif;\n\t\tfont-weight: bold;\n\t\ttext-align: center;\n\n\t\t:hover {\n\t\t\tbox-shadow: 0 0 1px 1px ", ", 0 0 2px 2px ", ";\n\t\t}\n\t"], ["\n\t\tpadding: 6px;\n\t\t/* position: relative; */\n\t\twidth: fit-content;\n\t\ttransition: all 0.2s ease;\n\t\t/* left: 50%; */\n\t\t/* bottom: 15px; */\n\t\t/* transform: translateX(-50%); */\n\t\tborder-radius: 5px;\n\t\tmargin-top: 15px;\n\t\tmargin-bottom: 5px;\n\t\tcursor: pointer;\n\t\tbackground: ", ";\n\t\tcolor: white;\n\t\tfont-family: Neucha, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n\t\t'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n\t\tsans-serif;\n\t\tfont-weight: bold;\n\t\ttext-align: center;\n\n\t\t:hover {\n\t\t\tbox-shadow: 0 0 1px 1px ", ", 0 0 2px 2px ", ";\n\t\t}\n\t"
        // If autoclose props is set, hide the modale after the set time
    ])), colour, colour, colour);
    // If autoclose props is set, hide the modale after the set time
    var handleAutoClose = function () {
        setTimeout(function () {
            hideModale();
        }, autoclose);
    };
    // If autoclose props is set, call handleAutoClose()
    if (autoclose) {
        handleAutoClose();
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledModale, { className: "open" },
            react_1.default.createElement(StyledText, null, text),
            !autoclose && react_1.default.createElement(StyledButton, { onClick: hideModale }, buttonText ? buttonText : "Choose your text with the 'buttonText' prop"))));
};
exports.default = Modale;
var templateObject_1, templateObject_2, templateObject_3;
