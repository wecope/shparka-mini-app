import type { FC } from 'react';
import { Page } from '@/components/Page.tsx';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
        <div className="search-bar">
            <input type="search" placeholder="Искать в Shparka" />
        </div>
        <div className="container">
          <div className="square ready">
            <div className="square-text">Готовая еда</div>
          </div>
          <div className="square water">
            <div className="square-text">Вода и напитки</div>
          </div>
          <div className="square snacks">
            <div className="square-text">Снеки</div>
          </div>
          <div className="square gradient">
            <div className="square-text text-white">Готовая еда</div>
          </div>
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
