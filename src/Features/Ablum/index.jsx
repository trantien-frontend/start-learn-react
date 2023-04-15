import React from "react";
import AlbumList from "./components/AlbumList";

function AlbumFeature() {
  const list = [
    {
      id: 1,
      title: "mind && Nature Ralxing",
    },

    {
      id: 2,
      title: "mind && Nature Ralxing",
    },

    {
      id: 3,
      title: "mind && Nature Ralxing",
    },
  ];

  return (
    <>
      <h2>Relaxing Music</h2>
      <AlbumList listAlbum={list} />
    </>
  );
}

export default AlbumFeature;
