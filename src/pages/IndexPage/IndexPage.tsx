import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

import tonSvg from './ton.svg';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <List>
          <div style={{
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "repeat(2, 1fr)"
          }}>
          <Link to="/prepared-food">
            <Section>
              <Cell
                  style={{ height: "200px", alignItems: "end", background: "url('https://www.pngplay.com/wp-content/uploads/9/Meal-Transparent-Images.png') no-repeat center", backgroundSize: "60%"}}
                  // before={<Image src="https://www.pngplay.com/wp-content/uploads/9/Meal-Transparent-Images.png" />}
                  // subtitle="Только разогреть!"
              >Готовая еда</Cell>
            </Section>
          </Link>
          <Link to="/drinks">
            <Section>
                <Cell
                    style={{ height: "200px", alignItems: "end", background: "url('https://static.vecteezy.com/system/resources/previews/054/314/897/non_2x/bottles-and-can-coca-cola-free-png.png') no-repeat center", backgroundSize: "60%"}}
                    // before={<Image src="https://static.vecteezy.com/system/resources/previews/054/314/897/non_2x/bottles-and-can-coca-cola-free-png.png" />}
                    // subtitle="Вода, соки, газировка и алкоголь"
                >Вода и напитки</Cell>
            </Section>
          </Link>
          <Link to="/snacks">
            <Section>
            <Cell
                style={{ height: "200px", alignItems: "end", background: "url('https://static.vecteezy.com/system/resources/thumbnails/027/144/586/small/delicious-homemade-kurkure-snack-on-background-free-png.png') no-repeat center", backgroundSize: "60%"}}
                // before={<Image src="https://static.vecteezy.com/system/resources/thumbnails/027/144/586/small/delicious-homemade-kurkure-snack-on-background-free-png.png" />}
                // subtitle="Чипсы, орехи, сухарики и прочее"
            >Снеки</Cell>
            </Section>
          </Link>
          <Link to="/discounts">
            <Section><Cell
                style={{ height: "200px", alignItems: "end", background: "url('https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-price-tag-with-the-discount-icon-vector-png-image_6686659.png') no-repeat center", backgroundSize: "60%"}}
                // before={<Image src="https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-price-tag-with-the-discount-icon-vector-png-image_6686659.png"/>}
                // subtitle="Скидки и акции на товары"
            >Акции</Cell></Section>

          </Link>
          </div>
        <Section
          header="Shparka"
          footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
        >
          <Link to="/ton-connect">
            <Cell
              before={<Image src={tonSvg} style={{ backgroundColor: '#007AFF' }}/>}
              subtitle="Connect your TON wallet"
            >
              TON Connect
            </Cell>
          </Link>
        </Section>
        <Section
          header="Application Launch Data"
          footer="These pages help developer to learn more about current launch information"
        >
          <Link to="/init-data">
            <Cell subtitle="User data, chat information, technical data">Init Data</Cell>
          </Link>
          <Link to="/launch-params">
            <Cell subtitle="Platform identifier, Mini Apps version, etc.">Launch Parameters</Cell>
          </Link>
          <Link to="/theme-params">
            <Cell subtitle="Telegram application palette information">Theme Parameters</Cell>
          </Link>
        </Section>
      </List>
    </Page>
  );
};
