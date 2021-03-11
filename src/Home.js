import React, { useState, useEffect } from 'react';

const Home = () => {
	const [homeInfo, setHomeInfo] = useState([]);

	const getHomeInfo = () => {
		const url =
			'https://api.coingecko.com/api/v3/global/decentralized_finance_defi';

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				// console.log(res);
				setHomeInfo(res);
			});
	};
	useEffect(() => {
		getHomeInfo();
	}, []);

	console.log(homeInfo.data);

	return (
		<div className='home-info'>
			{homeInfo ? (
				<div>
					<p>
						Welcome to Crypto Whale Watcher!
						<br></br>
						<br></br>
						<br></br>
						<br></br>Below you will see the current state of Defi (Decentralized Finance) - take a look below 
						ahead and get started!
					</p>
					<br></br>
					<p>DeFi Dominance: {homeInfo?.data?.defi_dominance}%</p>
					<br></br>
					<p>DeFi Market Cap: {homeInfo?.data?.defi_market_cap}%</p>
					<br></br>
					<p>Top Coin (Current): {homeInfo?.data?.top_coin_name}</p>
					<br></br>
					<p>
						Trading Volume (last 24 hours): $
						{homeInfo?.data?.trading_volume_24h}
					</p>
				</div>
			) : null}
		</div>
	);
};

export default Home;
