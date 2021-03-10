import React, { useState, useEffect } from 'react';


const Home = () => {

    const [homeInfo, setHomeInfo] = useState([]);

    const getHomeInfo = () => {
        const url =
                'https://api.coingecko.com/api/v3/global/decentralized_finance_defi';
        
        fetch(url)
        .then(res => res.json())
        .then(res => {
            // console.log(res);
            setHomeInfo(res);
        })
    }
    useEffect(() => {
        getHomeInfo()
    }, [])

    // console.log(homeInfo.data)

return (
    <div className='home-info'>
               { homeInfo ? (
                   <div>
				<p>
					Welcome to Crypto Whale Watcher! <br></br>
					<br></br>Below you will see the current state of Defi (Decentralized
					Finance) as a whole, but please select any option from above to go
					ahead and get started!
				</p>
				<br></br>
				<p>DeFi Dominance: {homeInfo?.data?.defi_dominance}%</p>
				<p>DeFi Market Cap: {homeInfo?.data?.defi_market_cap}%</p>
				<p>DeFi To Ethereum Ratio: {homeInfo?.data?.defi_to_eth_ratio}%</p>
				<p>Ethereum Market Cap: {homeInfo?.data?.defi_dominance}%</p>
				<p>Top Coin (Current): {homeInfo?.data?.top_coin_name}</p>
				<p>
					Trading Volume (last 24 hours): ${homeInfo?.data?.trading_volume_24h}
				</p>
                </div>
                ) : null};
                
			</div>
)}

export default Home;