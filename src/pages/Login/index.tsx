import React from 'react';
import { List, InputItem, Flex } from 'antd-mobile';
import styles from './index.less';
export interface LoginProps {
  [key: string]: any;
}

function Login(props: LoginProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.welcomeBox}>
        <p>Welcome</p>
        <p>Back</p>
      </div>
      <List>
        <InputItem className={styles.borderBottom1px} placeholder="Email" />
        <InputItem placeholder="Password" />
      </List>
      <Flex justify="between">
        <Flex.Item>Sign in</Flex.Item>
        <Flex.Item>
          <div>login</div>
        </Flex.Item>
      </Flex>
    </div>
  );
}

export default Login;
