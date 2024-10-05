import Logo2 from '../../assets/img/LandingPageImages/logo-2.svg';
import Logo from '../../assets/img/LandingPageImages/logo.svg';


export function LandingPageScript() {
  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    const preloader = document.querySelector(".preloader");
    if (preloader) {
      preloader.style.opacity = "0";
      preloader.style.display = "none";
    }
  }

  window.onscroll = function () {
    const headerNavbar = document.querySelector(".navbar-area");
    const sticky = headerNavbar ? headerNavbar.offsetTop : 0;
    const logo = document.querySelector(".navbar-brand img");

    if (headerNavbar) {
      if (window.pageYOffset > sticky) {
        headerNavbar.classList.add("sticky");
        if (logo) logo.src = Logo2;
      } else {
        headerNavbar.classList.remove("sticky");
        if (logo) logo.src = Logo;
      }
    }

    // Show or hide the back-to-top button
    const backToTop = document.querySelector(".scroll-top");
    if (backToTop) {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    }
  };

  // For menu scroll
  const pageLinks = document.querySelectorAll(".page-scroll");

  pageLinks.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = elem.getAttribute("href").substring(1); // Remove '#' from href
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Section menu active
  function onScroll() {
    const sections = document.querySelectorAll(".page-scroll");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    sections.forEach((currLink) => {
      const val = currLink.getAttribute("href").substring(1); // Remove '#' from href
      const refElement = document.getElementById(val);

      if (refElement) {
        const scrollTopMinus = scrollPos + 73;

        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          document
            .querySelector(".page-scroll.active")
            ?.classList.remove("active");
          currLink.classList.add("active");
        } else {
          currLink.classList.remove("active");
        }
      }
    });
  }

  window.addEventListener("scroll", onScroll);

  // Close navbar-collapse when a link is clicked
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".page-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      if (navbarToggler) navbarToggler.classList.remove("active");
      if (navbarCollapse) navbarCollapse.classList.remove("show");
    })
  );

  if (navbarToggler) {
    navbarToggler.addEventListener("click", function () {
      navbarToggler.classList.toggle("active");
    });
  }
}

export function handleScrollTo(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}