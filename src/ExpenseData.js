const data = {}
data.expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450.00,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Iron Desk',
    amount: 150.20,
    date: new Date(2019, 6, 11),
  },
];

data.filterYear = [ '2023', '2022', '2021', '2020', '2019' ]

data.chartData = [
  {label: 'Jan', value: 0},
  {label: 'Feb', value: 0},
  {label: 'Mar', value: 0},
  {label: 'Apr', value: 0},
  {label: 'May', value: 0},
  {label: 'Jun', value: 0},
  {label: 'Jul', value: 0},
  {label: 'Aug', value: 0},
  {label: 'Sep', value: 0},
  {label: 'Oct', value: 0},
  {label: 'Nov', value: 0},
  {label: 'Dec', value: 0}
]

export default data;