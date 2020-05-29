console.log("Welcome to Redux!");
const redux = require("redux");
const createStore = redux.createStore;

//redux concept #1: action type
const BUY_DONUTS = "BUY_DONUTS";

// redux concept #2: action creator
const buyDonuts = (numOfDonuts = 1) => {
  return {
    type: BUY_DONUTS,
    amount: numOfDonuts,
  };
};

const EAT_DONUT = "EAT_DONUT";

// redux concept #2: action creator
const eatDonuts = (numOfDonuts = 1) => {
  return {
    type: EAT_DONUT,
    amount: numOfDonuts,
  };
};


const initialState = {
  donutsPurchased: 0
}

const donutReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_DONUTS:
      return {
        ...state,
        donutsPurchased: state.donutsPurchased + action.amount,
      };
    case EAT_DONUT:
      return {
        ...state,
        donutsPurchased: state.donutsPurchased - action.amount,
      };
    default:
      return state;
  }
}

const store = createStore(donutReducer);

const johnsDonutPurchase = buyDonuts(12)
// console.log(johnsDonutPurchase)


//redux concept #3, subscribe to updates in the store, (hint: it's a callback)
store.subscribe(() => {
  console.log("CHANGE IN DONUT AMOUNT: ", store.getState())
})

store.dispatch(buyDonuts(2));
store.dispatch(buyDonuts(54));
store.dispatch(eatDonuts(7));
store.dispatch(eatDonuts());
store.dispatch(eatDonuts(37));








