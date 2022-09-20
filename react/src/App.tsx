import { useCallback, useEffect, useMemo, useState } from "react";
import * as React from "react";

import "./App.css";

const useList = (param: any) => {
  function getdata(a: any) {
    console.log("get data");
    return { b: 1 };
  }
  useEffect(() => {
    getdata(param);
  }, []);
};

const App: React.FC = () => {
  const [param, setParam] = useState({
    a: 1,
  });

  const testList = useList(param);

  const c = useMemo(() => ({ a: new Date().getTime() }), []);

  return (
    <React.Fragment>
      <button onClick={() => setParam({ a: 1 })}>search</button>
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

const App11 = () => {
  const [a, seta] = useState(0);
  return (
    <div>
      <span>{a}</span>
      <button onClick={() => seta(a + 1)}>click</button>
    </div>
  );
};

const App111 = () => {
  const [temp, setTemp] = React.useState(5);

  const log = () => {
    setTimeout(() => {
      console.log("3 秒前 temp = 5，现在 temp =", temp);
    }, 3000);
  };

  return (
    <div
      onClick={() => {
        log();
        setTemp(3);
        // 3 秒前 temp = 5，现在 temp = 5
      }}
    >
      xyz
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(2);
      setCount(count + 1);
    }, 1000);
    return () => {
      console.log("1111");
      clearInterval(id);
    };
  }, []);

  return <h1>{count}</h1>;
}

export default Counter;
