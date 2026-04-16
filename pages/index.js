"use client";

import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
import Head from "next/head";

const galleryImages = [
  "/img/1.jpeg",
  "/img/2.jpeg",
  "/img/3.jpeg",
  "/img/4.jpeg",
  "/img/5.jpeg",
  "/img/6.jpeg",
  "/img/7.jpeg",
  "/img/8.jpeg",
  "/img/9.jpeg",
  "/img/10.jpeg",
  "/img/11.jpeg",
  "/img/12.jpeg",
  "/img/13.jpeg",
  "/img/14.jpeg",
  "/img/15.jpeg",
  "/img/16.jpeg",
];

const portfolioData = {
  name: "Thania Laura Gayol Zago",
  nickname: "Thania",
  description:
    "Motivada para llevar mi carrera a un nuevo nivel, busco empleo en un estudio de creación de contenido digital para redes sociales. Especializada en análisis, desde la aprobación de anteproyectos hasta la selección del contenido y la entrega final de campañas.",
  about:
    "Soy egresada de Comunicación con interés en creación de contenido, branding, diseño visual y redes sociales. Disfruto desarrollar ideas visuales con estética cuidada y narrativa clara. Busco oportunidades donde pueda crecer, aprender y aportar creatividad en proyectos digitales.",
  photo: "/perfil.JPG",
  education: {
    degree: "Licenciatura en Comunicación",
    university: "Benemérita Universidad Autónoma de Puebla",
    years: "2019 - 2024",
  },
  strengths: [
    "Creatividad visual y conceptual",
    "Organización de contenido",
    "Trabajo en equipo",
    "Atención al detalle",
    "Comunicación efectiva",
  ],
  software: ["CapCut", "Canva", "Photoshop", "Illustrator", "Excel", "Word"],
  skills: [
    "Creación de contenido",
    "Edición de video",
    "Diseño para redes sociales",
    "Branding básico",
    "Planeación de contenido",
  ],
  experience: [
    {
      role: "Aux Contable",
      company: "SALMIG",
      duration: "Febrero 2024 - Febrero 2025",
      tasks: [
        "Administración de 2 restaurantes.",
        "Reclutar personal.",
        "Facturación y cobranza.",
        "Recopilación de datos para Estados de Resultados.",
        "Manejo de Excel para contabilidad.",
      ],
    },
    {
      role: "Community Manager",
      company: "Birdev Lab",
      duration: "Septiembre 2023 - Febrero 2024",
      tasks: [
        "Manejo de redes sociales.",
        "Elaboración de videos y contenido.",
        "Videos para TikTok e Instagram Reels.",
        "Planeación de calendarios mensuales.",
        "Reuniones con clientes para entender sus necesidades.",
      ],
    },
    {
      role: "Secretaria / Recepcionista",
      company: "Imperiomex",
      duration: "Agosto 2021 - Abril 2022",
      tasks: [
        "Manejo de datos personales.",
        "Atención al cliente conforme a créditos Infonavit.",
        "Atención por Facebook.",
        "Reclutamiento de personal.",
        "Manejo de Excel y Word.",
      ],
    },
    {
      role: "Community Manager",
      company: "Mezcal Don Porfirio",
      duration: "Julio 2025 - Actualidad",
      tasks: [
        "Creación de contenido multimedia para la marca.",
        "Diseño de logotipos y banners publicitarios.",
        "Manejo y creación de redes sociales.",
        "Administración de información empresarial.",
      ],
    },
  ],
  contact: {
    phone: "248 142 15 18",
    email: "lanyzago@gmail.com",
    social: {
      instagram: "https://instagram.com/ThaniaZago",
      facebook: "https://facebook.com/ThaniaZago",
      twitter: "https://twitter.com/ThaniaZago",
    },
  },
};

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copiado al portapapeles");
    } catch (error) {
      console.error("No se pudo copiar", error);
    }
  };

  return (
    <>
      <Head>
        <title>Portafolio Thania Zago</title>
        <meta
          name="description"
          content="Explora el portafolio de Thania Laura Gayol Zago."
        />
      </Head>

      <main className="min-h-screen bg-[#aeb8d4] px-4 py-8 md:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          {/* HERO */}
          <section className="relative overflow-hidden rounded-[28px] shadow-2xl">
            <div className="relative min-h-[260px] md:min-h-[360px] w-full bg-[#2e2c35]">
              <img
                src="/assets/portfolio/envelope-hero.svg"
                alt="Hero envelope"
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />

              <div className="relative z-10 flex min-h-[260px] md:min-h-[360px] flex-col justify-between p-6 md:p-10 text-white">
                <div className="flex items-start justify-between text-[11px] uppercase tracking-[0.25em] text-white/80 md:text-xs">
                  <span>Communication / Content / Design</span>
                  <span>Portfolio 2026</span>
                </div>

                <div className="text-center">
                  <p className="mb-2 text-xs uppercase tracking-[0.35em] text-white/70 md:text-sm">
                    Design — Portfolio
                  </p>
                  <h1 className="font-serif text-5xl italic leading-none md:text-8xl text-white">
                    {portfolioData.nickname}
                  </h1>
                  <p className="mt-3 text-sm tracking-[0.25em] text-white/80 md:text-base">
                    {portfolioData.name}
                  </p>
                </div>

                <div className="flex justify-between text-[11px] text-white/70 md:text-xs">
                  <span>(Portafolio)</span>
                  <span>{portfolioData.contact.email}</span>
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT ME */}
          <section className="relative">
            <div className="grid gap-6 md:grid-cols-[1.4fr_0.9fr] items-start">
              <div className="relative rounded-[24px] bg-[#f4efe8] p-8 shadow-xl border border-black/10">
                <h2 className="mb-4 text-center font-serif text-4xl italic text-[#6f8fb7] md:text-5xl">
                  Acerca de mí
                </h2>

                <div className="mx-auto max-w-2xl text-center text-base leading-8 text-[#2f2a26]">
                  <p className="mb-4">
                    Hola, soy <strong>{portfolioData.nickname}</strong>.
                  </p>
                  <p>{portfolioData.about}</p>
                </div>
              </div>

              <div className="relative mx-auto w-[240px] rotate-[2deg] md:mt-8 md:w-[280px]">
                <div className="relative z-0 overflow-hidden rounded-[16px] bg-white p-3 shadow-xl">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[10px]">
                    <Image
                      src={portfolioData.photo}
                      alt={portfolioData.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROFILE BOARD */}
          <section className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
            <div className="relative rounded-[24px] bg-[#f4efe8] p-6 shadow-xl border border-black/10">
              <img
                src="/assets/portfolio/binder-holes.svg"
                alt="Perforaciones"
                className="absolute left-0 top-0 h-full w-8 object-cover opacity-70"
              />

              <div className="pl-8">
                <div className="mb-6 flex items-start gap-4">
                  <div className="relative h-28 w-24 overflow-hidden rounded-md border border-black/10">
                    <Image
                      src={portfolioData.photo}
                      alt={portfolioData.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#7b7b7b]">
                      Rol
                    </p>
                    <h3 className="font-serif text-3xl text-[#1f1b18]">
                      {portfolioData.nickname}
                    </h3>
                    <p className="mt-2 text-sm text-[#4e4741]">
                      Comunicación / Diseño / Social Media
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-sm leading-7 text-[#2f2a26]">
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-[0.25em] text-[#7b7b7b]">
                      Perfil
                    </p>
                    <p>{portfolioData.description}</p>
                  </div>

                  <div className="mt-6 rounded-[18px] border border-[#cfc4b8] bg-[#fffdf9] p-5 shadow-sm">
                    <p className="text-[#4f729d]">
                      <strong>Nombre:</strong> {portfolioData.name}
                    </p>
                    <p className="text-[#4f729d]">
                      <strong>Tel:</strong> {portfolioData.contact.phone}
                    </p>
                    <p className="text-[#4f729d]">
                      <strong>Email:</strong> {portfolioData.contact.email}
                    </p>
                    <p className="text-[#4f729d]">
                      <strong>Instagram:</strong> @ThaniaZago
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] bg-[#f4efe8] p-8 shadow-xl border border-black/10">
              <div className="space-y-8 text-center">
                <div>
                  <h3 className="mb-3 font-serif text-3xl italic text-[#6f8fb7]">
                    Fortalezas
                  </h3>
                  <ul className="space-y-1 text-[#2f2a26]">
                    {portfolioData.strengths.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-serif text-3xl italic text-[#6f8fb7]">
                    Software
                  </h3>
                  <ul className="space-y-1 text-[#2f2a26]">
                    {portfolioData.software.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-serif text-3xl italic text-[#6f8fb7]">
                    Educación
                  </h3>
                  <p className="text-[#2f2a26]">{portfolioData.education.degree}</p>
                  <p className="text-[#2f2a26]">{portfolioData.education.university}</p>
                  <p className="text-[#2f2a26]">{portfolioData.education.years}</p>
                </div>

                <div>
                  <h3 className="mb-3 font-serif text-3xl italic text-[#6f8fb7]">
                    Skills
                  </h3>
                  <ul className="space-y-1 text-[#2f2a26]">
                    {portfolioData.skills.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="rounded-[24px] bg-[#f4efe8] p-6 md:p-8 shadow-xl border border-black/10">
            <h2 className="mb-6 text-center font-serif text-4xl italic text-[#6f8fb7]">
              Experiencia
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {portfolioData.experience.map((job, index) => (
                <article
                  key={`${job.company}-${index}`}
                  className="rounded-[20px] border border-[#d9d1c7] bg-[#fffdf9] p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[#2b2b2b]">
                    {job.role}
                  </h3>
                  <p className="text-sm text-[#5c5c5c]">{job.company}</p>
                  <p className="mb-3 text-sm text-[#7c7c7c]">{job.duration}</p>

                  <ul className="list-disc space-y-1 pl-5 text-sm text-[#333]">
                    {job.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* GALLERY */}
          <section className="rounded-[24px] bg-[#f4efe8] p-6 md:p-8 shadow-xl border border-black/10">
            <h2 className="mb-2 text-center font-serif text-4xl italic text-[#6f8fb7]">
              Portafolio
            </h2>
            <p className="mb-6 text-center text-sm text-[#5f5a54]">
              Da click en una imagen para verla más grande.
            </p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {galleryImages.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(src)}
                  className="group relative aspect-[4/5] overflow-hidden rounded-[18px] bg-white shadow-md"
                  title={`Trabajo ${idx + 1}`}
                >
                  <Image
                    src={src}
                    alt={`Trabajo ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section className="rounded-[24px] bg-[#f4efe8] p-6 md:p-8 shadow-xl border border-black/10">
            <h2 className="mb-5 text-center font-serif text-4xl italic text-[#6f8fb7]">
              Contacto
            </h2>

            <div className="flex flex-col items-center gap-4 text-[#2f2a26]">
              <button
                className="flex items-center gap-2 text-sm md:text-base"
                onClick={() => copyToClipboard(portfolioData.contact.phone)}
              >
                <FaPhone />
                <span>{portfolioData.contact.phone}</span>
              </button>

              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="flex items-center gap-2 text-sm md:text-base"
              >
                <IoIosMail />
                <span>{portfolioData.contact.email}</span>
              </a>

              <div className="mt-2 flex items-center gap-5 text-lg">
                <a
                  href={portfolioData.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:opacity-70"
                >
                  <FaInstagram />
                </a>

                <a
                  href={portfolioData.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:opacity-70"
                >
                  <FaFacebook />
                </a>

                <a
                  href={portfolioData.contact.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="hover:opacity-70"
                >
                  <FaSquareXTwitter />
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* MODAL */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white p-3 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-3 top-3 z-10 rounded-full bg-white px-3 py-1 shadow"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>

              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={selectedImage}
                  alt="Vista ampliada"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}