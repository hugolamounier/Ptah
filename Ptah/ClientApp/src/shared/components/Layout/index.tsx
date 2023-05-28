import React, { ReactNode } from 'react';
import { ConfigProvider, Layout as AntLayout } from 'antd';
import Menu from './Menu';
import AppContent from './Content';

const Layout = ({ children }: { children: ReactNode }) => (
  <ConfigProvider
    theme={{
      token: {
        fontFamily: 'Montserrat, sans-serif',
      },
    }}
  >
    <AntLayout className="h-screen max-h-screen overflow-x-hidden overflow-y-auto dark:bg-dark-900">
      <Menu />
      <AppContent>{children}</AppContent>
    </AntLayout>
  </ConfigProvider>
);

export default Layout;
