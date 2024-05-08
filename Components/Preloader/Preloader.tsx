import React, { memo } from 'react';

import { RenderIcon } from '../Inputs/Icons/RenderIcons';

import style from './style.module.sass';

interface PreloaderProps {
  message: string;
  type?: 'balls' | 'cyrcle' | 'future';
  height?: number | string;
  width?: number | string;
}

const Preloader: React.FC<PreloaderProps> = memo(({ message, type, height, width }) => (
  <div
    className="preloader"
    style={{
      height: height || '100vh',
      width: width || '100vw',
    }}
  >
    <div className="preloader__container">
      {type === 'balls' ? (
        <div className="preloader__variant">
          <span className="mini-ball" />
          <span className="big-ball" />
          <span className="big-ball" />
          <span className="mini-ball" />
        </div>
      ) : type === 'future' ? (
        <div className={`${style.loader} ${style.loader4}`}>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <RenderIcon
          status="waiting"
          field="text"
          style={{ position: 'relative', width: 70, height: 70, marginBottom: 20 }}
        />
      )}
      <p className={style.prealoder_message}>{message}</p>
    </div>
  </div>
));

export default Preloader;
