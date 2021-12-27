import React, { useState } from 'react';
import styled, {StyledComponent} from 'styled-components';
import "./Modale.css";


interface Props {
	autoclose?: number;
	colour?: string;
	text: string;
}


const Modale:React.FC<Props> = ({autoclose, text, colour}) => {

	if(colour === "") {
		colour = "black"
	}
	
	const StyledLayout: StyledComponent<"div", any, {}, never> = styled.div`
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		width: 100%;
		height: 100vh;
		background-color: #00000020;
		backdrop-filter: blur(1px);
		z-index: 100;
		position: relative;
		transition: opacity 5s ease;
	`
	const StyledModale: StyledComponent<"div", any, {}, never> = styled.div`
		position: absolute;
		left: 50%;
		top: 50%;
		padding: 0 20px;
		padding-bottom: 10px;
		transform: translate(-50%, -50%);
		width: 250px;
		height: min-content;
		border-radius: 20px;
		background-color: #ffffff;
		box-shadow: 0 0 1px 1px ${colour}, 0 0 2px 2px ${colour}, inset 0 0 1px 1px ${colour}, inset 0 0 2px 2px ${colour};
		z-index: 200;

	`
	const StyledText: StyledComponent<"p", any, {}, never> = styled.p`
		text-align: center;
		margin-bottom: 25px;
		font-family: Neucha, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	`

	const StyledButton: StyledComponent<"div", any, {}, never> = styled.div`
		padding: 6px;
		position: relative;
		width: fit-content;
		transition: all 5s ease;
		left: 50%;
		bottom: 10px;
		transform: translateX(-50%);
		border-radius: 5px;
		/* margin-top: 5px; */
		cursor: pointer;
		background-color: ${colour};
		color: white;
		font-family: Neucha, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
		font-weight: bold;

		:hover {
			box-shadow: 0 0 1px 1px ${colour}, 0 0 3px 3px ${colour};
		}
	`

	const [isOpen, setIsOpen] = useState(true);

	const handleAutoClose = () => {
		if(isOpen) {
			setTimeout(() => {
				setIsOpen(!isOpen)
			}, autoclose);
		}
	}

	if(autoclose) {
		handleAutoClose()
	}



	return (
		
		<>

			<StyledLayout className={isOpen ? "open" : "closed"} >
				<StyledModale>
					<StyledText>{text}</StyledText>
					<StyledButton onClick={() => handleAutoClose()} >OK</StyledButton>
				</StyledModale>
			</StyledLayout>

		</>

		
		
	)
}

export default Modale;
