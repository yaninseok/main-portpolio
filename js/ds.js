// script.js
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar', // 'line', 'pie' 등 다양한 타입 가능
    data: {
        labels: ['HTML', 'CSS', 'PHP', 'JAVASCRIPT', 'SITEDB'],
        datasets: [{
            label: 'My Skill',
            data: [85, 70, 35, 15, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true, // 반응형 활성화
        maintainAspectRatio: true, // 비율 유지
        indexAxis: 'x' //수평차트 만들기
    }
});
