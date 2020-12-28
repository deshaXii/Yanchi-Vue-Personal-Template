<template>
    <section class="home">
        <!---------------- Start Section Content ---------------->
        <div class="section-inner">
            <div class="line-wrap line-black">
                <div class="line-item"></div>
                <div class="line-item"></div>
                <div class="line-item"></div>
                <div class="line-item"></div>
                <div class="line-item"></div>
            </div>
            <div class="section-hero-content">
                <h1>{{$t('hello')}}, <br>{{$t('i')}} <span>{{my.name}}</span><br>{{$t('home-sec-title')}} </h1>
                <div class="block">
                    <h4 class="sec-font">{{my.typed}}.</h4>
                </div><a href="Mustafa-Fathi.pdf" target="_blank" class="sec-font btn theme-btn"><span>{{$t('home-btn')}}</span></a>
            </div>
        </div>
        <!---------------- Start Section Content ---------------->
    </section>
</template>

<script>
export default {
    name: 'HomeSection',
    computed: {
        my() {
            return this.$store.state.my
        },
    }
}
</script>