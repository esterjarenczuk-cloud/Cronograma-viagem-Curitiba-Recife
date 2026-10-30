document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('despesasChart').getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Passagem de avião',
                'Hospedagem',
                'Alimentação',
                'Transporte'
            ],
            datasets: [{
                label: 'Valor Final (R$)',
                data: [1300, 1000, 500, 150], // Valores baseados na planilha
                backgroundColor: [
                    '#4361ee',
                    '#3a0ca3',
                    '#7209b7',
                    '#4cc9f0'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let value = context.raw;
                            return ` R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
                        }
                    }
                }
            }
        }
    });
});
