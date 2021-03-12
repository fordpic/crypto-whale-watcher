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
					A little about me and this app - I am currently a student, learning
					the ends and outs of full stack software engineering. I am greatly
					interested in cryptocurrencies and blockchains in general, so I
					figured creating this app would be a great way to get experience with
					React frontend as well as dipping my toes in ways that I can help push
					the defi movement further. I hope you enjoy! <br></br> - Ford
				</p>
			</>
		</ThemeProvider>
	);
};

export default About;
