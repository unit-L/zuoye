<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in swiperArr" :key="index">
                    <img :src="item.adlist_img"  :alt="item.adtitle" />
                </div>
            </div>

            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "banner",
        props: {
            msg: String
        },
        mounted:function(){
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true,
                autoplay:2000,
                speed:1000,
                observer:true,//处理异步数据
                observeParents:true,
                // 如果需要分页器
                pagination: '.swiper-pagination',

                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
            })
        }
    }
</script>

<style scoped>
    .swiper-container {
        width: 100%;
        height: 233px;
    }
    .swiper-container img{height:233px;width: 100%;}
</style>