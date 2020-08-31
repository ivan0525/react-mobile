import React from 'react';
import { useDispatch, ConnectRC, IMeModelState, connect } from 'umi';
import { Button, List } from 'antd-mobile';

export interface MeProps {
  me: IMeModelState;
}
const Me: ConnectRC<MeProps> = props => {
  const dispath = useDispatch();
  const { me } = props;
  function getUsers() {
    dispath({
      type: 'me/getUsers',
      payload: { id: '123' },
    });
  }
  console.log(props);
  return (
    <div>
      me
      <Button onClick={() => getUsers()}>getUsers</Button>
      {me.users.length > 0 ? (
        <List>
          {me.users.map(user => (
            <List.Item key={user.id}>{user.name}</List.Item>
          ))}
        </List>
      ) : null}
    </div>
  );
};

export default connect(({ me }: MeProps) => ({ me }))(Me);
