<template>
  <section id="services" class="services section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Servicios</h2>
        <p>
          Si deseas automatizar los procesos de tu empresa, llevar a cabo una idea basada en tecnología, crear
          una tienda virtual, una página web o una aplicación web para tu idea de negocio, nosotros podemos ayudarte.
        </p>
      </div>

      <div class="row">
        <div v-for="(service, index) in services" :key="index" class="col-xl-3 col-md-6" data-aos="zoom-in">
          <div class="icon-box d-flex flex-column">
            <div class="icon"><i :class="service.icon"></i></div>
            <!-- puedes usar :href="service.link" para enlazarlo a una pagina -->
            <h4><a>{{ service.title }}</a></h4>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [],
    };
  },
  mounted () {
    this.getServicesSection();
  },
  methods:{
    getServicesSection(){
      const urlBase = localStorage.getItem('urlBase');
      axios
        .get(urlBase + 'api/component/ServicesSection')
        .then(response => {


          this.services = response.data.data ?? [];
        })
        .catch(error => {
          this.errorMessage = 'Se produjo un erro al consultar datos. Por favor, inténtalo de nuevo.'; // Mostrar mensaje de error
          // Ocurrió un error al enviar la solicitud
          console.error(error); // Imprime el error en la consola
          // Puedes mostrar un mensaje de error aquí
        });
    }
  }
};
</script>

<style scoped>
/* Estilos existentes para las tarjetas de servicios */
.services .icon-box {
  box-shadow: 0px 0 25px 0 rgba(0, 0, 0, 0.1);
  padding: 50px 30px;
  transition: all ease-in-out 0.4s;
  background: #fff;
}

.services .icon-box .icon {
  margin-bottom: 10px;
}

.services .icon-box .icon i {
  color: #47b2e4;
  font-size: 36px;
  transition: 0.3s;
}

.services .icon-box h4 {
  font-weight: 500;
  margin-bottom: 15px;
  font-size: 24px;
}

.services .icon-box h4 a {
  color: #37517e;
  transition: ease-in-out 0.3s;
  text-decoration: none;
}

.services .icon-box p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.services .icon-box:hover {
  transform: translateY(-10px);
}

.services .icon-box:hover h4 a {
  color: #47b2e4;
}
</style>
