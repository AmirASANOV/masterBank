import React from 'react';

import { useDispatch } from 'react-redux';

import Result from '../Messages/Result';

import { updateHomepageFeedbackStatus } from '@/ReduxStore/reducer/feedbackReducer/feedbackReducer';

const FeedBackResult = () => {
  const dispatch = useDispatch();

  return (
    <Result
      type="success"
      btnText="Отправить еще"
      onClick={() => {
        dispatch(updateHomepageFeedbackStatus(true));
      }}
      animationEffect="fade-right"
      containerStyle={{ justifyContent: 'center', display: 'flex' }}
    >
      <h2 className="header-24" style={{ textAlign: 'center' }}>
        Благодарим за обратную связь
      </h2>
      <p className="document-important-text ta-center" style={{ textAlign: 'center' }}>
        Наши сотрудники уже ищут решение вашей проблемы.
      </p>
    </Result>
  );
};

export default FeedBackResult;
