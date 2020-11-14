<template>
<div>
    <Table :columns="columns" :data="data"   @on-row-click="msgRead"></Table>
    </div>
</template>
<script>
    export default {
        name: 'beaTable',
        props:{
            data:{
                type:Array,
                default(){
                    return []
                }
            },

        },
        data () {
            return {
                columns: [
                    {
                        title: '消息标题',
                        key: 'msgName'
                    },
                    {
                        title: '消息发送时间',
                        key: 'time'
                    },
                ],
               
            }
        },
        methods:{
        msgRead(data){
            // console.log(this.nextPath)
         this.$router.push({
           path: '/msgRead',
           query:{
             item: data
         }})
            }
        }
        
    }
</script>

<style>
.ivu-table td.demo-table-info-column{
        background-color: #2db7f5;
        color: #fff;
    }
</style>