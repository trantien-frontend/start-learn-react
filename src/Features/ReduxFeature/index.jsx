import React from 'react';
import PropTypes from 'prop-types';
import ReduxHobbyList from './components/ReduxHobbyList';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby, setActiveHobby } from '../../actions/hobby';

ReduxFeature.propTypes = {};
const randomNumber = () => {
  return Math.trunc(Math.random() * 10000);
};

function ReduxFeature(props) {
  const hobbyList = useSelector((state) => {
    return state.hobby.list;
  });

  const activeId = useSelector((state) => state.hobby.activeId);

  const dispatch = useDispatch();

  const handleRandomHobby = () => {
    const number = randomNumber();

    const newHobby = {
      id: number,
      title: `Hobby-${number}`,
    };
    const action = addNewHobby(newHobby);

    dispatch(action);
  };

  const handleChangeActive = (hobbyItem) => {
    const activeId = hobbyItem.id;

    const action = setActiveHobby(activeId);

    dispatch(action);
  };

  return (
    <div>
      <h3>Redux </h3>
      <button onClick={handleRandomHobby}>Random Hobby</button>
      <ReduxHobbyList
        hobbyList={hobbyList}
        onChangeActive={handleChangeActive}
        activeId={activeId}
      />
    </div>
  );
}

export default ReduxFeature;
