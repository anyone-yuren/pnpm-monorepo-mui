import { Layout } from 'antd';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { Outlet } from 'react-router-dom';
import './index.less';

import { AppLogo } from '@/components/AppLogo';

import { useTitle } from '@/hooks/web/useTitle';

import { useAppSelector } from '@/stores';

import LayoutHeader from './header';
import LayoutMenu from './menu';

export const BasicLayout = (props: any) => {
  useTitle();
  const { Sider, Content } = Layout;

  const getMenuFold = useAppSelector((state) => state.app.appConfig?.menuSetting?.menuFold);

  return (
    <Layout className='layout_wrapper'>
      <Sider width={210} trigger={null} collapsed={getMenuFold} style={{ height: '100vh' }}>
        <AppLogo />
        <LayoutMenu />
      </Sider>
      <Layout>
        <LayoutHeader />
        <Content>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </Content>
      </Layout>
    </Layout>
  );
};
