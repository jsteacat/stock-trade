const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    // покупаем акции
    'BUY_STOCK' (state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(element => element.id == stockId);
        //find return object!
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    // продаём акции
    'SELL_STOCK' (state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
    'SET_PORTFOLIO' (state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStock: ({ commit }, order) => {
        commit('SELL_STOCK', order);
    },
    randomizeStocks: ({ commit }) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    // передаём getters в параметре, чтобы иметь доступ к getters в модуле stocks!
    stockPortfolio(state, getters) {
        // map возвращает новый массив!
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds(state) {
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};