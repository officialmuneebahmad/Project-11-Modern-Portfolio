// Hamburger menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const hamburger = document.getElementById('hamburger');
  const cross = document.getElementById('cross');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);

    // Toggle menu visibility
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('show');

    // Toggle icons
    hamburger.classList.toggle('hidden');
    cross.classList.toggle('hidden');
  });

// Typewriter effect
var app = document.getElementById('app');
var code = document.getElementById('code');

  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
  });

  typewriter
    .pauseFor(300)
    .typeString('<span style="color:#B13BFF;">a designer</span>')
    .pauseFor(300)
    .deleteChars(12)
    .typeString('<span style="color:#3E5F44;">a developer</span>')
    .pauseFor(300)
    .deleteChars(12)
    .typeString('<span style="color:#0F828C;">a problem solver</span>')
    .pauseFor(300)
    .deleteChars(18)
    .typeString('<span style="color:#F7374F;">an open sourcerer</span>')
    .pauseFor(300)
    .deleteChars(18)
    .typeString('<span style="color:#FF6500;">a tech enthusiast</span>')
    .pauseFor(300)
    .deleteChars(18)
    .typeString('<span style="color:#4B70F5;">an AI explorer</span>')
    .pauseFor(300)
    .deleteChars(18)
    .typeString('<span style="color:#ffb703;">a freelancer</span>')
    .pauseFor(1000)
    .start();

  var typewriterCode = new Typewriter(code, {
    loop: true,
    delay: 75,
  });

  typewriterCode
    .pauseFor(300)
    .typeString('<span class="code" style="font-family:Orbitron;">code</span>')
    .pauseFor(500)
    .deleteChars(12)
    .pauseFor(1000)
    .start();

// Contact Things
document.getElementById("copyEmail").addEventListener("click", function () {
    const email = "officialmuneebahmed@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      this.innerHTML = '<i class="fa-solid fa-check text-green-400"></i>';
      setTimeout(() => {
        this.innerHTML = '<i class="fa-solid fa-clipboard"></i>';
      }, 1500);
    });
  });