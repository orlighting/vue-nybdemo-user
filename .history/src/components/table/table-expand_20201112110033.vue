<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">消息内容: </span>
                <span class="expand-value">{{ row.area }}</span>
            </Col>


        </Row>
    </div>
</template>
<script>
    export default {
        props: {
            row: Object
        }
    };
</script>