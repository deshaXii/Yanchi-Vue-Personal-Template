<template>
    <div class="portfolio">
        <page-head style="background-image: url('/images/portfolio-bg.jpg')"> Portfolio Page</page-head>
        <div class="page-content">
            <div class="container">
                <div class="row">
                    <!-- gmixery item -->
                    <div v-for="item in portfolio" :key="item.id" class="col-lg-4 col-md-6 col-sm-6 col-12 ">
                        <!-- data-lity :data-lity-target="portfolioImage(item)" -->
                        <router-link :to="{name: 'Project', params:{id: item.id}}" class="port-card" >
                            <img :src="portfolioImage(item)" class="img-fluid d-block mx-auto" alt="Gmixary Image" /> <!-- img -->
                            <div class="card-hover">
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
        </div>
    </div>
</template>

<script>
import pageHead from '@/components/pageHead'
export default {
    components: {
        pageHead
    },
    computed: {
        portfolio() {
            return this.$store.state.portfolio
        }
    },
    methods: {
        portfolioImage(item) {
            return require('../../public/images/portfolio/' + item.images[0])
        },
        itemTags(item) {
            return item.tags.slice(0,3).join(' - ')
        },
    }
}
</script>

<style>
.page-content {
    padding: 80px 0;
}
</style>