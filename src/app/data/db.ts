import { Item } from './Item.interface';
import { FieldType } from './FieldType.enum';

export const ITEMS: Item[] = [
  {
    id: 1,
    name: 'one',
    label: 'One',
    fields: [
      {
        name: 'base',
        label: 'Base',
        type: FieldType.LIST,
        selected: 0,
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
        type: FieldType.GRID,
        condition: {
          field: 'base',
          value: 'wire'
        },
        selected: 0,
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
        type: FieldType.GRID,
        selected: 0,
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
        type: FieldType.GRID,
        selected: 0,
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
