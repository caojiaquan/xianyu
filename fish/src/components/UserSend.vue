<template>
        <div class="dialog wrapper">
            <div class="dialog-header">
                <div class="dialog-close tcc" ><router-link to="/user">&#xe606;</router-link></div>
                <div class="dialog-title">我发布的</div>
            </div>
            <div class="dialog-content">
                <div class="dialog-nav">
                    <ul>
                        <li>宝贝</li>
                        <li>问答</li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
    export default{
        name : 'user-send'
    }
</script>

<style>
    @import "../assets/css/common.css";
    @import "../assets/css/dialog.css";
</style>