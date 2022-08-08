import { useCallback, useEffect, useMemo, useState } from "react";
import * as React from "react";

import "./App.css";

const useList = (param: any) => {
  function getdata(a: any) {
    return { b: 1 };
  }
  useEffect(() => {
    getdata(param);
  }, [param]);
};

const App: React.FC = () => {
  const [param, setParam] = useState({
    a: 1,
  });

  const testList = useList(param);

  const c = useMemo(() => ({ a: 1 }), []);

  return (
    <React.Fragment>
      <button onClick={() => setParam({ a: 2 })}>search</button>
      <App1 data={testList} numeric={c} />
    </React.Fragment>
  );
};
const App1: React.FC<any> = React.memo(({ onAction, numeric }) => { // not re-render when onActio not change
  console.log("app1 re-render");
  return (
    <React.Fragment>
      <span>{JSON.stringify(numeric)}</span>
      <button onClick={onAction}>i am app1</button>
      <App2 />
    </React.Fragment>
  );
});
const App2: React.FC = () => {
  return (
    <React.Fragment>
      <App3 />
    </React.Fragment>
  );
};
const App3: React.FC = () => {
  console.log("i am app3");

  return (
    <React.Fragment>
      <div>i am app3</div>
    </React.Fragment>
  );
};

export default App;
