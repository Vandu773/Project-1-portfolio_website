document.addEventListener('mousemove', function(e) {
    // Create particle effect
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);
  
    // Set particle position
    particle.style.left = `${e.pageX - 5}px`;
    particle.style.top = `${e.pageY - 5}px`;
  
    // Remove the particle after animation completes
    setTimeout(() => {
      particle.remove();
    }, 1000);
  
    // Create a glow effect on the cursor
    let cursorGlow = document.querySelector('.cursor-glow');
    
    if (!cursorGlow) {
      cursorGlow = document.createElement('div');
      cursorGlow.classList.add('cursor-glow');
      document.body.appendChild(cursorGlow);
    }
  
    cursorGlow.style.left = `${e.pageX - 15}px`;
    cursorGlow.style.top = `${e.pageY - 15}px`;
  
    // Optional: You can throttle the particle creation to improve performance
  });
 
 

  //form
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Validate name
    const name = document.getElementById('name').value;
    if (name.length < 2) {
      feedback.style.display = 'block';
      feedback.textContent = 'Please enter a valid name.';
      return;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email)) {
      feedback.style.display = 'block';
      feedback.textContent = 'Please enter a valid email address.';
      return;
    }

    // Validate phone
    const phone = document.getElementById('phone').value;
    if (!/^\d{10}$/.test(phone)) {
      feedback.style.display = 'block';
      feedback.textContent = 'Please enter a valid phone number with 10 digits.';
      return;
    }

    // Validate organization
    const organization = document.getElementById('organization').value;
    if (organization.length < 2) {
      feedback.style.display = 'block';
      feedback.textContent = 'Please enter a valid organization name.';
      return;
    }

    // If all fields are valid, submit the form (here you can add your backend logic)
    feedback.style.display = 'none';
    alert('Form submitted successfully!');
    form.reset(); // Reset the form after successful submission
  });
  