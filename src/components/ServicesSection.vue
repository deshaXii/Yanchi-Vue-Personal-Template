<template>
    <section class="services">
        <div class="group-lines">
            <div class="line-wrap line-black">
                <div class="line-item"></div>
                <div class="line-item"></div>
                <div class="line-item"></div>
                <div class="line-item"></div>
                <div class="line-item"></div>
            </div>
        </div>
        <div class="container "> 
            <div class="row">
                <div class="col-12">
                    <section-title>
                        <template #title>My Services</template>
                    </section-title>
                </div>
                <div v-for="(service,index) in services" :key="index" class="col-md-6 col-lg-4">
                    <div class="service-box">   <!-- Service Box -->
                        <i :class="service.icon"></i> <!-- Service Icon -->
                        <h3> {{service.title}}</h3> <!-- Service name -->
                        <p> {{service.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTitle from './SectionTitle'
export default {
    name: 'servicesSection',
    components: {SectionTitle},
    computed: {
        services() {
            return this.$store.state.services
        },
    }
}
</script>