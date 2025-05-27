import type { FC } from 'react';
import { Page } from '@/components/Page.tsx';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
        <div className="search-bar">
            <div className="search-icon"></div>
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
            <div className="meal-card">
                <div className="meal-square-1"></div>
                <div className="meal-text-1">Каша овсяная с бананом</div>
                <div className="meal-weight-1">370 г</div>
                <div className="meal-price-1">
                    <div className="meal-price-text-1">5,90</div>
                    <div className="meal-price-plus-1">+</div>
                </div>
            </div>
            <div className="meal-card">
                <div className="meal-square-2"></div>
                <div className="meal-text-2">Цезарь с креветками</div>
                <div className="meal-weight-2">330 г</div>
                <div className="meal-price-2">
                    <div className="meal-price-text-2">10,90</div>
                    <div className="meal-price-plus-2">+</div>
                </div>
            </div>
            <div className="meal-card">
                <div className="meal-square-3"></div>
                <div className="meal-text-3">Омлет с помидорами</div>
                <div className="meal-weight-3">400 г</div>
                <div className="meal-price-3">
                    <div className="meal-price-text-3">6,40</div>
                    <div className="meal-price-plus-3">+</div>
                </div>
            </div>
            <div className="meal-square-4"></div>
            <div className="meal-square-5"></div>
            <div className="meal-square-6"></div>
        </div>
    </Page>
  );
};
