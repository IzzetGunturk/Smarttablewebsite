import React from 'react'
import tableImg from '../assets/tableImg.png'

function BodyContent() {
return (
<>
  <section className="px-5 lg:pl-16" id='concept'>
    <div className="rounded-3xl max-w-7xl mx-auto">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-48 md:pt-10 lg:order-last lg:h-full">
          <img src={tableImg}></img>
        </div>

        <div className="pb-10 lg:pt-8 text-secondary lg:order-first">
          <h2 className="text-3xl font-bold sm:text-4xl text-gray-200">Concept</h2>
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

  <section className='px-5 pb-16'>
    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      <div
        class="block rounded-xl border text-center bg-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto text-pink-500" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>

        <h2 class="mt-4 text-xl font-bold text-white">Noise control</h2>

        <p class="mt-1 text-sm text-gray-300">
          The Smart Table enables students to manually control the opening and closing of windows, reducing disruptive
          external noises and promoting a peaceful working environment.
        </p>
      </div>

    </div>
  </section>


</>
)
}

export default BodyContent