import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { Mail, Linkedin } from 'react-feather';
import { theme } from './Theme';

const Contact = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<p id='contact'>
					To contact me and suggest improvements OR to tell me the app is
					great/horrendous, please reach me at: <br></br>
					<br></br>
					<br></br>
					<a href='mailto:fordpickert@gmail.com' alt=''>
						<Mail size={48} />
					</a>
					{'  '}
					<a href='https://www.linkedin.com/in/fordpickert/' alt=''>
						<Linkedin size={48} />
					</a>
				</p>
			</>
		</ThemeProvider>
	);
};

export default Contact;
