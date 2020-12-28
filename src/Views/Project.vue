<template>
    <div class="project-page">
        <page-head :style="'background-image: url('+ projectImage(project) +')'">{{project.title | 25letter}}</page-head>
        <div class="project-body">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="project-title">{{project.title}}</h2>
                        <p class="project-description">{{project.description}}</p>
                        <div v-if="project.videoLink" class="video-box" :style="'background-image: url('+ projectImage(project) +')'">
                            <a :href="project.videoLink" data-lity><i class="pe-7s-play"></i></a>
                        </div>
                        <!--  :style="'background-image: url('+ portfolioSlider(project) +')'" -->
                        <div v-if="showSlider" class="Images-box">
                            <!-- <a :href="project.videoLink" data-lity><i class="pe-7s-play"></i></a> -->
                            <div class="owl-carousel project-slider">
                                <div v-for="(image, index) in portfolioSlider(project)" :key="index" style="">
                                    <div :style="'background-image: url('+ image +');min-height: 300px;'"></div>
                                </div>
                            </div>
                        </div>
                        <div class="tools-box">
                            <ul class="project-tools">
                                <li v-for="(tag,index) in project.tags" :key="index">{{tag}}</li>
                            </ul>
                        </div>
                        <div class="project-controls">
                            <div class="prev-box" @click="prevProject(project)">
                                <i class="pe-7s-angle-left"></i> Previous Project
                            </div>
                            <div class="next-box" @click="nextProject(project)">
                                Next Project <i class="pe-7s-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import pageHead from '@/components/pageHead'
import router from '../router'
export default {
    components: {
        pageHead
    },
    data () {
        return {
            showSlider: true
        }
    },
    computed: {
        project() {
            return this.$store.state.portfolio[this.key - 1]
        },
        projectsNum() {
            return this.$store.state.portfolio.length - 1
        },
        key() {
            return this.$route.params.id
        }
    },
    methods: {
        projectImage(item) {
            return require('../../public/images/portfolio/' + item.images[0])
        },
        portfolioSlider(item) {
            var sliderImages = [];
            if (item.images.length > 1) {
                this.showSlider = true;
                item.images.forEach(image => {
                    image = require('../../public/images/portfolio/' + image);
                    sliderImages.push(image);
                });
                return sliderImages
            } else {
                this.showSlider = false;
                return;
            }
            
        },
        prevProject(project) {
            if (this.key == 1) {
                event.target.classList.add('disabled');
                return;
            } else if (this.key > 1) {
                router.push({
                    path: `/portfolio/${project.id - 1}`
                });
                window.location.reload()
                document.querySelector('.next-box').classList.remove('disabled');
                event.target.classList.remove('disabled');
            }
        },
        nextProject(project) {
            if (this.key > this.projectsNum) {
                event.target.classList.add('disabled');
                return;
            } else {
                router.push({
                    path: `/portfolio/${project.id + 1}`
                })
                window.location.reload()
                document.querySelector('.prev-box').classList.remove('disabled');
                event.target.classList.remove('disabled');
            }
        }
    }
}
</script>


<style lang="scss">
    .project-body {
        padding: 100px 0;
        .project-title {
            margin-bottom: 20px;
        }
        .project-description {
            margin-bottom: 30px;
        }
        .video-box {
            position: relative;
            height: 400px;
            a {
                position: absolute;
                top: 50%;
                transform: translate(-50%,-50%);
                left: 50%;
                font-size: 50px;
                color: #fff;
            }
            &:before {
                content: '';position: absolute;top: 0;left: 0;right: 0;bottom: 0;background: #333;opacity: 0.4;
            }
        }
        ul.project-tools {
            padding: 0;
            margin: 0;
            list-style: none;
            margin-top: 30px;
            li {
                display: inline-block;
                margin: 0 10px;
                background: #333;
                transition: all .3s linear;
                color: #fff;
                text-transform: uppercase;
                padding: 0 10px;
                border-radius: 2px;
                opacity: 0.8;
            }
        }
    }
    ul.project-tools li:hover {opacity: 1;}
    ul.project-tools li:nth-of-type(1) {
        background: #c70039;
    }
    ul.project-tools li:nth-of-type(2) {
        background: #111d5e;
    }
    ul.project-tools li:nth-of-type(3) {
        background: #70af85;
    }
    ul.project-tools li:nth-of-type(4) {
        background: #aa8976;
    }
    ul.project-tools li:nth-of-type(5) {
        background: #ff8585;
    }
    .next-box.disabled, .prev-box.disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }
    .next-box, .prev-box {
        background: #E63946;
        height: 40px;
        text-align: center;
        padding: 0 20px;
        cursor: pointer;
        line-height: 40px;
        color: #fff;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .project-controls {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .next-box i, .prev-box i {
        font-size: 20px;
        margin: 0 5px;
    }
</style>