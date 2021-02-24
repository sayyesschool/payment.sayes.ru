export const PROMOCODE = 'FAST20';

export const formats = [
    {
        id: 'offline',
        title: 'Оффлайн индивидуально',
        description: 'Выберите это обучение, если вы занимаетесь с преподавателем лично - у нас в школе, дома или в офисе',
        types: [
            {
                id: 'russian',
                description: 'Обучение с русскоязычным преподавателем',
                packs: [
                    { id: 1, description: '1 урок', price: 1900 },
                    { id: 2, description: '2 урока', price: 7000 },
                    { id: 8, description: '8 уроков', price: 12800 },
                    { id: 16, description: '16 уроков', price: 24800 }
                ]
            },
            {
                id: 'native',
                description: 'Обучение с носителем языка',
                packs: [
                    { id: 1, description: '1 урок', price: 2150 },
                    { id: 2, description: '2 урока', price: 7800 },
                    { id: 8, description: '8 уроков', price: 14400 },
                    { id: 16, description: '16 уроков', price: 27200 }
                ]
            },
            {
                id: 'prep',
                description: 'Подготовка к экзаменам, специальные курсы, бизнес-курс',
                packs: [
                    { id: 1, description: '1 урок', price: 2150 },
                    { id: 2, description: '2 урока', price: 7800 },
                    { id: 8, description: '8 уроков', price: 14400 },
                    { id: 16, description: '16 уроков', price: 27200 }
                ]
            }
        ]
    },
    {
        id: 'online',
        title: 'Онлайн индивидуально',
        description: 'Выберите это обучение, если вы занимаетесь дистанционно по Скайп',
        types: [
            {
                id: 'russian',
                description: 'Обучение с русскоязычным преподавателем',
                packs: [
                    { id: 4, description: '4 урока', price: 4150 },
                    { id: 8, description: '8 уроков', price: 7600 },
                    { id: 16, description: '16 уроков', price: 14100 },
                    { id: 32, description: '32 урока', price: 26100 }
                ]
            },
            {
                id: 'native',
                description: 'Обучение с носителем языка',
                packs: [
                    { id: 4, description: '4 урока', price: 5800 },
                    { id: 8, description: '8 уроков', price: 10850 },
                    { id: 16, description: '16 уроков', price: 20980 },
                    { id: 32, description: '32 урока', price: 38400 }
                ]
            },
            {
                id: 'prep',
                description: 'Подготовка к экзаменам, специальные курсы, бизнес-курс',
                packs: [
                    { id: 4, description: '4 урока', price: 5800 },
                    { id: 8, description: '8 уроков', price: 10850 },
                    { id: 16, description: '16 уроков', price: 20980 },
                    { id: 32, description: '32 урока', price: 38400 }
                ]
            }
        ]
    },
    {
        id: 'online-group',
        title: 'Онлайн в группе',
        description: 'Выберите это обучение, если вы занимаетесь в группе по Zoom',
        packs: [
            { id: 1, description: '1 месяц обучения (8 занятий)', price: 8000 },
            { id: 2, description: '3 месяца обучения (24 занятий)', price: 19500 },
            { id: 3, description: '6 месяца обучения (48 занятия)', price: 31500 }
        ]
    }
];