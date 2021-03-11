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

const GlobalStyles = createGlobalStyle`
.details-container {
    justify-content: center;
    text-align: center;
}
h1, h2 {
    background-color: grey;
}
`;

export default GlobalStyles;
