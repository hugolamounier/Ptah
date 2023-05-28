import React, { ReactNode } from 'react';

const CardTitle = ({ children }: { children: ReactNode }) => (
  <div className="text-lg font-semibold pb-3 border-b-2 dark:border-dark-900">
    {children}
  </div>
);

export default CardTitle;
