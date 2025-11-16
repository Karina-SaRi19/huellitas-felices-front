import React from 'react';
import { Link } from 'react-router-dom';
import './PerfilPet.css';

function PerfilPet() {
  return (
    <div className="root-container">
      <div className="layout-container">
        {/* TopNavBar */}
        <header className="header">
          <div className="header-logo">
            <div className="logo-icon">
              <span className="material-symbols-outlined">pets</span>
            </div>
            <h2 className="logo-text">HuellitasFelices</h2>
          </div>
          <div className="desktop-nav">
            <div className="nav-links">
              <Link className="header-nav-link" to="/">Inicio</Link>
              <Link className="header-nav-link" to="/acerca">Nosotros</Link>
            </div>
          </div>
          <button className="mobile-menu-btn">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        <main className="main-content">
          <div className="content-wrapper">

            <div className="profile-grid">
              {/* Left Column: Image Gallery */}
              <div className="gallery-column">
                {/* Botón de regresar arriba de la imagen */}
                <div className="back-row">
                  <Link to="/mascotas" className="btn-back">
                    <span className="material-symbols-outlined">arrow_back</span>
                    <span>Regresar</span>
                  </Link>
                </div>

                <div 
                  className="main-image"
                  style={{backgroundImage: 'url("https://www.clinicaveterinariaaguilar.es/wp-content/uploads/2020/01/cachorro.jpg")'}}
                />
                <div className="thumbnail-grid">
                  <div 
                    className="thumbnail thumbnail-active"
                    style={{backgroundImage: 'url("https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09golden20retriever.jpg?itok=48StbVfe")'}}
                  />
                  <div 
                    className="thumbnail"
                    style={{backgroundImage: 'url("https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/BMM4AYOGEJADRL5I3L32UKJEUY.jpg")'}}
                  />
                  <div 
                    className="thumbnail"
                    style={{backgroundImage: 'url("https://preview.redd.it/activities-for-a-golden-retriever-puppy-v0-s48pd68dyczd1.jpeg?auto=webp&s=b87309f9c34f906f742d7b24f1aa586551606572")'}}
                  />
                </div>
              </div>

              {/* Right Column: Pet Info & Actions */}
              <div className="info-column">
                {/* Pet Summary */}
                <div className="pet-summary">
                  <div className="pet-header">
                    <div className="pet-title-section">
                      <h1 className="pet-name">Max</h1>
                      <p className="pet-details">Golden Retriever, 2 años, Macho</p>
                    </div>
                    <div className="location-badge">
                      <span className="material-symbols-outlined location-icon">location_on</span>
                      <span className="location-text">Santiago de Querétaro, Qro.</span>
                    </div>
                  </div>
                  <p className="pet-description">
Tu futuro mejor amigo está esperando. Max es un manojo de alegría que ama los abrazos y los largos paseos por el parque.                  </p>
                  <div className="action-buttons">
                    <button className="btn-adopt">
                      <span>Adoptame</span>
                    </button>
                  </div>
                </div>

                {/* Personality & Traits */}
                <div className="section">
                  <h2 className="section-title">Personalidad y Rasgos</h2>
                  <div className="traits-grid">
                    <div className="trait-card">
                      <span className="material-symbols-outlined trait-icon">home</span>
                      <h3 className="trait-text">Entrenado para el hogar</h3>
                    </div>
                    <div className="trait-card">
                      <span className="material-symbols-outlined trait-icon">child_care</span>
                      <h3 className="trait-text">Amigable con los niños</h3>
                    </div>
                    <div className="trait-card">
                      <span className="material-symbols-outlined trait-icon">pets</span>
                      <h3 className="trait-text">Bueno con otros perros</h3>
                    </div>
                    <div className="trait-card">
                      <span className="material-symbols-outlined trait-icon">bolt</span>
                      <h3 className="trait-text">Mucha energía</h3>
                    </div>
                  </div>
                </div>

                {/* Health Record */}
                <div className="section">
                  <h2 className="section-title">Historial de Salud</h2>
                  <ul className="health-list">
                    <li className="health-item">
                      <span className="material-symbols-outlined check-icon">check_circle</span>
                      <span>Sus vacunas están al día</span>
                    </li>
                    <li className="health-item">
                      <span className="material-symbols-outlined check-icon">check_circle</span>
                      <span>Está castrado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* More Pets Carousel */}
            <div className="carousel-section">
              <h2 className="carousel-title">Otros Amigos Buscando un Hogar</h2>
              <div className="carousel-wrapper">
                <div className="carousel-container">
                  {/* Pet Card 1 */}
                  <div className="pet-carousel-card">
                    <div 
                      className="pet-carousel-image"
                      style={{backgroundImage: 'url("https://resources.uss.cl/upload/2022/11/supervivencia-gatos-6362b9f553582.jpg")'}}
                    />
                    <div className="pet-carousel-info">
                      <div>
                        <p className="pet-carousel-name">Whiskers</p>
                        <p className="pet-carousel-desc">Un gato curioso y juguetón</p>
                      </div>
                      <button className="btn-view-profile">
                        <span className="truncate">View Profile</span>
                      </button>
                    </div>
                  </div>

                  {/* Pet Card 2 */}
                  <div className="pet-carousel-card">
                    <div 
                      className="pet-carousel-image"
                      style={{backgroundImage: 'url("https://images.canal1.com.co/wp-content/uploads/2023/11/30210118/WhatsApp-Image-2023-08-05-at-8.14.11-PM.jpeg")'}}
                    />
                    <div className="pet-carousel-info">
                      <div>
                        <p className="pet-carousel-name">Scamp</p>
                        <p className="pet-carousel-desc">Le encanta jugar a buscar la pelota!</p>
                      </div>
                      <button className="btn-view-profile">
                        <span className="truncate">View Profile</span>
                      </button>
                    </div>
                  </div>

                  {/* Pet Card 3 */}
                  <div className="pet-carousel-card">
                    <div 
                      className="pet-carousel-image"
                      style={{backgroundImage: 'url("https://fotografias.lasexta.com/clipping/cmsimages02/2019/01/25/DB41B993-B4C4-4E95-8B01-C445B8544E8E/98.jpg?crop=4156,2338,x0,y219&width=1900&height=1069&optimize=high&format=webply")'}}
                    />
                    <div className="pet-carousel-info">
                      <div>
                        <p className="pet-carousel-name">Luna</p>
                        <p className="pet-carousel-desc">Una dormilona tranquila y gentil.</p>
                      </div>
                      <button className="btn-view-profile">
                        <span className="truncate">View Profile</span>
                      </button>
                    </div>
                  </div>

                  {/* Pet Card 4 */}
                  <div className="pet-carousel-card">
                    <div 
                      className="pet-carousel-image"
                      style={{backgroundImage: 'url("https://www.clinicaveterinariaaguilar.es/wp-content/uploads/2020/01/cachorro.jpg")'}}
                    />
                    <div className="pet-carousel-info">
                      <div>
                        <p className="pet-carousel-name">Max</p>
                        <p className="pet-carousel-desc">¡Mira esa carita adorable!</p>
                      </div>
                      <button className="btn-view-profile">
                        <span className="truncate">View Profile</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PerfilPet;