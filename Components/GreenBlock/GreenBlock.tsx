import React, { FC } from 'react';

import s from './GreenBlock.module.sass';

interface IGreenBlock {
  text: string;
  imgUrl?: string;
  style?: React.CSSProperties;
}

const GreenBlock: FC<IGreenBlock> = ({ text, imgUrl, style }) => (
  <div className={s.wrapper} style={style}>
    {imgUrl && <img className={s.img} src={imgUrl} alt="logo" />}

    <p className={s.text}>{text}</p>
  </div>
);

export default GreenBlock;
