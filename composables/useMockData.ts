import { ref } from 'vue'

export function useMockData() {
    const cards = ref([
        {
            id: 1,
            title: 'Active users',
            value: '1,234',
            delta: '+3.4%',
            deltaType: 'up',
            description: 'Users active in the last 24 hours',
        },
        {
            id: 2,
            title: 'New signups',
            value: '56',
            delta: '+8%',
            deltaType: 'up',
            description: 'Accounts created in the last 7 days',
        },
        {
            id: 3,
            title: 'Errors',
            value: '2',
            delta: '-20%',
            deltaType: 'down',
            description: 'System errors in the last 24 hours',
        },
    ])

    // small helper to simulate updating values (not used by default)
    function refresh() {
        // naive random tweak for demo purposes
        cards.value = cards.value.map((c) => ({ ...c }))
    }

    return { cards, refresh }
}
