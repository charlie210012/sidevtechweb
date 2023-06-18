<template>
  <section id="skills" class="skills" data-aos="fade-up">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
          <img src="../../assets/skills.png" class="img-fluid" alt="">
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
          <h3>Nuestro equipo de desarrollo es experto en muchas tecnologías y lenguajes de programación</h3>
          <p class="font-italic">
            Estas son algunas de nuestras especialidades.
          </p>

          <div class="skills-content">
            <div v-for="(skill, index) in skills" :key="index" class="progress">
              <span class="skill">{{ skill.label }} <i class="val">{{ skill.percentage }}%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" :style="{ width: skill.percentage + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: [
        { label: 'PHP', percentage: 100 },
        { label: 'Java', percentage: 90 },
        { label: 'Python', percentage: 90 },
        { label: 'HTML', percentage: 100 },
        { label: 'Nodejs', percentage: 80 },
        { label: 'CSS', percentage: 100 },
        { label: 'JavaScript', percentage: 90 }
      ]
    };
  },
  mounted() {
    this.animateProgressBars();
  },
  methods: {
    animateProgressBars() {
      this.skills.forEach((skill, index) => {
        const progressBars = document.querySelectorAll('.progress-bar');
        const progressBar = progressBars[index];
        progressBar.style.width = skill.percentage + '%';
      });
    }
  }
};
</script>

<style scoped>
/*--------------------------------------------------------------
# Skills
--------------------------------------------------------------*/
.skills .content h3 {
  font-weight: 700;
  font-size: 32px;
  color: #37517e;
  font-family: "Poppins", sans-serif;
}

.skills .content ul {
  list-style: none;
  padding: 0;
}

.skills .content ul li {
  padding-bottom: 10px;
}

.skills .content ul i {
  font-size: 20px;
  padding-right: 4px;
  color: #47b2e4;
}

.skills .content p:last-child {
  margin-bottom: 0;
}

.skills .progress {
  height: 60px;
  display: block;
  background: none;
  border-radius: 0;
}

.skills .progress .skill {
  padding: 0;
  margin: 0 0 6px 0;
  text-transform: uppercase;
  display: block;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: #37517e;
}

.skills .progress .skill .val {
  float: right;
  font-style: normal;
}

.skills .progress-bar-wrap {
  background: #e8edf5;
  height: 10px;
}

.skills .progress-bar {
  width: 0;
  height: 10px;
  transition: width 0.9s ease-in-out;
  background-color: #4668a2;
}
</style>
