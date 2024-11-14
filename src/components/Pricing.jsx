import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const webDesignData = [
  "Responsive web design",
  "SEO optimization",
  "E-commerce functionality",
  "Custom animations",
  "User-friendly interface",
];

const socialMediaData = [
  "Content creation",
  "Community management",
  "Analytics and insights",
  "Engagement strategies",
  "Targeted ad campaigns",
];

export const Pricing = () => {
  const [isWebDesign, setIsWebDesign] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsWebDesign(!isWebDesign);
  };

  const pricingData = isWebDesign ? webDesignData : socialMediaData;

  return (
    <section className="w-screen flex justify-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-bgDark2 2xl:w-[1150px] lg:w-[1050px] md:w-4/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="block-subtitle">Encontrá el plan que se adapte a vos</span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
                Mira nuestros planes
              </h2>
              <p className="mb-6 text-secondaryText">
                Selecciona el plan que se adapte a vos
              </p>
              <label className="mx-auto bg-bgDark3 relative flex justify-between items-center group text-xl w-[212px] h-12 rounded-lg pr-36 pl-4 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isWebDesign}
                  onChange={handleChange}
                />
                <span className="h-8 w-[6.5rem] flex items-center pr-2 bg-bgDark3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-primaryColor   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-primaryText text-sm font-bold text-center justify-center items-center">
                  <div className={isWebDesign ? "mr-8 ml-1" : "mr-8 ml-1 text-gray-400 text-center justify-center"}>
                    Diseño Web
                  </div>
                  <div className={!isWebDesign ? "" : "text-gray-400"}>Redes</div>
                </div>
              </label>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              {/* Tarjeta Beginner */}
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    {isWebDesign ? "Web Básico" : "Redes Básico"}
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                      {isWebDesign ? "$500" : "$300"}
                    </div>
                    <div className="text-gray-500">/ proyecto</div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    {isWebDesign
                      ? "Ideal para iniciar tu presencia web."
                      : "Inicia tu presencia en redes sociales."}
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 w-full rounded-xl contained-button font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Get started"
                  >
                    Empecemos
                  </button>
                </div>
              </div>

              {/* Repite el mismo formato para otras tarjetas (Standard, Premium) cambiando el contenido según isWebDesign */}
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    {isWebDesign ? "Web Estándar" : "Redes Estándar"}
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                      {isWebDesign ? "$1000" : "$700"}
                    </div>
                    <div className="text-gray-500">/ proyecto</div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    {isWebDesign
                      ? "Más funciones para tu sitio web."
                      : "Maximiza tu impacto en redes."}
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 w-full rounded-xl contained-button font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Get started"
                  >
                    Empecemos
                  </button>
                </div>
              </div>

              {/* Premium card (similarly updated) */}
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    {isWebDesign ? "Web Premium" : "Redes Premium"}
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                      {isWebDesign ? "$2000" : "$1200"}
                    </div>
                    <div className="text-gray-500">/ proyecto</div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    {isWebDesign
                      ? "Lleva tu sitio web al siguiente nivel."
                      : "Obtén una estrategia de redes completa."}
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 w-full rounded-xl contained-button font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Get started"
                  >
                    Empecemos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
