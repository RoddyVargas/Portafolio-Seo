/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, h as renderSlot, e as renderComponent, F as Fragment, s as spreadAttributes } from '../astro_vKCDQ1m9.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Badge, a as $$SocialPill, b as $$LinkedIn, c as $$SectionContainer, d as $$Layout } from './components_BRgA2X-d.mjs';

const $$Astro$j = createAstro();
const $$LinkInline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$LinkInline;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/LinkInline.astro", void 0);

const $$Astro$i = createAstro();
const $$ExperinceItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$ExperinceItem;
  const { title, description, link, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"> <div class="relative pb-12 md:col-span-2"> <div class="sticky top-0"> <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">&bull;</span> <h3 class="text-xl font-bold text-yellow-400">${title}</h3> <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">${date}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"> ${description} ${link && renderTemplate`${renderComponent($$result, "LinkInline", $$LinkInline, { "href": link }, { "default": ($$result2) => renderTemplate`
Saber más${" "}<svg xmlns="http://www.w3.org/2000/svg" class="w-5 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 6l6 6l-6 6"></path> ` })} </svg> ` })}`} </div> </div>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/ExperinceItem.astro", void 0);

const $$Astro$h = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Experience;
  const EXPERIENCIE = [
    {
      date: "Actualmente...",
      title: "Auxiliar Contable",
      description: "Ayudo en las tareas de de ingreso de depositos, facturacion, facturacion electronica FEL, facturacion de IVA, ISR E IGSS entre otras tareas "
    },
    {
      date: "Septiembre 2023",
      title: "Practicas de Bachillerato  \u2212 Palacio legislativo Ciudad de Guatemala",
      description: "Realize tareas en todas las areas relacionada a la informatica y Recursos humanos, me desempe\xF1e en el area de gestion de personal llevanado planilla de horas extraordinarias, realize mantenimiento y actualizaci\xF3n de equipo de computo para el area de informatica, y realice actualizacion de base de datos del personal en el area de base de datos"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative border-s border-gray-200 ml-3"> ${EXPERIENCIE.map((experiencie) => renderTemplate`<li class="mb-10 ms-4"> ${renderComponent($$result, "ExperienceItem", $$ExperinceItem, { ...experiencie })} </li>`)} </ol>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/Experience.astro", void 0);

const $$Astro$g = createAstro();
const $$Briefcase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/icons/Briefcase.astro", void 0);

const $$Astro$f = createAstro();
const $$CodeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$CodeIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7 8l-4 4l4 4"></path> <path d="M17 8l4 4l-4 4"></path> <path d="M14 4l-4 16"></path> </svg>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/icons/CodeIcon.astro", void 0);

const $$Astro$e = createAstro();
const $$LinkButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/Link-Button.astro", void 0);

const $$Astro$d = createAstro();
const $$CssIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$CssIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"> <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#30a9dc" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"></path> </svg>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/icons/CssIcon.astro", void 0);

const $$Astro$c = createAstro();
const $$GitHub = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path></svg>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/icons/GitHub.astro", void 0);

const $$Astro$b = createAstro();
const $$HtmlIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$HtmlIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"> <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#ef652a" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path> </svg>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/icons/HtmlIcon.astro", void 0);

const $$Astro$a = createAstro();
const $$JavaScripticon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$JavaScripticon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"></path><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path></svg>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/icons/JavaScripticon.astro", void 0);

const $$Astro$9 = createAstro();
const $$ScssIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ScssIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 512 384" xmlns="http://www.w3.org/2000/svg" width="512" height="384"><path fill="#CF649A" d="M441 221c-18 0-34 4-47 10-5-9-9-17-10-24s-2-11-1-20 6-21 6-22c0 0-1-5-11-5-11 0-20 2-21 5l-4 15c-2 9-20 43-31 60-4-7-7-13-7-17-1-8-2-12-1-21s6-20 6-21-1-6-11-6c-11 0-20 2-21 5l-4 15-34 76-8 18c-2 4 0 0 0 1l-3 5-4 5s-1-7 1-16c3-19 12-49 12-51 0 0 2-5-6-8-7-3-9 2-10 2l-1 1s8-34-16-34c-14 0-35 17-45 31l-34 19-17 9-1-1c-29-31-82-52-79-93 0-15 6-54 101-102 79-39 141-28 152-4 16 34-33 97-115 106-31 3-47-9-51-13-4-5-5-5-7-4s-1 5 0 8c3 6 13 17 30 23 15 5 51 8 95-9 49-19 88-72 77-117-12-45-87-60-157-35-43 15-88 39-121 70-39 36-45 68-43 81 10 47 74 78 100 100l-3 2c-13 7-63 33-75 60-14 31 2 53 13 56 33 10 68-7 86-34 18-28 16-64 8-80l-1-1 11-6 18-10c-3 9-5 19-6 34-2 17 6 40 15 49 4 4 9 4 12 4 11 0 16-9 22-20l13-28s-8 41 13 41c7 0 15-9 18-14l1-1 1-2 20-37 25-57 5 20c2 8 7 16 10 24l-4 7-8 10c-10 12-23 26-24 30-2 5-2 8 2 11 3 2 8 2 13 2l18-4 17-9c10-7 16-18 15-32 0-7-3-15-6-22l3-4c16-23 28-49 28-49l5 21 9 20a89 89 0 0 0-27 36c-6 17-2 24 7 26 4 1 10-1 14-3 5-1 11-4 17-8 10-8 20-18 19-32 0-6-2-13-4-19 12-5 29-8 49-5 45 5 54 33 52 44-2 12-11 18-14 20l-4 4c1 2 2 2 5 2 3-1 23-10 24-31 1-28-25-58-71-57zM97 336c-14 16-35 23-44 17-9-5-6-29 13-46 11-10 25-20 34-26l9-5 1-1 3-1c6 24 0 45-16 62zm108-73c-5 13-16 45-22 43-6-1-9-26-2-50 4-12 13-26 18-32 8-9 17-12 19-8 3 5-10 39-13 47zm89 43-5 1v-2l16-17 9-11v1c0 14-14 24-20 28zm68-16c-2-1-1-5 4-16 2-5 7-13 15-20l2 9c0 18-13 24-21 27z"></path></svg>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/icons/ScssIcon.astro", void 0);

const $$Astro$8 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Projects;
  const TAGS = {
    HTML: {
      name: "HTML",
      class: "bg-black text-white",
      icon: $$HtmlIcon
    },
    CSS: {
      name: "CSS",
      class: "bg-black text-white",
      icon: $$CssIcon
    },
    SCSS: {
      name: "SCSS",
      class: "bg-black text-white",
      icon: $$ScssIcon
    },
    JavaScript: {
      name: "JavaScript",
      class: "bg-black text-white",
      icon: $$JavaScripticon
    }
  };
  const PROJECTS = [
    {
      title: "StarWars E-comerce",
      description: "Una peque\xF1a pagina de presentacion donde se muestras diferentes productos de Starwars, me he enfocado en mostrar las animaciones y el dise\xF1o he utilizado Tecnologias como HTML, CSS, SCSS y JavaScript",
      link: "https://roddyvargas.github.io/StarWars-Ecomerce/",
      github: "https://github.com/RoddyVargas/StarWars-Ecomerce",
      image: "https://i.postimg.cc/nzzGzTKX/svgl.webp",
      tags: [TAGS.HTML, TAGS.CSS, TAGS.SCSS, TAGS.JavaScript]
    },
    {
      title: "Tetris-clone",
      description: "Una peque\xF1a version del lejendario tetris, me he enfocado en practicar la jugabilidad y mejorar la experiencia visual del usuario y del desarrollador con un codigo mas limpio y optimo. Para el dise\xF1o he utilizado Tecnologias como HTML, CSS y JavaScript",
      link: "https://roddyvargas.github.io/Tetris/",
      github: "https://github.com/RoddyVargas/Tetris",
      image: "https://i.postimg.cc/tTMtVPD2/tetris-clone.webp",
      tags: [TAGS.HTML, TAGS.CSS, TAGS.JavaScript]
    },
    {
      title: "Game Tower-blocks",
      description: "Un juego muy especial me he basado en un juego de celular donde habia que hacer una torre de pasteles, como el juego de tetris solo es utilizable en pc he hecho este para que sea multidispositivo asi que puedes jugarlo desde tu celular.",
      link: "https://roddyvargas.github.io/TowerBlocks/",
      github: "https://github.com/RoddyVargas/TowerBlocks",
      image: "https://i.postimg.cc/tJnddTMy/tower-blocks.webp",
      tags: [TAGS.HTML, TAGS.CSS, TAGS.JavaScript]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-16"> ${PROJECTS.map(({ image, title, description, tags, link, github }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img alt="StarWars" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(image, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"> ${title} </h3> <div class="flex flex-wrap mt-2"> <ul class="flex flex-row mb-2 gap-x-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `, "class")}> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4" })} ${tag.name} </span> </li>`)} </ul> <div class="mt-2 text-gray-700 dark:text-gray-400">${description}</div> <footer class="flex items-end justify-start mt-4 gap-x-4"> ${github && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": github }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$GitHub, { "class": "size-6" })}
Code
` })}`} ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": link }, { "default": ($$result2) => renderTemplate` <link class="size-4">
Preview
` })}`} </footer> </div> </div> </article>`)} </div>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/Projects.astro", void 0);

const $$Astro$7 = createAstro();
const $$EducationItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$EducationItem;
  const { description, date, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"> <div class="relative pb-12 md:col-span-2"> <div class="sticky top-0"> <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">&bull;</span> <h3 class="text-xl font-bold text-yellow-400">${title}</h3> <h4 class="font-semibold text-xl text-gray-600 dark:text-white"></h4> <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">${date}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"> ${description} </div> </div>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/EducationItem.astro", void 0);

const $$Astro$6 = createAstro();
const $$Education = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Education;
  const EDUCATION = [
    {
      title: "Ingenieria en Sistemas",
      date: "Actualmente.",
      location: "Universidad Mariano Galvez de Guatemala",
      description: "Cursando el primer semestre de la carrera de Ingenieria en Sistemas."
    },
    {
      title: "Practicas Certificado",
      date: "Septiembre 2023",
      location: "Palacio legislativo",
      description: "Realize tareas en todas las areas relacionada a la informatica y Recursos humanos, me desempe\xF1e en el area de gestion de personal llevanado planilla de horas extraordinarias, realize mantenimiento y actualizaci\xF3n de equipo de computo para el area de informatica, y realice actualizacion de base de datos del personal en el area de base de datos."
    },
    {
      title: "Bachillerato en Computaci\xF3n con orientaci\xF3n comercial",
      date: "Enero 2022 - Octubre 2023",
      location: "Liceo Clasico en Computaci\xF3n",
      description: "Curse durante 2 a\xF1os la carrera de Bachillerato en Computaci\xF3n con orientacion comercial en el horario de fin de semana en el plan sabado mientras en la semana estudiaba de manera autodidacta la programaci\xF3n."
    },
    {
      title: "Tecnico Operador",
      date: "Enero 2019 - Octubre 2019",
      location: "Academia de Mecanografia Ca\xF1adas del valle",
      description: "Realice tareas de mantenimiento y actualizaci\xF3n de equipos de computo, y desarrolle un buen manejo de todo el paquete de office."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative border-s border-gray-200 ml-3"> ${EDUCATION.map((education) => renderTemplate`<li class="mb-10 ms-4"> ${renderComponent($$result, "EducationItem", $$EducationItem, { ...education })} </li>`)} </ol>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/Education.astro", void 0);

const $$Astro$5 = createAstro();
const $$EducationIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$EducationIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 .807L23.835 8.5L22 9.693V16h-2v-5.007l-1 .65V17.5c0 1.47-1.014 2.615-2.253 3.339c-1.265.737-2.945 1.16-4.747 1.16s-3.483-.423-4.747-1.16C6.013 20.115 5 18.969 5 17.499v-5.856L.165 8.5zM7 12.943V17.5c0 .463.33 1.067 1.261 1.61c.908.53 2.227.89 3.739.89s2.831-.36 3.739-.89c.932-.543 1.26-1.147 1.26-1.61v-4.557l-5 3.25zM20.165 8.5L12 3.193L3.835 8.5L12 13.807z"></path></svg>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/icons/EducationIcon.astro", void 0);

const $$Astro$4 = createAstro();
const $$AboutMe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AboutMe;
  const personalImageAlt = "Roddy Leiva";
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row"> <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"> <p>
Me llamo Roddy Enoc Leiva Vargas pero mis amigos me llaman Toti. Empecé en la
      programación no como tal sabia que era la programacion durante el periodo de pandemia de 2020 veia Tik Toks y me ha aparecian mucho videos de ciberseguridad y ahi fue donde di mis primeras lineas de codigo desarrollando una pequeñaapk para Android en el cual tenia acceso a la camara no funciono, pero ahi fue mi inicio, tenía 16 años. Actualmente estoy <strong>Estoy trabajando en una empresa de contabilidad.</strong>.
</p> <p>
Mi hitos Relevantes y No tan Relevantes<strong> Medalla 2 lugar en concurso interescolar sobre deletro y Medalla de 1 lugar en concurso interescolar sobre natacion.</strong>.
</p> <p>
Actualmente,<strong>Estoy en proceso de mejorar mi ingles aprender Ruso y montar mi propia marca de ropa <em class="italic">RELV</em> EN GUATEMALA</strong>. Mi objetivo principal para el 2024 es mejorar el acceso a la tecnologia y mejorar la comunacion entre comunidades mayas en Guatemala. Con una aplicacion de traduccion a estos idiomas ya que se cuenta con muy poco documentacion de estos idiomas en digital.
</p> </div> <img width="200" height="200" src="https://pbs.twimg.com/media/GE4QqTIXkAAtY81?format=jpg&name=900x900"${addAttribute(personalImageAlt, "alt")} class="order-1 object-cover w-64 h-full p-1 bg-white md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl dark:bg-yellow-500/5 ring-1 ring-white/20 " style="object-position: 50% 50%"> </article>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/AboutMe.astro", void 0);

const $$Astro$3 = createAstro();
const $$ProfileCheck = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProfileCheck;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/icons/ProfileCheck.astro", void 0);

const $$Astro$2 = createAstro();
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/icons/Mail.astro", void 0);

const $$Astro$1 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const personalImageAlt = "Roddy Leiva";
  return renderTemplate`${maybeRenderHead()}<div class="max-w-xl"> <div class="flex gap-4 mb-4"> <img class="rounded-full shadow-lg size-16" src="https://media.licdn.com/dms/image/D4E03AQFczvtKsx3SBg/profile-displayphoto-shrink_800_800/0/1702487015677?e=1712793600&v=beta&t=fyu5qdQ2_3pNfW7Txv2Nz_TId0dNk-C1pkQGlB_sh3w"${addAttribute(personalImageAlt, "alt")}> <a href="https://linkedin.com/in/roddy-leiva" target="_blank" rel="noopener" class="flex items-center transition md:justify-center md:hover:scale-105"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Disponible para trabajar` })} </a> </div> <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
Hey, Soy Roddy Leiva
</h1> <p class="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
+3 años de experiencia. <strong>Bachiller en Computación y tecnico Operador</strong> de Guatemala city, Guatemala GT. Especializado en el desarrollo de aplicaciones web
    únicas.
</p> <nav class="flex flex-wrap gap-4 mt-8"> ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "mailto:roddydeveloper2023@gmail.com" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MailIcon", $$Mail, { "class": "size-4" })}
Contáctame
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "https://linkedin.com/in/roddy-leiva" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LinkedInIcon", $$LinkedIn, { "class": "size-4" })}
LinkedIn
` })} </nav> </div>`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio Roddy Leiva - Desarrollador y Programador Fullstack - 3 a\xF1os de experiencia", "description": "Contrata a Roddy Leiva para crear tu aplicaci\xF3n web o movil Desarrollador Web. Especializado en crear apliaciones \xFAnicas." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 md:py-36" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ` })} <div class="space-y-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experiencia" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "Briefcase", $$Briefcase, { "class": "size-8" })}
Experiencia laboral
</h2> ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "CodeIcon", $$CodeIcon, { "class": "size-7" })}
Proyectos
</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "Educacion" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center dark:text-white/80"> ${renderComponent($$result3, "EducationIcon", $$EducationIcon, { "class": "size-7" })}
Educación
</h2> ${renderComponent($$result3, "Education", $$Education, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "sobre-mi" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white"> ${renderComponent($$result3, "ProfileCheck", $$ProfileCheck, { "class": "size-8" })}
Sobre mí
</h2> ${renderComponent($$result3, "AboutMe", $$AboutMe, {})} ` })} </div> </main> ` })}`;
}, "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/pages/index.astro", void 0);

const $$file = "C:/Users/roddy/OneDrive/Documentos/GitHub/Portafolio-Seo/Portafolio-Seo/Portafolio-Seo/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
