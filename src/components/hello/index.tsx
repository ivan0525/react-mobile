import React from 'react';
import { Button } from 'antd-mobile';
interface IProps {
  [key: string]: any;
}
function Hello(props: IProps) {
  function handleClick() {
    console.log(props);
  }
  return (
    <>
      <span data-testid="messages">
        <Button onClick={() => handleClick()} data-testid="button">
          Search
        </Button>
      </span>
      <p>Hello</p>
    </>
  );
}

export default Hello;
