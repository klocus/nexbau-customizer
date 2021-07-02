import { Door } from './door';

export const DOORS: Door[] = [
  {
    id: 1,
    name: 'one',
    label: 'One',
    fields: [
      {
        name: 'base',
        label: 'Base',
        type: 'radio',
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
        label: 'Shell',
        type: 'radio',
        options: [
          {
            label: 'Plastic',
            value: 'plastic',
          },
          {
            label: 'Covered',
            value: 'covered',
          },
        ]
      },
      {
        name: 'color',
        label: 'Color',
        type: 'radio',
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
    id: 2,
    name: 'two',
    label: 'Two',
    fields: [
      {
        name: 'color',
        label: 'Color',
        type: 'radio',
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
        type: 'radio',
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
