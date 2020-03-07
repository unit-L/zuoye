<template>
    <div>
        <div id="nav1">
            <select >
                <option value="">厦门</option>
            </select>
            <input type="text" placeholder="请输入关键词">
        </div>
        <div id="banner">
            <!--轮播-->
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
        <div id="con">
            <span v-for="(item,index) in iconList" :key="index">
                <div>
                    <img :src="require('../assets/icon/'+(index+1)+'.png')" alt="">
                </div>
                {{item.CategoryName}}
            </span>
        </div>
        <div id="carry">
            <h3>为您精选</h3>
            <ul class="Cours">
                <li v-for="(item,index) in CourseforYou">
                    <router-link :to="'/item/'+item.pro_id">
                        <div class="Cours-img"><img :src="item.pro_img[0].url" /></div>
                        <div class="">
                            <div>{{item.pro_name}}</div>
                            <div>{{item.pro_Joiner}}人已参加</div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div >
            <!--<h2>首页</h2>-->
            <div class="top5Con">
                <h2>本周最受欢迎TOP5</h2>
                <ul class="top5list">
                    <li v-for="(item,index) in top5Arr" :key="index">
                        <router-link :to="'/myitem'+item.pro_id">
                            <div class="top5_img"><img :src="item.pro_img[0].url" /></div>
                            <div class="top5_text">
                                <div>{{item.pro_name}}</div>
                                <div>{{item.pro_Joiner}}人已参加</div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
    //引入 axios
    import axios from 'axios';

    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.css';
    export default {
        name:'Mymain',
        data:function(){
            return {
                top5Arr:[],
                iconList:[],
                CourseforYou:[],
                swiperArr:[]
            }
        },
        //挂载的函数
        mounted:function(){
            //获取数据
            axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((res)=>{
                this.iconList = res.data.data.iconList;
                this.top5Arr = res.data.data.CourseTop5;
                this.CourseforYou = res.data.data.CourseforYou;
                console.log(res);
                this.swiperArr =res.data.data.top_ad.list
            });
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
    #nav1{
        background: #004b9e;
        width: 100%;
        height: 44px;
        line-height: 44px;
    }
    #nav1 select{
        height: 100%;
        border: none;
        background: #004b9e;
        color: white;
        font-size: 14px;
        margin:0 10px;
    }
    #nav1 input{
        width: 65%;
        height: 30px;
        border-radius: 8px;
        margin-left: 20px;
    }
    #banner{
        width: 100%;
        height: 170px;
        border-bottom: 10px solid #eee;
    }
    .swiper-container {
        width: 100%;
        height: 170px;
    }
    .swiper-container img{height:170px;width: 100%;}
    #con{
        width: 100%;
        height:215px ;
        background: white;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        border-bottom: 10px solid #eee;

    }
    #con span{
        width: 17%;
        text-align: center;
        margin-top: 10px;
    }
    #carry{
        height: 334px;
        width: 100%;
        padding: 10px 0;
        /*padding-right: 10px;*/
    }
    #carry h3{
        width: 100%;
        height: 26px;
        padding: 10px;
    }
    #carry img{
        width: 165px;
        height: 110px;
    }
    #carry .Cours{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
    }
    .top5Con{
        width: 90%; height:400px; background: #004b9e; border-radius: 10px; margin: auto;
        margin-top:20px;
    }
    .top5Con h2{color:#fff; padding:20px;}
    .top5list{background: #fff; margin:10px; height:300px;border-radius: 10px;}
    .top5list li a{display: flex; flex-direction: row; flex-wrap: nowrap; height:60px;
        padding:6px ; border-bottom:1px solid #ddd; }
    .top5list li a .top5_img{width:30%;}
    .top5list li a .top5_img img{width: 80%; height: 50px;}
    .top5list li a .top5_text{width: 70%;}
</style>