'use client';

import { Section, Cell, Image, List, ButtonCell, Button, FixedLayout, Badge, IconButton} from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

import {
  Tabbar
} from '@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/Tabbar';

import {
  TabbarItem
} from '@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem';


import {
  InlineButtons
} from '@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/InlineButtons';

import {
  InlineButtonsItem
} from '@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem';

import { Icon32ProfileColoredSquare } from '@telegram-apps/telegram-ui/dist/icons/32/profile_colored_square'
import { Icon28AddCircle } from '@telegram-apps/telegram-ui/dist/icons/28/add_circle'
import { Icon24Chat } from '@telegram-apps/telegram-ui/dist/icons/24/chat';
import { Icon24Notifications } from '@telegram-apps/telegram-ui/dist/icons/24/notifications';
import { Icon24QR } from '@telegram-apps/telegram-ui/dist/icons/24/qr';
import { Icon20QuestionMark } from '@telegram-apps/telegram-ui/dist/icons/20/question_mark'

import { useState } from 'react';

import { Link } from '@/components/Link/Link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Page } from '@/components/Page';

import tonSvg from './_assets/ton.svg';

const tabs = [
  {
    id: 'chat',
    text: 'Friends',
    Icon: Icon24Chat,
  },
  {
    id: 'notifications',
    text: 'Ratings',
    Icon: Icon24Notifications,
  },
  {
    id: 'qr',
    text: 'Booke',
    Icon: Icon24QR,
  },
  {
    id: 'tasks',
    text: 'Tasks',
    Icon: Icon24Notifications,
  },
  {
    id: 'market',
    text: 'Market',
    Icon: Icon24Chat,
  },
];

export default function Home() {
  const t = useTranslations('i18n');
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  return (
    <Page back={false}>

      {/* Иконка, закреплённая справа внизу, над таббаром */}
      <IconButton
        mode="bezeled"
        size="s"
        style={{
          position: 'fixed', // или 'absolute', если у вас есть родитель с position: relative
          bottom: '120px',    // отступ от низа экрана (чуть выше таббара, который на 0)
          right: '80px',     // отступ справа
          zIndex: 9999       // чтобы кнопка была поверх всего
        }}
      >
        <Icon20QuestionMark />
      </IconButton>

      {/* Сам таббар, закреплённый внизу экрана */}
      <Tabbar
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          // закруглённые верхние углы
          borderStartStartRadius: 40,
          borderStartEndRadius: 40,
          // при желании можно добавить background
          // backgroundColor: 'var(--tgui--secondary_bg_color)',
          // или тень
          // boxShadow: '0 -2px 8px rgba(0,0,0,0.2)'
        }}
      >
        {tabs.map(({ id, text, Icon }) => (
          <TabbarItem
            key={id}
            text={text}
            selected={id === currentTab}
            onClick={() => setCurrentTab(id)}
          >
            <Icon />
          </TabbarItem>
        ))}
      </Tabbar>
    </Page>
  );
}
