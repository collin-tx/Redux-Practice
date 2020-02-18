// Analogy = insurance co 

// | person files form | -> | form  | -> | form rcvr | -> | departments | -> | compiled data |\

// When a customer files a policy form, form rcvr gives form to policies department which then gets the master list of all policies, and updates the master list with the new policy. Master list is kept above any one department so that it can be accessed by all departments, including management without going through any other department.

// An action creator that mimics the person filing a form might look like so…

const createPolicyExample = () => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: 'Al',
      amount: 20
    }
  };
}

// However it will need more versatility than this because this will only work if customer name is Al and the amount is 20…. SO, to make it dynamic we must use arguments like this:

const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
}

// So that is the action creator for creating a policy… now we need two more, one for creating a claim, one for deleting policy

const createClaim = (name, amount) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name,
      amount
    }
  };
}


const deletePolicy = name => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name
    }
  };
}
