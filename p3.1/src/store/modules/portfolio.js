//ToDo: Create const called state that is a data object{}
    //ToDo: Create funds and set it to 10000
    //ToDo: Create an array called stocks and leave it empty
const state = {
    funds: 10000,
    stocks: []
};

//ToDo: Create const called mutations that is a data object{}
    //ToDo: Inside mutations object create a vuex method called 'BUY_STOCK' that takes four parameters (state, {stockId, quantity, stockPrice}
        //ToDo: Create const called record that is equal to state.stocks.find(element => element.id == stockId)
        //ToDo: If (record) then set record.quantity += quantity
        //ToDo: Else push id: stockId and quantity: quantity to state.stocks
        //ToDo: Set state.funds -= stockPrice * quantity
const mutations = {

    'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if(record){
            record.quantity += quantity;
        }
        else{
            // stockId.push();
            // quantity.push(quantity => state.stocks);
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, {stockId, quantity, stockPrice}){
        const record = state.stocks.find(element => element.id == stockId);
        if(record.quantity > quantity){
            record.quantity -= quantity;
        }
        else{
            state.stocks.splice(state.stocks.indexOf(record, 1));
        }
        state.funds += stockPrice * quantity;
},
'SET_PORTFOLIO' (state, portfolio){
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
}
};
    //ToDo: Inside mutations object create a vuex method called 'SELL_STOCK' that takes four parameters (state, {stockId, quantity, stockPrice}
        //ToDo: Create const called record that is equal to state.stocks.find(element => element.id == stockId)
        //ToDo: If (record.quantity > quantity) then set record.quantity -= quantity
        //ToDo: Else set state.stocks.splice(state.stocks.indexOf(record, 1))
        //ToDo: Set state.funds += stockPrice * quantity

    //ToDo: Inside mutations object create a vuex method called 'SET_PORTFOLIO' that takes two parameters (state, portfolio}
        //ToDo: Set state.funds equal t portfolio.funds
        //ToDo: Set state.stocks equal to portfolio.stockPortfolio if portfolio.stockPortfolio else [] (Use if else using ? and :)


//ToDo: Create const called actions that is a data object()
    //ToDo: Create sellStock that passes ({commit}, order)
    //  ToDo: Use the commit method passing 'SELL_STOCK' and order
const actions = {
    sellStock: ({commit}, order) => {
        commit('SELL_STOCK', order)
    }
};

//ToDo: Create const called getters that is a data object{}
    //ToDo: Inside getters object create stockPortfolio method that takes two parameters (state, getters)
        //ToDo: return state.stocks.map() that is a pointer function that passes stock
        //ToDo: Create const called record that is equal to state.stocks.find(element => element.id == stockId)
        //ToDo: Return an object
            //ToDo: Set id to stock.id
            //ToDo: Set quantity to stock.quantity
            //ToDo: Set name to record.name
            //ToDo: Set price to record.price
    //ToDo: Create funds method that passes state
        //ToDo: Return state.funds
const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return { id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price};
        }) ;
},
    funds(state){
        return state.funds;
    }
};

export default {
    //ToDo: Export the const state, mutations, actions, and getters
    state,
    mutations,
    actions,
    getters
}