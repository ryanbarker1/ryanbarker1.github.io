//ToDo: Import Home Component
//ToDo: Import portfolio/Portfolio Component
//ToDo: Import stocks/Stocks Component
import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stock from './components/stocks/Stocks.vue'

export const routes = [
    //ToDo: Create Route for Home Component with root (/) path
    //ToDo: Create Route for Portfolio Component
    //ToDo: Create Route for Stocks Component
    {path: '/', component: Home},
    {path: '/portfolio', component: Portfolio},
    {path: '/stock', component: Stock}
];