<template>
    <div class="page-head">
        <div class="ph-con">
            <h1><slot></slot></h1>
            <slot name="sec"></slot>    
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.page-head:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333;
    opacity: 0.5;
}
.portfolio-page .page-head:before {
    background: #0c575f;
}
.page-head {
    background-attachment: fixed;
    height: 400px;
    position: relative;
    text-align: center;
    background-size: cover;
    background-position: center center;
}
.page-head .ph-con {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #fff;
    transform: translate(-50%,-50%);
    font-size: 40px;
    letter-spacing: 1px;
}
</style>