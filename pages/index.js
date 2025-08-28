"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
import Head from "next/head";

export const metadata = {
  title: "Portafolio Thania Zago",
  description: "Explora el portafolio de Thania Laura Gayol Zago.",
  openGraph: {
    title: "Portafolio de Thania Zago!",
    description: "Explora el portafolio de Thania Laura Gayol Zago.",
    images: [
      {
        url: "/img/1.jpeg",
        width: 1200,
        height: 630,
        alt: "Portafolio Thania Zago",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio Thania Zago!",
    description: "Explora el portafolio de Thania Laura Gayol Zago.",
    images: ["/img/1.jpg"],
  },
};

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
  description:
    "Motivada para llevar mi carrera a un nuevo nivel, busco empleo en un estudio de creación de contenido digital para redes sociales. Especializada en análisis, desde la aprobación de anteproyectos hasta la selección del contenido y la entrega final de campañas. Éxito demostrado en el liderazgo de equipos multidisciplinares para lograr las metas de cada proyecto y un excelente nivel de satisfacción del cliente.",
  photo: "/perfil.jpeg", // Reemplázala con la ruta real de la imagen
  education: {
    degree: "Licenciatura en Comunicación",
    university: "Benemérita Universidad Autónoma de Puebla",
    years: "2019 - 2024",
  },
  experience: [
    {
      role: "Aux Contable",
      company: "SALMIGI",
      duration: "Febrero 2024 - Febrero 2025",
      tasks: [
        "Administración de 2 restaurantes.",
        "Reclutar personal.",
        "Facturación y cobranza.",
        "Recopilación de datos para Estados de Resultados",
        "Manejo de Excel para contabilidad",
      ],
    },
    {
      role: "Community Manager",
      company: "Birdev Lab",
      duration: "Septiembre 2023 - Febrero 2024",
      tasks: [
        "Manejo de redes sociales.",
        "Elaboración de videos y contenido.",
        "Elaboración de videos Tik Tok e Instagram Reels.",
        "Elaboración de calendarios para contenido de mes",
        "Reuniones con clientes para entender sus necesidades",
      ],
    },
    {
      role: "Secretaria/Recepcionista",
      company: "Imperiomex",
      duration: "Agosto 2021 - Abril 2022",
      tasks: [
        "Manejo de datos personales",
        "Atencion al cliente conforme a créditos infonavit",
        "Atencion por Facebook",
        "Reclutar personal",
        "Manejo de Excel y Word",
      ],
    },
    {
      role: "Community manager",
      company: "Mezcal Don Porfirio",
      duration: "Julio 2025 - ",
      tasks: [
        "Creación de contenido multimedia para marca de Mezcal.",
        "Creación de logotipos y de banners publicitarias",
        "Manejo y creación de redes de la marca",
        "Administración de información empresarial de la marca",
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

  return (
    <>
      <Head>
        <title>Portafolio Thania Zago!</title>
        <meta
          name="description"
          content="Explora el portafolio de Thania Laura Gayol Zago."
        />
        <meta property="og:title" content="Portafolio Thania Zago!" />
        <meta
          property="og:description"
          content="Explora el portafolio de Thania Laura Gayol Zago."
        />
        <meta property="og:image" content="/img/1.jpg" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="bg-white text-center rounded-lg p-4 mt-5 shadow-md transition-transform duration-300 hover:scale-105 border border-[#8C85F7]">
          <div className="h-40 w-40 mx-auto bg-blue-500 rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src={portfolioData.photo}
              width={150}
              height={150}
              className="object-cover w-full h-full"
              alt={portfolioData.name}
            />
          </div>
          <h1 className="text-3xl font-bold mt-4 text-[#2C1D67]">
            {portfolioData.name}
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            {portfolioData.description}
          </p>
        </div>

        {/* Educación */}
        <h2 className="text-2xl font-semibold text-[#2C1D67] mt-5">
          Formación Académica
        </h2>

        <div className="text-center bg-white rounded-lg p-4 shadow-md mt-5 border border-[#8C85F7]">
          <p className="text-lg text-[#2C1D67]">
            {portfolioData.education.degree}
          </p>
          <p className="text-gray-500">{portfolioData.education.university}</p>
          <p className="text-gray-500">{portfolioData.education.years}</p>
        </div>

        {/* Experiencia Laboral */}
        <div className="mt-5">
          <h2 className="text-2xl font-semibold text-[#2C1D67]">
            Experiencia Laboral
          </h2>
          <div className="md:grid md:grid-cols-3 gap-2">
            {portfolioData.experience.map((job, index) => (
              <div
                key={index}
                className="mt-4 bg-white rounded-lg p-4 mt-5 shadow-md border border-[#8C85F7]"
              >
                <h3 className="text-lg font-semibold text-[#2C1D67]">
                  {job.role}
                </h3>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-gray-500">{job.duration}</p>
                <ul className="list-disc ml-6 text-gray-700">
                  {job.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Portafolio */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#2C1D67]">Portafolio</h2>
          <p className="text-gray-500">Haz click en una imagen para verla.</p>

          <div
            className="
            mt-4 relative
            overflow-x-auto
            rounded-xl border border-[#8C85F7] bg-white shadow-md
            py-4
            snap-x snap-mandatory
          "
          >
            <div className="flex gap-4 px-4">
              {galleryImages.map((src, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(src)}
                  className="
                  group relative shrink-0
                  aspect-[4/5]
                  w-48 sm:w-60 md:w-72 lg:w-80
                  overflow-hidden rounded-xl
                  border border-[#8C85F7]/50
                  bg-white shadow
                  snap-start cursor-pointer
                "
                  title={`Trabajo ${idx + 1}`}
                >
                  <Image
                    src={src}
                    alt={`Trabajo ${idx + 1}`}
                    fill
                    className="
                    object-cover
                    transition-transform duration-300 ease-out
                    group-hover:scale-110
                  "
                    sizes="(max-width: 640px) 12rem, (max-width: 768px) 15rem, (max-width: 1024px) 18rem, 20rem"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal de imagen */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)} // Cierra al hacer click fuera
          >
            <div
              className="relative w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-h-[85%] rounded-xl overflow-hidden shadow-lg"
              onClick={(e) => e.stopPropagation()} // Evita cerrar al clickear dentro
            >
              {/* Botón de cierre */}
              <button
                className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-black shadow-md hover:bg-gray-200"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>

              <Image
                src={selectedImage}
                alt="Vista ampliada"
                width={1200}
                height={800}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        )}
        <h2 className="text-2xl font-semibold text-[#2C1D67] mt-5">Contacto</h2>

        <div className="bg-white rounded-lg p-4 mt-5 shadow-md text-center flex flex-col justify-center border border-[#8C85F7]">
          <div className="flex justify-center gap-4 mt-4">
            <button
              className="text-black mt-2 flex items-center space-x-2"
              onClick={() => copyToClipboard(portfolioData.contact.phone)}
            >
              <FaPhone className="mr-2" />
              {portfolioData.contact.phone}
            </button>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-black mt-2 flex items-center space-x-2"
            >
              <IoIosMail className="mr-2" />
              {portfolioData.contact.email}
            </a>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <a
              href={portfolioData.contact.social.instagram}
              className="text-pink-500 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="mr-2" />
              Instagram
            </a>
            <a
              href={portfolioData.contact.social.facebook}
              className="text-blue-600 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="mr-2" />
              Facebook
            </a>
            <a
              href={portfolioData.contact.social.twitter}
              className="text-black flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="mr-2" />X / Twitter
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
