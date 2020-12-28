<template>
    <div class="homepage-content">
        <home-section />
        <about-section />
        <services-section />
        <resume-section />
        <testimonials-section />
        <portfolio-section />
        <contact-section />
    </div>
</template>

<script>
import homeSection from '@/components/HomeSection'
import aboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ResumeSection from '@/components/ResumeSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PortfolioSection from '@/components/PortfolioSection'
import ContactSection from '@/components/ContactSection'
export default {
    name: 'homePage',
    components: {
        homeSection,
        aboutSection,
        ServicesSection,
        ResumeSection,
        TestimonialsSection,
        PortfolioSection,
        ContactSection
    }
}
</script>

<style>
.homepage-content {
    height: 100%;
}
</style>