import type { FC } from 'react';
import { Page } from '@/components/Page.tsx';
import {useNavigate} from "react-router-dom";



export const SearchPage: FC = () => {
    const navigate = useNavigate();
  return (
    <Page>
        <div className="search-bar">
            <div className="search-icon"></div>
            <input type="search" placeholder="Искать в Shparka" defaultValue="Цезарь" onKeyDown={e => {
                if (e.key === 'Enter') {
                    navigate('/search');
            }}}
                />
        </div>
        <div className="new-heading">Результаты поиска</div>
        <div className="meal-container">
            <div className="meal-card">
                <div className="meal-square-2"></div>
                <div className="meal-text-2">Цезарь с креветками</div>
                <div className="meal-weight-2">330 г</div>
                <div className="meal-price-2">
                    <div className="meal-price-text-2">10,90</div>
                    <div className="meal-price-plus-2">+</div>
                </div>
            </div>
        </div>
    </Page>
  );
};
