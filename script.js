// Mobile Menu
const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

// Room Cards and Modal
const roomCards = document.querySelectorAll('.room-card');
const modal = document.getElementById('room-modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');

// Room Data
const roomsData = {
  attached: {
    title: 'Attached Bathroom Room',
    price: '₹8,000/month',
    description: 'Our premium room option with an attached private bathroom for convenience and privacy. Perfect for those who value their personal space.',
    image: 'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Private attached bathroom',
      'Spacious wardrobe',
      'Study table and chair',
      'Single/double bed options',
      'Well-ventilated space',
      'Daily cleaning service'
    ]
  },
  common: {
    title: 'Common Bathroom Room',
    price: '₹7,000/month',
    description: 'Comfortable and affordable room option with access to clean, well-maintained shared bathrooms. Great value without compromising on comfort.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    features: [
      'Access to shared bathrooms',
      'Spacious wardrobe',
      'Study table and chair',
      'Single/double bed options',
      'Well-ventilated space',
      'Daily cleaning service'
    ]
  }
};

// Open Modal with Room Details
function openRoomDetails(roomType) {
  const room = roomsData[roomType];
  
  // Create room details HTML
  const roomDetailsHTML = `
    <div class="room-details">
      <div class="room-details-image">
        <img src="${room.image}" alt="${room.title}">
      </div>
      <div class="room-details-content">
        <h2>${room.title}</h2>
        <p class="room-details-price">${room.price}</p>
        <p>${room.description}</p>
        
        <div class="room-details-features">
          <h3>Features</h3>
          <div class="feature-list">
            ${room.features.map(feature => `
              <div class="feature-item">
                <i class="fas fa-check"></i>
                <span>${feature}</span>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="additional-costs">
          <h3>Additional Costs</h3>
          <ul>
            <li>Electricity charges: ₹12 per unit</li>
            <li>Refundable security deposit: ₹4,000</li>
            <li>Lock-in period until July 25</li>
          </ul>
        </div>
        
        <div class="room-cta">
          <a href="contact.html" class="btn btn-primary">Book Now</a>
        </div>
      </div>
    </div>
  `;
  
  // Set modal content
  modalContent.innerHTML = roomDetailsHTML;
  
  // Open modal
  modal.classList.add('open');
}

// Event listeners for room cards
roomCards.forEach(card => {
  card.addEventListener('click', () => {
    const roomType = card.getAttribute('data-room');
    openRoomDetails(roomType);
  });
});

// Close modal on clicking X button
closeModal.addEventListener('click', () => {
  modal.classList.remove('open');
});

// Close modal on clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
  }
});

// Form submission
const inquiryForm = document.getElementById('inquiry-form');
if (inquiryForm) {
  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real application, you would send the form data to a server here
    alert('Thank you for your inquiry! We will get back to you soon.');
    inquiryForm.reset();
  });
}

// Add animation classes to elements when they come into view
function animateOnScroll() {
  const elements = document.querySelectorAll('.feature-card, .room-card, .section-title');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (elementPosition < screenPosition) {
      element.classList.add('fade-in');
    }
  });
}

// Run animation check on scroll
window.addEventListener('scroll', animateOnScroll);

// Run once on page load
document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();
});
