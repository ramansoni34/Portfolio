gsap.set(["nav", ".projects", ".card"], {
  opacity: 1,

y: 0,});;

let tl = gsap.timeline();

tl.fromTo("nav", 
  { y: -80, opacity: 0 }, 
  { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
);

tl.fromTo("nav a", 
  { y: -20, opacity: 0 }, 
  { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
  "-=0.4"
);

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".card:not(.hero)").forEach((card) => {
  gsap.from(card, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      toggleActions: "play none none reverse"
    }
  });
});

gsap.fromTo(".project-card", 
  {
    y: 40,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".projects",
      start: "top 80%"
    }
  }
);

gsap.fromTo(".about h2", 
  {
    y: 50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about",
      start: "top 85%"
    }
  }
);

gsap.fromTo(".about p", 
  {
    y: 40,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about",
      start: "top 85%"
    }
  }
);

gsap.fromTo(".skills-list span", 
  {
    y: 30,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".skills",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  }
);

gsap.fromTo(".hero h1",
  {
    y: 60,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    delay: 0.2
  }
);

gsap.fromTo(".hero p",
  {
    y: 30,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    delay: 0.4
  }
);

gsap.to(".hero-img img", {
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

gsap.fromTo(".contact-links a",
  {
    y: 40,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact",
      start: "top 85%"
    }
  }
);

const avatar = document.querySelector(".hero-img img");

avatar.addEventListener("mousemove", (e) => {
  const rect = avatar.getBoundingClientRect();

  const x = e.clientX - rect.left; 
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (y - centerY) / 10;
  const rotateY = (centerX - x) / 10;

  gsap.to(avatar, {
    rotateX: rotateX,
    rotateY: rotateY,
    duration: 0.3,
    ease: "power2.out",
    transformPerspective: 500
  });
});

avatar.addEventListener("mouseleave", () => {
  gsap.to(avatar, {
    rotateX: 0,
    rotateY: 0,
    duration: 0.5,
    ease: "power2.out"
  });
});

if (window.innerWidth > 768) {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1
    });
  });

  const links = document.querySelectorAll("a, button");

  links.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 1.8,
        backgroundColor: "#000",
        duration: 0.2
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "transparent",
        duration: 0.2
      });
    });
  });
}
const links = document.querySelectorAll("a, button");

links.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 1.8,
      backgroundColor: "#000",
      duration: 0.2
    });
  });

  el.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 1,
      backgroundColor: "transparent",
      duration: 0.2
    });
  });
});

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});


if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}


toggleBtn.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

