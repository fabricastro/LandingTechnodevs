import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. technodevs has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial1,
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. technodevs has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial2,
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. technodevs has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="text-center mb-6 text-2xl text-white font-semibold">Testimonios</div>
        <div className="text-center mb-10 text-xl text-gray-500">
          People like you love technodevs
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-full sm:w-4/5 md:w-[560px] lg:w-1/3 bg-[#f9f9f9] border-[#e0e0e0] shadow-light rounded-xl p-6 flex flex-col"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-4">
                <QuoteIcon className="text-gray-300" />
              </div>
              <p className="text-gray-dark text-sm mb-4">{`"${testimonial.content}"`}</p>
              <div className="flex-center mt-4">
                <img
                  src={testimonial.image.src}
                  alt="Customer avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="text-gray-800 font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

