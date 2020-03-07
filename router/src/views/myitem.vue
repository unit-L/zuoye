<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in swiperArr" :key="index">
                    <img :src="item.url"  :alt="item.adtitle" />
                </div>
            </div>

            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <div>
            <div>
                <h3>{{itemObj.pro_name}}</h3>
            </div>
            <div class="trueP">
                <h5>{{itemObj.pro_timestr}}</h5>
                {{itemObj.pro_isfav}}好评
            </div>
            <div>
                有效期：<span>{{itemObj.pro_active_date_text}}</span> | 场地
                <span>{{itemObj.pro_placestr}}</span>
            </div>
            <div>{{itemObj.pro_market_price}}.0元</div>
        </div>
        <div>
            <h3>可预约场馆</h3>
            <span>{{itemObj.timeSelectCnt}}</span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    // import Vue from 'vue'
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.css';

    export default {
        name: "myitem",
        data: function () {
            return {
                itemObj: {},//接收内容页的对象
                swiperArr: []//轮播数据
            }
        },
        mounted:function(){
            //通过 itemid获取 内容页数据
            //7.获取数据，将数据保存到变量中
            let params = new URLSearchParams();//创建新的查询传参对象
            //接口定义了一些实用的方法来处理 URL 的查询字符串
            params.append('pro_id',this.$route.params.itemid);
            params.append('fid','');
            axios.post("https://www.jvhv.com/siteindex.php/Lesson/Detail.html",params).then((res)=>{
                console.log(res);
                this.itemObj = res.data.data;
                this.swiperArr = res.data.data.pro_imglist;
            });
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true,
                autoplay:1000,
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