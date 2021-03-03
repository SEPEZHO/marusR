import React from 'react';

import SrcInst from 'src/Static/Img/Icons/Sidebar/Inst.png';
import s from './Style/Footer.module.sass';

const Footer: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div>
          <div>
            <img src={SrcInst} alt="" />
            <span>
              Все данные берутся с твоего <a href="https://www.instagram.com/mrs_skv">instagram</a>,
              при загрузке страницы.
            </span>
          </div>
          <span>
            Со наилучшими пожеланиями,<br /> твой <a href="https://sepezho.com">пинг</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
