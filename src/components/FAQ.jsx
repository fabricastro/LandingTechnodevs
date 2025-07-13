import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "¿Cómo funciona el proceso de desarrollo de software a medida?",
    answer:
      "Nuestro proceso comienza con un análisis profundo de tus procesos y necesidades. Luego diseñamos una solución personalizada, desarrollamos con metodologías ágiles y te mantenemos informado en cada sprint. Incluye pruebas, capacitación e implementación gradual.",
  },
  {
    question: "¿En qué área geográfica proveen servicios?",
    answer:
      "Trabajamos con clientes de cualquier parte del mundo. Nuestro equipo está capacitado para colaborar de forma remota utilizando herramientas modernas de desarrollo y comunicación, garantizando la misma calidad sin importar tu ubicación.",
  },
  {
    question: "¿Pueden integrar el nuevo software con nuestros sistemas existentes?",
    answer:
      "Absolutamente. Especializamos en integraciones complejas. Analizamos tu infraestructura actual y desarrollamos APIs y conectores que permiten que el nuevo software se comunique seamlessly con tus sistemas existentes, bases de datos y herramientas.",
  },
  {
    question: "¿Cuánto tiempo lleva desarrollar una solución de software completa?",
    answer:
      "Los tiempos varían según la complejidad: un MVP puede estar listo en 4-8 semanas, un sistema de gestión completo en 3-6 meses, y una plataforma SaaS en 6-12 meses. Siempre proporcionamos cronogramas detallados y entregas incrementales.",
  },
  {
    question: "¿Ofrecen soporte y mantenimiento después del desarrollo?",
    answer:
      "Sí, incluimos soporte técnico continuo, actualizaciones de seguridad, nuevas funcionalidades y escalabilidad. Nuestro objetivo es que tu software evolucione con tu negocio y se mantenga siempre optimizado y seguro.",
  },
];


export const FAQ = () => (
  <section className="relative sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">¿TIENES PREGUNTAS?</p>
          <h2 className="mb-16 block-big-title text-center text-4xl">
            Preguntas Frecuentes
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1 select-none" key={`${item.question}-${index}`}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-200  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
