<template>
    <Table :columns="columns" :data="data1"></Table>
</template>
<script>
    import expandRow from './table-expand.vue';
    export default {
        components: { expandRow },
        props:{
            data1:{
                type:Array,
                default(){
                    return []
                }
            },

        },
        data () {
            return {
                columns:[
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {   
                        title: '消息标题',
                        key: 'title'
                    },
                    {   
                        title: '发送人',
                        key: 'adminId'
                    },                   
                    {
                        title: '发送时间',
                        key: 'createTime'
                    },
                 
                ],
            }
        }
    }
</script>