import type { FC } from 'react';
import { Page } from '@/components/Page.tsx';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
        <div className="search-bar">
            <input type="search" placeholder="Искать в Shparka" />
        </div>
        <div className="container">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
    </Page>
  );
};
