import { Item } from '../Item.interface';
import { FieldType } from '../FieldType.enum';

export const Idea: Item = {
  id: 2,
  name: 'idea',
  label: 'Idea',
  fields: [
    {
      name: 'handle',
      label: $localize`Handle`,
      type: FieldType.LIST,
      selected: 0,
      options: [
        {
          value: 'shaped',
          label: $localize`Shaped in the door plane`
        },
        {
          value: 'flushed',
          label: $localize`Flushed with the door plane`
        },
        {
          value: 'mounted',
          label: $localize`Mounted to the door plane`
        },
        {
          value: 'long',
          label: $localize`Long handle`
        }
      ]
    },
    {
      name: 'handle-position',
      label: $localize`Handle position`,
      type: FieldType.LIST,
      condition: {
        items: [
          {
            field: 'handle',
            value: 'flushed'
          }
        ]
      },
      selected: 0,
      options: [
        {
          value: 'flushed-top',
          label: $localize`Top`
        },
        {
          value: 'flushed-bottom',
          label: $localize`Bottom`
        }
      ]
    },
    {
      name: 'handle-position',
      label: $localize`Handle position`,
      type: FieldType.LIST,
      condition: {
        items: [
          {
            field: 'handle',
            value: 'mounted'
          }
        ]
      },
      selected: 0,
      options: [
        {
          value: 'mounted-top',
          label: $localize`Top`
        },
        {
          value: 'mounted-bottom',
          label: $localize`Bottom`
        }
      ]
    },
    {
      name: 'filling',
      label: $localize`Filling`,
      type: FieldType.GRID,
      condition: {
        items: [
          {
            field: 'handle',
            value: 'shaped'
          }
        ]
      },
      selected: 0,
      options: [
        {
          value: 'shaped-ral-6033',
          label: 'RAL-6033'
        },
        {
          value: 'shaped-ral-6021',
          label: 'RAL-6021'
        }
      ]
    },
    {
      name: 'filling',
      label: $localize`Filling`,
      type: FieldType.GRID,
      condition: {
        items: [
          {
            field: 'handle',
            value: 'flushed'
          },
          {
            field: 'handle-position',
            value: 'flushed-bottom'
          }
        ]
      },
      selected: 0,
      options: [
        {
          value: 'flushed-bottom-ral-5001',
          label: 'RAL-5001'
        },
        {
          value: 'flushed-bottom-ral-5005',
          label: 'RAL-5005'
        }
      ]
    },
    {
      name: 'filling',
      label: $localize`Filling`,
      type: FieldType.GRID,
      condition: {
        items: [
          {
            field: 'handle',
            value: 'long'
          }
        ]
      },
      selected: 0,
      options: [
        {
          value: 'long-structural-varnish',
          label: $localize`Structural varnish`
        },
        {
          value: 'long-ral-3004',
          label: 'RAL-3004'
        },
        {
          value: 'long-ral-5001',
          label: 'RAL-5001'
        },
        {
          value: 'long-ral-5005',
          label: 'RAL-5005'
        },
        {
          value: 'long-ral-6021',
          label: 'RAL-6021'
        },
        {
          value: 'long-ral-6033',
          label: 'RAL-6033'
        },
        {
          value: 'long-ral-7016',
          label: 'RAL-7016'
        },
        {
          value: 'long-ral-7045',
          label: 'RAL-7045'
        }
      ]
    }
  ]
}
