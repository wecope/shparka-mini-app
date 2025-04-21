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
          <div className="square gradient"></div>
        </div>
        <div className="new-heading">Новинки</div>
        <div className="meal-container">
            <div className="meal-square"></div>
            <div className="meal-square"></div>
            <div className="meal-square"></div>
            <div className="meal-square"></div>
            <div className="meal-square"></div>
            <div className="meal-square"></div>
        </div>
    </Page>
  );
};
