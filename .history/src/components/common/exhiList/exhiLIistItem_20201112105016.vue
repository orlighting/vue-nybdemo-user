<template>
<div class="exhi_list_item">
    <div class="item">
        <!--<div class="iid">{{exhiListItem.iid}}</div>-->
        <div class="iid">{{exhiListItem.id}}</div>
        <div class="name">{{exhiListItem.name}}</div>
        <div class="state">{{exhiListItem.checkState}}</div>
    </div>

</div>
</template>

<script>
export default {
    name: "exhiListItem",
    props: {
        exhiListItem: {
            type: Object,
            default () {
                return {
                    id: "12312312",
                    name: "全国农业大会",
                    state: "审核中"
                };
            },
        }
    },
    data() {
        return {}
    },
    created() {
        console.log(this.itemInfo)
    },
    method: {

    }

}
</script>

<style scoped>
.exhi_list_item {
    width: 340px;
    display: flex;
    border-bottom: 1px solid #666;
}

.item {
    width: 340px;
    

}

.item .iid {
    display: inline-block;
    width: 90px;
    padding: 10px;
    text-align: center;
    

}

.item .name {
    display: inline-block;
    width: 90px;
    padding: 10px;

    text-align: center;

}

.item .state {
    display: inline-block;
    width: 90px;
    padding: 10px;

    text-align: center;
}
</style>
