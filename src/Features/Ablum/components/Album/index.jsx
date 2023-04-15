import React from "react";
import PropTypes from "prop-types";

Album.propTypes = {
  album: PropTypes.object,
};

function Album({ album = null }) {
  return (
    <div>
      <p className="album-title">{album.title}</p>
    </div>
  );
}

export default Album;
