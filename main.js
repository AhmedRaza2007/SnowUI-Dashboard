        const sidebar = document.getElementById('sidebar');
        const sidebarToggle = document.getElementById('sidebarToggle');
        const overlay = document.getElementById('overlay');

        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        });

        const ctxUser = document.getElementById('userChart').getContext('2d');
        const ctxDevice = document.getElementById('deviceChart').getContext('2d');
        const ctxLocation = document.getElementById('locationChart').getContext('2d');
        const ctxProduct = document.getElementById('productChart').getContext('2d');

        const commonOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false },
                    ticks: { color: '#A0A0A0', font: { size: 10 } }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#A0A0A0', font: { size: 10 } }
                }
            }
        };

        new Chart(ctxUser, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Users',
                    data: [20, 15, 18, 25, 22, 28],
                    borderColor: '#A155B9',
                    borderWidth: 2,
                    pointBackgroundColor: '#FFFFFF',
                    pointBorderColor: '#000000',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        enabled: true,
                        backgroundColor: '#282828',
                        titleColor: '#FFFFFF',
                        bodyColor: '#FFFFFF',
                        borderColor: '#333333',
                        borderWidth: 1,
                        padding: 10,
                        displayColors: false
                    }
                }
            }
        });

        new Chart(ctxDevice, {
            type: 'bar',
            data: {
                labels: ['Linux', 'Mac', 'iOS', 'Windows', 'Android', 'Other'],
                datasets: [{
                    data: [40, 60, 50, 80, 100, 30],
                    backgroundColor: (context) => {
                        const index = context.dataIndex;
                        return index === 4 ? '#4D96FF' : 'rgba(255, 255, 255, 0.1)';
                    },
                    borderRadius: 8,
                    barThickness: 30
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    y: { display: false },
                    x: { grid: { display: false }, ticks: { color: '#A0A0A0', font: { size: 10 } } }
                }
            }
        });

        new Chart(ctxLocation, {
            type: 'bar',
            data: {
                labels: ['US', 'Canada', 'Mexico', 'China', 'Japan', 'Australia'],
                datasets: [{
                    data: [100, 70, 60, 85, 90, 65],
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    hoverBackgroundColor: '#27AE60',
                    borderRadius: 8,
                    barThickness: 30
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    y: { display: false },
                    x: { grid: { display: false }, ticks: { color: '#A0A0A0', font: { size: 10 } } }
                }
            }
        });

        new Chart(ctxProduct, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'SnowUI',
                        data: [20, 30, 25, 35, 45, 30, 40, 35, 45, 50, 40, 45],
                        backgroundColor: '#4D96FF',
                        borderRadius: 4,
                        barThickness: 4
                    },
                    {
                        label: 'Dashboard',
                        data: [15, 20, 15, 25, 30, 20, 30, 25, 35, 40, 30, 35],
                        backgroundColor: '#A155B9',
                        borderRadius: 4,
                        barThickness: 4
                    }
                ]
            },
            options: {
                ...commonOptions,
                scales: {
                    y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#A0A0A0' } },
                    x: { grid: { display: false }, ticks: { color: '#A0A0A0' } }
                }
            }
        });