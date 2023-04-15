import React from "react";
import PropTypes from "prop-types";
import Album from "../Album";

AlbumList.propTypes = {
  listAlbum: PropTypes.array,
};

function AlbumList(props) {
  const { listAlbum } = props;
  return (
    <ul className="list-album">
      {listAlbum.map((album) => (
        <li key={album.id}>
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
