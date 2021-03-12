import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { Github, Mail, Linkedin } from 'react-feather';
import { theme } from './Theme';

const Contact = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<p id='contact'>
					To contact me and suggest improvements OR to tell me the app is
					great/horrendous, please email me at: <br></br>
				</p>
				<Github />
				<Mail />
				<Linkedin />
			</>
		</ThemeProvider>
	);
};

export default Contact;
