<template>
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
  
        <div class="section-title">
          <h2>Acerca de Nosotros</h2>
        </div>
  
        <div class="row content">
          <div class="col-lg-6">
            <p>
              Somos una empresa dedicada al desarrollo de páginas web, aplicaciones móviles, aplicaciones web y software corporativos.
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i> Desarrollo de páginas web personalizadas.</li>
              <li><i class="ri-check-double-line"></i> Desarrollo de apliaciones moviles a la medida.</li>
              <li><i class="ri-check-double-line"></i> Desarrollo de aplicaciones web.</li>
              <li><i class="ri-check-double-line"></i> Arquitectura de bases de datos.</li>
              <li><i class="ri-check-double-line"></i> Desarrollo de API'S.</li>
              <li><i class="ri-check-double-line"></i> Desarrollo de software corporativos.</li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              Nuestro equipo te ayudará a encontrar la mejor solución tecnológica para que tu empresa optimice sus procesos.
            </p>
            <a href="#" class="btn btn-learn-more">Leer más</a>
          </div>
        </div>
  
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutSection',
  };
  </script>
  
  <style scoped>
  /*--------------------------------------------------------------
# About Us
--------------------------------------------------------------*/
.about .content h3 {
  font-weight: 600;
  font-size: 26px;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  padding-left: 28px;
  position: relative;
}

.about .content ul li + li {
  margin-top: 10px;
}

.about .content ul i {
  position: absolute;
  left: 0;
  top: 2px;
  font-size: 20px;
  color: #47b2e4;
  line-height: 1;
}

.about .content p:last-child {
  margin-bottom: 0;
}

.about .content .btn-learn-more {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 32px;
  border-radius: 4px;
  transition: 0.3s;
  line-height: 1;
  color: #47b2e4;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
  margin-top: 6px;
  border: 2px solid #47b2e4;
}

.about .content .btn-learn-more:hover {
  background: #47b2e4;
  color: #fff;
  text-decoration: none;
}

  </style>
  