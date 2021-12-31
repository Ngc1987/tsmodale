import React from 'react';
import styled, {StyledComponent} from 'styled-components';
import  ModaleProps  from '../types';
import "./Modale.css";

/**
 * @description This is the modale component
 * @param {string} text This is the text who need to be displayed on the modale, required param. Ex: text="Congratulations, you are now registered on blabla.com !"
 * @param {number} autoclose Set a number on milliseconds, just the time you want the modal appears and dissapears after. Ex: autoclose={3000}. If set, the button will not appear, the modale only appears and disappears. And no action can be setting on the button.
 * @param {string} buttonText This is the text who need to be displayed on the button, not required if autoclose param is set, but need to be set if not. It will be the text on the button to confirm an action. Ex: buttonText="Confirm"
 * @param {function} hideModale Set a function you need to be called on the click of the button. Setting a state or anothers actions you need.
 * @param {string} colour You can choose a color for the modale and the button. If not set, the default color is black. Ex: colour="#189ae6"
 */
const Modale:React.FC<ModaleProps> = ({text, buttonText, autoclose, colour, hideModale}) => {

	// if no colour props set, make default color in black
	if(colour === "" || colour === undefined) {
		colour = "#000"
	}

	const StyledModale: StyledComponent<"div", any, {}, never> = styled.div`
		position: absolute;
		top: 50%;
		left:50%;
		transform: translate(-50%,-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 15px 15px;
		/* margin-bottom: 10px; */
		width: 250px;
		height: fit-content;
		border-radius: 20px;
		background-color: #ffffff;
		box-shadow: 0 0 1px 1px ${colour}, 0 0 2px 2px ${colour}, inset 0 0 1px 1px ${colour}, inset 0 0 2px 2px ${colour};
		z-index: 200;
		transition: all 1s ease;
	`
	
	const StyledText: StyledComponent<"p", any, {}, never> = styled.p`
		text-align: center;
		/* margin-top: -5px; */
		/* margin-bottom: 15px; */
		width: fit-content;
		height: auto;
		font-family: Neucha, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
		font-size: 1rem;
	`

	const StyledButton: StyledComponent<"div", any, {}, never> = styled.div`
		padding: 6px;
		/* position: relative; */
		width: fit-content;
		transition: all 0.2s ease;
		/* left: 50%; */
		/* bottom: 15px; */
		/* transform: translateX(-50%); */
		border-radius: 5px;
		margin-top: 15px;
		margin-bottom: 5px;
		cursor: pointer;
		background: ${colour};
		color: white;
		font-family: Neucha, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
		font-weight: bold;
		text-align: center;

		:hover {
			box-shadow: 0 0 1px 1px ${colour}, 0 0 2px 2px ${colour};
		}
	`
	// If autoclose props is set, hide the modale after the set time
	const handleAutoClose = () => {
		setTimeout(() => {
			hideModale();
		}, autoclose);
	}
	
	// If autoclose props is set, call handleAutoClose()
	if(autoclose) {
		handleAutoClose()
	}

	return (
		<>
			<StyledModale className="open" >

				<StyledText>{text}</StyledText>
				{!autoclose && <StyledButton onClick={hideModale} >{buttonText ? buttonText : "Choose your text with the 'buttonText' prop"}</StyledButton>}

			</StyledModale>
		</>
	)
}

export default Modale;
