import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

ReduxHobbyList.propTypes = {
  hobbyList: PropTypes.array.isRequired,
  onChangeActive: PropTypes.func,
  activeId: PropTypes.number,
};

function ReduxHobbyList({ hobbyList, onChangeActive = null, activeId = null }) {
  const handleChangeActive = (hobby) => {
    onChangeActive?.(hobby);
  };

  return (
    <>
      <ul className='hobby-list'>
        {hobbyList.map((hobbyItem) => (
          <li
            className={classNames({
              active: hobbyItem.id === activeId,
            })}
            key={hobbyItem.id}
            onClick={() => handleChangeActive(hobbyItem)}
          >
            {hobbyItem.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReduxHobbyList;
