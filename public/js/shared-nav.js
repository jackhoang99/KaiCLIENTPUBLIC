function createNavbar() {
  const nav = document.createElement("nav");
  nav.className = "fixed w-full z-50 px-4 md:px-6 py-4 bg-transparent";

  nav.innerHTML = `
    <div class="flex justify-between items-center">
      <a href="/" class="inline-block">
        <img src="/kai-logo.svg" alt="Kai Logo" class="h-12 w-auto" />
      </a>
      <div class="hidden md:flex space-x-12 text-white">
        <a href="/" class="nav-link">HOME</a>
        <a href="/schedule.html" class="nav-link">SCHEDULE</a>
        <a href="/buy.html" class="nav-link">BUY</a>
        <a href="/about" class="nav-link">ABOUT</a>
        <a href="/faq" class="nav-link">FAQ</a>
        <a href="/account.html" class="nav-link">ACCOUNT</a>
      </div>
    </div>
  `;

  return nav;
}

// Add styles for nav links
const style = document.createElement("style");
style.textContent = `
  .nav-link {
    color: white;
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 0.1em;
    border-bottom: 1px solid transparent;
    padding-bottom: 0.25rem;
    transition: all 0.2s;
  }
  .nav-link:hover {
    border-bottom-color: white;
    opacity: 0.8;
  }
`;

document.head.appendChild(style);

// Initialize navbar when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const navbar = createNavbar();
  document.body.insertBefore(navbar, document.body.firstChild);
});
