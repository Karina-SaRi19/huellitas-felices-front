import React from 'react';
import './Home.css'; // Importa los estilos CSS
import { Link } from "react-router-dom";

// Componente auxiliar para Material Symbols
const MaterialSymbol = ({ name, size = '24px', className = '' }) => (
  <span className={`material-symbols-outlined ${className}`} style={{ fontSize: size }}>
    {name}
  </span>
);

// Icono del logo (Corazón/Diamante)
const LogoIcon = () => (
  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
  </svg>
);

const Home = () => {
  const featuredPets = [
    { name: "Max", details: "Perro, 2 años", imageUrl: "https://www.clinicaveterinariaaguilar.es/wp-content/uploads/2020/01/cachorro.jpg", alt: "Un perro cachorro de raza mixta mirando a la cámara" },
    { name: "Luna", details: "Gata, 1 año", imageUrl: "https://fotografias.lasexta.com/clipping/cmsimages02/2019/01/25/DB41B993-B4C4-4E95-8B01-C445B8544E8E/98.jpg?crop=4156,2338,x0,y219&width=1900&height=1069&optimize=high&format=webply", alt: "Una gata atigrada sentada en una ventana" },
    { name: "Rocky", details: "Perro, 4 años", imageUrl: "https://i.redd.it/my-2-year-old-pitbull-pupper-v0-bg9q8bd1tzce1.jpg?width=1200&format=pjpg&auto=webp&s=f4ef7053c66328da7ea629afe2d7681ab6855c9d", alt: "Un perro bulldog francés con una corbata de moño" },
    { name: "Bella", details: "Gata, 3 años", imageUrl: "https://images.ctfassets.net/denf86kkcx7r/4IPlg4Qazd4sFRuCUHIJ1T/f6c71da7eec727babcd554d843a528b8/gatocomuneuropeo-97?fm=webp&w=612", alt: "Una gata siamesa con ojos azules intensos" },
  ];

  const howItWorksSteps = [
    { icon: "search", title: "1. Busca", description: "Explora los perfiles de nuestras mascotas. Usa los filtros para encontrar compañeros que se ajusten a tu estilo de vida." },
    { icon: "favorite", title: "2. Conoce", description: "¿Encontraste a un posible amigo? Envía una solicitud para coordinar una visita y conocerse mutuamente." },
    { icon: "home", title: "3. Adopta", description: "Si hay una conexión, completa el proceso de adopción y prepárate para dar la bienvenida a tu nuevo familiar." },
  ];

  return (
    <div className="app-container light-mode">
      {/* TopNavBar Component */}
      <header className="main-header sticky-top">
        <div className="header-content-wrapper">
          <div className="logo-section">
            <div className="logo-icon-container">
              <MaterialSymbol name="pets" size="28px" className="logo-icon" />
            </div>
            <h2 className="logo-text">HuellitasFelices</h2>
          </div>
          <div className="nav-desktop">
            <nav className="nav-links">
              <Link className="header-nav-link" to="/mascotas">Adoptar</Link>
              <Link className="header-nav-link" to="/acerca">Nosotros</Link>
            </nav>
            <div className="header-buttons">
              <button className="btn btn-secondary">
                <span className="truncate">Iniciar Sesión</span>
              </button>
            </div>
          </div>
          <div className="nav-mobile-menu">
            <button className="menu-button">
              <MaterialSymbol name="menu" />
            </button>
          </div>
        </div>
      </header>

      <main className="main-content-area">
        <div className="main-max-width-wrapper">
          {/* HeroSection Component */}
          <section className="hero-section">
            <div className="hero-content-padding">
              <div
                className="hero-banner"
                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8OMCHk0qEKgt6wzrQ08l3bMBhmIAxMD1_YNvKqGOD2ojk3VgPxs5VzL33_OW8sVyCou0r_FjeaKcuyLTgN7oyMO9B9x0cd_uE1M80yyRfYSBbD_fd_7KoRM_zESFXa_m7sn40-QsJQqKgF240WHJf3cbPLvxe_C8zKM37MTzZzmdiTn_hJMiPMSUCPrA-o6Ka0uvCZHMuOH4booydXB6SW2YCAeVaZp3fz5eKWACpqoH-UGhfNtcbAGa3gjYZd-AA0An9YgKGzy8")' }}
              >
                <div className="hero-text-group">
                  <h1 className="hero-title">Encuentra a tu amigo fiel</h1>
                  <h2 className="hero-subtitle">Dale un hogar a una mascota necesitada y cambia dos vidas para siempre. Explora perfiles de adorables compañeros que esperan por ti.</h2>
                </div>
                <button className="btn btn-hero">
                  <span className="truncate">Buscar Mascotas</span>
                </button>
              </div>
            </div>
          </section>

          {/* Chips (Filter) Component */}
          <section className="filter-chips-section">
            <p className="filter-label">Filtrar por:</p>
            <div className="filter-chips-group">
              {['Tipo', 'Tamaño', 'Edad', 'Ubicación'].map((filter) => (
                <button key={filter} className="filter-chip">
                  {/* 🟢 El texto del chip y el icono están juntos para formar el "dropdown" */}
                  <p className="chip-text">{filter}</p>
                  <MaterialSymbol name="keyboard_arrow_down" size="20px" className="chip-icon" />
                </button>
              ))}
            </div>
          </section>

          {/* Featured Pets Section */}
          <h2 className="section-title">Esperando un Hogar</h2>
          <section className="pet-grid">
            {featuredPets.map((pet, index) => (
              <div key={index} className="pet-card">
                <div className="pet-image-container">
                  <div
                    className="pet-image"
                    data-alt={pet.alt}
                    style={{ backgroundImage: `url("${pet.imageUrl}")` }}
                  ></div>
                </div>
                <div className="pet-info">
                  <p className="pet-name">{pet.name}</p>
                  <p className="pet-details">{pet.details}</p>
                </div>
              </div>
            ))}
          </section>

          {/* "How It Works" Section */}
          <section className="how-it-works-section">
            <div className="text-center-wrapper">
              <h2 className="how-it-works-title">¿Cómo funciona la adopción?</h2>
              <p className="how-it-works-subtitle">Nuestro proceso está diseñado para ser simple, transparente y enfocado en el bienestar de las mascotas.</p>
            </div>
            <div className="steps-grid">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="step-card">
                  <div className="step-icon-container">
                    <MaterialSymbol name={step.icon} size="48px" />
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer Component */}
      <footer className="main-footer">
        <div className="footer-max-width-wrapper">
          <div className="footer-links-grid">
            <div className="footer-brand-info">
              <div className="logo-section mb-4">
                <div className="logo-icon-container logo-icon-footer">
                  <MaterialSymbol name="pets" size="28px" className="logo-icon" />
                </div>
                <h2 className="logo-text">HuellitasFelices</h2>
              </div>
              <p className="footer-tagline">Cambiando vidas, un hogar a la vez.</p>
            </div>
            <div className="footer-link-column">
              <h3 className="footer-column-title">Explorar</h3>
              <ul className="footer-link-list">
                <li><a className="footer-link" href="#">Perros</a></li>
                <li><a className="footer-link" href="#">Gatos</a></li>
                <li><a className="footer-link" href="#">Otros Animales</a></li>
              </ul>
            </div>
            <div className="footer-link-column">
              <h3 className="footer-column-title">Nosotros</h3>
              <ul className="footer-link-list">
                <li><a className="footer-link" href="/acerca">Nuestra Misión</a></li>
                <li><a className="footer-link" href="/acerca">Historias que Inspiran</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2025 HuellitasFelices. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;