import React from 'react';
import { Layout as AntLayout, Menu as AntMenu, theme } from 'antd';

const { Header } = AntLayout;

const Menu = () => {
  return (
    <Header className="flex items-center bg-dark-800 mb-8">
      <div className="container mx-auto">
        <AntMenu
          className="dark:bg-dark-800 text-white"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(5).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </div>
    </Header>
  );
};

export default Menu;
