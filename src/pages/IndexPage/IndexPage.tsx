import type { FC } from 'react';
import { useState } from 'react';
import { Page } from '@/components/Page.tsx';
import { Link } from '@/components/Link/Link.tsx';
import {useNavigate} from "react-router-dom";
import { Modal, Placeholder } from '@telegram-apps/telegram-ui';

const FloatingCartButton: FC = () => (
  <div
    style={{
      position: 'fixed',
      right: 16,
      bottom: 36,
      zIndex: 1000,
      background: 'linear-gradient(90deg, #FF8000 0%, #FF4D00 100%)',
      color: '#fff',
      borderRadius: 32,
      padding: '14px 28px',
      fontSize: 18,
      fontWeight: 700,
      boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'Inter',
    }}
  >
    <span>15 мин</span>
    <span style={{ fontWeight: 400, fontSize: 18 }}>|</span>
    <span>5,90</span>
  </div>
);

export const MealCardWithModal: FC<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddToCart: () => void;
  inCart: boolean;
  onRemoveFromCart: () => void;
}> = ({ open, onOpenChange, onAddToCart, inCart, onRemoveFromCart }) => (
  <Modal
    open={open}
    onOpenChange={onOpenChange}
    header={<Modal.Header>Информация о блюде</Modal.Header>}
    trigger={
      <div className="meal-card" style={{ cursor: 'pointer' }}>
        <div className="meal-square-1"></div>
        <div className="meal-text-1">Каша овсяная с бананом</div>
        <div className="meal-weight-1">370 г</div>
        <div className="meal-price-1" style={{
      backgroundColor: inCart ? '#FF8000' : '#F2F2F2',
      color: inCart ? '#fff' : '#FF8000',
      transition: 'background 0.2s, color 0.2s',
    }}>
          {inCart ? (
      <>
        <span style={{ fontSize: 20, fontWeight: 700, margin: '0 8px' }}>-</span>
        <span style={{ fontSize: 16, fontWeight: 700 }}>1</span>
        <span style={{ fontSize: 20, fontWeight: 700, margin: '0 8px' }}>+</span>
      </>
    ) : (
      <>
        <div className="meal-price-text-1">5,90</div>
        <div className="meal-price-plus-1">+</div>
      </>
    )}
        </div>
      </div>
    }
    style={{
      backgroundColor: 'white',
      height: '90vh',
      color: 'black',
      fontFamily: 'Inter',
      textAlign: 'center'
    }}
  >
    <Placeholder style={{ paddingTop: 0, fontFamily: 'Inter' }}>
      <img
        alt="Овсяная каша с бананом"
        src="https://i.ibb.co/sJNPrLvL/5ee7227ad2a94-800x800-fit-png.webp"
        style={{
          width: 180,
          height: 180,
          borderRadius: 16,
          objectFit: 'cover',
          textAlign: "left"
        }}
      />
    </Placeholder>
    <div style={{ textAlign: 'left', padding: '0px 24px', fontFamily: 'Inter' }}>
      <div style={{
        textAlign: 'center',
        fontSize: 24,
        marginTop: 0,
        fontWeight: '500',
        marginBottom: 15
      }}>Каша овсяная с бананом</div>
      <div style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}>
        Нежная овсяная каша, приготовленная на молоке, с ломтиками спелого банана — идеальный завтрак для бодрого начала дня.
      </div>
      <div style={{ marginTop: 16, fontSize: 16, color: '#555' }}>
        Вес: <strong>370</strong> г
      </div>
      <div style={{ marginTop: 8, fontSize: 16, color: '#555' }}>
        Состав: <strong>Овсяные хлопья, банан, молоко, сахар</strong>
      </div>
      <div style={{ marginTop: 8, fontSize: 16, color: '#555' }}>
        Калорийность: <strong>150</strong> ккал
      </div>
      <div style={{ marginTop: 16, fontSize: 16, color: '#555' }}>
        Цена: <strong>5,90</strong> руб.
      </div>
      <button
        style={{
          width: '100%',
          background: 'linear-gradient(90deg, #FF8000 0%, #FF4D00 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: 12,
          fontSize: 18,
          fontWeight: 700,
          padding: '16px 0',
          cursor: 'pointer',
          fontFamily: 'Inter',
          marginTop: 24,
        }}
        onClick={() => {
          onOpenChange(false);
          onAddToCart();
        }}
      >
        Добавить в корзину
      </button>
    </div>
    <div className="bottom-space"></div>
  </Modal>
);


export const IndexPage: FC = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [inCart, setInCart] = useState(false);
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
            <MealCardWithModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          onAddToCart={() => {setShowCart(true); setInCart(true); }}
          inCart={inCart}
          onRemoveFromCart={() => setInCart(false)}
        />
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
        {showCart && <FloatingCartButton />}
    </Page>
  );
};
