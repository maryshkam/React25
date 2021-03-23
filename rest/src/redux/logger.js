export const ownLogger = (store) => (next) => (action) => {
  console.group("action", action.type);
  const prevState = store.getState();
  console.log("prev-state", prevState);
  const result = next(action);
  console.log(result);
  const newState = store.getState();
  console.log("mewState", newState);
  console.groupEnd();
};

function logger (store) {
    return function(next){
      return function(action){
 
      }
    }
  }