<template>
    <div class="left-delete">
        <div class="move"
             @touchstart="_touchStart"
             @touchmove="_touchMove"
             @touchend="_touchEnd"
             :style="txtStyle">
            <slot></slot>
            <!-- 在子组件中实现点击事件 把父组件的id传过来并 触发ajax请求 -->
            <div class="deleteIcon" :style="zIndex"  @click.prevent="deleteItem(childId)">
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['childId'],
        data() {
            return {
                startX: 0,       //触摸位置
                  moveX: 0,       //滑动时的位置
                  disX: 0,       //移动距离
                  txtStyle: '',
                delWidth: 200,
                top: '',
                zIndex: 'z-index:-1',
            }
        },
        methods: {
            _touchStart(ev) {
                ev = ev || event;
                if(ev.touches.length == 1){
                    // 手指按下的时候记录按下的位置
                    this.startX = ev.touches[0].clientX;
                    // console.log(this.startX)
                }
            },
            _touchMove(ev) {
                ev = ev || event;
                if(ev.touches.length == 1) {
                    // 滑动过程中的实时位置
                    this.moveX = ev.touches[0].clientX
                    // 滑动过程中实时计算滑动距离
                    this.disX = this.startX - this.moveX;
                    // console.log('disX==>',this.disX)
                    // 如果是向右滑动或者只是点击，不改变滑动位置
                    if(this.disX < 0 || this.disX == 0) {
                        // console.log('没有移动');
                        this.txtStyle = "transform:translateX(0rem)";
                    }else if (this.disX > 0) {
                        // 如果是向左滑动，则实时给这个根元素一个向左的偏移-left，当偏移量到达固定值delWidth时，固定元素的偏移量为 delWidth
                        this.txtStyle = "transform:translateX(-" + this.disX/40 + "rem)";
                        if (this.disX >= this.delWidth/40) {
                            this.txtStyle = "transform:translateX(-" + this.delWidth/40 + "rem)";
                            this.zIndex = "z-index:" + 8 + "rem";
                            // this.txtStyle = "transition:all easy-in 2s"
                        }
                    }
                }
            },
            _touchEnd(ev) {
                if (event.changedTouches.length == 1) {
                    this.startX = 0;
                    this.zIndex = "z-index:" + -1 + "rem";
                    // console.log(event.changedTouches[0].clientX)
                    // 手指移动结束后的水平位置
                    let endX = event.changedTouches[0].clientX;
                    // 触摸开始与结束,手指移动的距离
                    this.disX = this.startX - endX;
                    //如果距离小于删除按钮的1/2，不显示删除按钮
                }
            },
            deleteItem(id) {
                console.log(id)
                // 这里传id 
                // 12333传值过去
                this.$emit('deleteItem',1233)
            }
        }
    }
</script>

<style>
    .left-delete{
        width:100%;
        height:100%;
        position:relative;
        z-index:2;
        overflow: hidden;
    }
    .move{
        position: relative;
        transition: 0.2s ease-in;
    }
    .deleteIcon{
        width: 2rem;
        height:50px;
        position: absolute;
        right:-2rem; 
        top:1.9rem; 
        background-size: contain;
        background: url('../assets/imgs/delete.png') no-repeat;
    }
</style>