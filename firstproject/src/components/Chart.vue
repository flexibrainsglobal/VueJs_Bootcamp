<template>
    <div>
        <h1>Chart Js</h1>
        <canvas id="myChart" width="400" height="400"></canvas>
    </div>
</template>
<script>
import Chart from 'chart.js'
import LineChart from '../Chart/line'
import axios from 'axios'
export default {
    name:"Chart",
    data() {
        return {
            LineChart: LineChart
        }
    },
    mounted() {
        
        var _this = this
        axios.get("http://localhost:3000/chart").then(function (response) {
            var respData = response.data
            var depArr = []
            var priceArr = []
            respData.forEach(element => {
                var dep = element.department
                var prices = element.price
                
                depArr.push(dep);
                priceArr.push(prices)
            });

            _this.LineChart.data.labels = depArr
            _this.LineChart.data.datasets[0].data = priceArr

            var ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx,_this.LineChart);
      });
    },
}
</script>
<style lang="">
    
</style>