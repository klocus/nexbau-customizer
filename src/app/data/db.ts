import { Item } from './Item';

export const ITEMS: Item[] = [
  {
    id: 1,
    name: 'one',
    label: 'One',
    fields: [
      {
        name: 'base',
        label: 'Base',
        type: 'list',
        options: [
          {
            label: 'Wood',
            value: 'wood',
          },
          {
            label: 'Wire',
            value: 'wire',
          },
        ]
      },
      {
        name: 'shell',
        label: 'Shell color',
        type: 'grid',
        options: [
          {
            label: 'Cream',
            value: 'cream',
          },
          {
            label: 'Ice',
            value: 'ice',
          },
          {
            label: 'Red',
            value: 'red',
          },
        ]
      },
    ],
  },
  {
    id: 2,
    name: 'two',
    label: 'Two',
    fields: [
      {
        name: 'color',
        label: 'Color',
        type: 'grid',
        options: [
          {
            label: 'Orange',
            value: 'orange',
          },
          {
            label: 'Blue',
            value: 'blue',
          },
          {
            label: 'Green',
            value: 'green',
          },
        ]
      },
    ],
  },
  {
    id: 3,
    name: 'three',
    label: 'Three',
    fields: [
      {
        name: 'color',
        label: 'Color',
        type: 'grid',
        options: [
          {
            label: 'Orange',
            value: 'orange',
          },
          {
            label: 'Blue',
            value: 'blue',
          },
          {
            label: 'Green',
            value: 'green',
          },
        ]
      },
    ],
  },
];
