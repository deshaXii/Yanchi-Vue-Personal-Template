<template>
    <div class="section-title">
        <div class="row">
            <div class="col-md-12">
                <div class="l-title">
                    <h3><slot name="title"></slot></h3>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'SectionTitle'    
}
</script>

<style>
.section-title {
    margin-bottom: 60px;
}
.l-title h3 {
    color: #e63946;
    font-size: 50px;
    font-weight: bold;
    opacity: 0.3;
}
</style>