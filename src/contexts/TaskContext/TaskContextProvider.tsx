import { useEffect, useReducer, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

type actionType = {
  type: string,
  payload?: number
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  const [myState, dispatch] = useReducer((state, action: actionType) => {

    switch (action.type) {
      case 'add':
        if(!action.payload) return state
        return {
          ...state, secondsRemaning: state.secondsRemaning + action.payload,
        }
    }

    return state;
  }, {
    secondsRemaning: 0
  });

  // useEffect(() => {
  //   console.log(state);
  // },[state]);

  return (
    <TaskContext.Provider value={{state, setState}}>
      <h1>O estado e: {JSON.stringify(myState)}</h1>
      <button onClick={() => dispatch({type: 'add', payload: 10})}>White</button>
    </TaskContext.Provider>
  );
}