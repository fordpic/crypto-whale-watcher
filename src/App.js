import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Currencies from './Currencies';
import CurrencyInfo from './CurrencyInfo';
import About from './About';
import Contact from './Contact';
import './App.css';

function App() {
	return (
		<div className='parent'>
			<nav>
				<Link to='/'>
					<h1>Home</h1>
				</Link>

				<Link to='/currencies'>
					<h1>Cryptocurrencies</h1>
				</Link>

				<Link to='/about'>
					<h1>About</h1>
				</Link>

				<Link to='/contact'>
					<h2>Contact</h2>
				</Link>
			</nav>

			<main>
				<Route path='/' exact component={Home} />
				<Route path='/currencies' exact component={Currencies} />
				<Route path='/about' component={About} />
				<Route path='/contact' component={Contact} />
				<Route
					path='/currencies/:id'
					render={(routerProps) => <CurrencyInfo match={routerProps.match} />}
				/>
			</main>
		</div>
	);
}

export default App;
