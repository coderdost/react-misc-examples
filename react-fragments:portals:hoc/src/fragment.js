import React from "react";

const ComponentWithFragments = () => {
  return (
    <>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </>
  );
};

const Table =() =>{
    return (
        <table>
           <ComponentWithFragments></ComponentWithFragments>
        </table>
    )
}

export { Table };
