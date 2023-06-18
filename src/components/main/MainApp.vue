<template>
    <main id="main">
        <AboutSection />
        <WhyUsSection />
        <SkillsSection />
        <ServicesSection />
        <CTASection />
        <PortfolioSection />
        <PricingSection/>
        <ContactSection />

    </main>
</template>
  
<script>
import AboutSection from './AboutSection.vue';
import WhyUsSection from './WhyUsSection.vue';
import SkillsSection from './SkillsSection.vue';
import ServicesSection from './ServicesSection.vue';
import CTASection from './CTASection.vue';
import PortfolioSection from './PortfolioSection.vue';
import PricingSection from './PricingSection.vue';
import ContactSection from './ContactSection.vue';
    // Lógica del componente
    export default {
        //componentes
        components:{
            AboutSection,
            WhyUsSection,
            SkillsSection,
            ServicesSection,
            CTASection,
            PortfolioSection,
            PricingSection,
            ContactSection,

        }
    };
</script>

<style scoped>
/* Estilos del componente */
</style>
  