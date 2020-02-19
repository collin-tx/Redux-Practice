import { createStore, combineReducers } from 'redux';
//imports not fking working


// ACs
export const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
}

export const createClaim = (name, amount) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name,
      amount
    }
  };
}

export const deletePolicy = name => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name
    }
  };
}

//Reducers

export const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM'){
    // needs to update list
    return [...oldListOfClaims, action.payload];
  }
  // doesn't need to update list so just return old one
  return oldListOfClaims;
}


export const accounting = (money = 100, action) => {
  if (action.type === 'CREATE_CLAIM'){
    return money - action.payload.amount;
  } else if(action.type === 'CREATE_POLICY'){
    return money + action.payload.amount;
  }
  return money;
}


export const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY'){
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
}

//store

const ourDepartments = combineReducers({
  accounting,
  claimsHistory,
  policies
})

const store = createStore(ourDepartments); // passed the combined reducers to createStore in order to instantiate the store

// const action = createPolicy('Steve', 20);
// console.log(action);

store.dispatch(createPolicy('Steve', 500));
const oldState = store.getState(); // state at this point in time can be bound to a variable 

store.dispatch(createPolicy('John', 200));
store.dispatch(createPolicy('Veronica', 200));
// console.log('store', store);

store.dispatch(createClaim('Veronica', 50));
store.dispatch(createClaim('John', 500));

store.dispatch(deletePolicy('Steve'));

console.log('old', oldState); // can getState at any point etc.
console.log('newest', store.getState());
