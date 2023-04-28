<template>
    <div class="chart-input-content">
        <div class="container">
            <label for="chart-pair-id">Pair ID</label>
            <input v-model="pairId" type="text" id="chart-pair-id"/>

            <label for="chart-pair-title">Pair Title</label>
            <input v-model="chartTitle" type="text" id="chart-pair-title"/>
        </div>

        <Button caption="Add" @click="addChart"/>
    </div>
</template>

<script setup>
import {useStore} from 'vuex'
import {ref}      from 'vue'
import Button     from './Button.vue'

const pairId = ref('')
const chartTitle = ref('')

const store = useStore()

const addChart = () => {
    console.log('trying to addChart')
    if (!pairId.value || !chartTitle.value) {
        return console.error('fields required')
    }
    store.dispatch('addChart', {
        pair_id: pairId.value,
        chart_title: chartTitle.value
    })
}

</script>

<style scoped>
.chart-input-content {
    display: flex;
}

.container {
    display: flex;
    padding: 0.5rem 1rem;
}

.container * {
    padding: 0.2rem 0.2rem;
    margin: auto 0.3rem auto auto;
    color: white;
    text-align: center;
    font-size: 18px;

}
</style>
