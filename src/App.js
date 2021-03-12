import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Currencies from './Currencies';
import CurrencyInfo from './CurrencyInfo';
import About from './About';
import Contact from './Contact';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { theme } from './Theme';
import './App.css';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<div className='parent'>
					<nav>
						<Link to='/' style={{ textDecoration: 'none' }}>
							<h3>Home</h3>
						</Link>

						<Link to='/currencies' style={{ textDecoration: 'none' }}>
							<h3>Cryptocurrencies</h3>
						</Link>

						<Link to='/about' style={{ textDecoration: 'none' }}>
							<h3>About</h3>
						</Link>

						<Link to='/contact' style={{ textDecoration: 'none' }}>
							<h3>Contact</h3>
						</Link>
					</nav>

					<main>
						<Route path='/' exact component={Home} />
						<Route path='/currencies' exact component={Currencies} />
						<Route path='/about' component={About} />
						<Route path='/contact' component={Contact} />
						<Route
							path='/currencies/:id'
							render={(routerProps) => (
								<CurrencyInfo match={routerProps.match} />
							)}
						/>
					</main>
				</div>
			</>
		</ThemeProvider>
	);
}

export default App;
