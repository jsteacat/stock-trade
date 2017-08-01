import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';

export const routes = [
    { path: '/stock-trade', component: Home, name: 'home' },
    { path: '/stock-trade/portfolio', component: Portfolio, name: 'portfolio' },
    { path: '/stock-trade/stocks', component: Stocks, name: 'stocks' }
];