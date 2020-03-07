<template>
    <div>
            <ul>

                <li v-for="(item,index) in list">
                    {{item.tre_img[0].name}}
                    <!--<div class="top5_img"><img :src="item.tre_img[0].url" /></div>-->

                </li>

            </ul>

    </div>

</template>

<script>
    import axios from 'axios';

    export default {
        name: "tuijian",
        data: function () {
            return {
                list:[],
            }
        },
        mounted:function () {
            axios.post("https://www.jvhv.com/siteindex.php/Trends/Index.html").then((res)=>{
                console.log(res);
                this.list = res.data.data.list;
                console.log(this.list);
            })
        }
    }
</script>

<style scoped>

</style>