<template>
  <div class="app-container">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-content">
        <div class="logo">
           <a href="#home" class="logo-text" @click="scrollTo('home')" style="text-decoration: none;">Kaspar Digital</a>
        </div>
        <ul class="nav-menu">
          <li><a href="#home" @click="scrollTo('home')">Home</a></li>
          <li><a href="#about" @click="scrollTo('about')">About</a></li>
          <li><a href="#apps" @click="scrollTo('apps')">Apps</a></li>
          <li><a href="#services" @click="scrollTo('services')">Services</a></li>
          <li><a href="#contact" @click="scrollTo('contact')">Contact</a></li>
        </ul>
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ active: mobileMenuOpen }">
      <ul>
        <li><a href="#home" @click="scrollTo('home')">Home</a></li>
        <li><a href="#about" @click="scrollTo('about')">About</a></li>
        <li><a href="#apps" @click="scrollTo('apps')">Apps</a></li>
        <li><a href="#services" @click="scrollTo('services')">Services</a></li>
        <li><a href="#contact" @click="scrollTo('contact')">Contact</a></li>
      </ul>
    </div>

    <!-- Hero Section -->
    <section id="home" class="hero-section">
      <div class="hero-content">
        <div class="hero-badge">Professional Software Development</div>
        <h1 class="hero-title">
          Creating Digital Experiences<br/>
          <span class="gradient-text">That Matter</span>
        </h1>
        <p class="hero-description">
          Software engineer with C++ and backend expertise, fullstack web development, 
          and cross-platform mobile app development. Building modern, scalable 
          applications with clean code and exceptional design.
        </p>
        <div class="hero-buttons">
          <a href="#apps" class="btn btn-primary" @click="scrollTo('apps')">View Projects</a>
          <a href="#contact" class="btn btn-secondary" @click="scrollTo('contact')">Get In Touch</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="floating-card card-1">
          <div class="card-icon">⚙️</div>
          <div class="card-text">C++ & Backend</div>
        </div>
        <div class="floating-card card-2">
          <div class="card-icon">🌐</div>
          <div class="card-text">Fullstack Web</div>
        </div>
        <div class="floating-card card-3">
          <div class="card-icon">📱</div>
          <div class="card-text">Cross-platform Mobile</div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Who I Am</span>
          <h2 class="section-title">About Me</h2>
        </div>
        <div class="about-grid">
          <div class="about-content">
            <p class="about-text">
              I'm a software engineer with strong C++ and backend experience, fullstack 
              web development skills, and cross-platform mobile app expertise. I build 
              high-quality, scalable systems and applications across the full technology stack.
            </p>
            <p class="about-text">
              My approach combines technical excellence with clean architecture—from 
              low-level systems programming in C++ to backend services and fullstack 
              web apps, to cross-platform mobile development. I deliver robust solutions 
              with meticulous attention to detail.
            </p>
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">8+</div>
                <div class="stat-label">Years Experience</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">50+</div>
                <div class="stat-label">Projects Completed</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">100+</div>
                <div class="stat-label">App Downloads</div>
              </div>
            </div>
          </div>
          <div class="skills-content">
            <h3 class="skills-title">Technical Expertise</h3>
            <div class="skills-grid">
              <div class="skill-item">
                <div class="skill-name">C++</div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 92%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">Backend (Node.js / Express)</div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 90%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">Fullstack Web (Vue.js / React)</div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 90%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">Cross-platform Mobile</div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 88%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">TypeScript / JavaScript</div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 92%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Apps Section -->
    <section id="apps" class="apps-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Portfolio</span>
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-description">
            Explore my collection of mobile and web projects
          </p>
        </div>
        <div class="apps-grid">
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">What I Offer</span>
          <h2 class="section-title">Services</h2>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">📱</div>
            <h3 class="service-title">Mobile App Development</h3>
            <p class="service-description">
              Custom iOS and Android applications built with native technologies 
              for optimal performance and user experience.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">🌐</div>
            <h3 class="service-title">Web Development</h3>
            <p class="service-description">
              Modern, responsive websites and web applications using cutting-edge 
              frameworks like Vue.js, Nuxt.js, and React.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">🎨</div>
            <h3 class="service-title">UI/UX Design</h3>
            <p class="service-description">
              User-centered design that combines aesthetics with functionality, 
              creating intuitive and engaging digital experiences.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">🔧</div>
            <h3 class="service-title">App Support & Maintenance</h3>
            <p class="service-description">
              Ongoing support, bug fixes, and feature updates to keep your 
              applications running smoothly and up-to-date.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">☁️</div>
            <h3 class="service-title">Backend Development</h3>
            <p class="service-description">
              Scalable backend solutions with Node.js, databases, and cloud 
              infrastructure for robust application architecture.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">🚀</div>
            <h3 class="service-title">Consulting</h3>
            <p class="service-description">
              Technical consulting to help you make informed decisions about 
              technology stack, architecture, and development strategy.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Get In Touch</span>
          <h2 class="section-title">Let's Work Together</h2>
          <p class="section-description">
            Have a project in mind or need support? I'd love to hear from you.
          </p>
        </div>
        <div class="contact-grid">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:support@kaspardigital.com">support@kaspardigital.com</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">🌐</div>
              <div>
                <h4>Follow Me</h4>
                <div class="social-links">
                  <a href="#">GitHub</a>
                  <a href="#">LinkedIn</a>
                  <a href="#">Twitter</a>
                </div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">⏰</div>
              <div>
                <h4>Response Time</h4>
                <p>Usually within 24 hours</p>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label>Name</label>
                <input type="text" v-model="form.name" placeholder="Your name" required />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" v-model="form.email" placeholder="your@email.com" required />
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea v-model="form.message" placeholder="Tell me about your project..." rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>Kaspar Digital</h3>
            <p>Building the future, one app at a time.</p>
          </div>
          <div class="footer-links">
            <div class="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#apps">Apps</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Support</h4>
              <ul>
                <li><a :href="`/support/${projects[0]?.id}.html`">Support & FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a :href="`/privacy/${projects[0]?.id}.html`">Privacy Policy</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Projects</h4>
              <ul>
                <li v-for="project in projects" :key="project.id">
                  <a :href="`/support/${project.id}.html`">{{ project.title }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Kaspar Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { projects } from '~/data/projects'

const mobileMenuOpen = ref(false)
const form = ref({
  name: '',
  email: '',
  message: ''
})

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollTo = (id) => {
  mobileMenuOpen.value = false
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleSubmit = () => {
  // Handle form submission
  alert('Thank you for your message! I will get back to you soon.')
  form.value = { name: '', email: '', message: '' }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');

:root {
  --primary: #2563eb;
  --primary-dark: #1e40af;
  --secondary: #8b5cf6;
  --accent: #10b981;
  --text-dark: #1e293b;
  --text-light: #64748b;
  --bg-light: #f8fafc;
  --bg-white: #ffffff;
  --border: #e2e8f0;
  --shadow: rgba(15, 23, 42, 0.08);
  --shadow-lg: rgba(15, 23, 42, 0.12);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Outfit', sans-serif;
  color: var(--text-dark);
  background: var(--bg-white);
  line-height: 1.6;
}

.app-container {
  overflow-x: hidden;
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  z-index: 1000;
  animation: slideDown 0.5s ease;
}

.nav-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-menu a {
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s;
  position: relative;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s;
}

.nav-menu a:hover {
  color: var(--primary);
}

.nav-menu a:hover::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: var(--text-dark);
  border-radius: 2px;
  transition: all 0.3s;
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 73px;
  left: 0;
  width: 100%;
  background: white;
  border-bottom: 1px solid var(--border);
  transform: translateY(-100%);
  transition: transform 0.3s;
  z-index: 999;
}

.mobile-menu.active {
  transform: translateY(0);
}

.mobile-menu ul {
  list-style: none;
  padding: 1rem;
}

.mobile-menu li {
  padding: 1rem;
}

.mobile-menu a {
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
}

/* Container */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-label {
  display: inline-block;
  color: var(--primary);
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--text-dark), var(--text-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 1.15rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8rem 2rem 4rem;
  position: relative;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
  overflow: hidden;
}

.hero-content {
  max-width: 1400px;
  margin: 0 auto;
  z-index: 2;
  flex: 1;
}

.hero-badge {
  display: inline-block;
  background: white;
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px var(--shadow);
  animation: fadeInUp 0.8s ease 0.2s both;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.8s ease 0.4s both;
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.2rem;
  color: var(--text-light);
  max-width: 600px;
  margin-bottom: 2.5rem;
  line-height: 1.8;
  animation: fadeInUp 0.8s ease 0.6s both;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  animation: fadeInUp 0.8s ease 0.8s both;
}

.hero-visual {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  height: 400px;
}

.floating-card {
  position: absolute;
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: float 6s ease-in-out infinite;
}

.card-1 {
  top: 0;
  left: 0;
  animation-delay: 0s;
}

.card-2 {
  top: 50%;
  right: 0;
  animation-delay: 2s;
}

.card-3 {
  bottom: 0;
  left: 50%;
  animation-delay: 4s;
}

.card-icon {
  font-size: 2rem;
}

.card-text {
  font-weight: 600;
  color: var(--text-dark);
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  border: 2px solid transparent;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
}

.btn-secondary {
  background: white;
  color: var(--primary);
  border-color: var(--primary);
}

.btn-secondary:hover {
  background: var(--primary);
  color: white;
}

.btn-outline {
  background: transparent;
  color: var(--text-dark);
  border-color: var(--border);
}

.btn-outline:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.btn-full {
  width: 100%;
}

/* About Section */
.about-section {
  padding: 8rem 0;
  background: var(--bg-white);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-text {
  font-size: 1.1rem;
  color: var(--text-light);
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: var(--bg-light);
  border-radius: 16px;
  transition: transform 0.3s;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-light);
  font-size: 0.9rem;
}

.skills-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  background: var(--bg-light);
  padding: 1.5rem;
  border-radius: 12px;
}

.skill-name {
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-dark);
}

.skill-bar {
  height: 8px;
  background: white;
  border-radius: 50px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 50px;
  transition: width 1s ease;
}

/* Apps Section */
.apps-section {
  padding: 8rem 0;
  background: var(--bg-light);
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.app-card {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px var(--shadow);
  transition: all 0.3s;
  border: 2px solid transparent;
}

.app-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px var(--shadow-lg);
  border-color: var(--primary);
}

.app-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.app-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.app-description {
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.app-tags {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.5rem 1rem;
  background: var(--bg-light);
  color: var(--primary);
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
}

.app-actions {
  display: flex;
  gap: 1rem;
}

/* Services Section */
.services-section {
  padding: 8rem 0;
  background: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: var(--bg-light);
  padding: 2.5rem;
  border-radius: 20px;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.service-card:hover {
  background: white;
  border-color: var(--primary);
  box-shadow: 0 8px 30px var(--shadow);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.service-description {
  color: var(--text-light);
  line-height: 1.7;
}

/* Contact Section */
.contact-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px var(--shadow);
}

.contact-icon {
  font-size: 2.5rem;
}

.contact-item h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.contact-item a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
}

.contact-item a:hover {
  text-decoration: underline;
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-form {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 8px 30px var(--shadow);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--border);
  border-radius: 12px;
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
}

.form-group textarea {
  resize: vertical;
}

/* Footer */
.footer {
  background: var(--text-dark);
  color: white;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand h3 {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-brand p {
  color: var(--text-light);
}

.footer-column h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.footer-column ul {
  list-style: none;
}

.footer-column li {
  margin-bottom: 0.75rem;
}

.footer-column a {
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column a:hover {
  color: var(--primary);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: var(--text-light);
}

/* Animations */
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-visual {
    display: none;
  }

  .about-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }

  .hero-section {
    padding: 6rem 1.5rem 3rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .section {
    padding: 4rem 0;
  }

  .container {
    padding: 0 1.5rem;
  }

  .apps-grid {
    grid-template-columns: 1fr;
  }

  .app-actions {
    flex-direction: column;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>
