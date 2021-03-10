import React, { useState, useEffect } from 'react';

const coinGeckoURL = 'https://api.coingecko.com/api/v3/coins/';

const CurrencyInfo = ({ match }) => {
	const [coinInfo, setCoinInfo] = useState([]);

	useEffect(() => {
		const coinName = match.params.id.toLowerCase();
		const url = `${coinGeckoURL}${coinName}`;
		// console.log(coinName);
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setCoinInfo(res);
				console.log(coinInfo);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div className='details-container'>
			<div>
				<img src={coinInfo.image?.large} alt={coinInfo.name} />
				<div className='coin-details'>
					<h1>{coinInfo.name}</h1>
					<h2>Current Price: ${coinInfo.market_data?.current_price.usd}</h2>
					<h2>
						Change in Price (last 24 hours): $
						{coinInfo.market_data?.price_change_24h}{' '}
						{coinInfo.market_data?.price_change_percentage_24h}%
					</h2>
					<h2>
						Change in Price (last 7 days):{' '}
						{coinInfo.market_data?.price_change_percentage_7d}%
					</h2>
					<h2>Market Cap: {coinInfo.market_data?.market_cap.usd}</h2>
					<h2>Market Cap Rank: {coinInfo.market_data?.market_cap_rank}</h2>
					<h2>
						Change in Market Cap (last 24 hours):{' '}
						{coinInfo.market_data?.market_cap_change_24h}
					</h2>
					<h2>All Time High: ${coinInfo.market_data?.ath.usd}</h2>
					<h2>All Time High Date: {coinInfo.market_data?.ath_date.usd}</h2>
					<h2>All Time Low: ${coinInfo.market_data?.atl.usd}</h2>
					<h2>All Time Low Date: {coinInfo.market_data?.atl_date.usd}</h2>
					<h2>Market Cap Rank: {coinInfo.market_cap_rank}</h2>
					<p>{coinInfo.description?.en}</p>
				</div>
			</div>
		</div>
	);
};

export default CurrencyInfo;
