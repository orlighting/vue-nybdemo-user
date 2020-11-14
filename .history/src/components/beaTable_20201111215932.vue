<template>
<div>
    <Table :columns="columns1" :data="data" ></Table>
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
                columns1: [
                    {
                        title: '展会ID',
                        key: 'id'
                    },
                    {
                        title: '展会名称',
                        key: 'name'
                    },
                    {
                        title: '展会举办方',
                        key: 'content'
                    },

                ],
            }
        },
        methods:{

        }
        
    }
</script>

<style>

</style>