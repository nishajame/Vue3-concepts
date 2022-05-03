<template>
<div>
    <h2>Binding Text</h2>  
    <div>{{ greet }} {{ name }}</div>
    <div v-text="channel"></div>
</div>
<div>
    <h2>Binding HTML</h2>
    <div v-html="channelBold"></div>  
    <div v-html="hack"></div>  
</div> 
<div>
    <h2>Binding to attributes</h2>  
    <h4>Heading</h4> 
    <button v-bind:disabled="isDisabled">Bind</button> 
</div> 
<div>
    <h2>Binding Classes</h2>
    <h4 class="underline">Underlined text</h4>
    <h4 class="underline" :class="status">Status</h4>
    <h4 :class="isPromoted && 'promoted'">Promoted movies</h4>
    <h4 :class="isSoldout? 'soldout' : 'new'">Soldout? movie</h4>
    <h4 v-bind:class="['new', 'promoted']">Newly promoted movies</h4>
    <h4 v-bind:class="[isPromoted && 'promoted', isSoldout? 'soldout' : 'new']">Array conditional movie</h4>
    <h4 v-bind:class="{
        promoted: isPromoted,
        new: !isSoldout,
        soldout: isSoldout
    }">Object conditional movie</h4>
</div>
<div>
    <h2>Binding Styles</h2>
    <h4 v-bind:style="{
        color: highlightColor,
        fontSize: headerSize + 'px',
        padding: '20px'
    }">Inline style</h4>
    <h4 :style="headerStyleObject">Style object</h4>
    <div :style="[baseStyleObject, successStyleObject]">Success Style Array</div>
    <div :style="[baseStyleObject, dangerStyleObject]">Danger Style Array</div>

</div>
</template>

<script>
export default {
    data(){
        return{
            greet: 'Hello',
            name: 'Tom',
            channel: 'Codevolution',
            channelBold: '<b>Codevolution</b>',
            hack: `<a href="#" onclick="alert('You have been hacked!')">Win a prize!</a>`,
            headingId: 'heading',
            isDisabled: true,
            status: 'danger',
            isPromoted: false,
            isSoldout: true,
            highlightColor: 'orange',
            headerSize: 50,
            headerStyleObject: {
                color: 'orange',
                fontSize: '50px',
                padding: '20px'
            },
            baseStyleObject:{
                fontSize: '50px',
                padding: '10px'
            },
            successStyleObject:{
                color: 'green',
                backgroundColor: 'lightgreen',
                border: '1px solid green'
            },
            dangerStyleObject:{
                color: 'darkred',
                backgroundColor: 'red',
                border: '1px solid darkred'
            }
        }
    }
}
</script>

<style scopped>
.underline{
    text-decoration: underline;
}
.promoted{
    font-style: italic;
}
.new{
    color: olivedrab;
}
.soldout{
    color: red;
}
</style>