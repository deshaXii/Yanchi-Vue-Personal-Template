<template>
    <section class="contact">
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
                        <template #title>Contact Me</template>
                    </section-title>
                </div>
            </div>
                <div class="row align">
                    <div class="col-md-5">
                        <div id="map"></div>
                    </div>
                    <div class="col-md-7">
                        <div class="box-title">Let's Talk.</div>
                        <form id="form" @submit.prevent="submit">
                            <p>We All Know How Important Your Information Is.
                                They Are Always Safe With Us.</p>
                            <div class="row">
                                <div class="col-md-6"> 
                                    <div class="form-controll">
                                        <input id="formName" class="form-input" type="text" placeholder="Full Name">
                                        <i class="fa fa-check-circle"></i>
                                        <i class="fa fa-exclamation-circle"></i>
                                        <small>Error message</small>
                                    </div>
                                </div>
                                <div class="col-md-6"> 
                                    <div class="form-controll">
                                        <input id="formEmail" class="form-input" type="email" inputmode="email" placeholder="Email Address">    
                                        <i class="fa fa-check-circle"></i>
                                        <i class="fa fa-exclamation-circle"></i>
                                        <small>Error message</small>
                                    </div>
                                </div>
                                <div class="col-md-4"> 
                                    <div class="form-controll">
                                        <input id="formPhone" class="form-input" type="number" placeholder="phone"> 
                                        <i class="fa fa-check-circle"></i>
                                        <i class="fa fa-exclamation-circle"></i>
                                        <small>Error message</small>
                                        </div>
                                    </div>
                                <div class="col-md-8"> 
                                    <div class="form-controll">
                                        <input id="formTitle" class="form-input" type="" placeholder="Title"> 
                                        <i class="fa fa-check-circle"></i>
                                        <i class="fa fa-exclamation-circle"></i>
                                        <small>Error message</small>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-controll">
                                        <textarea id="formMessage" placeholder="Message..."></textarea>
                                        <i class="fa fa-check-circle"></i>
                                        <i class="fa fa-exclamation-circle"></i>
                                        <small>Error message</small>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6"> <input type="submit" value="Send Message"> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';
export default {
  components: { SectionTitle },
    name: 'ContactSection',
    methods: {
        submit() {
            const form = document.getElementById('form');
            const name = document.getElementById('formName');
            const email = document.getElementById('formEmail');
            const phone = document.getElementById('formPhone');
            const title = document.getElementById('formTitle');
            const msg = document.getElementById('formMessage');


            const usernameValue = name.value.trim();
            const emailValue = email.value.trim();
            const phoneValue = phone.value.trim();
            const titleValue = title.value.trim();
            const msgValue = msg.value.trim();


            if(usernameValue === '') {
                setErrorFor(name, 'Name cannot be blank');
            } else {
                setSuccessFor(name);
            }
            if(emailValue === '') {
                setErrorFor(email, 'Email cannot be blank');
            } else if (!isEmail(emailValue)) {
                setErrorFor(email, 'Not a valid email');
            } else {
                setSuccessFor(email);
            }
            if(phoneValue === '') {
                setErrorFor(phone, 'Phone cannot be blank');
            } else {
                setSuccessFor(phone);
            }
            if(titleValue === '') {
                setErrorFor(title, 'Title cannot be blank');
            } else {
                setSuccessFor(title);
            }
            if(msgValue === '') {
                setErrorFor(msg, 'Message cannot be blank');
            } else {
                setSuccessFor(msg);
            }

            //  Show Error
            function setErrorFor(input, message) {
                const formControl = input.parentElement;
                const small = formControl.querySelector('small');
                formControl.className = 'form-controll error';
                small.innerText = message;
            }
            // Show Success
            function setSuccessFor(input) {
                const formControl = input.parentElement;
                formControl.className = 'form-controll success';
            }
            // Valid Email
            function isEmail(email) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
            }
        }
    }
}
</script>