import { defineStore } from 'pinia'
import charts from './default_charts.json'
import type { ChartItem } from './chart.interface'

interface ChartState {
  charts: ChartItem[]
  loaded: boolean
}

const defaultChartValues = <ChartItem>{
  market_cap: 1000,
  status: 'none',
  reliability: 90
}

export const useChartStore = defineStore('useChartsStore', {
  state: (): ChartState => ({ charts: [], loaded: false }),
  getters: {},
  actions: {
    addChart(payload: ChartItem) {
      const newData = { ...payload, ...defaultChartValues }
      console.log('adding chart', newData)
      this.charts.push(newData)
      console.log('state charts', this.charts)
      localStorage.setItem('charts', JSON.stringify(newData))
    },
    removeChart(id: string) {
      this.charts.splice(
        this.charts.findIndex((c) => c.id === id),
        1
      )
    },

    loadCharts() {
      this.$reset()
      console.log('loadCharts..')
      try {
        const existing = JSON.parse(localStorage.getItem('charts') || '')
        this.charts.push(existing)
      } catch (e) {
        console.log('loading default charts..')

        this.charts.push(...charts.map((chart) => ({ ...chart, ...defaultChartValues })))
      }
      this.loaded = true
    }
  }
})
