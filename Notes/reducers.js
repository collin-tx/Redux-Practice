// Analogy = insurance co 

// | person files form | -> | form  | -> | form rcvr | -> | departments | -> | compiled data |\

// reducers = departments in this analogy, thus each department needs to (only) update the compiled data appropriate to its own departmental scope

const claimsHistoryExample = (oldListOfClaims, action) => {
  if (action.type === 'CREATE_CLAIM'){
    // needs to update list
    return [...oldListOfClaims, action.payload];
  }
  // doesn't need to update list so just return old one
  return oldListOfClaims;
}

// this is almost great, but must deal with the possibility that the reducer is being called for the first time, thus we just simply adjust our argument to a default

const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM'){
    // needs to update list
    return [...oldListOfClaims, action.payload];
  }
  // doesn't need to update list so just return old one
  return oldListOfClaims;
}




// alternatives -> one could just have one large reducer that implements a switch statement that returns based on action.type ? 
// could also use a ternary like so
const claimsHistoryAlternative = (state = [], action) => {
  return action.type === 'CREATE_CLAIM' ?
  [...state, action.payload] :
  state;
}

const accounting = (money = 100, action) => {
  if (action.type === 'CREATE_CLAIM'){
    return money - action.payload.amount;
  } else if(action.type === 'CREATE_POLICY'){
    return money + action.payload.amount;
  }
  return money;
}


const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY'){
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
}

const policyList = ['Sam', 'Jo', 'Rhonda', 'Rudy'];

const policyAction = { type: 'DELETE_POLICY', payload: { name: 'Sam', amount: 999 } };
console.log(policies(policyList, policyAction));