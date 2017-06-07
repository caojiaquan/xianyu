<template>
    <div class="dialog wrapper">
        <div class="dialog-header">
            <div class="dialog-close tcc" ><router-link to="/user_info">&#xe606;</router-link></div>
            <div class="dialog-title">简介</div>
        </div>
        <div class="dialog-content brief-content">
            <el-input
                    type="textarea"
                    :rows="10"
                    placeholder="请输入内容"
                    v-model="textarea">
            </el-input>
            <div class="brief-button">
                <el-button type="primary" size="large">正常按钮</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data : function() {
        return {
            textarea: ''
        }
    }
    }
</script>

<style>
    @font-face {
        font-family: 'tcc';  /* project id 310525 */
        src: url('//at.alicdn.com/t/font_v6njbzyqijwwb3xr.eot');
        src: url('//at.alicdn.com/t/font_v6njbzyqijwwb3xr.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_v6njbzyqijwwb3xr.woff') format('woff'),
        url('//at.alicdn.com/t/font_v6njbzyqijwwb3xr.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_v6njbzyqijwwb3xr.svg#iconfont') format('svg');
    }
    .tcc{
        font-family:"tcc" !important;
        font-size:16px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .dialog-close{
        float: left;
        font-size: 2rem;
        cursor: pointer;
    }
    .dialog-title{
        text-align: center;
        font-size: 2rem;
    }
    .dialog{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        background: #FFFFFF;
    }
    .dialog-nav>ul{
        display: -webkit-box;
        padding: 1rem 0;
    }
    .dialog-nav li{
        -webkit-box-flex: 1;
        border-bottom: 2px solid orange;
        font-size: 2rem;
        text-align: center;
        margin: 0 0.5rem;
    }
    .brief-content{
        margin-top: 3rem;
        text-align: center;
    }
    .brief-button{
        margin-top: 3rem;
    }
</style>