import { motion } from "framer-motion";
import { TfiWorld } from "react-icons/tfi";
import { CiMonitor } from "react-icons/ci";
import { IoMdPhotos } from "react-icons/io";

import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import dashboard from "../assets/images/dashboard.jpg";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-24 mb-8 sm:mb-24 md:pt-[12vw] lg:pt-16"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0, y: 10, zIndex: 20 }}
        animate={{ opacity: 1, y: 0, zIndex: 20 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="w-screen flex justify-center relative">
          <div className="w-11/12 sm:w-4/5 lg:w-[90%] xl:w-[80%] 2xl:w-[1200px] mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 z-10 rounded-xl main-border-gray hero-dashboard-border-gradient bg-bgDark1 bg-opacity-50 mt-[-50px] lg:mt-[-150px] xl:mt-[-250px]">
            <div className="p-4 flex flex-col gap-4 border-primaryText border rounded-xl m-4 bg-blackPrimary">
              <TfiWorld className="text-5xl text-greenPrimary" />
              <h4 className="text-greenPrimary text-xl text-left">Desarrollo web</h4>
              <p className="text-primaryText text-left">
                Creamos sitios web modernos, rápidos y seguros. Diseñados a medida para
                potenciar tu negocio y ofrecer la mejor experiencia a tus usuarios.
              </p>
            </div>
            <div className="p-4 flex flex-col gap-4 border-primaryText border rounded-xl m-4 bg-blackPrimary">
              <CiMonitor className="text-5xl text-greenPrimary" />
              <h4 className="text-greenPrimary text-xl text-left">Software a Medida</h4>
              <p className="text-primaryText text-left">
                Soluciones de software adaptadas a tus necesidades específicas. Optimiza
                procesos y mejora la eficiencia de tu empresa con nuestras aplicaciones a
                medida.
              </p>
            </div>
            <div className="p-4 flex flex-col gap-4 border-primaryText border rounded-xl m-4 bg-blackPrimary">
              <IoMdPhotos className="text-5xl text-greenPrimary" />
              <h4 className="text-greenPrimary text-xl text-left">Redes Sociales</h4>
              <p className="text-primaryText text-left">
                Impulsa tu marca con estrategias de redes sociales efectivas. Aumenta tu
                alcance y conecta con tu audiencia de manera auténtica y significativa.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16 pt-28 xl:pt-[100px]">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle">Embrace Innovation</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
                Unlike any tool you used before
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                Discover a new level of data analysis with our innovative and user-friendly
                platform. Transform your business needs with actionable insights.
              </p>
              <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Real-time data visualization</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Advanced predictive analytics</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Seamless integration with APIs</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src={feature1.src}
                  alt="Feature image 1"
                  className="rounded-xl main-border-gray mx-auto sm:mx-unset"
                  aria-label="Feature image 1"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded">
                <img
                  src={feature2.src}
                  alt="Feature image 2"
                  className="rounded-xl main-border-gray mx-auto sm:mx-unset"
                  aria-label="Feature image 2"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20 pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg">
                <img
                  src={feature3.src}
                  alt="Feature image 3"
                  className="rounded-xl main-border-gray"
                  aria-label="Feature image 3"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg">
                <img
                  src={feature4.src}
                  alt="Feature image 4"
                  className="rounded-xl main-border-gray"
                  aria-label="Feature image 4"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
