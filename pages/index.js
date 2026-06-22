import Head from "next/head";
import { useEffect, useState } from "react";

const asset = (name) => `/assets/portfolioV2/${name}`;

const projects = {
  "Contenido y redes": ["/img/1.jpeg", "/img/4.jpeg", "/img/5.jpeg", "/img/9.jpeg"],
  Fotografia: ["/img/2.jpeg", "/img/7.jpeg", "/img/8.jpeg", "/img/13.jpeg"],
  "Diseno grafico": ["/img/3.jpeg", "/img/6.jpeg", "/img/10.jpeg", "/img/11.jpeg"],
  "Otros proyectos": ["/img/12.jpeg", "/img/14.jpeg", "/img/15.jpeg", "/img/16.jpeg"],
  Branding: ["/img/1.jpeg", "/img/6.jpeg", "/img/11.jpeg", "/img/14.jpeg"],
};

const folders = [
  { title: "Contenido y redes", image: "contenido y redes.png", className: "folder-content" },
  { title: "Fotografia", image: "fotografia.png", className: "folder-photo" },
  { title: "Diseno grafico", image: "diseño grafico.png", className: "folder-design" },
  { title: "Otros proyectos", image: "otros proyectos.png", className: "folder-other" },
  { title: "Branding", image: "branding.png", className: "folder-brand" },
];

export default function Portfolio() {
  const [openFolder, setOpenFolder] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
        setOpenFolder(null);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      <Head>
        <title>Portafolio | Thania Zago</title>
        <meta name="description" content="Portafolio de comunicación, contenido y diseño de Thania Zago." />
        <meta name="theme-color" content="#9bafe5" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <main className="portfolio-page">
        <section className="hero" id="sobre-mi" aria-label="Presentación">
          <img className="hero-paper" src={asset("portafolio.png")} alt="Portafolio 2026, comunicación, contenido y diseño" />
          <img className="about-card" src={asset("sobre mi.png")} alt="Acerca de mí: Hola, soy Thania" />
        </section>

        <section className="resume" id="habilidades" aria-label="Perfil, formación y habilidades">
          <img src={asset("mitad.png")} alt="Rol, fortalezas, software, educación y habilidades" />
        </section>

        <section className="work" id="trabajo" aria-labelledby="work-title">
          <h1 id="work-title" className="sr-only">Explora mi trabajo</h1>
          <img className="work-title" src={asset("letras explora mi trabajo.png")} alt="Explora mi trabajo" />
          <img className="info-window" src={asset("banner information.png")} alt="Cada carpeta contiene proyectos, campañas y piezas visuales" />

          {folders.map((folder) => (
            <button
              className={`project-folder ${folder.className}`}
              key={folder.title}
              type="button"
              onClick={() => setOpenFolder(folder.title)}
              aria-label={`Abrir carpeta ${folder.title}`}
            >
              <img src={asset(folder.image)} alt="" />
            </button>
          ))}

          <img className="thania-cutout" src={asset("yo.png")} alt="Thania trabajando en su computadora" />
        </section>

        <nav className="dock" aria-label="Navegación principal">
          <a href="#sobre-mi" aria-label="Ir a Sobre mí" />
          <a href="#habilidades" aria-label="Ir a Habilidades" />
          <a href="#habilidades" aria-label="Ver currículum" />
          <a href="mailto:lanyzago@gmail.com" aria-label="Enviar correo" />
          <img src={asset("banner abajo.png")} alt="" />
        </nav>
      </main>

      {openFolder && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setOpenFolder(null)}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-label={openFolder} onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div><span>PORTFOLIO / 2026</span><h2>{openFolder}</h2></div>
              <button type="button" onClick={() => setOpenFolder(null)} aria-label="Cerrar carpeta">×</button>
            </div>
            <div className="project-grid">
              {projects[openFolder].map((src, index) => (
                <button type="button" key={src} onClick={() => setSelectedImage(src)} aria-label={`Ver proyecto ${index + 1}`}>
                  <img src={src} alt={`Proyecto ${index + 1} de ${openFolder}`} />
                </button>
              ))}
            </div>
          </section>
        </div>
      )}

      {selectedImage && (
        <div className="image-viewer" role="presentation" onMouseDown={() => setSelectedImage(null)}>
          <button type="button" onClick={() => setSelectedImage(null)} aria-label="Cerrar imagen">×</button>
          <img src={selectedImage} alt="Proyecto ampliado" onMouseDown={(event) => event.stopPropagation()} />
        </div>
      )}
    </>
  );
}
