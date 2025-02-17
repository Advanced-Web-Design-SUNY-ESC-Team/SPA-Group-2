<!DOCTYPE html>
<html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Galleria of Life</title>
      <title>Hamburger Menu</title>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="styles.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    </head>
<body>


<header class="top-header">

  <!-- Simulate a smartphone / tablet -->
  <div class="mobile-container">

      <!-- Top Navigation Menu -->
      <div class="topnav">
        <h1><a href="#home" class="active"> Infinite Expressions</a></h1>

          <div id="myLinks">
            <a href="#news">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
          </div>
          
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
      </div>
  
  </div> 

</header> 



    <!-- Other page content goes here -->

<div class="page-wrap">

    <div class="masonry-wrap">
  
      <div class="masonry-half masonry-section">
        <a href="#">
          <div class="m1-bg masonry-bg">
          </div>
          <div class="masonry-description-wrap">
            <div class="masonry-description">
              <span class="masonry-title">View</span>
              <span class="masonry-subtitle">Artists</span>
            </div>
          </div>
        </a>
      </div>
  
      <div class="masonry-top-half masonry-section">
        <a href="#">
          <div class="m2-bg masonry-bg">
          </div>
          <div class="masonry-description-wrap">
            <div class="masonry-description">
              <span class="masonry-title">Art Gallery</span>
              <span class="masonry-subtitle">&amp; Exhibitions</span>
            </div>
          </div>
        </a>
      </div>
  
      <div class="masonry-bottom-quarter masonry-bottom-quarter-left masonry-section">
        <a href="#">
          <div class="m3-bg masonry-bg">
          </div>
          <div class="masonry-description-wrap">
            <div class="masonry-description">
              <span class="masonry-title">Wellness</span>
              <span class="masonry-subtitle">Classes</span>
            </div>
          </div>
        </a>
      </div>
  
      <div class="masonry-bottom-quarter masonry-bottom-quarter-right masonry-section">
        <a href="#">
          <div class="m4-bg masonry-bg">
          </div>
          <div class="masonry-description-wrap">
            <div class="masonry-description">
              <span class="masonry-title">Music</span>
              <span class="masonry-subtitle">Lessons</span>
            </div>
          </div>
        </a>
      </div>
  
    </div>

    <section class="about-us">
        <div class="container">
            <h2 id="about">About Us</h2>
            <p>
                Welcome to <strong>Infinite Expressions</strong>, a digital sanctuary where art, music, and wellness intertwine. 
                We're dedicated to fostering well-being through the transformative power of digital media arts.
            </p>
            <p>
                Explore our online gallery showcasing a new featured digital artist each month, each one creating 
                inspiring works that promote healing and mindfulness.
            </p>
            <p>
                Beyond the gallery walls, we offer enriching wellness and music classes designed to nurture your creative 
                spirit and cultivate inner peace. We believe in the power of digital art therapy, a practice that offers 
                unique benefits including increased accessibility for those with physical limitations, enhanced real-time 
                collaboration between therapists and clients, improved focus and concentration, and a boost to self-esteem 
                through creative expression.
            </p>
            <p>
                Join our community and discover how digital art therapy can unlock a path to greater well-being.
            </p>
        </div>
    </section>
    
    <section class="artist-of-the-month">
      <h2>Artist of the Month - Dr. Shanali Perera</h2>
    
      <div class="artist-container">
        <!-- Artist Image -->
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5JnBIhBX7HymcBc-dFIVDdJgDksflBM31pA&s" 
             alt="Dr. Shanali Perera" class="artist-image">
    
        <!-- Artist Content -->
        <div class="artist-content">
            <p>
                Dr. Perera is a physician and artist exploring the healing power of creativity, particularly for those with chronic conditions. A Member of the Royal College of Physicians (UK), she combines her medical background with personal experience as a patient to advocate for integrating creative expression into holistic care. Her digital art reflects this journey, raising awareness of art's therapeutic benefits.
            </p>
    
            <p>As she shared on the Healing Power of Art Website:</p>
            
                <blockquote class="artist-quote">
                  <span class="short-text">
                    “On repeated use, my hands became numb and painful, with the pain radiating to my shoulders. 
                    I found the use of digital medium my adaptation as it enabled me to use light touch with 
                    minimal effort and alternate hands. Less pain and fatigue became apparent in my hands and 
                    arms compared to using a paintbrush on canvas or charcoal or paper 
                    <span class="read-more-toggle">...</span>
                </span>
    
                <span class="full-text">
                    <br><br>
                    For me, artistic expression was a means of self-exploration to convey how I was feeling. 
                    I found expression through Art not only represents symbolic aspects of coping but visually 
                    demonstrates the many facets of emotions and degrees of pain I felt at various points in time. 
                    This really helped me to keep the fun side alive and regain a degree of control. 
                    This newfound freedom to explore myself through the world of colours and inner creative space, 
                    gave rise to my present work.
                    <br><br>
                    Art is a tool for positive reinforcement and reflective thinking for me. 
                    I managed to achieve a semblance of normality by starting to set more realistic 
                    goals and standards for me around my limitations.
                </span>
            </blockquote>
    
            <br>
    
            <!-- Read More Link -->
            <a href="https://www.healing-power-of-art.org/my-experience-with-digital-art-pain-management/" 
               class="read-more-link">
                Read more about her experience
            </a>
        </div>
      </div>
    </section>


    <section class="our-services">
        <h2 class="section-title" id="services">Our Services</h2>
    
        <div class="services-container">
            <!-- Wellness Classes Box -->
            <div class="service-box">
                <h3 class="service-title">Wellness Classes</h3>
                <p class="service-description">
                    Our wellness classes offer a nurturing space to explore your creative potential and cultivate inner peace. Through guided exercises and mindful art practices, you'll discover new ways to express yourself, manage stress, and connect with your inner self. Join us to unlock the transformative power of art and embark on a journey of self-discovery and well-being.
                </p>
                <a href="#" class="view-schedule">View Schedule</a>
            </div>
    
            <!-- Music Lessons Box -->
            <div class="service-box">
                <h3 class="service-title">Music Lessons</h3>
                <p class="service-description">
                    Our music classes offer a joyful exploration of sound and rhythm, designed to nourish your soul and ignite your creativity. Whether you're a seasoned musician or a complete beginner, our classes provide a supportive environment to learn, connect with others, and discover the transformative power of music. From soothing melodies to energizing rhythms, find your voice and experience the healing harmony of music.
                </p>
                <a href="#" class="view-schedule">View Schedule</a>
            </div>

               <!-- Events & Exhibits Box -->
               <div class="service-box">
                <h3 class="service-title">Events & Exhibits</h3>
                <p class="service-description">
                    Our music classes offer a joyful exploration of sound and rhythm, designed to nourish your soul and ignite your creativity. Whether you're a seasoned musician or a complete beginner, our classes provide a supportive environment to learn, connect with others, and discover the transformative power of music. From soothing melodies to energizing rhythms, find your voice and experience the healing harmony of music.
                </p>
                <a href="#" class="view-schedule">View Schedule</a>
            </div>
        </div>
    </section>  

<script src="script.js"></script>

<footer class="site-footer">
  <div class="footer-container">
    <!-- Site Map -->
    <ul class="footer-menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

<!-- Social Media Links -->
<div class="social-links">
  <a href="https://www.facebook.com" target="_blank" class="social-icon">
    <i class="fab fa-facebook-f"></i>
  </a>
  <a href="https://www.instagram.com" target="_blank" class="social-icon">
    <i class="fab fa-instagram"></i>
  </a>
</div>
</div>
</div>
</footer>

    </body>
    </html>

    
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


document.addEventListener("DOMContentLoaded", function () {

    // "Read More" Toggle
    const readMoreToggle = document.querySelector(".read-more-toggle");
    const fullText = document.querySelector(".full-text");
    const readLessToggle = document.createElement("span"); // Create a new span for closing
    readLessToggle.classList.add("read-less-toggle");
    readLessToggle.innerText = "..."; // Set text to ellipsis
    readLessToggle.style.cursor = "pointer";
    readLessToggle.style.color = "slategray";
    readLessToggle.style.textDecoration = "underline";
    
    if (readMoreToggle && fullText) {
        readMoreToggle.addEventListener("click", function () {
            fullText.style.display = "block"; // Show full text
            readMoreToggle.style.display = "none"; // Hide the first ellipsis
            fullText.appendChild(readLessToggle); // Add the second ellipsis at the end
        });

        readLessToggle.addEventListener("click", function () {
            fullText.style.display = "none"; // Hide full text
            readMoreToggle.style.display = "inline"; // Show the first ellipsis again
            readLessToggle.remove(); // Remove the second ellipsis when collapsing
        });
    }
});



@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Onest:wght@100..900&display=swap');


body {
  font-family: "Onest", serif !important;
  margin: 0;
  padding: 0;
}

body { background-color: white; height: 100%; }
h3 { color: black; }
#nav-toggle { position: absolute; left: 50%; top: 50%; }

/* Hamburger Menu */

.mobile-container {
  max-width: 100%;
  margin: auto;
  color: white;
  border-radius: 10px;
}

.topnav {
  overflow: hidden;
  background-color: #333;
  position: relative;
}

.topnav #myLinks {
  display: none;
}

.topnav a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

.topnav a.icon {
  background: black;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.active {
  background-color: #333;
  color: white;
}

/* End Hamburger Menu */



/* 🔹 Visible Top Menu */
/* Top Menu */
.top-menu {
  background-color: darkgray;
  padding: 20px 25px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Menu Links */
.navbar-menu {
  list-style: none;
  display: flex;
  gap: 20px;
  margin-left: auto;
  padding: 0;
}

.navbar-menu li {
  display: none; /* Initially hidden */
}

.navbar-menu a {
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease;
}

.navbar-menu a:hover {
  color: #ddd;
}

/* Responsive: Show menu items when active */
#nav-toggle.active + .navbar-menu li {
  display: block;
}


/* Reset default margin and padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Brand (Galleria of Life) */
.top-menu .navbar-brand {
  color: white;
  font-size: 32px;
  font-weight: 700;
  font-family: 'Dancing Script', cursive;
  margin-left: 20%; /* Adjust this value to fine-tune positioning */
}


/* Menu Container (Aligns Menu to the Right) */
.desktop-container {
  display: flex;
  justify-content: flex-end; /* Pushes menu to the right */
  flex-grow: 1; /* Allows it to take remaining space */
  width: 100%; /* Ensure it takes full width */
}


 .desktop-menu ul {
  list-style: none;   /* Removes bullet points */
  padding: 0;
  margin: 0;
  display: flex;
  gap: 30px; /* Adds space between menu items */
}

.desktop-menu ul li {
  display: inline;
}

.desktop-menu ul li a {
  color: white;  /* Makes text white */
  text-decoration: none; /* Removes underline */
  font-size: 18px; /* Adjusts text size */
  font-weight: bold;
  transition: color 0.3s ease;
}

.desktop-menu ul li a:hover {
  color: lightgray;  /* Changes color on hover */
}




/* 🔹 Mobile Dropdown Menu (Hidden Initially) */
.mobile-menu {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: white;
    list-style: none;
    padding: 0;
}

.mobile-menu li {
    text-align: center;
    padding: 10px;
}

.mobile-menu li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    display: block;
}

.mobile-menu.active {
    display: block;
}

/* Basic Styling */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}


/* Hover Effect */
.top-menu ul li a:hover {
  color: gray;
}

/* Hero Image Styling */
.hero img {
  width: 100%;
  height: auto;
  margin-top: 50px;
}

/* Grid */
.masonry-wrap {
  height: 700px;
  overflow: hidden;
  width: 100%;
}

.masonry-section {
  float: left;
  position: relative;
}

.masonry-section a {
  text-decoration: none;
}

.masonry-half {
  background: #01a1da;
  border-right: 1px solid white;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  height: 700px;
  width: 50%;
}

.masonry-top-half {
  background: #7dc24f;
  border-bottom: 1px solid white;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  height: 350px;
  width: 50%;
}

.masonry-bottom-quarter {
  height: 350px;
  width: 25%;
}

.masonry-bottom-quarter-left {
  background: #e43b94;
  border-right: 1px solid white;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.masonry-bottom-quarter-right {
  background: #f58232;
}


/* Background Images */
.m1-bg {
  display: inline-block;
  position: absolute;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/319606/left-full.jpg');
  background-position: 50%;
  background-size: cover;
  transition: opacity .6s ease-in-out;
  width: 100%;
  height: 100%;
}

.m2-bg {
  display: inline-block;
  position: absolute;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/319606/the-hub-on-canal-new-smyrna-beach.jpg');
  background-position: 50%;
  background-size: cover;
  transition: opacity .6s ease-in-out;
  width: 100%;
  height: 100%;
}

.m3-bg {
  display: inline-block;
  position: absolute;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/319606/bottom-left.jpg');
  background-position: 50%;
  background-size: cover;
  transition: opacity .6s ease-in-out;
  width: 100%;
  height: 100%;
}

.m4-bg {
  display: inline-block;
  position: absolute;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/319606/bottom-right.jpg');
  background-position: 50%;
  background-size: cover;
  transition: opacity .6s ease-in-out;
  width: 100%;
  height: 100%;
}



/* Masonry Descriptions */
.masonry-description-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  opacity: 0;
  text-align: center;
  transition: opacity .8s ease-in-out;
  width: 100%;
  height: 100%;
}

.masonry-title {
  clear: both;
  color: #fff;
  display: block;
  font-size: 30px;
  text-transform: uppercase;
}

.masonry-subtitle {
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
}


/* Hovers */
.masonry-section:hover .masonry-bg {
  opacity: 0.3;
}

.masonry-section:hover .masonry-description-wrap {
  opacity: 1;
}

.about-us {
  background-color: white; /* White background */
  color: #333; /* Dark gray text */
  padding: 60px 20px; /* Padding for spacing */
  text-align: center; /* Center align text */
}

.about-us .container {
  max-width: 800px; /* Restrict content width */
  margin: auto; /* Center the section */
}

.about-us h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #000; /* Black title */
}

.about-us p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 15px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-us {
      padding: 40px 15px;
  }

  .about-us h2 {
      font-size: 2rem;
  }

  .about-us p {
      font-size: 1rem;
  }
}


/* Artist of the Month Section */
.artist-of-the-month {
  background-color: white; 
  padding: 50px 20px;
  color: #333;
  display: flex;
  flex-direction: column; /* Stack title above content */
  align-items: center; /* Center content horizontally */
  justify-content: flex-start; /* Align content to the top */
  text-align: center; /* Center text inside the container */
}

/* Title Styles */
.artist-of-the-month h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 0 20px 0; /* Adds space below the title */
  width: 100%; /* Ensures title stretches across the full width */
  text-align: left; /* Ensure the title is centered */
  padding-left: 140px; /* Add padding to move title to the right */
}

/* Container holding text and image */
.artist-container {
  display: flex;
  flex-direction: row; /* Image and text side by side */
  justify-content: flex-start; /* Align content to the left */
  align-items: flex-start; /* Align items to the top */
  gap: 20px; /* Adds space between image and text */
  width: 100%;
  max-width: 1200px; /* Optional: restrict the width */
}

.artist-of-the-month {
  background: white !important;
  padding: 40px 20px;
  border-radius: 10px;
}

/* Image Styling */
.artist-image {
  width: 300px; /* Image width */
  height: auto;
  border-radius: 10px;
  margin-left: 0; /* Optional: margin adjustment */
}

/* Text Styling */
.artist-content {
  max-width: 900px; /* Increase the width of the text block */
  margin: 0;
  line-height: 1.6;
  text-align: left; /* Left align text */
}

.full-text {
  display: none; /* Hide full paragraph initially */
}
.read-more-toggle, .read-less-toggle {
  cursor: pointer;
  color: slategrey;
  text-decoration: underline;
  font-style: italic;
  font-weight: bold
}

.read-more-toggle:hover {
  color: black;
}

.read-less-toggle:hover {
  color: black;
}

/* Spacing Between Paragraphs */
.artist-content p {
  margin-bottom: 20px; /* Adds space between paragraphs */
}

.full-text {
  display: none; /* Hide full text initially */
}

/* Style for the Our Services section */
.our-services {
  background-color: white;
  text-align: center; /* Center the content inside the section */
  margin-top: 90px; /* Adds 32px of space above the section */
  padding: 0 20px; /* Optional: Adds some horizontal padding */
}

.section-title {
  background-color: white;
  font-size: 42px; /* Font size for the title */
  font-weight: bold; /* Make it bold */
  margin-bottom: 40px; /* Adds space below the title */
  display: inline-block; /* Keeps the title centered */
  text-align: center;
}

.services-container {
  background-color: white;
  display: flex;
  justify-content: center; /* Center the two boxes horizontally */
  gap: 30px; /* Space between the two boxes */
  padding: 0 10px;
}

/* Service Box Styling */
.service-box {
  background: #dedede;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  width: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribute space between content */
  min-height: 400px;
  margin: 0;
}

.service-title {
  font-size: 26px; /* Slightly larger than the description text */
  font-weight: bold; /* Make the title bold */
  margin-bottom: 40px; /* Adds space between title and description */
}

.service-description {
  font-size: 16px; /* Regular text size */
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px; /* Adds space between text and button */
}

/* View Schedule Button Styling */
.view-schedule {
  margin-top: 20px; /* Add space between paragraph and button */
  display: inline-block;
  background-color: #7119E1;
  font-weight: bold;
  color: #fff;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

/* Hover Effect */
.view-schedule:hover {
  background-color: #250353; /* Light grey on hover */
 
}


/* Hover Effect */
.view-schedule:hover {
  background-color: #250353; /* Hover effect */
}


/* Responsive Design for smaller screens */
@media (max-width: 768px) {
  .services-container {
      flex-direction: column; /* Stack boxes vertically on small screens */
      align-items: center; /* Center the boxes */
  }
}


.read-more-toggle {
  cursor: pointer;
  font-weight: bold;
  border: 1px solid #6c63ff;
  padding: 2px 6px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.read-more-toggle:hover {
  background-color: #6c63ff;
  color: white;
}

.hidden-text {
  display: none;
}

.menu {
  position: absolute;
  top: 60px; /* Adjust if needed */
  left: 0;
  width: 250px; /* Adjust for side menu */
  background-color: black; /* Keep it styled */
  display: none; /* Initially hidden */
  flex-direction: column;
  padding: 15px;
  z-index: 999;
}

/* Show menu when active */
.menu.active {
  display: flex;
}



/* Footer Styles */
.site-footer {
  background-color: #333; /* Dark Grey */
  color: white;
  text-align: center;
  padding: 30px 20px;
  margin-top: 50px; /* Space between footer and previous section */
}

/* Footer Container */
.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* Footer Menu (Site Map) */
.footer-menu {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 15px;
}

.footer-menu li {
  display: inline;
}

.footer-menu a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

.footer-menu a:hover {
  color: #ddd; /* Lighten on hover */
}

/* Social Media Icons */
.social-links {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.social-icon {
  font-size: 24px;
  color: white; /* Makes icons white */
  text-decoration: none;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-icon:hover {
  color: #ddd; /* Light grey on hover */
  transform: scale(1.1);
}


/* Logo Container */
.logo-container {
  display: flex;
  align-items: center;
}

/* Logo Styling */
.logo {
  height: 10px; /* Set your preferred height */
  width: auto; /* Keeps the aspect ratio */
  margin-right: 15px; /* Space between logo and menu */
}











      




  

  
  
  

