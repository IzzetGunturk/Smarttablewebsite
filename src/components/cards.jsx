import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

function Cards() {

  const cardsData = [
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className='h-10 w-10 mx-auto text-white' fill="none" viewBox="0 0 24 24"
      strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>),
      title: 'Noise control',
      description: 'The Smart Table enables students to manually control the opening and closing of windows, reducing disruptive external noises and promoting a peaceful working environment.',
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className='h-10 w-10 mx-auto text-white' fill="none" viewBox="0 0 24 24"
      strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>),
      title: 'User empowerment',
      description: 'Students have the ability to actively manage their workspace by adjusting the windows according to their preferences and the noise levels, allowing them to create a personalized and comfortable setting.',
    },
    {
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" className='h-10 w-10 mx-auto text-white' fill="none" viewBox="0 0 24 24"
      strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>),
      title: 'Visual sound indication',
      description: 'The Smart Table features a sound indicator light that visually displays the noise level, providing students with instant feedback to adapt their workspace and optimize productivity.',
    },
  ]

return (
<section className='px-5 pb-16'>
  <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[75rem] mx-auto">
    {cardsData.map((cards, index) => (
    <div data-aos="fade-up" className="flex" key={index}>
      <div className="rounded-xl border text-center bg-gray-600 hover:bg-[#555f6d] transition duration-200 border-none p-8 shadow-xl">
        {cards.icon}

        <h2 className="mt-4 text-xl text-gray-200">{cards.title}</h2>

        <p className="mt-1 text-sm text-gray-400">
          {cards.description}
        </p>
      </div>
    </div>
    ))}
  </div>
</section>

)}

export default Cards;