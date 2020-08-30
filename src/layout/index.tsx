import React from 'react';
import { connect, Link, useHistory, useLocation } from 'umi';
import { ICommonProps } from '@/global';
import { TabBar } from 'antd-mobile';

function BaseLayout(props: ICommonProps) {
  const {children} = props
  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;
  if (pathname === '/') {
    history.replace('/home')
  }
  return (
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="white"
    >
      <TabBar.Item
        title="首页"
        key="index"
        selected={pathname === '/home'}
        onPress={() => history.push('/home')}
        icon={
          <div
            style={{
              width: '22px',
              height: '22px',
              background:
                'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
            }}
          />
        }
        selectedIcon={
          <div
            style={{
              width: '22px',
              height: '22px',
              background:
                'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
            }}
          />
        }
        badge={100}
      >
        {pathname==='/home'?children: null}
      </TabBar.Item>
      <TabBar.Item
        title="我的"
        key="me"
        selected={pathname === '/me'}
        onPress={() => history.push('/me')}
        icon={
          <div
            style={{
              width: '22px',
              height: '22px',
              background:
                'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
            }}
          />
        }
        selectedIcon={
          <div
            style={{
              width: '22px',
              height: '22px',
              background:
                'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat',
            }}
          />
        }
      >
        {pathname==='/me'?children: null}
      </TabBar.Item>
    </TabBar>
  );
}

export default BaseLayout;
