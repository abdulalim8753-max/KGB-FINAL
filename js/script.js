/**
 * KALPANA GOLD BUYERS PRIVATE LTD. - CORE APPLICATION JAVASCRIPT
 * Handles navigation, mobile menu, interactive gold valuation calculator,
 * gallery filter & lightbox modal, FAQ accordion, contact form validation,
 * smooth interactions, and floating contact widgets.
 */

/**
 * Global Mobile Navigation Handlers
 * Expose immediately to window so inline onclick handlers and touch handlers work reliably at all times.
 */
let lastNavToggleTime = 0;

window.openMobileNav = function(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavBackdrop = document.querySelector('.mobile-nav-backdrop');

  if (hamburgerBtn) {
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  }
  if (mobileNav) {
    mobileNav.classList.add('open');
  }
  if (mobileNavBackdrop) {
    mobileNavBackdrop.classList.add('open');
  }
  document.body.classList.add('menu-open');
};

window.closeMobileNav = function(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  lastNavToggleTime = Date.now();
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavBackdrop = document.querySelector('.mobile-nav-backdrop');

  if (hamburgerBtn) {
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }
  if (mobileNav) {
    mobileNav.classList.remove('open');
  }
  if (mobileNavBackdrop) {
    mobileNavBackdrop.classList.remove('open');
  }
  document.body.classList.remove('menu-open');
};

window.toggleMobileNav = function(e) {
  const now = Date.now();
  // Debounce to prevent synthetic ghost click immediately after touchstart (common on mobile Chrome/Android)
  if (now - lastNavToggleTime < 400) {
    if (e) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }
    return;
  }
  lastNavToggleTime = now;

  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  const mobileNav = document.querySelector('.mobile-nav');
  if (mobileNav && mobileNav.classList.contains('open')) {
    window.closeMobileNav(e);
  } else {
    window.openMobileNav(e);
  }
};

/**
 * Global Gold Valuation Calculator Handlers
 * Expose immediately to window so inline onclick, oninput, and onchange handlers work reliably on all mobile devices.
 */
window.currentPurityPercent = 91.6; // default 22K (91.6%)
window.currentKaratLabel = '22K (91.6% Purity)';

window.selectCalcPurity = function(btn, purity, karat) {
  window.currentPurityPercent = parseFloat(purity) || 91.6;
  window.currentKaratLabel = `${karat} (${purity}% Purity)`;

  const pills = document.querySelectorAll('.purity-pill-btn');
  pills.forEach(p => p.classList.remove('active'));
  if (btn) btn.classList.add('active');

  window.updateGoldCalculations();
};

window.updateGoldCalculations = function() {
  const weightInput = document.querySelector('#calc-weight');
  const rateInput = document.querySelector('#calc-rate');
  const deductionInput = document.querySelector('#calc-deduction');

  const totalEstimateEl = document.querySelector('#calc-total-estimate');
  const livePreviewAmountEl = document.querySelector('#calc-live-preview-amount');
  const pureGramsEl = document.querySelector('#calc-pure-grams');
  const grossValueEl = document.querySelector('#calc-gross-value');
  const deductionAmountEl = document.querySelector('#calc-deduction-amount');
  const selectedPurityDisplayEl = document.querySelector('#calc-selected-purity-display');

  // Sanitize values and support comma decimals (e.g. 10,5 or 10.5)
  const parseVal = (input, fallback = 0) => {
    if (!input || input.value === undefined || input.value === null || input.value === '') return fallback;
    const cleanStr = input.value.toString().replace(/,/g, '.').trim();
    const parsed = parseFloat(cleanStr);
    return isNaN(parsed) ? fallback : parsed;
  };

  const weight = parseVal(weightInput, 0);
  const rate24k = parseVal(rateInput, 0);
  const deductionPercent = parseVal(deductionInput, 0);
  const purity = window.currentPurityPercent || 91.6;
  const karatLabel = window.currentKaratLabel || '22K (91.6% Purity)';

  // Net pure gold equivalent weight
  const pureWeightGrams = weight * (purity / 100);

  // Gross value based on 24K gold rate
  const grossVal = pureWeightGrams * rate24k;

  // Applicable margin/deduction amount
  const deductionVal = grossVal * (deductionPercent / 100);

  // Final estimated indicative payout
  const netVal = Math.max(0, grossVal - deductionVal);

  const formatCurrencyINR = (num) => {
    if (isNaN(num) || num < 0) return '₹0';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(Math.round(num));
  };

  const formattedNet = formatCurrencyINR(netVal);

  if (totalEstimateEl) {
    totalEstimateEl.textContent = formattedNet;
  }
  if (livePreviewAmountEl) {
    livePreviewAmountEl.textContent = formattedNet;
  }
  if (pureGramsEl) {
    pureGramsEl.textContent = `${pureWeightGrams.toFixed(2)} g`;
  }
  if (grossValueEl) {
    grossValueEl.textContent = formatCurrencyINR(grossVal);
  }
  if (deductionAmountEl) {
    deductionAmountEl.textContent = `- ${formatCurrencyINR(deductionVal)} (${deductionPercent}%)`;
  }
  if (selectedPurityDisplayEl) {
    selectedPurityDisplayEl.textContent = karatLabel;
  }
};

const initApp = () => {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. STICKY HEADER & SCROLL EFFECTS
  // -------------------------------------------------------------------------
  const header = document.querySelector('.main-header');
  const backToTopBtn = document.querySelector('.back-to-top');

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (header) {
      if (scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // -------------------------------------------------------------------------
  // 2. MOBILE NAVIGATION DRAWER
  // -------------------------------------------------------------------------
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavBackdrop = document.querySelector('.mobile-nav-backdrop');
  const mobileNavClose = document.querySelector('.mobile-nav-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');

  if (hamburgerBtn) {
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.setAttribute('aria-controls', 'mobile-nav');
    
    hamburgerBtn.addEventListener('click', (e) => {
      window.toggleMobileNav(e);
    });
  }

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', (e) => {
      window.closeMobileNav(e);
    });
    mobileNavClose.addEventListener('touchstart', (e) => {
      window.closeMobileNav(e);
    }, { passive: false });
  }

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', (e) => {
      window.closeMobileNav(e);
    });
    mobileNavBackdrop.addEventListener('touchstart', (e) => {
      window.closeMobileNav(e);
    }, { passive: false });
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      window.closeMobileNav();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeMobileNav();
      if (typeof closeLightbox === 'function') closeLightbox();
      if (typeof closeModalFeedback === 'function') closeModalFeedback();
    }
  });

  // -------------------------------------------------------------------------
  // 3. CALL US BUTTON DROPDOWN TOGGLE (TOUCH & CLICK SUPPORT)
  // -------------------------------------------------------------------------
  const callDropdowns = document.querySelectorAll('.call-dropdown');

  callDropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.btn-call-trigger');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
      });
    }
  });

  document.addEventListener('click', (e) => {
    callDropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  });

  // -------------------------------------------------------------------------
  // 4. GOLD VALUATION CALCULATOR (CASH FOR GOLD PAGE & HOME PAGE WIDGET)
  // -------------------------------------------------------------------------
  const calcContainer = document.querySelector('.calculator-container');

  if (calcContainer) {
    const purityPills = calcContainer.querySelectorAll('.purity-pill-btn');
    const weightInput = calcContainer.querySelector('#calc-weight');
    const rateInput = calcContainer.querySelector('#calc-rate');
    const deductionInput = calcContainer.querySelector('#calc-deduction');

    purityPills.forEach(pill => {
      const handleSelect = (e) => {
        const purityVal = parseFloat(pill.dataset.purity);
        const karatVal = pill.dataset.karat || `${purityVal}%`;
        window.selectCalcPurity(pill, purityVal, karatVal);
      };

      pill.addEventListener('click', handleSelect);
      pill.addEventListener('touchstart', handleSelect, { passive: true });
    });

    const inputEvents = ['input', 'change', 'keyup', 'paste'];
    inputEvents.forEach(evt => {
      if (weightInput) weightInput.addEventListener(evt, window.updateGoldCalculations);
      if (rateInput) rateInput.addEventListener(evt, window.updateGoldCalculations);
      if (deductionInput) deductionInput.addEventListener(evt, window.updateGoldCalculations);
    });

    // Initial calculation run
    window.updateGoldCalculations();
  }

  // -------------------------------------------------------------------------
  // 5. FAQ ACCORDION (EXPAND/COLLAPSE)
  // -------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const body = item.querySelector('.faq-body');

    if (header && body) {
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close all other accordions for neatness
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBody = otherItem.querySelector('.faq-body');
            if (otherBody) otherBody.style.maxHeight = null;
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('active');
          body.style.maxHeight = null;
        } else {
          item.classList.add('active');
          body.style.maxHeight = `${body.scrollHeight + 30}px`;
        }
      });
    }
  });

  // Automatically open first FAQ if present
  if (faqItems.length > 0) {
    const firstItem = faqItems[0];
    const firstBody = firstItem.querySelector('.faq-body');
    firstItem.classList.add('active');
    if (firstBody) firstBody.style.maxHeight = `${firstBody.scrollHeight + 30}px`;
  }

  // -------------------------------------------------------------------------
  // 6. GALLERY CATEGORY FILTER & LIGHTBOX MODAL
  // -------------------------------------------------------------------------
  const galleryFilterBtns = document.querySelectorAll('.filter-tab-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.querySelector('.lightbox-modal');
  const lightboxImage = document.querySelector('.lightbox-image');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const lightboxCloseBtn = document.querySelector('.lightbox-close');
  const lightboxPrevBtn = document.querySelector('.lightbox-prev');
  const lightboxNextBtn = document.querySelector('.lightbox-next');

  let activeGalleryItems = [];
  let currentLightboxIndex = 0;

  // Filter tabs
  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.dataset.filter;

      galleryItems.forEach(item => {
        const itemCategory = item.dataset.category;
        if (filterVal === 'all' || itemCategory === filterVal) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      refreshActiveGalleryItems();
    });
  });

  const refreshActiveGalleryItems = () => {
    activeGalleryItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
  };

  refreshActiveGalleryItems();

  const openLightbox = (index) => {
    if (!lightboxModal || activeGalleryItems.length === 0) return;
    currentLightboxIndex = index;
    const item = activeGalleryItems[currentLightboxIndex];
    const img = item.querySelector('img');
    const title = item.querySelector('.gallery-title');

    if (img && lightboxImage) {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt || 'Kalpana Gold Buyers Gallery';
    }

    if (title && lightboxCaption) {
      lightboxCaption.textContent = title.textContent;
    }

    lightboxModal.classList.add('active');
    document.body.classList.add('menu-open');
  };

  const closeLightbox = () => {
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      lightboxModal.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  };

  const showNextLightbox = () => {
    if (activeGalleryItems.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % activeGalleryItems.length;
    openLightbox(currentLightboxIndex);
  };

  const showPrevLightbox = () => {
    if (activeGalleryItems.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + activeGalleryItems.length) % activeGalleryItems.length;
    openLightbox(currentLightboxIndex);
  };

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      refreshActiveGalleryItems();
      const index = activeGalleryItems.indexOf(item);
      if (index !== -1) {
        openLightbox(index);
      }
    });
  });

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', showNextLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', showPrevLightbox);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'ArrowRight') showNextLightbox();
      if (e.key === 'ArrowLeft') showPrevLightbox();
    }
  });

  // -------------------------------------------------------------------------
  // 7. CONTACT FORM FRONTEND VALIDATION & FEEDBACK MODAL
  // -------------------------------------------------------------------------
  const contactForm = document.querySelector('#contact-form');
  const modalFeedback = document.querySelector('.modal-feedback');
  const modalFeedbackClose = document.querySelector('.modal-feedback-close');

  const closeModalFeedback = () => {
    if (modalFeedback) {
      modalFeedback.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  };

  if (modalFeedbackClose) {
    modalFeedbackClose.addEventListener('click', closeModalFeedback);
  }

  if (modalFeedback) {
    modalFeedback.addEventListener('click', (e) => {
      if (e.target === modalFeedback) {
        closeModalFeedback();
      }
    });
  }

  if (contactForm) {
    const nameInput = contactForm.querySelector('#contact-name');
    const phoneInput = contactForm.querySelector('#contact-phone');
    const emailInput = contactForm.querySelector('#contact-email');
    const branchSelect = contactForm.querySelector('#contact-branch');
    const serviceSelect = contactForm.querySelector('#contact-service');
    const messageInput = contactForm.querySelector('#contact-message');

    // Validation regex
    const phoneRegex = /^[6-9]\d{9}$/; // 10-digit Indian Mobile Numbers
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateField = (input, condition, errorMsg) => {
      const feedbackEl = input.parentElement.querySelector('.invalid-feedback');
      if (!condition) {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        if (feedbackEl) feedbackEl.textContent = errorMsg;
        return false;
      } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
      }
    };

    // Live validation on blur
    if (nameInput) {
      nameInput.addEventListener('blur', () => {
        validateField(nameInput, nameInput.value.trim().length >= 2, 'Please enter your full name (minimum 2 characters).');
      });
    }

    if (phoneInput) {
      phoneInput.addEventListener('blur', () => {
        const cleanPhone = phoneInput.value.replace(/[\s\-\+]/g, '').slice(-10);
        validateField(phoneInput, phoneRegex.test(cleanPhone), 'Please enter a valid 10-digit Indian mobile number.');
      });
    }

    if (emailInput) {
      emailInput.addEventListener('blur', () => {
        if (emailInput.value.trim().length > 0) {
          validateField(emailInput, emailRegex.test(emailInput.value.trim()), 'Please enter a valid email address.');
        } else {
          // Email is optional in some quick forms, but if present must be valid
          emailInput.classList.remove('is-invalid');
        }
      });
    }

    // Submit handler
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      if (nameInput) {
        const valid = validateField(nameInput, nameInput.value.trim().length >= 2, 'Please enter your full name.');
        if (!valid) isValid = false;
      }

      // Validate Phone
      if (phoneInput) {
        const cleanPhone = phoneInput.value.replace(/[\s\-\+]/g, '').slice(-10);
        const valid = validateField(phoneInput, phoneRegex.test(cleanPhone), 'Please enter a valid 10-digit mobile number.');
        if (!valid) isValid = false;
      }

      // Validate Branch
      if (branchSelect) {
        const valid = validateField(branchSelect, branchSelect.value !== '', 'Please select a preferred branch.');
        if (!valid) isValid = false;
      }

      // Validate Message
      if (messageInput) {
        const valid = validateField(messageInput, messageInput.value.trim().length >= 5, 'Please enter a brief message or query.');
        if (!valid) isValid = false;
      }

      if (isValid) {
        const customerName = nameInput ? nameInput.value.trim() : 'Valued Customer';
        const chosenBranch = branchSelect ? branchSelect.options[branchSelect.selectedIndex].text : 'Guwahati';
        const referenceId = 'KGB-' + Math.floor(100000 + Math.random() * 900000);

        // Update modal info
        const modalRefEl = document.querySelector('#modal-ref-id');
        const modalCustEl = document.querySelector('#modal-customer-name');
        const modalBranchEl = document.querySelector('#modal-branch-name');

        if (modalRefEl) modalRefEl.textContent = referenceId;
        if (modalCustEl) modalCustEl.textContent = customerName;
        if (modalBranchEl) modalBranchEl.textContent = chosenBranch;

        // Show feedback modal
        if (modalFeedback) {
          modalFeedback.classList.add('active');
          document.body.classList.add('menu-open');
        }

        // Reset form & styling classes
        contactForm.reset();
        contactForm.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
      }
    });
  }

  // -------------------------------------------------------------------------
  // 8. INTERACTIVE BRANCH MAP SWITCHER (IF PRESENT)
  // -------------------------------------------------------------------------
  const branchSwitchBtns = document.querySelectorAll('.branch-map-btn');
  const branchMapIframe = document.querySelector('#branch-map-embed');

  if (branchSwitchBtns.length > 0 && branchMapIframe) {
    const mapUrls = {
      'guwahati-club': 'https://maps.google.com/maps?q=Guwahati+Club+GNB+Road+Guwahati+Assam&t=&z=16&ie=UTF8&iwloc=&output=embed',
      'adabari': 'https://maps.google.com/maps?q=NCS+Square+Mall+Adabari+Guwahati+Assam&t=&z=16&ie=UTF8&iwloc=&output=embed'
    };

    branchSwitchBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        branchSwitchBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const branchKey = btn.dataset.branch;
        if (mapUrls[branchKey]) {
          branchMapIframe.src = mapUrls[branchKey];
        }
      });
    });
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

