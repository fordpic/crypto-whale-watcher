import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { theme } from './Theme';

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
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<div className='details-container'>
					<div className='coin-img'>
						<img src={coinInfo.image?.large} alt={coinInfo.name} />
					</div>
					<div className='coin-details'>
						<h1>{coinInfo.name}</h1>
						<div className='current-price'>
							<h2>Current Price: ${coinInfo.market_data?.current_price.usd}</h2>
						</div>
						<div className='price-change-24'>
							<h2>
								Change in Price (last 24 hours): $
								{parseFloat(coinInfo.market_data?.price_change_24h).toFixed(2)}{' '}
								{parseFloat(
									coinInfo.market_data?.price_change_percentage_24h
								).toFixed(2)}
								%
							</h2>
						</div>
						<div className='price-change-7'>
							<h2>
								Change in Price (last 7 days):{' '}
								{parseFloat(
									coinInfo.market_data?.price_change_percentage_7d
								).toFixed(2)}
								%
							</h2>
						</div>
						<div className='market-cap'>
							<h2>
								Market Cap:{' '}
								{Number(coinInfo.market_data?.market_cap.usd).toLocaleString(
									'en'
								)}
							</h2>
						</div>
						<div className='market-cap-rank'>
							<h2>Market Cap Rank: {coinInfo.market_data?.market_cap_rank}</h2>
						</div>
						<div className='market-cap-change'>
							<h2>
								Change in Market Cap (last 24 hours):{' '}
								{Number(
									parseFloat(
										coinInfo.market_data?.market_cap_change_24h
									).toFixed(2)
								).toLocaleString('en')}
							</h2>
						</div>
						<div className='ath'>
							<h2>All Time High: ${coinInfo.market_data?.ath.usd}</h2>
						</div>
						<div className='ath-date'>
							<h2>All Time High Date: {coinInfo.market_data?.ath_date.usd}</h2>
						</div>
						<div className='atl'>
							<h2>
								All Time Low: $
								{parseFloat(coinInfo.market_data?.atl.usd).toFixed(2)})
							</h2>
						</div>
						<div className='atl-date'>
							<h2>All Time Low Date: {coinInfo.market_data?.atl_date.usd}</h2>
						</div>
						<div className='description'>
							<p className='coin-text'>{coinInfo.description?.en}</p>
						</div>
					</div>
				</div>
			</>
		</ThemeProvider>
	);
};

export default CurrencyInfo;
