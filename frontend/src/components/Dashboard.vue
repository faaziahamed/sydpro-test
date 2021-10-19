<template>
  <div class="row">
    <div class="col-md-8 mx-auto mb-5">
      <h5>date range</h5>
      <div class="row">
        <div class="col-md-6">
          <input type="date" class="form-control" placeholder="Start date" />
        </div>
        <div class="col-md-6">
          <input type="date" class="form-control" placeholder="End date" />
        </div>
        <div class="col-md-12 mt-2">
          <button class="btn btn-primary align-middle">Update</button>
        </div>
      </div>
    </div>
    <div class="col-md-8 mx-auto">
      <BarChart v-bind="barChartProps" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { BarChart, useBarChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: "dashboard",
  components: { BarChart },
  setup() {
    const testData = computed<ChartData<"bar">>(() => ({
      labels: [
        "01/01/2021",
        "02/01/2021",
        "03/01/2021",
        "04/01/2021",
        "05/01/2021",
        "06/01/2021",
      ],
      datasets: [
        {
          data: [34, 50, 23, 42, 75, 48],
          backgroundColor: ["#00bcd4"],
        },
      ],
    }));

    const options = computed<ChartOptions<"bar">>(() => ({
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Device count",
        },
      },
    }));

    const { barChartProps, barChartRef } = useBarChart({
      chartData: testData,
      options,
    });

    return { testData, options, barChartProps, barChartRef };
  },
});
</script>
