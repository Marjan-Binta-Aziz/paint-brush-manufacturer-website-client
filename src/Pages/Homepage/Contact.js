import React from "react";
const Contact = () => {
  return (
    <div>
      <section
        className="py-20 px-4 lg:px-16 overflow-hidden relative z-10"
        data-aos="fade-up"
        id="contact"
      >
        <div className="container">
          <h3 className="text-accent uppercase text-4xl font-bold"> Contact Us</h3>
          <div className="mb-5 flex text-center items-center max-w-md">
            <h2> </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center text-primary  lg:justify-between -mx-4">
            <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
              <div className="map_img" data-aos="fade-left">
                <figure>
                  <img src="https://i.ibb.co/PhQLxB6/map.png" alt="#" />
                </figure>
              </div>
            </div>
            <div
              className="w-full lg:w-1/2 xl:w-5/12 px-4"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="2000"
            >
              <div className="bg-accent relative rounded-lg p-8 sm:p-12 shadow-lg">
                <form>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className=" w-full rounded p-3 bg-secondary outline-none focus-visible:shadow-none focus:border-primary "
                      name="full_name"
                      id="full_name"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className=" w-full rounded p-3 bg-secondary outline-none focus-visible:shadow-none focus:border-primary "
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      inputMode="numeric"
                      placeholder="Your Phone"
                      className=" w-full rounded p-3 bg-secondary outline-none focus-visible:shadow-none focus:border-primary "
                      name="phone_number"
                      id="phone_number"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      rows="2"
                      placeholder="Your Message"
                      className=" w-full rounded p-3 bg-secondary outline-none focus-visible:shadow-none focus:border-primary "
                      name="message"
                      id="message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn w-full btn-secondary  p-3 hover:bg-yellow-50 "
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#4B208C"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
