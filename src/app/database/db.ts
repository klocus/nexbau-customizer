import { Door } from './door';

export const DOORS: Door[] = [
  {
    id: 1,
    name: 'One',
    fields: [
      {
        name: 'color',
        type: 'radio',
        value: ['orange', 'blue', 'green']
      },
      {
        name: 'size',
        type: 'radio',
        value: ['small', 'medium', 'large']
      },
    ],
  },
  {
    id: 2,
    name: 'Two',
    fields: [
      {
        name: 'color',
        type: 'radio',
        value: ['orange', 'blue', 'green']
      },
      {
        name: 'size',
        type: 'radio',
        value: ['small', 'medium', 'large']
      },
    ],
  },
  {
    id: 3,
    name: 'Three',
    fields: [
      {
        name: 'color',
        type: 'radio',
        value: ['orange', 'blue', 'green']
      },
      {
        name: 'size',
        type: 'radio',
        value: ['small', 'medium', 'large']
      },
    ],
  },
];
