import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { theme } from './Theme';

const Contact = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<p id='contact'>
					To contact me and suggest improvements OR to tell me the app is
					great/horrendous, please email me at: fordpickert@gmail.com <br></br>
					<br></br>
					Thank you!
				</p>
			</>
		</ThemeProvider>
	);
};

export default Contact;
