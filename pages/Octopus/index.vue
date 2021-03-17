<template>
    <div :class="[classPrefix + '-container-wrapper']">
        <div class="artical-list-wrapper">
            <ArticalList :classPrefix="classPrefix" :postsData="activePostsList" />
        </div>
        <div class="calendar-wrapper">
            <a-calendar :fullscreen="false" :header-render="headerRender" @panelChange="onPanelChange" @select="onSelect"/>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

export default {
    props: {
        classPrefix: {
            type: String,
            default: 'octopus',
        },
    },
    layout: 'Octopus',
    data: function () {
        return {};
    },
    computed: {
        ...mapState(['activePostsList']),
    },
    methods: {
        onPanelChange(value, mode) {
            // console.log(value, mode);
        },
        onSelect(value, mode) {
            console.log(value.format('YYYY-MM-DD'), mode, 'day');
        },
        headerRender({ value, type, onChange, onTypeChange }) {
            const start = 0;
            const end = 12;
            const monthOptions = [];

            const current = value.clone();
            const localeData = value.localeData();
            const months = [];
            for (let i = 0; i < 12; i++) {
                current.month(i);
                months.push(localeData.monthsShort(current));
            }

            for (let index = start; index < end; index++) {
                monthOptions.push(
                    <a-select-option class="month-item" key={`${index}`}>
                        {months[index]}
                    </a-select-option>
                );
            }
            const month = value.month();

            const year = value.year();
            const options = [];
            for (let i = year - 10; i < year + 10; i += 1) {
                options.push(
                    <a-select-option key={i} value={i} class="year-item">
                        {i}
                    </a-select-option>
                );
            }
            // <a-col>
            //     <a-radio-group size="small" onChange={e => onTypeChange(e.target.value)} value={type}>
            //         <a-radio-button value="month">月份</a-radio-button>
            //         <a-radio-button value="year">年份</a-radio-button>
            //     </a-radio-group>
            // </a-col>
            return (
                <div style={{ padding: '10px' }}>
                    <a-row type="flex" justify="space-between">
                        <a-col>
                            <a-select
                                size="small"
                                dropdownMatchSelectWidth={false}
                                class="my-year-select"
                                onChange={newYear => {
                                    const now = value.clone().year(newYear);
                                    onChange(now);
                                }}
                                value={String(year)}
                            >
                                {options}
                            </a-select>
                        </a-col>
                        <a-col>
                            <a-select
                                size="small"
                                dropdownMatchSelectWidth={false}
                                value={String(month)}
                                onChange={selectedMonth => {
                                    const newValue = value.clone();
                                    newValue.month(parseInt(selectedMonth, 10));
                                    onChange(newValue);
                                }}
                            >
                                {monthOptions}
                            </a-select>
                        </a-col>
                    </a-row>
                </div>
            );
        },
    },
};
</script>
<style lang="scss" scoped>
.octopus-container-wrapper {
    display: flex;
    .artical-list-wrapper {
        flex: 1;
    }
    .calendar-wrapper {
        width: 270px;
        margin-left: 20px;
        height: fit-content;
        background-color: #fff;
    }
}
</style>
