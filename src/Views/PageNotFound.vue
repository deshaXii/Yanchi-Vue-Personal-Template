<template>
    <page-head :class="'page-not-found'" style="background-image: url('/images/404BG.svg')">
        404
        <template v-slot:sec>
            <div class="pnf-box">
                <h4 class="sec-font">page not found</h4>
            </div>
        </template>
        
    </page-head>
</template>
<script>
import pageHead from '@/components/pageHead'
import router from '../router'
export default {
    components: {
        pageHead
    },
    mounted: () => {
        setTimeout( () => {
            router.push({
                path: '/'
            })
        },3000)
    }
}
</script>

<style>
.page-head.page-not-found:before {
    background: #3c7ca9;
}

.page-not-found.page-head h1 {
    font-weight: bold;
    font-size: 180px;
}
.page-head.page-not-found {
    background-attachment: unset;
    height: 100%;
}
.pnf-box h4.sec-font {
    padding: 20px 30px;
    background: linear-gradient(45deg, transparent , rgba(255, 255, 255, 0.13), transparent);
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 6px;
    font-weight: 600;
    margin: 0;
    border-radius: 8px;
    font-family: 'IBM Plex Mono', monospace;
    text-align: center;
}
</style>