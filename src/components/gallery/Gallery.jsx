import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MonsterTemplate from '../monster/template/MonsterTemplate';
import './gallery.scss';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('/assets/gallery.json')
      .then((response) => {
        setPhotos(response.data);
      });
  }, []);

  return (
    <section className="gallery">
      <h1>Galerie</h1>
      <div className="gallery__list">
        {photos && photos.map((photo) => (
          <div className="gallery__photo" key={photo.title}>
            <MonsterTemplate monster={photo.svg} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
