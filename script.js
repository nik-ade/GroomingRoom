// Booking Modal Controllers
const bookingModal = document.getElementById('booking-modal');
const bookingServiceSelect = document.getElementById('booking-service');
const bookingForm = document.getElementById('booking-form');

// Define business details
const whatsappNumber = '6787345132';

// Bislama and English Translation Dictionary
const dictionary = {
  en: {
    nav_services: "Services",
    nav_about: "About",
    nav_contact: "Contact",
    nav_book: "Book Appointment",
    hero_title: "Fresh Styles, <br><span class=\"highlight\">Friendly Service</span>",
    hero_subtitle: "Your friendly local barber shop and beauty salon in Port Vila. Great cuts, fresh styles, and reliable care for the whole family.",
    hero_cta: "Book Now via WhatsApp",
    hero_explore: "Explore Services",
    services_title: "Our Services",
    services_subtitle: "Comfortable, quality care designed to keep you looking and feeling your best.",
    service1_title: "Hair Care & Styling",
    service1_desc: "Cut, style, wash & professional finish tailored to your unique look.",
    price_hair: "Starting from VT 1,500",
    btn_book: "Book Service",
    service2_title: "Skincare & Esthetics",
    service2_desc: "Facial treatments, deep cleansing, and skin glow care for radiant vitality.",
    price_skin: "Starting from VT 2,500",
    service3_title: "Nail Services",
    service3_desc: "Expert manicure, pedicure, cuticle therapy, and creative nail care.",
    price_nails: "Starting from VT 1,800",
    service4_title: "Makeup & Waxing",
    service4_desc: "Flawless makeup application for any occasion and silky-smooth professional waxing.",
    price_makeup: "Starting from VT 2,000",
    service5_title: "Men's Grooming",
    service5_desc: "Precision beard trim, traditional hot towel shave, and complete grooming care.",
    price_grooming: "Starting from VT 1,200",
    about_accent: "WELCOME TO THE GROOMING ROOM",
    about_title: "Quality Cuts & Cozy Vibe",
    about_desc1: "At The Grooming Room, we believe that looking good shouldn't be complicated or expensive. We offer a friendly, comfortable atmosphere where you can get a great cut, refreshing skincare, or custom nails at sensible prices.",
    about_desc2: "Whether you're visiting for a regular trim, a soothing facial, a manicure, or makeup for an event, our experienced team is here to take care of you with friendly service and quality care.",
    feat1_title: "Experienced Team",
    feat1_desc: "Talented staff with years of experience.",
    feat2_title: "Comfortable Shop",
    feat2_desc: "A warm, clean, and welcoming environment for everyone.",
    contact_title: "Connect with Us",
    contact_subtitle: "Reach out directly to book your slot, ask questions, or check out our latest styles online.",
    card1_title: "WhatsApp Bookings",
    card1_badge: "Fast Response",
    card2_title: "Facebook Page",
    card2_badge: "Portfolio & Reviews",
    card3_title: "TikTok Trends",
    card3_badge: "Latest Videos",
    card4_title: "Email Inquiry",
    card4_badge: "General Questions",
    card5_title: "Our Location",
    card5_badge: "Open Google Maps",
    modal_title: "Book Your Session",
    modal_desc: "Fill out the quick details below. It will generate a customized booking template and direct you to WhatsApp to confirm with us!",
    label_name: "Your Name",
    placeholder_name: "Enter your full name",
    label_service: "Choose Service",
    label_date: "Preferred Date",
    label_time: "Preferred Time",
    btn_submit: "Proceed to WhatsApp Booking",
    opt_select: "Select a service",
    opt_hair: "01. Hair Care & Styling",
    opt_skin: "02. Skincare & Esthetics",
    opt_nails: "03. Nail Services",
    opt_makeup: "04. Makeup & Waxing",
    opt_grooming: "05. Men's Grooming"
  },
  bi: {
    nav_services: "Ol Sevis",
    nav_about: "Hao Mifala i Wok",
    nav_contact: "Toktok",
    nav_book: "Bukem Wan Taem",
    hero_title: "Niu Stael, <br><span class=\"highlight\">Hapi Sevis</span>",
    hero_subtitle: "Frenli lokol baebashop mo biuti salon blong yu long Port Vila. Ol gudfala kat, niu stael, mo gudfala kea blong ful famle.",
    hero_cta: "Buk Nao long WhatsApp",
    hero_explore: "Lukluk Ol Sevis",
    services_title: "Ol Sevis blong Mifala",
    services_subtitle: "Gudfala mo sef kea blong mekem yu yu luk naes mo harem gud oltaem.",
    service1_title: "Hea Kea mo Staeling",
    service1_desc: "Katem, staelem, wasem hea wetem naes finis blong luk naes tumas.",
    price_hair: "Stat long VT 1,500",
    btn_book: "Bukem Sevis Ia",
    service2_title: "Skin Kea mo Biuti",
    service2_desc: "Feisal tritmen, klinim fes, mo mekem skin i saen mo i fres.",
    price_skin: "Stat long VT 2,500",
    service3_title: "Neil Sevis",
    service3_desc: "Manikiu, pedikiu, mo gudfala kea blong nil blong yu.",
    price_nails: "Stat long VT 1,800",
    service4_title: "Meikap mo Waksing",
    service4_desc: "Naes meikap blong eni spesel de mo waksing sevis blong mekem skin i smut.",
    price_makeup: "Stat long VT 2,000",
    service5_title: "Men Kea mo Gruming",
    service5_desc: "Trimem red, hot taol sef, mo ful gruming sevis blong ol man.",
    price_grooming: "Stat long VT 1,200",
    about_accent: "WELKAM LONG THE GROOMING ROOM",
    about_title: "Ol Gudfala Kat mo Wan Hapi Ples",
    about_desc1: "Long The Grooming Room, mifala i bilif se blong luk naes i no gat nid blong pei bigwan. Mifala i gat wan frenli mo hapi ples blong yu kasem wan gudfala kat, skin kea, mo naes neil long ol gudfala praes.",
    about_desc2: "Sapos yu kam blong wan kathea, feisal, manikiu, o meikap blong wan spesel program, tim blong mifala i redi blong givim wan hapi sevis mo gudfala kea.",
    feat1_title: "Tim wetem Ekspiriens",
    feat1_desc: "Ol wokman wetem plande yia blong wok.",
    feat2_title: "Hapi mo Klin Ples",
    feat2_desc: "Wan hapi, klin, mo welkam ples blong evriwan.",
    contact_title: "Toktok wetem Mifala",
    contact_subtitle: "Kalkaltap wetem mifala blong buk, askem kwestin, o lukluk ol niu stael blong mifala online.",
    card1_title: "Buking long WhatsApp",
    card1_badge: "Kwik Rispans",
    card2_title: "Facebook Pej",
    card2_badge: "Ol Wok mo Toktok",
    card3_title: "TikTok Video",
    card3_badge: "Ol Niu Video",
    card4_title: "Sendenem Email",
    card4_badge: "Ol Smol Kwestin",
    card5_title: "Ples blong Mifala",
    card5_badge: "Openem Google Map",
    modal_title: "Bukem Wok blong Yu",
    modal_desc: "Filem ol smol ditel ia. Ba i wokem wan buk blong pasem yu i go long WhatsApp blong buk wetem mifala!",
    label_name: "Nem blong Yu",
    placeholder_name: "Raitem ful nem blong yu",
    label_service: "Chusem Sevis",
    label_date: "De blong Buking",
    label_time: "Taem blong Buking",
    btn_submit: "Buk long WhatsApp Nao",
    opt_select: "Chusem wan sevis",
    opt_hair: "01. Hea Kea mo Staeling",
    opt_skin: "02. Skin Kea mo Biuti",
    opt_nails: "03. Neil Sevis",
    opt_makeup: "04. Meikap mo Waksing",
    opt_grooming: "05. Men Kea mo Gruming"
  }
};

// Current active language state (Default to English)
let currentLang = localStorage.getItem('grooming_room_lang') || 'en';

// Translate page function
function setLanguage(lang) {
  if (!dictionary[lang]) return;
  
  currentLang = lang;
  localStorage.setItem('grooming_room_lang', lang);
  document.documentElement.lang = lang;
  
  // Update toggle buttons active class
  document.getElementById('lang-toggle-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-toggle-bi').classList.toggle('active', lang === 'bi');
  
  // Translate elements with data-translate attribute
  const elementsToTranslate = document.querySelectorAll('[data-translate]');
  elementsToTranslate.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (dictionary[lang][key]) {
      // Use innerHTML to preserve highlights or bold text inside spans/br tags
      el.innerHTML = dictionary[lang][key];
    }
  });

  // Translate specific inputs (Placeholders)
  const nameInput = document.getElementById('booking-name');
  if (nameInput && dictionary[lang][`placeholder_name`]) {
    nameInput.placeholder = dictionary[lang][`placeholder_name`];
  }
}

/**
 * Open the booking dialog and pre-select a service if provided
 * @param {string} [serviceName] 
 */
function openBookingModal(serviceName) {
  if (bookingModal) {
    if (serviceName) {
      // Find matching option (in English) and select it
      for (let i = 0; i < bookingServiceSelect.options.length; i++) {
        const optionVal = bookingServiceSelect.options[i].value;
        if (optionVal === serviceName) {
          bookingServiceSelect.selectedIndex = i;
          break;
        }
      }
    } else {
      // Reset selection if not specified
      bookingServiceSelect.selectedIndex = 0;
    }
    
    // Set min date for booking to today
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }
    
    bookingModal.showModal();
  }
}

/**
 * Close the booking dialog
 */
function closeBookingModal() {
  if (bookingModal) {
    bookingModal.close();
    bookingForm.reset();
  }
}

/**
 * Handle form submission, build custom WhatsApp link and redirect
 * @param {Event} event 
 */
function handleBookingSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('booking-name').value.trim();
  const serviceEnglish = bookingServiceSelect.value;
  const date = document.getElementById('booking-date').value;
  const time = document.getElementById('booking-time').value;
  
  if (!name || !serviceEnglish || !date || !time) {
    const errorMsg = currentLang === 'bi' ? 'Plis filem evri ples blong rait.' : 'Please fill out all fields.';
    alert(errorMsg);
    return;
  }
  
  // Format Date for readability
  const formattedDate = new Date(date).toLocaleDateString(currentLang === 'bi' ? 'bi-VU' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Format Time for readability (12-hour format)
  const [hour, minute] = time.split(':');
  const tempDate = new Date();
  tempDate.setHours(parseInt(hour, 10));
  tempDate.setMinutes(parseInt(minute, 10));
  const formattedTime = tempDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  
  // Get translated service name for the WhatsApp text message
  let serviceNameTranslated = serviceEnglish;
  if (currentLang === 'bi') {
    if (serviceEnglish === 'Hair Care & Styling') serviceNameTranslated = 'Hea Kea mo Staeling';
    else if (serviceEnglish === 'Skincare & Esthetics') serviceNameTranslated = 'Skin Kea mo Biuti';
    else if (serviceEnglish === 'Nail Services') serviceNameTranslated = 'Neil Sevis';
    else if (serviceEnglish === 'Makeup & Waxing') serviceNameTranslated = 'Meikap mo Waksing';
    else if (serviceEnglish === 'Men\'s Grooming') serviceNameTranslated = 'Men Kea mo Gruming';
  }

  // Construct WhatsApp message template in Bislama or English
  let textMessage = "";
  if (currentLang === 'bi') {
    textMessage = `Halo! Mi wantem bukem wan sevis long The Grooming Room. ✂️✨\n\n` +
                  `👤 Nem: ${name}\n` +
                  `💆‍♂️ Sevis: ${serviceNameTranslated}\n` +
                  `📅 De blong buking: ${formattedDate}\n` +
                  `⏰ Taem blong buking: ${formattedTime}\n\n` +
                  `Plis sefem sevis taem ia blong mi. Tangkiu tumas!`;
  } else {
    textMessage = `Hello! I would like to book a session at The Grooming Room. ✂️✨\n\n` +
                  `👤 Name: ${name}\n` +
                  `💆‍♂️ Service: ${serviceNameTranslated}\n` +
                  `📅 Date: ${formattedDate}\n` +
                  `⏰ Time: ${formattedTime}\n\n` +
                  `Please confirm my booking slot. Thank you!`;
  }
                      
  const encodedText = encodeURIComponent(textMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
  
  // Open WhatsApp link
  window.open(whatsappUrl, '_blank');
  
  // Close the modal
  closeBookingModal();
}

// Close dialog if clicked outside of the content container
if (bookingModal) {
  bookingModal.addEventListener('click', (event) => {
    const rect = bookingModal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      closeBookingModal();
    }
  });
}

// Initialize Active Language on Load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  
  // Scroll Reveals (Fade-in animations) using IntersectionObserver
  const revealElements = document.querySelectorAll('.service-card, .about-text, .about-image-wrapper, .contact-card, .section-title, .section-subtitle');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  };
  
  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null,
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    revealObserver.observe(el);
  });
});

// Inject dynamic CSS class for revealed state
const style = document.createElement('style');
style.textContent = `
  .revealed {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);
