<template>
    <div 
    class="theme-picker-wrapper"
    @mouseleave="setIsOpenPicker(false)">
        <div class="picker">
            <ul
                @mouseenter="setIsOpenPicker(true)"
            >
                <li
                    v-for="({ backgroundImage, top, left, transform }, index) in pickersData"
                    :style="{
                        opacity: isOpen ? '1' : '0',
                        backgroundImage,
                        top,
                        left,
                        transform
                    }"
                    @click="updateThemeBGC(backgroundImage)"
                ></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            isOpen: false,
            colorMap: [
                'linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%)',
                'linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)',
                'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)',
                'linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)'
            ],
        }
    },
    computed: {
        pickersData: function () {
            if (this.isOpen) {
                return this.colorMap.map((item, index) => {
                    return {
                        backgroundImage: item,
                        top: (20 - 12.5 + Math.cos(360 * (index / this.colorMap.length) * (Math.PI / 180)) * 50) + 'px',
                        left: (20 - 12.5 + Math.sin(360 * (index / this.colorMap.length) * (Math.PI / 180)) * 50) + 'px',
                        transform: 'translate(0%, 0%)'
                    }
                })
            } else {
                return this.colorMap.map((item, index) => {
                    return {
                        backgroundImage: item,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }
                })
            }
        },
    },
    methods: {
        setIsOpenPicker: function (bol) {
            this.isOpen = bol
            console.log(bol, 'bol')
        },
        updateThemeBGC: function (bgc) {
            let container = document.querySelectorAll('.container')[0];
            container.style.backgroundImage = bgc;
        }
    },
}
</script>
<style lang="scss" scoped>
$picker-wrapper-w: 120px;
$picker-wrapper-h: 120px;
$picker-t: $picker-wrapper-h/2;
$picker-l: $picker-wrapper-w/2;
$picker-w: 40px;
$picker-h: 40px;
$cr: 25px;

.theme-picker-wrapper {
    width: $picker-wrapper-w;
    height: $picker-wrapper-h;
    position: fixed;
    top: 10px;
    right: 10px;
    border-radius: 50%;
    &:hover {
       
    }
    .picker {
        position: absolute;
        top: $picker-t;
        left: $picker-l;
        border-radius: 50%;
        width: $picker-w;
        height: $picker-h;
        background-color: rgba(255, 230, 250, .6);
        transform: translate(-50%, -50%);
        cursor: pointer;
        &:hover {
            // background-color: rgba(255, 230, 250, 1);
        }
    }
    ul {
        position: relative;
        width: 100%;
        height: 100%;
        li {
            width: $cr;
            height: $cr;
            position: absolute;
            border-radius: 50%;
            transition: all 300ms ease;
        }
    }
}
</style>
