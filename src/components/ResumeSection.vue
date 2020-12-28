<template>
    <section class="resume">
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
            <div class="row">
                    <div class="col-12">
                        <section-title>
                            <template #title>My Resume</template>
                        </section-title>
                    </div>
                    <div class="col-md-6 col-lg-4  edu">
                        <div class="resume-box-name">
                            <span>{{$t('resumeSection.education.title')}}</span>
                        </div>
                        <div class="resume-box" v-for="(edu,index) in educations" :key="index">
                            <div class="rbn">
                                <span class="rbd">{{edu.year}}</span>
                                <h4> {{edu.title}}</h4>
                            </div>
                            <p class="rbp"> {{edu.description}}</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4  exp">
                        <div class="resume-box-name">
                            <span>{{$t('resumeSection.experience.title')}}</span>
                        </div>
                        <div class="resume-box" v-for="(exp,index) in experience" :key="index">
                            <div class="rbn">
                                <span class="rbd">{{exp.year}}</span>
                                <h4> {{exp.title}}</h4>
                            </div>
                            <p class="rbp"> {{exp.description}}</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 skills">
                        <div class="row">
                            <div class="col-md-6 col-lg-12">
                                <div class="lws resume-box-name">
                                    <span>{{$t('resumeSection.design-Skills.title')}}</span>
                                </div>
                                <div class="skill-box" v-for="(skill,index) in designSkills" :key="index">
                                    <h4 class="skill-title"> {{skill.title}}</h4>
                                    <div class="progress-line">
                                        <span :data-percent="skill.percent" :style="{'width': skill.percent + '%' }"><span class="percent-tooltip">{{skill.percent}}%</span></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-12">
                                <div class="lsw resume-box-name">
                                    <span>{{$t('resumeSection.programing-Skills.title')}}</span>
                                </div>
                                <div class="skill-box" v-for="(skill,index) in programingSkills" :key="index">
                                    <h4 class="skill-title"> {{skill.title}}</h4>
                                    <div class="progress-line">
                                        <span :data-percent="skill.percent" :style="{'width': skill.percent + '%' }"><span class="percent-tooltip">{{skill.percent}}%</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
export default {
  components: { SectionTitle },
    name: 'ResumeSection',
    computed: {
        educations() {
            return this.$store.state.educations
        },
        experience() {
            return this.$store.state.experience
        },
        designSkills() {
            return this.$store.state.designSkills
        },
        programingSkills() {
            return this.$store.state.programingSkills
        }
    }
}
</script>