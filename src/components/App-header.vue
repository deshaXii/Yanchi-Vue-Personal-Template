<template>
    <header>
        <div class="page-background">
            <div class="line-wrap line-black">
                <div class="line-item"></div>
                <div class="line-item"></div>
                <div class="line-item"></div>
                <div class="line-item"></div>
                <div class="line-item"></div>
            </div>
        </div>

        <div class="logo-and-title">
            <div class="myimg">
                <img src="/images/about-img-1.jpg" alt="Image" draggable="false">
            </div>
            <div class="name-box">
                <h3>{{my.name}}</h3>
                <div class="title-box">
                    <h5>{{my.jobTitle}}</h5>
                </div>
            </div>
        </div>

        <ul class="navigation-menu nav navbar-nav navbars" id="nav">
            <li class="active"><a data-link="home" href="">{{$t('links.home')}}</a></li>
            <li><a data-link="about" href="">{{$t('links.about')}}</a></li>
            <li><a data-link="services" href="">{{$t('links.services')}}</a></li>
            <li><a data-link="resume" href="">{{$t('links.resume')}}</a></li>
            <li><a data-link="testimonials" href="">{{$t('links.testimonials')}}</a></li>
            <li><a data-link="portfolio" href="">{{$t('links.portfolio')}}</a></li>
            <li><a data-link="contact" href="">{{$t('links.contact')}}</a></li>
        </ul>

        <ul class="nav-icon-list">
            <li v-if="colorMode == 'light'"><a href="#" @click.prevent="changeColorMode"><i class="pe-7s-moon"></i></a></li>
            <li v-else><a href="#" @click.prevent="changeColorMode"><i class="pe-7s-sun"></i></a></li>
            <li v-if="!fullScreen"><a href="#" @click.prevent="openFullscreen"><i class="pe-7s-expand1"></i></a></li>
            <li v-else><a href="#" @click.prevent="closeFullscreen"><i class="pe-7s-exapnd2"></i></a></li>
            <li class="langs-select">
                <select class="select" v-model="$i18n.locale"  @change="handelChange($event)">
                    <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
                </select>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'app-header',
    data() {
        const lang = localStorage.getItem('lang') || 'en';
        return {
            lang,
            langs: ['ar','en'],
        }
    },
    computed: {
        my() {
            return this.$store.state.my
        },
        fullScreen() {
            return this.$store.state.fullScreen
        },
        colorMode() {
            return this.$store.state.colorMode
        }
    },
    methods: {
        handelChange(event) {
            localStorage.setItem('lang', event.target.value)
            window.location.reload()
        },
        openFullscreen() {
            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { /* Safari */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE11 */
                elem.msRequestFullscreen();
            }
            this.$store.dispatch('changeFullScreenMode', this.fullScreen)
        },
        closeFullscreen () {
            var elem = document.documentElement;
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
            this.$store.dispatch('changeFullScreenMode', this.fullScreen)
        },
        changeColorMode() {
            this.$store.dispatch('changeColorMode', this.colorMode)
            localStorage.setItem('colorMode', this.colorMode);
        }
    }
}
</script>