import React from 'react';
import { Link } from 'react-router-dom';
import './Nosotros.css';

const Nosotros = () => {
  return (
    <div className="root-container">
      <div className="layout-container">
        {/* HeroSection */}
        <div className="hero-wrapper">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">Cambiando vidas, un rescate a la vez</h1>
                <h2 className="hero-subtitle">
                  Descubre cómo nuestra pasión por los animales crea familias felices y segundas oportunidades.
                </h2>
              </div>
              <div className="hero-buttons">
                <button className="btn-primary">
                  <Link className="nav-link" to="/mascotas">Ver Mascotas Disponibles</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FeatureSection */}
        <div className="feature-section">
          <div className="feature-content">
            <div className="feature-header">
              <h1 className="feature-title">Nuestra Razón de Ser</h1>
              <p className="feature-description">
                Estamos dedicados a rescatar, rehabilitar y encontrar hogares amorosos para mascotas necesitadas. 
                Creemos que cada animal merece una segunda oportunidad para ser feliz.
              </p>
            </div>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
                <div className="feature-card-content">
                  <h2 className="feature-card-title">Nuestra Misión</h2>
                  <p className="feature-card-text">
                    Rescatar, rehabilitar y encontrar hogares permanentes y amorosos para mascotas abandonadas y maltratadas.
                  </p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">visibility</span>
                </div>
                <div className="feature-card-content">
                  <h2 className="feature-card-title">Nuestra Visión</h2>
                  <p className="feature-card-text">
                    Un futuro donde cada mascota tenga un hogar seguro y cariñoso, y el sacrificio de animales sanos ya no sea necesario.
                  </p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div className="feature-card-content">
                  <h2 className="feature-card-title">Nuestros Valores</h2>
                  <p className="feature-card-text">
                    Compasión, compromiso, responsabilidad y comunidad son los pilares de nuestro trabajo diario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-section">
          <div className="stats-wrapper">
            <div className="stats-content">
              <h2 className="stats-title">Nuestro Impacto en Números</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <p className="stat-number">1,200+</p>
                  <p className="stat-label">Mascotas Adoptadas</p>
                </div>
                <div className="stat-card">
                  <p className="stat-number">150+</p>
                  <p className="stat-label">Voluntarios Activos</p>
                </div>
                <div className="stat-card">
                  <p className="stat-number">1,100+</p>
                  <p className="stat-label">Familias Felices</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="carousel-section">
          <div className="carousel-content">
            <h2 className="carousel-title">Historias que Inspiran</h2>
            <div className="carousel-scroll">
              <div className="carousel-container">
                {/* Story Card 1 */}
                <div className="story-card">
                  <div 
                    className="story-image"
                    style={{backgroundImage: 'url("https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/BMM4AYOGEJADRL5I3L32UKJEUY.jpg")'}}
                  />
                  <div className="story-content">
                    <div>
                      <p className="story-title">La nueva vida de Max</p>
                      <p className="story-description">
                        Max fue rescatado de la calle y ahora disfruta de días llenos de juegos y amor.
                      </p>
                    </div>
                    <button className="btn-volunteer">
                      <span>Sé Voluntario</span>
                    </button>
                  </div>
                </div>

                {/* Story Card 2 */}
                <div className="story-card">
                  <div 
                    className="story-image"
                    style={{backgroundImage: 'url("https://clinicaveterinaria.com.pt/wp-content/uploads/2023/07/gato-siames-clinica-veterinaria-joao-xxi-lisboa-alges-miraflores-.jpg")'}}
                  />
                  <div className="story-content">
                    <div>
                      <p className="story-title">Luna encontró su hogar</p>
                      <p className="story-description">
                        Después de meses en el refugio, Luna ahora es la reina de su nuevo castillo.
                      </p>
                    </div>
                    <button className="btn-volunteer">
                      <span>Sé Voluntario</span>
                    </button>
                  </div>
                </div>

                {/* Story Card 3 */}
                <div className="story-card">
                  <div 
                    className="story-image"
                    style={{backgroundImage: 'url("https://i.redd.it/meet-pigeon-our-first-pitbull-puppy-v0-7lki2lyd3aff1.jpg?width=3024&format=pjpg&auto=webp&s=8e9fc027d55cf504300b6ab60e5a94474df710c7")'}}
                  />
                  <div className="story-content">
                    <div>
                      <p className="story-title">Bienvenido a casa, Rocky</p>
                      <p className="story-description">
                        Los Smith no podrían estar más felices con su enérgico nuevo miembro familiar.
                      </p>
                    </div>
                    <button className="btn-volunteer">
                      <span>Sé Voluntario</span>
                    </button>
                  </div>
                </div>

                {/* Story Card 4 */}
                <div className="story-card">
                  <div 
                    className="story-image"
                    style={{backgroundImage: 'url("https://tvazteca.brightspotcdn.com/dims4/default/034064a/2147483647/strip/true/crop/702x395+0+55/resize/928x522!/format/webp/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F50%2Fc7%2Ffa52f31948de8a4f381a058b7a6c%2Fcaptura-de-pantalla-2024-12-19-202210.png")'}}
                  />
                  <div className="story-content">
                    <div>
                      <p className="story-title">Tambor, feliz y a salvo</p>
                      <p className="story-description">
                        Este pequeño fue abandonado, pero ahora tiene un jardín entero para explorar.
                      </p>
                    </div>
                    <button className="btn-volunteer">
                      <span>Sé Voluntario</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer-wrapper">
          <div className="footer-container">
            <div className="footer-content">
              <footer className="footer">
                <div className="footer-links">
                  <a className="footer-link" href="#">Inicio</a>
                  <a className="footer-link" href="#">Adopta</a>
                  <a className="footer-link" href="#">Dona</a>
                  <a className="footer-link" href="#">Sobre Nosotros</a>
                  <a className="footer-link" href="#">Contacto</a>
                </div>
                <div className="footer-social">
                  <a className="social-link" href="#">
                    <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" />
                    </svg>
                  </a>
                  <a className="social-link" href="#">
                    <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7.044a4.956 4.956 0 100 9.912 4.956 4.956 0 000-9.912zM12 15.25a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5zM16.836 6.81a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fillRule="evenodd" />
                    </svg>
                  </a>
                  <a className="social-link" href="#">
                    <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
                <p className="footer-copyright">© 2024 AdoptaAmor. Todos los derechos reservados.</p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
