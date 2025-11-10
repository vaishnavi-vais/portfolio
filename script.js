* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #f8f9fc;
  color: #1a1a1a;
  line-height: 1.6;
}

/* Navigation */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.logo {
  font-size: 28px;
  font-weight: 700;
  color: #111;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 25px;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.nav-toggle {
  display: none;
}

/* Hero */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 60px;
  flex-wrap: wrap;
}

.hero-text {
  max-width: 500px;
}

.name {
  font-size: 40px;
  font-weight: 700;
}

.tagline {
  margin: 15px 0;
  font-size: 16px;
  color: #444;
}

.btn {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 6px;
  margin-right: 10px;
  font-weight: 500;
  text-decoration: none;
}

.primary {
  background: #007bff;
  color: white;
}

.outline {
  border: 1px solid #007bff;
  color: #007bff;
}

/* Image */
.photo-img {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
}

/* Sections */
.section {
  padding: 60px 0;
}

h2 {
  font-size: 32px;
  margin-bottom: 20px;
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}

.skill-card {
  background: #fff;
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0,0,0,0.06);
}

/* Projects */
.cards .card {
  background: #fff;
  padding: 20px;
  margin-bottom: 18px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0,0,0,0.06);
}

/* Footer */
.site-footer {
  background: #111;
  color: #fff;
  text-align: center;
  padding: 15px;
  margin-top: 60px;
}

.container {
  width: 90%;
  max-width: 1000px;
  margin: auto;
}

/* Mobile */
@media (max-width: 768px) {
  .nav-links { display: none; flex-direction: column; background: white; padding: 20px; }
  .nav-toggle { display: block; cursor: pointer; }
}
