const PrivatkundenLink = [
    { name: "Fahrzeugversicherung", link: "administration.html" },
    { name: "Krankenversicherung", link: "administration.html" },
    { name: "Lebensversicherung", link: "administration.html" },
    { name: "Hausratversicherung", link: "administration.html" },
    { name: "Tierversicherung", link: "administration.html" },
    {
      name: "Privathaftpflichtversicherung",
      link: "administration.html",
    },
    { name: "Rechtsschutzversicherung", link: "administration.html" },
    { name: "Hypotheken", link: "administration.html" },
    { name: "Investmentberatung", link: "administration.html" },
  ];
  
  const GeschäftskundenLink = [
    { name: "Unfallversicherung UVG", link: "administration.html" },
    {
      name: "Krankentaggeldversicherung KTG",
      link: "administration.html",
    },
    { name: "Berufliche Vorsroge BVG", link: "administration.html" },
    { name: "Sachversicherung", link: "administration.html" },
    {
      name: "Betriebshaftpflichtversicherung",
      link: "administration.html",
    },
    {
      name: "Fahrzeug- und Flottenversicherung",
      link: "administration.html",
    },
    {
      name: "Betriebsrechtsschutzversicherung",
      link: "administration.html",
    },
    { name: "Hypotheken", link: "administration.html" },
    { name: "Investmentberatung", link: "administration.html" },
  ];
  

  
  const privateEl = document.getElementById("private");
  const publicEl = document.getElementById("public");
  
  PrivatkundenLink.forEach((value) => {
    privateEl.innerHTML =
      privateEl.innerHTML += `<a class="nav-a p-3 block hover:text-baseColor active:text-baseColor" href=${value.link}>${value.name}</a>`;
  });
  
  GeschäftskundenLink.forEach((value) => {
    publicEl.innerHTML =
      publicEl.innerHTML += `<a class="nav-a p-3 block hover:text-baseColor active:text-baseColor" href=${value.link}>${value.name}</a>`;
  });
  
  const menuIcon = document.getElementById("hamburger");
  const closeIcon = document.getElementById("close-menu");
  const mobileNav = document.getElementById("mobile-nav")

  
  function toggleMenu(x) {
    if (x.children[0].classList.value.includes('block')) {
      
      x.children[0].classList.add("hidden");
      x.children[0].classList.remove("block");
      x.children[1].classList.remove("hidden");
      x.children[1].classList.add("block");
      
    } else {
      x.children[1].classList.add('hidden');
      x.children[1].classList.remove("block");
      x.children[0].classList.remove("hidden");
      x.children[0].classList.add("block");
    }
  
  if (mobileNav.classList.value.includes('hidden')) {
    mobileNav.classList.add('block')
    mobileNav.classList.remove('hidden')
  }
  else {
    mobileNav.classList.remove('block')
    mobileNav.classList.add('hidden')
  }
  
  
    
  }
  // hamburger
  
  const fixedStyle = document.getElementById("fixed-style")


  fixedStyle.addEventListener('click', () => {
    mobileNav.classList.remove('block')
    mobileNav.classList.add('hidden')
    menuIcon.classList.add('block')
    menuIcon.classList.remove('hidden')
    closeIcon.classList.remove('block')
    closeIcon.classList.add('hidden')
  })
  
  let navHover = document.querySelectorAll(".nav-hover");
  
  Array.prototype.forEach.call(navHover, (elem, index) => {
    elem.addEventListener("mouseover", () => {
      console.log(elem.children[1]);
      elem.children[1].classList.remove("hidden");
    });
  
    elem.addEventListener("mouseout", () => {
      elem.children[1].classList.add("hidden");
    });
  });
  
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight + 50,
      behavior: "smooth",
    });
  };
  



  
  const privateMobileEl = document.getElementById("private-mobile");
  const publicMobileEl = document.getElementById("public-mobile");
  
  PrivatkundenLink.forEach((value) => {
    privateMobileEl.innerHTML =
      privateMobileEl.innerHTML += `<a class="nav-a p-3 block hover:text-baseColor active:text-baseColor" href=${value.link}>${value.name}</a>`;
  });
  
  GeschäftskundenLink.forEach((value) => {
    publicMobileEl.innerHTML =
      publicMobileEl.innerHTML += `<a class="nav-a px-3 py-3 block hover:text-baseColor active:text-baseColor" href=${value.link}>${value.name}</a>`;
  });
  
  //  mobile drop down
  let mobileBtns =  document.querySelectorAll('.mobile-drop')
  

  
  
  Array.prototype.forEach.call(mobileBtns, (elem, index) => {
    
    elem.addEventListener('mouseover', () => {
    //  console.log('sdvsdvsd', elem.parentElement.children[1])
      if (elem.parentElement.children[1].classList.value.includes('hidden')) {
        elem.parentElement.children[1].classList.add('block')
        elem.parentElement.children[1].classList.remove('hidden')
  
      }
      else {
        elem.parentElement.children[1].classList.add('hidden')
        elem.parentElement.children[1].classList.remove('block')
      }
    })
  })
  
  // private-mobile
  
  // Get the current URL path
  const currentPath = window.location.pathname;
 
  
  // Select all the nav links
  const navLinks = document.querySelectorAll('.nav-a');


  
  // Loop through each link and check if its href matches the current path
  Array.prototype.forEach.call(navLinks, (link, i) => {
   
    if (currentPath.includes(link.getAttribute('href'))) {
       
      link.classList.add('text-[#28a745]');
    }
  });
  
  