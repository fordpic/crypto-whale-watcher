import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { theme } from './Theme';

const About = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<p id='about'>
					<br></br>A little about me and this app - I am currently a student,
					learning the ins and outs of full stack software engineering. I am
					greatly interested in cryptocurrencies and blockchains in general, so
					I figured creating this app would be a great way to get experience
					with React frontend as well as dipping my toes in ways that I can help
					push the defi movement further. I hope you enjoy! <br></br> - Ford
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<img
						className='whale-pic'
						src='https://images.unsplash.com/photo-1558028976-ffe9a675a805?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1237&q=80'
						alt='whale tail'></img>
				</p>
			</>
		</ThemeProvider>
	);
};

export default About;
