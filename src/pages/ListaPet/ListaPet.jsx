import React from 'react';
import { Link } from "react-router-dom";
import './ListaPet.css';

const ListaPet = () => {
  return (
    <div className="root-container">
      {/* TopNavBar */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <span className="material-symbols-outlined logo-icon">pets</span>
            <h2 className="logo-text">HuellitasFelices</h2>
          </div>
          <nav className="desktop-nav">
            <Link className="nav-link" to="/">Inicio</Link>
            <Link className="nav-link" to="/acerca">Sobre nosotros</Link>
          </nav>
          <div className="header-actions">
            <button className="btn btn-secondary">
                <span className="truncate">Iniciar Sesión</span>
              </button>
            <button className="btn-mobile-menu">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-container">
        <div className="main-grid">
          {/* Filters Panel */}
          <aside className="filters-panel">
            <div className="filters-content">
              <div className="filters-header">
                <h2 className="filters-title">Filtros</h2>
                <button className="btn-clear-filters">
                  <span className="material-symbols-outlined clear-icon">delete_sweep</span>
                  Limpiar
                </button>
              </div>

              {/* Search by Breed */}
              <div className="filter-section">
                <h3 className="filter-heading">Raza</h3>
                <div className="search-input-wrapper">
                  <span className="material-symbols-outlined search-icon">search</span>
                  <input
                    className="search-input"
                    placeholder="Ej. Labrador"
                    type="text"
                  />
                </div>
              </div>

              {/* Size Filter */}
              <div className="filter-section">
                <h3 className="filter-heading">Tamaño</h3>
                <div className="size-filter">
                  <label className="size-option">
                    <span>Pequeño</span>
                    <input className="sr-only" name="size" type="radio" value="Pequeño" />
                  </label>
                  <label className="size-option">
                    <span>Mediano</span>
                    <input defaultChecked className="sr-only" name="size" type="radio" value="Mediano" />
                  </label>
                  <label className="size-option">
                    <span>Grande</span>
                    <input className="sr-only" name="size" type="radio" value="Grande" />
                  </label>
                </div>
              </div>

              {/* Age Slider */}
              <div className="filter-section">
                <h3 className="filter-heading">Edad</h3>
                <div className="age-slider-wrapper">
                  <div className="age-slider-container">
                    <div className="age-slider-track">
                      <div className="age-slider-range">
                        <div className="slider-handle-left">
                          <div className="slider-handle-content">
                            <div className="slider-handle"></div>
                            <p className="slider-label">1 año</p>
                          </div>
                        </div>
                        <div className="slider-active-track"></div>
                        <div className="slider-handle-right">
                          <div className="slider-handle-content">
                            <div className="slider-handle"></div>
                            <p className="slider-label">6 años</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn-apply-filters">
                <span>Aplicar filtros</span>
              </button>
            </div>
          </aside>

          {/* Pet Gallery */}
          <section className="pet-gallery">
            {/* Page Heading */}
            <div className="page-heading">
              <h1 className="page-title">Encuentra a tu nuevo mejor amigo</h1>
              <p className="page-subtitle">Usa los filtros para encontrar la mascota perfecta para ti.</p>
            </div>

            {/* Pet Grid */}
            <div className="pet-grid">
              {/* Pet Card 1 */}
              <div className="pet-card">
                <img
                  className="pet-image"
                  alt="Un corgi feliz sentado en un campo verde."
                  src="https://www.clinicaveterinariaaguilar.es/wp-content/uploads/2020/01/cachorro.jpg"
                />
                <div className="pet-info">
                  <h4 className="pet-name">Max</h4>
                  <div className="pet-tags">
                    <span className="tag tag-male">Macho</span>
                    <span className="tag tag-gray">2 años</span>
                    <span className="tag tag-gray">Mediano</span>
                  </div>
                </div>
                <div className="pet-overlay">
                  <Link className="btn-details" to="/mascota/max">Ver detalles</Link>
                </div>
              </div>

              {/* Pet Card 2 */}
              <div className="pet-card">
                <img
                  className="pet-image"
                  alt="Un golden retriever sonriente con un fondo borroso."
                  src="https://fotografias.lasexta.com/clipping/cmsimages02/2019/01/25/DB41B993-B4C4-4E95-8B01-C445B8544E8E/98.jpg?crop=4156,2338,x0,y219&width=1900&height=1069&optimize=high&format=webply"
                />
                <div className="pet-info">
                  <h4 className="pet-name">Luna</h4>
                  <div className="pet-tags">
                    <span className="tag tag-female">Hembra</span>
                    <span className="tag tag-gray">5 años</span>
                    <span className="tag tag-gray">Grande</span>
                  </div>
                </div>
              </div>

              {/* Pet Card 3 */}
              <div className="pet-card">
                <img
                  className="pet-image"
                  alt="Un gato atigrado de ojos amarillos mirando a la cámara."
                  src="https://i.pinimg.com/236x/29/6a/46/296a46cb9dd13ff6aae4afda49d40e69.jpg"
                />
                <div className="pet-info">
                  <h4 className="pet-name">Milo</h4>
                  <div className="pet-tags">
                    <span className="tag tag-male">Macho</span>
                    <span className="tag tag-gray">1 año</span>
                    <span className="tag tag-gray">Pequeño</span>
                  </div>
                </div>
              </div>

              {/* Pet Card 4 */}
              <div className="pet-card">
                <img
                  className="pet-image"
                  alt="Un cachorro beagle con la lengua fuera en un parque."
                  src="https://i.redd.it/my-2-year-old-pitbull-pupper-v0-bg9q8bd1tzce1.jpg?width=1200&format=pjpg&auto=webp&s=f4ef7053c66328da7ea629afe2d7681ab6855c9d"
                />
                <div className="pet-info">
                  <h4 className="pet-name">Rocky</h4>
                  <div className="pet-tags">
                    <span className="tag tag-male">Macho</span>
                    <span className="tag tag-gray">6 meses</span>
                    <span className="tag tag-gray">Pequeño</span>
                  </div>
                </div>
              </div>

              {/* Pet Card 5 */}
              <div className="pet-card">
                <img
                  className="pet-image"
                  alt="Un gatito gris esponjoso con ojos azules."
                  src="https://images.ctfassets.net/denf86kkcx7r/4IPlg4Qazd4sFRuCUHIJ1T/f6c71da7eec727babcd554d843a528b8/gatocomuneuropeo-97?fm=webp&w=612"
                />
                <div className="pet-info">
                  <h4 className="pet-name">Bella</h4>
                  <div className="pet-tags">
                    <span className="tag tag-female">Hembra</span>
                    <span className="tag tag-gray">3 años</span>
                    <span className="tag tag-gray">Pequeño</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ListaPet;