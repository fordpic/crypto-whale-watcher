import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Currencies = () => {
	const [currency, setCurrency] = useState([]);

	const getCurrency = () => {
		const url =
			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=decentralized_finance&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h';

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setCurrency(res);
			});
	};
	useEffect(() => {
		getCurrency();
	}, []);
	console.log(currency);
	return (
		<div className='coin-info'>
			<h1>Top 100 Coins by Market Cap</h1>
			{currency.map((coin) => {
				return (
					<div key={coin.name}>
						<Link to={`/currencies/${coin.name}`}>
							<h1>
								{coin.name} - {coin.symbol}
							</h1>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Currencies;
