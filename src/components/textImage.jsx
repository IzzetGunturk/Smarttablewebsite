import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import tableImg from '../assets/tableImg.png';

function TextImage() {

return (
<section className="px-5" data-aos="fade-up" id='concept'>
  <div className="rounded-3xl max-w-[75rem] mx-auto">
    <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
      <div className="relative md:pt-10 lg:order-last lg:h-full">
        <img src={tableImg} alt="Tableimage" />
      </div>

      <div className="pb-10 lg:pt-8 text-secondary lg:order-first">
        <h2 className="text-3xl font-medium sm:text-4xl text-gray-200">Concept</h2>
        <h3 className="mt-4 text-sm text-gray-400">
            The Smart Table is an advanced table designed for group workstations. It features a built-in user interface
            that allows students to manually decide whether the windows should be opened in the event of excessive
            noise. This empowers them to work without distraction by closing the windows and blocking disruptive
            external noises, maintaining a peaceful environment.
          <br></br>
          <br></br>
            The Smart Table also includes a sound indicator light that visually displays the noise level in the
            surroundings. This helps students adapt their workspace and stay aware of the ambient conditions.
          <br></br>
          <br></br>
            As part of a broader concept, the TQ building floor has been restructured to create different areas for
            group work, individual work, breaks, and presentations. The goal is to provide a productive and comfortable
            environment where students can work efficiently without being impeded by noise. The Smart Table plays a
            crucial role in giving users control over their immediate surroundings and enabling them to focus on their
            tasks.
        </h3>
      </div>
    </div>
  </div>
</section>

)}

export default TextImage;