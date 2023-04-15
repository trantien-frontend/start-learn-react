import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
  onChangeSearchPost: PropTypes.func,
};

function PostFilterForm({ onChangeSearchPost = null }) {
  const [searchTitlePost, setSearchTitlePost] = useState('');
  const searchDebounce = useRef(null);

  function handleSearchTitlePost(e) {
    setSearchTitlePost(e.target.value);

    if (!onChangeSearchPost) return;

    if (searchDebounce.current) clearTimeout(searchDebounce.current);

    searchDebounce.current = setTimeout(() => {
      const formsValues = {
        searchTitlePost: e.target.value,
      };
      onChangeSearchPost(formsValues);
    }, 500);
  }

  return (
    <div>
      <form>
        <input
          type='text'
          value={searchTitlePost}
          onChange={handleSearchTitlePost}
        />
      </form>
    </div>
  );
}

export default PostFilterForm;
