import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import i18n from '../i18n'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    fullScreen: false,
    colorMode: localStorage.getItem('colorMode'),
    my: {
      name: i18n.t('my.name'),
      jobTitle: i18n.t('my.jobTitle'),
      jobTitle2: i18n.t('my.jobTitle2'),
      typed: i18n.t('my.typed'),
      info: i18n.t('aboutDescription'),
      date: i18n.t('my.date'),
      email: i18n.t('my.email'),
      address: i18n.t('my.address'),
      phone: i18n.t('my.phone'),
      portfolioLink: i18n.t('my.portfolioLink'),
    },
    services: [
      {
          icon: 'pe-7s-browser',
          title: i18n.t('servicesSection.one.title'),
          description: i18n.t('servicesSection.one.desc')
      },
      {
          icon: 'pe-7s-headphones',
          title: i18n.t('servicesSection.two.title'),
          description: i18n.t('servicesSection.two.desc')
      },
      {
          icon: 'pe-7s-medal',
          title: i18n.t('servicesSection.three.title'),
          description: i18n.t('servicesSection.three.desc'),
      },
      {
          icon: 'pe-7s-phone',
          title: i18n.t('servicesSection.four.title'),
          description: i18n.t('servicesSection.four.desc'),
      },
      {
          icon: 'pe-7s-tools',
          title: i18n.t('servicesSection.five.title'),
          description: i18n.t('servicesSection.five.desc'),
      },
      {
          icon: 'pe-7s-way',
          title: i18n.t('servicesSection.six.title'),
          description: i18n.t('servicesSection.six.desc'),
      }
    ],
    educations: [
      {
          year: i18n.t('resumeSection.education.one.year'),
          title: i18n.t('resumeSection.education.one.title'),
          description: i18n.t('resumeSection.education.one.desc')
      },
      {
          year: i18n.t('resumeSection.education.two.year'),
          title: i18n.t('resumeSection.education.two.title'),
          description: i18n.t('resumeSection.education.two.desc')
      },
      {
          year: i18n.t('resumeSection.education.three.year'),
          title: i18n.t('resumeSection.education.three.title'),
          description: i18n.t('resumeSection.education.three.desc')
      }
    ],
    experience: [
      {
          year: i18n.t('resumeSection.experience.one.year'),
          title: i18n.t('resumeSection.experience.one.title'),
          description: i18n.t('resumeSection.experience.one.desc')
      },
      {
          year: i18n.t('resumeSection.experience.two.year'),
          title: i18n.t('resumeSection.experience.two.title'),
          description: i18n.t('resumeSection.experience.two.desc')
      },
      {
          year: i18n.t('resumeSection.experience.three.year'),
          title: i18n.t('resumeSection.experience.three.title'),
          description: i18n.t('resumeSection.experience.three.desc')
      }
    ],
    designSkills: [
      {
          title: i18n.t('resumeSection.design-Skills.one.title'),
          percent: i18n.t('resumeSection.design-Skills.one.precent')
      },
      {
          title: i18n.t('resumeSection.design-Skills.two.title'),
          percent: i18n.t('resumeSection.design-Skills.two.precent')
      },
      {
          title: i18n.t('resumeSection.design-Skills.three.title'),
          percent: i18n.t('resumeSection.design-Skills.three.precent')
      },
      {
          title: i18n.t('resumeSection.design-Skills.four.title'),
          percent: i18n.t('resumeSection.design-Skills.four.precent')
      }
    ],
    programingSkills: [
      {
          title: i18n.t('resumeSection.programing-Skills.one.title'),
          percent: i18n.t('resumeSection.programing-Skills.one.precent')
      },
      {
          title: i18n.t('resumeSection.programing-Skills.two.title'),
          percent: i18n.t('resumeSection.programing-Skills.two.precent')
      },
      {
          title: i18n.t('resumeSection.programing-Skills.three.title'),
          percent: i18n.t('resumeSection.programing-Skills.three.precent')
      },
      {
          title: i18n.t('resumeSection.programing-Skills.four.title'),
          percent: i18n.t('resumeSection.programing-Skills.four.precent')
      }
    ],
    testimonials: [
      {
          content: i18n.t('testimonialsSection.testi-slider.one.content'),
          name: i18n.t('testimonialsSection.testi-slider.one.name'),
          jobTitle: i18n.t('testimonialsSection.testi-slider.one.jobTitle'),
          image: "testimonial-2.jpg"
      },
      {
          content: i18n.t('testimonialsSection.testi-slider.two.content'),
          name: i18n.t('testimonialsSection.testi-slider.two.name'),
          jobTitle: i18n.t('testimonialsSection.testi-slider.two.jobTitle'),
          image: "testimonial-2.jpg"
      },
      {
          content: i18n.t('testimonialsSection.testi-slider.three.content'),
          name: i18n.t('testimonialsSection.testi-slider.three.name'),
          jobTitle: i18n.t('testimonialsSection.testi-slider.three.jobTitle'),
          image: "testimonial-3.jpg"
      }
    ],
    portfolio: [
      {
        id: 1,
        title: 'project 1',
        images: ["1.jpg", '3.jpg'],
        tags: ['html', 'sass', 'Vue'],
        videoLink: null,
        description: 'Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non.',
        filter: ['brand', 'marketing']
      },
      {
        id: 2,
        title: 'project 2',
        images: ["2.jpg"],
        tags: ['html', 'scss', 'jquery', 'ajax', 'i18n'],
        videoLink: null,
        description: 'Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non.',
        filter: ['brand', 'design']
      },
      {
        id: 3,
        title: 'project 3',
        images: ["3.jpg"],
        tags: ['html', 'css', 'js', 'angular'],
        videoLink: null,
        description: 'Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non.',
        filter: ['marketing']
      },
      {
        id: 4,
        title: 'Yaki HTML Personal Template',
        images: ["4.jpg"],
        tags: ['html', 'css', 'js', 'react'],
        videoLink: 'https://www.youtube.com/watch?v=usO_6-RuCrg&ab_channel=AnthonyYingTVs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante. Semper risus in hendrerit gravida rutrum quisque non. Nam at lectus urna duis. Arcu ac tortor dignissim convallis aenean et tortor. Risus nullam eget felis eget nunc lobortis mattis. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Purus sit amet luctus venenatis lectus magna. Sit amet porttitor eget dolor morbi non arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Lacus viverra vitae congue eu. Dictumst vestibulum rhoncus est pellentesque elit.',
        filter: ['marketing', 'brand', 'desgin']
      },
      {
        id: 5,
        title: 'project 5',
        images: ["5.jpg","1.jpg","3.jpg"],
        tags: ['html', 'css', 'js', 'vue'],
        videoLink: 'https://www.youtube.com/watch?v=usO_6-RuCrg&ab_channel=AnthonyYingTV',
        description: 'Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non.',
        filter: ['desgin']
      },
      {
        id: 6,
        title: 'project 6',
        images: ["2.jpg"],
        tags: ['html', 'css', 'js', 'vue', 'vuex'],
        videoLink: null,
        description: 'Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non.',
        filter: ['marketing', 'brand', 'desgin']
      }
    ]
  },
  mutations: {
    changeScreenMode(state, val) {
      state.fullScreen = !val
    },
    changeColorMode( state, val ) {
      if (val == 'light') {
        state.colorMode = 'dark'
      }
      else {
        state.colorMode = 'light'
      }
    }
  },
  actions: {
    changeFullScreenMode( {commit}, val ) {
      commit('changeScreenMode', val);
    },
    changeColorMode({commit}, val) {
      commit('changeColorMode', val);
    }
  }
})
