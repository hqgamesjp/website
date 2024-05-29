import { createContext } from "react";

export const GlobalStateContext = createContext({});

export const GlobalStateProvider = (props: any) => {
  const { children } = props;

  const state = {
    category: ["カテゴリA", "カテゴリB"],
  };

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  );
};
