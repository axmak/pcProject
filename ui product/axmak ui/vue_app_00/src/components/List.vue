<template>
    <div>
        <mt-header title="codeboy"></mt-header>
        <h1>列表组件</h1>
        <ul>
            <li v-for="item of list" :key="item.i"> 
                {{item.lid}} - {{item.name}}
            </li>
        </ul>
        <mt-button>login</mt-button>
    </div> 
</template>
<script>
export default {
    data(){
        return {
            list:[{lid:1,name:"东东"},{lid:2,name:"华华"}]
        }
    }
}
</script>
