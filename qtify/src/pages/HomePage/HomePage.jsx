import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useOutletContext } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage({ props }) {
  const {data} = useOutletContext();
  const { newAlbums, topAlbums, songs, genres } = data;

  // console.log(genres); 

  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album"  />
        <Section title="Songs" data={songs} genres={genres} type="song" />
      </div>
    </>
  );
}
