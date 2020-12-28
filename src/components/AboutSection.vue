<template>
    <section class="about">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <section-title>
                        <template #title>About Me</template>
                    </section-title>
                </div>
                <div class="col-md-12 col-lg-5 ">
                    <div class="about-image-area">
                        <div class="img-box">
                            <img src="images/about-img-1.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-7 ">
                    <div class="about-info-area">
                        <h2 class="animated fadeInDown">{{$t('hello')}} {{$t('i')}} <span>{{my.name}}</span><br>{{my.jobTitle2}} {{$t('and')}} {{my.jobTitle}}</h2>
                        <p>{{$t('aboutDescription')}}</p>
                        <ul>
                            <li>
                                <div class="p-info"><em> {{$t('aboutSection.name')}} </em><span>{{my.name}}</span></div>
                            </li>
                            <li>
                                <div class="p-info"><em> {{$t('aboutSection.date')}} </em><span>{{my.date}}</span></div>
                            </li>
                            <li>
                                <div class="p-info"><em> {{$t('aboutSection.email')}} </em><span><a :href="`mailto:` + my.email">{{my.email}}</a></span></div>
                            </li>
                            <li>
                                <div class="p-info"><em> {{$t('aboutSection.phone')}} </em><span>{{my.phone}}</span></div>
                            </li>
                            <li>
                                <div class="p-info"><em> {{$t('aboutSection.address')}} </em><span>{{my.address}}</span></div>
                            </li>
                            <li>
                                <div class="p-info"><em> {{$t('aboutSection.company')}} </em><span><a :href="my.portfolioLink">Mu_themes</a></span></div>
                            </li>
                        </ul>
                        <div class="button-box"><a href="#" class="sec-font btn theme-btn"><span>{{$t('aboutSection.btn')}}</span></a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTitle from './SectionTitle'
export default {
  components: { SectionTitle },
    name: 'AboutSection',
    computed: {
        my() {
            return this.$store.state.my
        },
    }
}
</script>