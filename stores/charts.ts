import { defineStore } from 'pinia'
import charts from './default_charts.json'
import type { ChartItem } from './chart.interface'

interface ChartState {
  charts: ChartItem[]
  loaded: boolean
}

export const useChartStore = defineStore('useChartsStore', {
  state: (): ChartState => ({ charts: [], loaded: false }),
  getters: {},
  actions: {
    addChart(payload: ChartItem) {
      console.log('adding chart', payload)
      this.charts.push(payload)
      console.log('state', this.charts)
    },
    loadCharts() {
      console.log('loadCharts..')
      this.charts.push(...charts)
      this.loaded = true
    }
  }
})
