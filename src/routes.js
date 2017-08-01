import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';

export const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/portfolio', component: Portfolio, name: 'portfolio' },
    { path: '/stocks', component: Stocks, name: 'stocks' }
];

// const User = resolve => {
//     require.ensure(['./components/user/User.vue'], () => {
//         resolve(require('./components/user/User.vue'));
//     });
// };
// const UserStart = resolve => {
//     require.ensure(['./components/user/UserStart.vue'], () => {
//         resolve(require('./components/user/UserStart.vue'));
//     });
// };
// const UserDetail = resolve => {
//     require.ensure(['./components/user/UserDetail.vue'], () => {
//         resolve(require('./components/user/UserDetail.vue'));
//     });
// };
// const UserEdit = resolve => {
//     require.ensure(['./components/user/UserEdit.vue'], () => {
//         resolve(require('./components/user/UserEdit.vue'));
//     });
// };