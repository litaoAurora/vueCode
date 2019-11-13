<template>
    <div>
        <button>按钮</button>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success" circle>成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
        <el-row>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <el-button type="danger" icon="el-icon-s-custom" circle></el-button>
        </el-row>

        <div class="block">
            <span class="demonstration">Default value</span>
            <el-slider v-model="value1"></el-slider>
        </div>

        <div class="block">
            <span class="demonstration">Customized initial value</span>
            <el-slider v-model="value2"></el-slider>
        </div>

        <div class="block">
            <span class="demonstration">Hide Tooltip</span>
            <el-slider v-model="value3" :show-tooltip="false"></el-slider>
        </div>

        <div class="block">
            <span class="demonstration">Format Tooltip</span>
            <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
        </div>

        <div class="block">
            <span class="demonstration">Disabled</span>
            <el-slider v-model="value5" disabled></el-slider>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            value1:10,
            value2:9,
            value3:88,
            value4:100,
            value5:23,
        }
    }
}
</script>

<style>

</style>