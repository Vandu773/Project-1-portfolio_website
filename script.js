
   
 

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
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const organization = document.getElementById('organization').value;
      const message = document.getElementById('message').value;
    
     
    
      // If all fields are valid, send the message (integration with backend/email API)
      if (name && email && phone && organization && message) {
        feedback.style.display = 'none';
        
        // Example for integrating with EmailJS
        emailjs.send("service_id", "template_id", {
          name: name,
          email: email,
          phone: phone,
          organization: organization,
          message: message
        }).then(function(response) {
          alert('Message sent successfully!');
        }, function(error) {
          alert('Failed to send message. Please try again.');
        });
    
        form.reset(); // Reset the form after successful submission
      }
    });
    
    // If all fields are valid, submit the form (here you can add your backend logic)
    feedback.style.display = 'none';
    alert('Form submitted successfully!');
    form.reset(); // Reset the form after successful submission
  });
  

 // Function to trigger animation
function triggerAnimation(element, animationClass) {
  element.classList.add(animationClass);

  // Remove the animation class after it ends
  setTimeout(function() {
    element.classList.remove(animationClass);
  }, 600); // Adjust this timeout to match the animation duration
}

// Add event listeners to buttons or sections
const sections = document.querySelectorAll('#page1,#about,#skills-section,#projects-section,#footer,button');

sections.forEach(section => {
  section.addEventListener('click', function() {
    triggerAnimation(section, 'pulse'); // or 'bounce'
  });
});





// Function to embed video when thumbnail is clicked
function embedVideo('https://www.youtube.com/embed/gyFaBZ_BQhc') {
  const videoContainer = document.getElementById('videoPlayerContainer');
  
  // Clear any previously embedded videos
  videoContainer.innerHTML = '';
  
  // Create an iframe for embedding the video
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/gyFaBZ_BQhc';
  iframe.width = '560';
  iframe.height = '315';
  iframe.frameBorder = '0';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  
  // Append the iframe to the video container
  videoContainer.appendChild(iframe);
}

// Add event listener to the thumbnail for your specific YouTube video
document.getElementById('introVideoThumbnail').addEventListener('click', function() {
  embedVideo('https://www.youtube.com/embed/gyFaBZ_BQhc'); // Embed your video using YouTube's embed URL
});

