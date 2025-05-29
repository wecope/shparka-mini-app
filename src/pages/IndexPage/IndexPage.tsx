import type { FC } from 'react';
import { Page } from '@/components/Page.tsx';
import { Link } from '@/components/Link/Link.tsx';
import {useNavigate} from "react-router-dom";
import { Modal, Placeholder } from '@telegram-apps/telegram-ui';

const PlaceholderImage = () => (
  <img
    alt="Telegram sticker"
    src="https://xelene.me/telegram.gif"
    style={{ width: 120, height: 120 }}
  />
);

export const MealCardWithModal = () => (
  <Modal
    header={<Modal.Header />}
    trigger={
      <div className="meal-card" style={{ cursor: 'pointer' }}>
        <div className="meal-square-1"></div>
        <div className="meal-text-1">Каша овсяная с бананом</div>
        <div className="meal-weight-1">370 г</div>
        <div className="meal-price-1">
          <div className="meal-price-text-1">5,90</div>
          <div className="meal-price-plus-1">+</div>
        </div>
      </div>
    }
  >
    <Placeholder
      header="This is nice modal, isn't it?"
      description="Swipe up to close"
    >
      <PlaceholderImage />
    </Placeholder>
  </Modal>
);



export const IndexPage: FC = () => {
    const navigate = useNavigate();
  return (
    <Page back={false}>
        <div className="search-bar">
            <div className="search-icon"></div>
            <input type="search" placeholder="Искать в Shparka" onKeyDown={e => {
                if (e.key === 'Enter') {
                    navigate('/search');
            }}}
                />
        </div>
        <div className="container">
            <Link to="/ready-food">
                  <div className="square ready">
                          <div className="square-text">Готовая еда</div>
                  </div>
            </Link>
            <Link to="/water">
          <div className="square water">
            <div className="square-text">Вода и напитки</div>
          </div>
                </Link>
            <Link to="/snacks">
          <div className="square snacks">
            <div className="square-text">Снеки</div>
          </div>
                </Link>
            <Link to="/discount">
          <div className="square gradient">
            <div className="square-text text-white">Готовая еда</div>
          </div>
                </Link>
        </div>
        <div className="new-heading">Новинки</div>
        <div className="meal-container">
            <MealCardWithModal />
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
            <div className="meal-card-bottom">
                <div className="meal-square-4"></div>
                <div className="meal-text-4">Овощной салат с лососем</div>
                <div className="meal-weight-4">250 г</div>
                <div className="meal-price-4">
                    <div className="meal-price-text-4">9,60</div>
                    <div className="meal-price-plus-4">+</div>
                </div>
            </div>
            <div className="meal-card-bottom">
                <div className="meal-square-5"></div>
                <div className="meal-text-5">Жареная курица с рисом карри</div>
                <div className="meal-weight-5">310 г</div>
                <div className="meal-price-5">
                    <div className="meal-price-text-5">11,40</div>
                    <div className="meal-price-plus-5">+</div>
                </div>
            </div>
            <div className="meal-card-bottom">
                <div className="meal-square-6"></div>
                <div className="meal-text-6">Стейк из свинины с овощами</div>
                <div className="meal-weight-6">420 г</div>
                <div className="meal-price-6">
                    <div className="meal-price-text-6">15,20</div>
                    <div className="meal-price-plus-6">+</div>
                </div>
            </div>
        </div>
        <div className="bottom-space"></div>
    </Page>
  );
};
