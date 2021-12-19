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
          value: 'shaped-ral-base',
          label: 'RAL-base'
        },
        {
          value: 'shaped-ral-1026',
          label: 'RAL-1026'
        },
        {
          value: 'shaped-ral-3004',
          label: 'RAL-3004'
        },
        {
          value: 'shaped-ral-4010',
          label: 'RAL-4010'
        },
        {
          value: 'shaped-ral-5001',
          label: 'RAL-5001'
        },
        {
          value: 'shaped-ral-5005',
          label: 'RAL-5005'
        },
        {
          value: 'shaped-ral-5008',
          label: 'RAL-5008'
        },
        {
          value: 'shaped-ral-6021',
          label: 'RAL-6021'
        },
        {
          value: 'shaped-ral-6033',
          label: 'RAL-6033'
        },
        {
          value: 'shaped-ral-7000',
          label: 'RAL-7000'
        },
        {
          value: 'shaped-ral-7002',
          label: 'RAL-7002'
        },
        {
          value: 'shaped-ral-7016',
          label: 'RAL-7016'
        },
        {
          value: 'shaped-ral-7021',
          label: 'RAL-7021'
        },
        {
          value: 'shaped-ral-7023',
          label: 'RAL-7023'
        },
        {
          value: 'shaped-ral-7032',
          label: 'RAL-7032'
        },
        {
          value: 'shaped-ral-7045',
          label: 'RAL-7045'
        },
        {
          value: 'shaped-ral-9002',
          label: 'RAL-9002'
        },
        {
          value: 'shaped-ral-9005',
          label: 'RAL-9005'
        },
        {
          value: 'shaped-ral-9006',
          label: 'RAL-9006'
        },
        {
          value: 'shaped-ral-9010',
          label: 'RAL-9010'
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
          }
        ]
      },
      selected: 0,
      options: [
        {
          value: 'flushed-ral-1026',
          label: 'RAL-1026'
        },
        {
          value: 'flushed-ral-4010',
          label: 'RAL-4010'
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
      name: 'handle-color',
      label: $localize`Handle color`,
      type: FieldType.LIST,
      condition: {
        items: [
          {
            field: 'handle',
            value: 'flushed'
          },
          {
            field: 'handle-position',
            value: 'flushed-top'
          }
        ]
      },
      selected: 0,
      options: [
        {
          value: 'flushed-top-black',
          label: $localize`Black`
        },
        {
          value: 'flushed-top-silver',
          label: $localize`Silver`
        }
      ]
    },
    {
      name: 'handle-color',
      label: $localize`Handle color`,
      type: FieldType.LIST,
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
          value: 'flushed-bottom-black',
          label: $localize`Black`
        },
        {
          value: 'flushed-bottom-silver',
          label: $localize`Silver`
        }
      ]
    },
    {
      name: 'handle-color',
      label: $localize`Handle color`,
      type: FieldType.LIST,
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
          value: 'long-black',
          label: $localize`Black`
        },
        {
          value: 'long-silver',
          label: $localize`Silver`
        }
      ]
    },
    {
      name: 'lock',
      label: $localize`Lock`,
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
          value: 'shaped-black',
          label: $localize`Black`
        },
        {
          value: 'shaped-satin',
          label: $localize`Satin`
        },
        {
          value: 'shaped-silver',
          label: $localize`Silver`
        }
      ]
    },
    {
      name: 'lock',
      label: $localize`Lock`,
      type: FieldType.GRID,
      condition: {
        items: [
          {
            field: 'handle',
            value: 'shaped',
            compare: '!='
          }
        ]
      },
      selected: 0,
      options: [
        {
          value: 'black',
          label: $localize`Black`
        },
        {
          value: 'silver',
          label: $localize`Silver`
        }
      ]
    }
  ]
}
