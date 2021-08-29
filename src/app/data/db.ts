import { Item } from './Item.interface';
import { FieldType } from './FieldType.enum';

export const ITEMS: Item[] = [
  {
    id: 1,
    name: 'flex',
    label: 'Flex',
    fields: [
      {
        name: 'frame',
        label: $localize`Frame`,
        type: FieldType.GRID,
        selected: 0,
        options: [
          {
            value: 'anthracite',
            label: $localize`Anthracite`
          },
          {
            value: 'black',
            label: $localize`Black`
          }
        ]
      },
      {
        name: 'filling',
        label: $localize`Filling`,
        type: FieldType.GRID,
        selected: 0,
        options: [
          {
            value: 'black',
            label: $localize`Black`
          },
          {
            value: 'glass',
            label: $localize`Glass`
          }
        ]
      },
      {
        name: 'handle',
        label: $localize`Handle`,
        type: FieldType.GRID,
        selected: 0,
        options: [
          {
            value: 'black',
            label: $localize`Black`
          },
          {
            value: 'standard',
            label: $localize`Standard`
          }
        ]
      },
      {
        name: 'lock',
        label: $localize`Lock`,
        type: FieldType.GRID,
        selected: 0,
        options: [
          {
            value: 'black',
            label: $localize`Black`
          },
          {
            value: 'standard',
            label: $localize`Standard`
          }
        ]
      },
    ],
  }
];
