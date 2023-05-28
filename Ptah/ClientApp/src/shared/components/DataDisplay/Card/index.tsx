import React, { ReactNode } from 'react';
import { Card as AntCard } from 'antd';
import { darkTheme, getCurrentTheme, lightTheme } from '../../../styles';

interface CardInterface {
  children: ReactNode;
  title?: ReactNode;
}

const Card = ({ children, title }: CardInterface) => {
  const currentTheme = getCurrentTheme();
  const titleStyle =
    currentTheme === 'dark'
      ? { color: darkTheme.textColor, borderBottom: `1px solid ${darkTheme['900']}` }
      : { color: lightTheme.textColor, borderBottom: `1px solid ${lightTheme['200']}` };

  return (
    <AntCard
      headStyle={titleStyle}
      title={title}
      className="dark:bg-dark-800 border-0 dark:text-white"
    >
      {children}
    </AntCard>
  );
};

export default Card;
