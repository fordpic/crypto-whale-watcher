import React, { useState, useEffect } from 'react';

const Home = () => {
	const [homeInfo, setHomeInfo] = useState([]);

	const getHomeInfo = () => {
		const url =
			'https://api.coingecko.com/api/v3/global/decentralized_finance_defi';

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setHomeInfo(res);
			})
			.catch((err) => {
				console.error(err);
			});
	};
	useEffect(() => {
		getHomeInfo();
	}, []);

	console.log(homeInfo.data);

	return (
		<div className='home-info'>
			{homeInfo ? (
				<div className='more-home'>
					<header className='home-header'>
						<h1>Welcome to Crypto Whale Watcher!</h1>
					</header>
					<body>
						<br></br>
						<br></br>
						Below you will see the current state of Defi (Decentralized Finance)
						- take a look at the options above to get started!
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<h3>
							DeFi Dominance (% of overall market):{' '}
							{parseFloat(homeInfo?.data?.defi_dominance).toFixed(2)}%
						</h3>
						<br></br>
						<br></br>
						<h3>
							DeFi Market Cap: $
							{Number(
								parseFloat(homeInfo?.data?.defi_market_cap).toFixed(2)
							).toLocaleString('en')}
						</h3>
						<br></br>
						<br></br>
						<h3>Top Coin (Current): {homeInfo?.data?.top_coin_name}</h3>
						<br></br>
						<br></br>
						<h3>
							Trading Volume (last 24 hours): $
							{Number(
								parseFloat(homeInfo?.data?.trading_volume_24h).toFixed(2)
							).toLocaleString('en')}
						</h3>
						<br></br>
						<br></br>
						<img
							src='http://clipart-library.com/data_images/25066.gif'
							alt='whale'
						/>
					</body>
				</div>
			) : null}
		</div>
	);
};

export default Home;
