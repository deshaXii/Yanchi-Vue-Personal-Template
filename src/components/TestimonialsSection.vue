<template>
    <section class="testimonials">
        <div class="group-lines">
            <div class="line-wrap line-black">
                <div class="line-item"></div>
                <div class="line-item"></div>
                <div class="line-item"></div>
                <div class="line-item"></div>
                <div class="line-item"></div>
            </div>
        </div>
        <div class="container">
                <div class="row align">
                    <div class="col-sm-12 col-lg-5 col-md-5">
                        <div class="section-image">
                            <img src="images/video-bg.jpg" alt="">
                            <div class="video-play"> <a href="https://www.youtube.com/watch?v=usO_6-RuCrg" data-lity><i class="pe-7s-play"></i></a> </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-1 nb"></div>
                    <div class="col-sm-12 col-lg-6 col-md-6">
                        
                        <div class="box-title nmt">
                            {{$t('testimonialsSection.testi-slider.title')}}
                        </div>
                        <div class="testimonials-slider owl-carousel">
                            <div class="item"  v-for="(testi, index) in testimonials" :key="index">
                                <div class="testimonial-box">
                                    <p class="testimonial-paragraph">{{testi.content}}</p>
                                    <div class="testimonial-img-name">
                                        <img :src="testimonialImage(testi)" alt="testimonial-img">
                                        <div class="client-info">
                                            <h4 class="testimonial-name">{{testi.name}}</h4>
                                            <span class="client-title">{{testi.jobTitle}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-title">
                            Our Clients
                        </div>
                        <div class="clients-slider owl-carousel">
                            <div class="client-box">
                                <img src="images/clients/1.png" alt="client-image">
                            </div>
                            <div class="client-box">
                                <img src="images/clients/4.png" alt="client-image">
                            </div>
                            <div class="client-box">
                                <img src="images/clients/6.png" alt="client-image">
                            </div>
                            <div class="client-box">
                                <img src="images/clients/7.png" alt="client-image">
                            </div>
                            <div class="client-box">
                                <img src="images/clients/4.png" alt="client-image">
                            </div>
                            <div class="client-box">
                                <img src="images/clients/6.png" alt="client-image">
                            </div>
                            <div class="client-box">
                                <img src="images/clients/1.png" alt="client-image">
                            </div>
                        </div>

                    </div>

                </div>
            </div>
    </section>
</template>
<script>
export default {
    name: 'TestimonialsSection',
    computed: {
        testimonials() {
            return this.$store.state.testimonials
        },
    },
    methods: {
        testimonialImage(testi) {
            return require('../../public/images/testimonials/' + testi.image)
        }
    }
}
</script>