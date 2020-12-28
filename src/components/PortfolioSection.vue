<template>
    <section class="portfolio">
        <div class="container">
                <div class="row">
                    <div class="col-12">
                        <section-title>
                            <template #title>My Portfolio</template>
                        </section-title>
                    </div>
                    <!-- filter links -->
                    <div class="col-12 center">
                        <ul class="portfolio-filter"> <!-- Menu -->
                            <li class="filter active" data-filter="all">All Works</li>
                            <li class="filter" data-filter=".design">design</li>
                            <li class="filter" data-filter=".brand">Branding</li>
                            <li class="filter" data-filter=".marketing">Fashion</li>
                        </ul>
                    </div>
                </div>

                <!-- gmixery -->
                <div class="grid row">
                    <!-- gmixery item -->
                    <div v-for="(item,index) in portfolio" :key="index" class="col-lg-4 col-md-6 col-sm-6 col-12 mix" :class="item.filter">
                        <router-link :to="{name: 'Project', params:{id: item.id}}" class="port-card" >
                            <img :src="portfolioImage(item)" class="img-fluid d-block mx-auto" alt="Gmixary Image" /> <!-- img -->
                            <div class="card-hover ">
                                <h4>{{item.title}}</h4> <!-- Title -->
                                <span>{{itemTags(item)}}</span> <!-- category -->
                            </div>
                            <!--end /.card hover-->
                        </router-link>
                        <!--/.port card link-->
                    </div>
                    <!--end li(2)-->

                </div>

        </div>
    </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
export default {
  components: { SectionTitle },
    name: "PortfolioSection",
    computed: {
        portfolio() {
            return this.$store.state.portfolio
        }
    },
    methods: {
        itemTags(item) {
            return item.tags.slice(0,3).join(' - ')
        },
        portfolioImage(item) {
            return require('../../public/images/portfolio/' + item.images[0])
        }
    }
}
</script>