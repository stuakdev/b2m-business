import { motion } from "framer-motion";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [redirectURL, setRedirectURL] = useState("");

  useEffect(() => {
    setRedirectURL(`${window.location.origin}/#contact`);
  }, []);

  return (
    <section id="contact" className="py-16 px-4 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            translateY: "100px",
          }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            transition: {
              duration: 0.5,
              delay: 0.25,
            },
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0C205B]">Contact Us</h2>
          <p className="text-lg text-gray-500 mt-2">Any question or remarks? Just write us a message!</p>
        </motion.div>

        <div className="bg-white shadow-lg md:p-5 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#0C205B] text-white p-8 md:py-12 flex flex-col justify-between rounded-xl relative overflow-hidden">
            <motion.div
              initial={{
                opacity: 0,
                translateY: "100px",
              }}
              whileInView={{
                opacity: 1,
                translateY: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.5,
                },
              }}
              viewport={{
                once: true,
              }}
            >
              <h3 className="text-2xl md:text-4xl text-white font-semibold mb-3">Contact Information</h3>
              <p className="text-lg mb-8 text-[#C9C9C9]">Say something to start a journey</p>

              <div className="space-y-8 text-lg">
                <div className="flex items-center gap-4">
                  <span>
                    <PhoneCall size={26} />
                  </span>
                  <span>+61 414270092</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>
                    <Mail size={26} />
                  </span>
                  <span>rathika@b2mbs.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <span>
                    <MapPin size={26} />
                  </span>
                  <span>
                    16 Howleys Road Notting Hill
                    <br />
                    Vic 3135, Australia
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="absolute -bottom-4 right-12 w-40 h-40 bg-[#FFDEA8] rounded-full opacity-80 translate-x-1/2 translate-y-1/2 z-0"></div>
            <div className="absolute -bottom-8 right-12 w-32 h-32 bg-[#F9F9F0]/50 rounded-full z-0"></div>
          </div>

          <form action="https://api.web3forms.com/submit" method="POST" className="p-8 space-y-6 bg-white md:py-12 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="hidden" name="access_key" value="81437f50-b01b-4cb1-92e9-7aa22b5ca689"></input>
              <div>
                <label className="text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="First Name"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 py-2"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="Last Name"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 py-2"
                  placeholder="Doe"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="Email"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 py-2"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="Mobile No"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 py-2"
                  placeholder="+1 012 3456 789"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                name="Message"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 py-2"
                placeholder="Write your message.."
              />
            </div>

            <input type="hidden" name="redirect" value={redirectURL}></input>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#F99900] text-[#02033B] py-3 px-6 rounded-md shadow hover:bg-[#F99900] hover:scale-105 hover:cursor-pointer transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
