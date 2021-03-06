import { createGlobalStyle } from 'styled-components';

// function CurrencyFormatted(amount) {
// 	let i = parseFloat(amount);
// 	if (isNaN(i)) {
// 		i = 0.0;
// 	}
// 	let minus = '';
// 	if (i < 0) {
// 		minus = '-';
// 	}
// 	i = Math.abs(i);
// 	i = parseInt((i + 0.005) * 100);
// 	i = i / 100;
// 	let s = new String(i);
// 	if (s.indexOf('.') < 0) {
// 		s += '.00';
// 	}
// 	if (s.indexOf('.') == s.length - 2) {
// 		s += '0';
// 	}
// 	s = minus + s;
// 	return s;
// }

// function CommaFormatted(amount) {
// 	let delimiter = ','; // replace comma if desired
// 	let a = amount.split('.', 2);
// 	let d = a[1];
// 	let i = parseInt(a[0]);
// 	if (isNaN(i)) {
// 		return '';
// 	}
// 	let minus = '';
// 	if (i < 0) {
// 		minus = '-';
// 	}
// 	i = Math.abs(i);
// 	let n = new String(i);
// 	a = [];
// 	while (n.length > 3) {
// 		let nn = n.substr(n.length - 3);
// 		a.unshift(nn);
// 		n = n.substr(0, n.length - 3);
// 	}
// 	if (n.length > 0) {
// 		a.unshift(n);
// 	}
// 	n = a.join(delimiter);
// 	if (d.length < 1) {
// 		amount = n;
// 	} else {
// 		amount = n + '.' + d;
// 	}
// 	amount = minus + amount;
// 	return amount;
// }

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
}

.details-container {
    justify-content: center;
    text-align: center;
    background: linear-gradient(rgb(0, 51, 26), transparent);
    background-color: #99FFCC;
    opacity: 0.8;
    height: 100%;
}

main, .parent {
    height: 100%;
    min-height: 100%;
}

html, body {
  padding: 0;
  margin: 0;
}

html {
  height: 100%;
}

body {
  min-height: 100%;
}

.coin-list {
    justify-content: center;
    text-align: center;
    background: radial-gradient(rgb(0, 51, 26), transparent);
    background-color: #99FFCC;
    opacity: 0.8
}

.home-info {
    justify-content: center;
    text-align: center;
    background: radial-gradient(rgb(0, 51, 26), transparent);
    background-color: #99FFCC;
    opacity: 0.8;
    height: 100vh;
}

.home-header {
 
    margin: 0;
    width: 100vw;
    justify-content: center;
    text-align: center;
    padding: 15px; 
}

.coin-text {
    font-size: 24px;
}

#about {
    justify-content: center;
    text-align: center;
    background: radial-gradient(rgb(0, 51, 26), transparent);
    background-color: #99FFCC;
    opacity: 0.8;
    height: 100vh;
}

#contact {
    justify-content: center;
    text-align: center;
    background: radial-gradient(rgb(0, 51, 26), transparent);
    background-color: #99FFCC;
    opacity: 0.8;
    height: 100vh;
}

a {
    color: inherit;
}

p {
    font-size: 35px;
}

`;
