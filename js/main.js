// Premium Business Website Template - JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Navigation scroll effect
  const navbar = document.getElementById("navbar");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    lastScrollTop = scrollTop;
  });

  // Mobile menu toggle
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");

      // Animate hamburger menu
      const bars = navToggle.querySelectorAll(".bar");
      bars.forEach((bar, index) => {
        if (navLinks.classList.contains("active")) {
          if (index === 0)
            bar.style.transform = "rotate(45deg) translate(5px, 5px)";
          if (index === 1) bar.style.opacity = "0";
          if (index === 2)
            bar.style.transform = "rotate(-45deg) translate(7px, -6px)";
        } else {
          bar.style.transform = "none";
          bar.style.opacity = "1";
        }
      });
    });

    // Close mobile menu when clicking on a link
    const navLinksItems = document.querySelectorAll(".nav-links a");
    navLinksItems.forEach((link) => {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        const bars = navToggle.querySelectorAll(".bar");
        bars.forEach((bar) => {
          bar.style.transform = "none";
          bar.style.opacity = "1";
        });
      });
    });
  }

  // Smooth scrolling for navigation links
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = navbar.offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Enhanced scroll animations with Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".fade-in, .service-card, .testimonial-card, .portfolio-item, .about-content, .contact-content"
  );
  animateElements.forEach((el) => {
    observer.observe(el);
  });

  // Counter animation for stats with enhanced timing
  const stats = document.querySelectorAll(".stat-number");
  const statsObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const finalValue = parseInt(target.textContent);
          animateCounter(target, 0, finalValue, 2500);
          statsObserver.unobserve(target);
        }
      });
    },
    { threshold: 0.5 }
  );

  stats.forEach((stat) => {
    statsObserver.observe(stat);
  });

  function animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(function () {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      element.textContent =
        Math.floor(current) +
        (element.textContent.includes("+") ? "+" : "") +
        (element.textContent.includes("%") ? "%" : "");
    }, 16);
  }

  // Enhanced contact form handling
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const formObject = {};

      formData.forEach((value, key) => {
        formObject[key] = value;
      });

      // Show loading state with enhanced animation
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML =
        '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
      submitBtn.disabled = true;

      // Simulate form submission (replace with actual form handling)
      setTimeout(function () {
        // Show success message
        showNotification(
          "Thank you! Your message has been sent successfully.",
          "success"
        );

        // Reset form
        contactForm.reset();

        // Reset button with smooth transition
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }

  // Enhanced notification system
  function showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

    // Add enhanced styles
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${
              type === "success"
                ? "linear-gradient(135deg, #10b981, #059669)"
                : "linear-gradient(135deg, #3b82f6, #2563eb)"
            };
            color: white;
            padding: 1.5rem 2rem;
            border-radius: 1rem;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            transform: translateX(100%) scale(0.8);
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        `;

    document.body.appendChild(notification);

    // Animate in with bounce effect
    setTimeout(() => {
      notification.style.transform = "translateX(0) scale(1)";
    }, 100);

    // Close button functionality
    const closeBtn = notification.querySelector(".notification-close");
    closeBtn.addEventListener("click", () => {
      notification.style.transform = "translateX(100%) scale(0.8)";
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 400);
    });

    // Auto remove after 6 seconds
    setTimeout(() => {
      if (document.body.contains(notification)) {
        notification.style.transform = "translateX(100%) scale(0.8)";
        setTimeout(() => {
          if (document.body.contains(notification)) {
            document.body.removeChild(notification);
          }
        }, 400);
      }
    }, 6000);
  }

  // Enhanced parallax effect for floating elements
  const heroSection = document.querySelector(".hero");
  const floatingElements = document.querySelectorAll(".floating-element");

  if (heroSection && floatingElements.length > 0) {
    window.addEventListener("scroll", function () {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;

      floatingElements.forEach((element, index) => {
        const speed = 0.3 + index * 0.1;
        const rotation = scrolled * 0.02;
        element.style.transform = `translateY(${
          rate * speed
        }px) rotate(${rotation}deg)`;
      });
    });
  }

  // Active navigation highlighting with smooth transitions
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", function () {
    let current = "";
    const headerHeight = navbar.offsetHeight;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - headerHeight - 150;
      const sectionHeight = section.offsetHeight;

      if (
        window.pageYOffset >= sectionTop &&
        window.pageYOffset < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Enhanced hover effects for service cards
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-12px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Enhanced portfolio item interactions
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-12px) scale(1.02)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Lazy loading for images (if any are added later)
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => {
    imageObserver.observe(img);
  });

  // Performance optimization: Debounce scroll events
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Apply debouncing to scroll events
  const debouncedScrollHandler = debounce(function () {
    // Scroll-based animations and effects
  }, 16);

  window.addEventListener("scroll", debouncedScrollHandler);

  // Enhanced CSS for active navigation state and notifications
  const style = document.createElement("style");
  style.textContent = `
        .nav-links a.active {
            color: var(--accent-gold) !important;
        }
        
        .nav-links a.active::before {
            opacity: 1 !important;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
            transition: all 0.3s ease;
        }
        
        .notification-close:hover {
            opacity: 0.8;
            transform: scale(1.1);
        }
        
        .service-card,
        .portfolio-item,
        .testimonial-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .floating-element {
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .btn {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .btn:hover {
            transform: translateY(-3px);
        }
        
        .hero-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hero-card:hover {
            transform: translateX(-15px) scale(1.05);
        }
        
        .floating-badge {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .floating-badge:hover {
            transform: scale(1.1) rotate(5deg);
        }
    `;
  document.head.appendChild(style);

  // Enhanced tooltips (if needed)
  const tooltipElements = document.querySelectorAll("[data-tooltip]");
  tooltipElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = this.getAttribute("data-tooltip");
      tooltip.style.cssText = `
                position: absolute;
                background: var(--primary-dark);
                color: white;
                padding: 0.75rem 1rem;
                border-radius: 0.5rem;
                font-size: 0.875rem;
                z-index: 1000;
                pointer-events: none;
                white-space: nowrap;
                box-shadow: var(--shadow-premium);
                backdrop-filter: blur(10px);
                border: 1px solid var(--glass-border);
                transform: translateY(10px);
                opacity: 0;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            `;

      document.body.appendChild(tooltip);

      const rect = this.getBoundingClientRect();
      tooltip.style.left =
        rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
      tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + "px";

      // Animate in
      setTimeout(() => {
        tooltip.style.transform = "translateY(0)";
        tooltip.style.opacity = "1";
      }, 10);

      this.addEventListener("mouseleave", function () {
        tooltip.style.transform = "translateY(10px)";
        tooltip.style.opacity = "0";
        setTimeout(() => {
          if (document.body.contains(tooltip)) {
            document.body.removeChild(tooltip);
          }
        }, 300);
      });
    });
  });

  // Enhanced form validation with visual feedback
  const formInputs = document.querySelectorAll(
    ".form-group input, .form-group textarea, .form-group select"
  );
  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.style.transform = "scale(1.02)";
    });

    input.addEventListener("blur", function () {
      this.parentElement.style.transform = "scale(1)";
    });
  });

  // Smooth reveal animation for hero elements
  const heroElements = document.querySelectorAll(
    ".hero-badge, .hero-title, .hero-subtitle, .hero-cta"
  );
  heroElements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";

    setTimeout(() => {
      element.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, index * 200);
  });

  console.log("Premium Business Website Template loaded successfully! 🚀");
});
