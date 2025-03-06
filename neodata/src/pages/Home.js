import { useState, useEffect } from 'react';
import '../styles/Home.css';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';

const images = [banner1, banner2, banner3];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Troca a imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-container">
      <h1>Bem-vindo à NeoData Solutions</h1>
      <p>Soluções inovadoras para armazenamento e análise de dados.</p>
      <div className="carousel">
        <img src={images[currentIndex]} alt="Banner" className="carousel-image" />
      </div>
      
    </section>
  );
}