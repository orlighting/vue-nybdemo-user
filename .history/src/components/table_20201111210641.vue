<template>
<div>
    <Table :columns="columns1" :data="data1" style="color:red"></Table>
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
                        key: 'title'
                    },
                                        {
                        title: '消息内容',
                        key: 'content'
                    },
                    {
                        title: '消息发送时间',
                        key: 'createTime'
                    },
                ],
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
               
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