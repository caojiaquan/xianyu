<template>
    <div id="person">
        <div id="person-header">
            <div class="person-header-container wrapper">
                <span class="person-header-return return"><router-link to="/user">&#xe606;</router-link></span>
                <div>我的资料</div>
            </div>
        </div>
        <div id="person-info">
            <div class="person-info-container wrapper">
                <h1>基本信息</h1>
                <ul>
                    <li @click="uploadPortrait">头像</li>
                    <li class="iconfont0">&#xe600;</li>
                </ul>
                <ul>
                    <li @click="setSex">性别</li>
                    <li class="iconfont0">&#xe600;</li>
                </ul>
                <ul>
                    <li @click="setBirth">生日</li>
                    <li class="iconfont0">&#xe600;</li>
                </ul>
                <ul>
                    <li><router-link to="/user_info/user_brief">简介</router-link></li>
                    <li class="iconfont0">&#xe600;</li>
                </ul>
                <ul>
                    <li>收货地址</li>
                    <li class="iconfont0">&#xe600;</li>
                </ul>
                <ul>
                    <li>更换密码</li>
                    <li class="iconfont0">&#xe600;</li>
                </ul>
            </div>
        </div>
        <div class="portraitSet" v-show="portraitF">
            <div class="portrait-mask" @click="uploadPortrait"></div>
            <div class="portrait-container">
                <ul class="portrait-select">
                    <li>从相册中选取</li>
                    <li>拍照</li>
                </ul>
            </div>
        </div>
        <div class="sexSet" v-show="setSexF">
            <div class="sex-mask" @click="setSex"></div>
            <div class="sex-container">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="birthSet" v-show="setBirthF">
            <div class="birth-mask" @click="setBirth"></div>
            <div class="birth-container">
                <div class="block">
                    <el-date-picker
                            v-model="value4"
                            type="month"
                            placeholder="选择月">
                    </el-date-picker>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name : 'person',
        data : function(){
            return {
                portraitF : false,
                setSexF : false,
                setBirthF : false,
                options: [{
                    value: '选项1',
                    label: '男'
                }, {
                    value: '选项2',
                    label: '女'
                }],
                value: '',
                value3: '',
                value4: '',
                value5: ''
            }
            },
        methods : {
            uploadPortrait : function(){
                this.portraitF = !this.portraitF
            },
            setSex : function(){
                this.setSexF = !this.setSexF
            },
            setBirth : function(){
                this.setBirthF = !this.setBirthF;
            }
        }
    }
</script>

<style>

</style>