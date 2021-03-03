import React, {useEffect, useState} from 'react';

import SrcGithub from 'src/Static/Img/Icons/Sidebar/GitHub.png';
import SrcStackOverflow from 'src/Static/Img/Icons/Sidebar/StackOverflow.png';
import Codewars from 'src/Static/Img/Icons/Sidebar/Codewars.png';
import SrcTelegram from 'src/Static/Img/Icons/Sidebar/Telegram.png';
import SrcVk from 'src/Static/Img/Icons/Sidebar/Vk.png';
import SrcInst from 'src/Static/Img/Icons/Sidebar/Inst.png';
import SrcYouTube from 'src/Static/Img/Icons/Sidebar/YouTube.png';

import s from './Style/Links.module.sass';

// const items = [
//   {href: 'https://t.me/sepezho_log', src: SrcTelegram, isActive: false},
//   {href: 'https://www.instagram.com/sepezho', src: SrcInst, isActive: false},
//   {href: 'https://vk.com/sepezho', src: SrcVk, isActive: false},
//   {href: 'https://www.youtube.com/channel/UC4nIyTlfA6DKuF_xKtefutQ', src: SrcYouTube, isActive: false},
//   {href: 'https://github.com/SEPEZHO', src: SrcGithub, isActive: false},
//   {href: 'https://stackoverflow.com/users/12073046/sepezho', src: SrcStackOverflow, isActive: false},
//   {href: 'https://www.codewars.com/users/sepezho', src: Codewars, isActive: false},
// ];
const items = [
    {txt: '🕊', isActive: false},
    {txt: '🐥', isActive: false},
    {txt: '🐈‍⬛️', isActive: false},
    {txt: '🍷', isActive: false},
    {txt: '📸', isActive: false},
  ];
const Links = () => {
  const [itemsState, setItemsState] = useState(items);

  useEffect(() => {
    let oldElement = 0;
    const interval = setInterval(() => {
      const newItems = [...items];
      newItems[oldElement].isActive = false;
      let newElement = Math.floor(Math.random() * items.length);
      while (oldElement === newElement) {
        newElement = Math.floor(Math.random() * items.length);
      }
      oldElement = newElement;
      newItems[newElement].isActive = true;
      setItemsState(newItems);
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, [items]);

  return (
    <div className={s.LinksContainer}>
      <span>
      🤍
      </span>
      {itemsState.map((item) => (
        <span className={item.isActive ? s.activeImg : ''}>
          {item.txt}
        </span>
      ))}
      <span>
      🤍
      </span>
    </div>
  );
};

// {itemsState.map((item) => (
//   <a href={item.href} key={item.href}>
//     <img src={item.src} className={item.isActive ? s.activeImg : ''} alt="" />
//   </a>
// ))}
export default Links;
