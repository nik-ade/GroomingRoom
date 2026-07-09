// Booking Modal Controllers
const bookingModal = document.getElementById('booking-modal');
const bookingServiceSelect = document.getElementById('booking-service');
const bookingForm = document.getElementById('booking-form');

// Define business details
const whatsappNumber = '6787345132';

/**
 * Open the booking dialog and pre-select a service if provided
 * @param {string} [serviceName] 
 */
function openBookingModal(serviceName) {
  if (bookingModal) {
    if (serviceName) {
      // Find matching option and select it
      for (let i = 0; i < bookingServiceSelect.options.length; i++) {
        if (bookingServiceSelect.options[i].value === serviceName) {
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
  const service = bookingServiceSelect.value;
  const date = document.getElementById('booking-date').value;
  const time = document.getElementById('booking-time').value;
  
  if (!name || !service || !date || !time) {
    alert('Please fill out all fields.');
    return;
  }
  
  // Format Date for readability
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
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
  
  // Construct Whatsapp message template
  const textMessage = `Hello! I would like to book a session at The Grooming Room. ✂️✨\n\n` +
                      `👤 Name: ${name}\n` +
                      `💆‍♂️ Service: ${service}\n` +
                      `📅 Date: ${formattedDate}\n` +
                      `⏰ Time: ${formattedTime}\n\n` +
                      `Please confirm my booking slot. Thank you!`;
                      
  const encodedText = encodeURIComponent(textMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
  
  // Open Whatsapp link
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

// Scroll Reveals (Fade-in animations) using IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.service-card, .about-text, .about-image-wrapper, .contact-card, .section-title, .section-subtitle');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once revealed, we don't need to track it anymore
        observer.unobserve(entry.target);
      }
    });
  };
  
  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null, // Viewport
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Slightly offset trigger
  });
  
  // Set initial styles and start observing
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
