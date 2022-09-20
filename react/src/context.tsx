import * as React from "react";

// const userContext = React.createContext()
const UserContext = React.createContext({});
export const ContextTest: React.FC = () => {
  const [user, setSate] = React.useState("joslyn");
  const [toggle, setToggle] = React.useState(true);
  return (
    <React.Fragment>
      <button
        onClick={() => {
          setToggle(!toggle);
          setSate(toggle ? "ben" : "joslyn");
        }}
      >
        change user
      </button>
      <UserContext.Provider value={user}>
        <Component1 user={"hello, not use context "} />
      </UserContext.Provider>
    </React.Fragment>
  );
};

const Component1: React.FC<any> = React.memo(({ user }) => {
  console.log(1);
  return (
    <div>
      <span>this is component1</span>
      <Component2 user={user}></Component2>
    </div>
  );
});
const Component2: React.FC<any> = ({ user }) => {
  console.log(2);
  return (
    <div>
      <span>this is component2</span>
      <Component3 user={user}></Component3>
    </div>
  );
};
const Component3: React.FC<any> = ({ user }) => {
  console.log(3);
  return (
    <div>
      <span>this is component3</span>
      <Component4 user={user}></Component4>
    </div>
  );
};
const Component4: React.FC<any> = ({ user }) => {
  console.log(4);
  return (
    <div>
      <span>this is component4</span>
      <Component5 user={user}></Component5>
    </div>
  );
};
const Component5: React.FC<any> = ({ user }) => {
  const user1 = React.useContext(UserContext);
  // console.error(user1);
  return (
    <div>
      <p>{user1}</p>
      <span>this is {user}</span>
      {/* <Component2 user={ user}></Component2> */}
    </div>
  );
};
