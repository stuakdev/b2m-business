import brandLogo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0C205B] text-[#FFFFFF] px-6 py-10">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex items-start gap-4 bg-[#0C205B]">
          <img src={brandLogo.src} alt="Logo" className="bg-[#0C205B] h-16 w-16 object-contain rounded" />
          <div className="md:ml-4 text-lg leading-relaxed ">
            Join us on our journey to make meal planning simple and joyful. Connect with us on social media, reach out
            via instant chat for quick support, or drop us a message anytime! we’re here to help!
          </div>
        </div>

        <div className="flex md:flex-col items-end gap-4">
          <a href="#" className="text-white/90 w-12 h-12 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 640">
              <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
            </svg>
          </a>
          <a href="#" className="text-white/90 w-12 h-12 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 640">
              <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-10 max-w-[1600px] mx-auto text-left text-lg text-white">© STUAK 2025.</div>
    </footer>
  );
}
