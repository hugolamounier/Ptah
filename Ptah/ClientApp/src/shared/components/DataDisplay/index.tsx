import React, { ReactNode } from 'react';
import Card from './Card';

const DataDisplay = ({ children }: { children: ReactNode }) => <>{children}</>;

DataDisplay.Card = Card;

export default DataDisplay;
