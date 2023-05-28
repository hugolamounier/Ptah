import React, { ReactNode } from 'react';
import { Layout as AntLayout } from 'antd';

const { Content } = AntLayout;

const AppContent = ({ children }: { children: ReactNode }) => {
  return (
    <Content className="container mx-auto">
      <main>{children}</main>
    </Content>
  );
};

export default AppContent;
