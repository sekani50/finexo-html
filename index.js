

// services
const services = [
  {
    id: 1,
    title: "Frustfreie Buchhaltung & Administration",
    description:
      "Sie möchten nie wieder Fristen verpassen, mit Buchungen hinterherhinken oder sich über Steuerformulare ärgern? Dann überlassen Sie uns Ihre Buchhaltung.",
    link: "administration.html",
    buttonText: "Unser Angebot",
    image: "./src/assets/finexo_buchhaltung_dienstleistungen.png.png",
  },
  {
    id: 2,
    title: "Professionelle Steuerberatung",
    description:
      "Ihre Steuererklärung ist kompliziert? Lassen Sie uns das machen. So sparen sie Zeit - und Geld: Wir spüren für Sie legale Wege auf, Ihre Steuerausgaben zu minimieren.",
    link: "https://finexo.swiss/",
    buttonText: "Unser Angebot",
    image: "./src/assets/finexo_buchhaltung_dienstleistungen.png.png",
  },
  {
    id: 3,
    title: "Einfache Firmengründung",
    description: `Eine Firma zu gründen, muss nicht kompliziert sein. Füllen Sie unser Online-Formular aus und wir erledigen alle Formalitäten.
  (ab CHF 490.-).`,
    link: "https://finexo.swiss/",
    buttonText: "Jetzt einfach gründen",
    image: "./src/assets/finexo_buchhaltung_dienstleistungen.png.png",
  },
];

const activeServiceImgContainer = document.getElementById(
  "active-image-container"
);

const servicesList = document.getElementById("services-list");

const activeDetails = document.getElementById("active-details");

// "bg-white shadow text-baseColor"
// selectedService === id

let selectedService = 0;

activeServiceImgContainer.innerHTML = `<img
            data-aos="zoom-out"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="100"
            src=${services[selectedService].image} alt="" class="w-full h-[300px] sm:h-[450px] rounded-lg object-cover" />`;

activeDetails.innerHTML = `<div
        data-aos="zoom-out"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
        data-aos-delay="100"
        class="w-full gap-8 sm:gap-10 items-center justify-center flex flex-col sm:items-start sm:justify-start sm:grid grid-cols-1">
          <div class="w-fit sm:w-full flex items-center gap-x-2">
            <div class="h-11 w-11 rounded-full flex items-center justify-center bg-white shadow-lg">
              <img src="./src/assets/icon.png" alt="" class="w-6 h-6" />

             
            </div>
            <p class="text-sm sm:text-base text-baseColor">${services[selectedService].title}</p>
            </div>

            <h2 class="font-semibold text-lg sm:text-xl md:text-3xl text-start">${services[selectedService].title}</h2>
        <p class="text-gray-500 text-sm leading-8 sm:leading-10 sm:text-base text-start">
        ${services[selectedService].description}
        </p>

 <a 
href=${services[selectedService].link}
class="rounded-3xl h-11 w-fit text-center flex items-center justify-center bg-[#28a745] text-white font-semibold px-6">${services[selectedService].buttonText}</a>
        
          </div>`;



services.forEach(({ title, id }) => {
  servicesList.innerHTML = servicesList.innerHTML += `  <button
              
            id="${id}"
              class="active-buttons flex w-[300px] items-center gap-x-2 hover:bg-white px-3 py-4 rounded-lg hover:shadow"
              >
                <img src="./src/assets/icon.png"  class="w-6 h-6" alt=""/>
                <p class="w-[90%] text-ellipsis whitespace-nowrap overflow-hidden font-medium text-sm sm:text-lg">${title}</p>
              </button>`;
});

const activeButtons = document.querySelectorAll(".active-buttons");
const activeBtn = document.querySelector('.active-buttons')



Array.prototype.forEach.call(activeButtons, (elem, index) => {
if (index === 0) {
 
  elem.classList.add('active-state')
 
}
  elem.addEventListener("click", () => {
    const id = elem.getAttribute("id");

activeServiceImgContainer.innerHTML = `<img
data-aos="zoom-out"
data-aos-easing="ease-in-out"
data-aos-duration="500"
data-aos-delay="100"
src=${
      services[Number(id) - 1].image
    } alt="" class="w-full h-[300px] sm:h-[450px] rounded-lg object-cover" />`;

activeDetails.innerHTML = `<div
data-aos="zoom-out"
data-aos-easing="ease-in-out"
data-aos-duration="500"
data-aos-delay="100"
class="w-full gap-8 sm:gap-10 items-center justify-center flex flex-col sm:items-start sm:justify-start sm:grid grid-cols-1">
<div class="w-fit sm:w-full flex items-center gap-x-2">
<div class="h-11 w-11 rounded-full flex items-center justify-center bg-white shadow-lg">
  <img src="./src/assets/icon.png" alt="" class="w-6 h-6" />

 
</div>
<p class="text-sm sm:text-base text-baseColor">${
      services[Number(id) - 1].title
    }</p>
</div>

<h2 class="font-semibold text-lg sm:text-xl md:text-3xl text-start">${
      services[Number(id) - 1].title
    }</h2>
<p class="text-gray-500 text-sm leading-8 sm:leading-10 sm:text-base text-start">
${services[Number(id) - 1].description}
</p>

<a 
href=${services[Number(id) - 1].link}
class="rounded-3xl h-11 w-fit text-center flex items-center justify-center bg-[#28a745] text-white font-semibold px-6">${
      services[Number(id) - 1].buttonText
    }</a>

</div>`;

    // elem.classList.add("bg-white shadow text-baseColor");
    activeButtons.forEach((v) => {
      const attr = v.getAttribute('id');
     
      if (Number(attr) === Number(id)) {
        console.log(attr, id)
        v.classList.add("active-state")
      }
      else {
        v.classList.remove("active-state")
      }
    })

    selectedService = Number(id) - 1;
  });
});
