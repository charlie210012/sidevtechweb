<template>
  <section id="why-us" class="why-us section-bg">
    <div class="container-fluid" data-aos="fade-up">
      <div class="row">
        <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
          <div class="content">
            <h3>
              La revolución digital llegó para quedarse,
              <strong>No te puedes quedar atrás.</strong>
            </h3>
            <p>
              Optimiza tus procesos corporativos con el uso de las Tecnologías de
              la Información, acelera el crecimiento de tu empresa.
            </p>
          </div>

          <div class="accordion-list">
            <ul>
              <li v-for="(item, index) in accordionItems" :key="index">
                <a
                  :class="{ collapsed: item.collapsed }"
                  @click="toggleAccordion(index)"
                >
                  <span>{{ item.number }}</span> {{ item.question }}
                  <i class="bx" :class="[item.collapsed ? 'bx-chevron-down' : 'bx-chevron-up']"></i>
                </a>
                <div
                  :id="'accordion-list-' + (index + 1)"
                  class="collapse"
                  :class="{ show: !item.collapsed }"
                  data-parent=".accordion-list"
                >
                  <p>{{ item.answer }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="col-lg-5 align-items-stretch order-1 order-lg-2 img"
          :style="`background-image: url(${require('@/assets/whyUs.png')})`"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          &nbsp;
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhyUsSection',
  data() {
    return {
      accordionItems: [
        {
          number: '01',
          question: '¿Por qué tu empresa necesita una página web?',
          answer:
            'Haz que tus clientes te encuentren, hoy en día el mejor escaparate de tu negocio es internet, las estadísticas muestran que estar en internet favorece el aumento de tus ventas y los clientes sienten mayor seguridad y confianza.',
          collapsed: false
        },
        {
          number: '02',
          question: '¿Puedo agilizar mis procesos con una aplicación web?',
          answer:
            'Controlar tu negocio, hacer seguimiento de tus ventas, tus inventarios, tus clientes y trabajadores, gestión de facturación, y lo mejor es que podrás controlarlo desde cualquier navegador sin necesidad de un software local, las aplicaciones web son el mejor camino para optimizar todo proceso.',
          collapsed: true
        },
        {
          number: '03',
          question: '¿Para qué necesito una aplicación móvil?',
          answer:
            'Tener una aplicación móvil propia te permite estar en contacto con tus empleados y clientes en cualquier momento y lugar. De esta manera, te asegura una comunicación efectiva, segura y rápida. Para los empleados, es una forma de gestionar y organizar mejor el tiempo, lo que supone a la vez un ahorro de costes y una mayor productividad y colaboración.',
          collapsed: true
        }
      ]
    };
  },
  methods: {
    toggleAccordion(index) {
      this.accordionItems.forEach((item, i) => {
        item.collapsed = i === index ? !item.collapsed : true;
      });
    },
    collapseOtherItems(currentItem) {
      this.accordionItems.forEach(item => {
        if (item !== currentItem) {
          item.collapsed = true;
        }
      });
    }
  }
};
</script>

<style scoped>
/*--------------------------------------------------------------
# Why Us
--------------------------------------------------------------*/
.why-us .content {
  padding: 60px 100px 0 100px;
}


.why-us .content h3 {
  font-weight: 400;
  font-size: 34px;
  color: #37517e;
}

.why-us .content h4 {
  font-size: 20px;
  font-weight: 700;
  margin-top: 5px;
}

.why-us .content p {
  font-size: 15px;
  color: #848484;
}

.why-us .img {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.why-us .accordion-list {
  padding: 0 100px 60px 100px;
}

.why-us .accordion-list ul {
  padding: 0;
  list-style: none;
}

.why-us .accordion-list li + li {
  margin-top: 15px;
}

.why-us .accordion-list li {
  padding: 20px;
  background: #fff;
  border-radius: 4px;
}

.why-us .accordion-list a {
  display: block;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding-right: 30px;
  outline: none;
  text-decoration: none;
}

.why-us .accordion-list span {
  color: #47b2e4;
  font-weight: 600;
  font-size: 18px;
  padding-right: 10px;
}

.why-us .accordion-list i {
  font-size: 24px;
  position: absolute;
  right: 0;
  top: 0;
}

.why-us .accordion-list p {
  margin-bottom: 0;
  padding: 10px 0 0 0;
}

.why-us .accordion-list .icon-show {
  display: none;
}

.why-us .accordion-list a.collapsed {
  color: #343a40;
}

.why-us .accordion-list a.collapsed:hover {
  color: #47b2e4;
}

.why-us .accordion-list a.collapsed .icon-show {
  display: inline-block;
}

.why-us .accordion-list a.collapsed .icon-close {
  display: none;
}

@media (max-width: 1024px) {
  .why-us .content,
  .why-us .accordion-list {
    padding-left: 0;
    padding-right: 0;
  }
}

@media (max-width: 992px) {
  .why-us .img {
    min-height: 400px;
  }
  .why-us .content {
    padding-top: 30px;
  }
  .why-us .accordion-list {
    padding-bottom: 30px;
  }
}

@media (max-width: 575px) {
  .why-us .img {
    min-height: 200px;
  }
}
</style>

