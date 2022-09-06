import { Item } from '../Item.interface';
import { FieldType } from '../FieldType.enum';

export const Idea: Item = {
  id: 2,
  name: 'idea',
  label: 'Idea',
  fields: [
    {
      name: 'frame',
      label: $localize`Frame`,
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
          value: 'shaped-ral-1026',
          label: 'RAL-1026',
          icon: 'ral-1026'
        },
        {
          value: 'shaped-ral-3004',
          label: 'RAL-3004',
          icon: 'ral-3004'
        },
        {
          value: 'shaped-ral-4010',
          label: 'RAL-4010',
          icon: 'ral-4010'
        },
        {
          value: 'shaped-ral-5001',
          label: 'RAL-5001',
          icon: 'ral-5001'
        },
        {
          value: 'shaped-ral-5005',
          label: 'RAL-5005',
          icon: 'ral-5005'
        },
        {
          value: 'shaped-ral-5008',
          label: 'RAL-5008',
          icon: 'ral-5008'
        },
        {
          value: 'shaped-ral-6021',
          label: 'RAL-6021',
          icon: 'ral-6021'
        },
        {
          value: 'shaped-ral-6033',
          label: 'RAL-6033',
          icon: 'ral-6033'
        },
        {
          value: 'shaped-ral-7000',
          label: 'RAL-7000',
          icon: 'ral-7000'
        },
        {
          value: 'shaped-ral-7002',
          label: 'RAL-7002',
          icon: 'ral-7002'
        },
        {
          value: 'shaped-ral-7016',
          label: 'RAL-7016',
          icon: 'ral-7016'
        },
        {
          value: 'shaped-ral-7021',
          label: 'RAL-7021',
          icon: 'ral-7021'
        },
        {
          value: 'shaped-ral-7023',
          label: 'RAL-7023',
          icon: 'ral-7023'
        },
        {
          value: 'shaped-ral-7032',
          label: 'RAL-7032',
          icon: 'ral-7032'
        },
        {
          value: 'shaped-ral-7045',
          label: 'RAL-7045',
          icon: 'ral-7045'
        },
        {
          value: 'shaped-ral-9002',
          label: 'RAL-9002',
          icon: 'ral-9002'
        },
        {
          value: 'shaped-ral-9005',
          label: 'RAL-9005',
          icon: 'ral-9005'
        },
        {
          value: 'shaped-ral-9006',
          label: 'RAL-9006',
          icon: 'ral-9006'
        },
        {
          value: 'shaped-ral-9010',
          label: 'RAL-9010',
          icon: 'ral-9010'
        }
      ]
    },
    {
      name: 'frame',
      label: $localize`Frame`,
      type: FieldType.GRID,
      condition: {
        items: [
          {
            field: 'handle',
            value: 'flushed'
          },
          {
            field: 'handle-position',
            value: 'top'
          }
        ]
      },
      selected: 0,
      options: [
        {
          value: 'top-ral-1026',
          label: 'RAL-1026',
          icon: 'ral-1026'
        },
        {
          value: 'top-ral-3004',
          label: 'RAL-3004',
          icon: 'ral-3004'
        },
        {
          value: 'top-ral-4010',
          label: 'RAL-4010',
          icon: 'ral-4010'
        },
        {
          value: 'top-ral-5001',
          label: 'RAL-5001',
          icon: 'ral-5001'
        },
        {
          value: 'top-ral-5005',
          label: 'RAL-5005',
          icon: 'ral-5005'
        },
        {
          value: 'top-ral-5008',
          label: 'RAL-5008',
          icon: 'ral-5008'
        },
        {
          value: 'top-ral-6021',
          label: 'RAL-6021',
          icon: 'ral-6021'
        },
        {
          value: 'top-ral-6033',
          label: 'RAL-6033',
          icon: 'ral-6033'
        },
        {
          value: 'top-ral-7000',
          label: 'RAL-7000',
          icon: 'ral-7000'
        },
        {
          value: 'top-ral-7002',
          label: 'RAL-7002',
          icon: 'ral-7002'
        },
        {
          value: 'top-ral-7016',
          label: 'RAL-7016',
          icon: 'ral-7016'
        },
        {
          value: 'top-ral-7021',
          label: 'RAL-7021',
          icon: 'ral-7021'
        },
        {
          value: 'top-ral-7023',
          label: 'RAL-7023',
          icon: 'ral-7023'
        },
        {
          value: 'top-ral-7032',
          label: 'RAL-7032',
          icon: 'ral-7032'
        },
        {
          value: 'top-ral-7045',
          label: 'RAL-7045',
          icon: 'ral-7045'
        },
        {
          value: 'top-ral-9002',
          label: 'RAL-9002',
          icon: 'ral-9002'
        },
        {
          value: 'top-ral-9005',
          label: 'RAL-9005',
          icon: 'ral-9005'
        },
        {
          value: 'top-ral-9006',
          label: 'RAL-9006',
          icon: 'ral-9006'
        },
        {
          value: 'top-ral-9010',
          label: 'RAL-9010',
          icon: 'ral-9010'
        }
      ]
    },
    {
      name: 'frame',
      label: $localize`Frame`,
      type: FieldType.GRID,
      condition: {
        items: [
          {
            field: 'handle',
            value: 'flushed'
          },
          {
            field: 'handle-position',
            value: 'bottom'
          }
        ]
      },
      selected: 0,
      options: [
        {
          value: 'bottom-ral-1026',
          label: 'RAL-1026',
          icon: 'ral-1026'
        },
        {
          value: 'bottom-ral-3004',
          label: 'RAL-3004',
          icon: 'ral-3004'
        },
        {
          value: 'bottom-ral-4010',
          label: 'RAL-4010',
          icon: 'ral-4010'
        },
        {
          value: 'bottom-ral-5001',
          label: 'RAL-5001',
          icon: 'ral-5001'
        },
        {
          value: 'bottom-ral-5005',
          label: 'RAL-5005',
          icon: 'ral-5005'
        },
        {
          value: 'bottom-ral-5008',
          label: 'RAL-5008',
          icon: 'ral-5008'
        },
        {
          value: 'bottom-ral-6021',
          label: 'RAL-6021',
          icon: 'ral-6021'
        },
        {
          value: 'bottom-ral-6033',
          label: 'RAL-6033',
          icon: 'ral-6033'
        },
        {
          value: 'bottom-ral-7000',
          label: 'RAL-7000',
          icon: 'ral-7000'
        },
        {
          value: 'bottom-ral-7002',
          label: 'RAL-7002',
          icon: 'ral-7002'
        },
        {
          value: 'bottom-ral-7016',
          label: 'RAL-7016',
          icon: 'ral-7016'
        },
        {
          value: 'bottom-ral-7021',
          label: 'RAL-7021',
          icon: 'ral-7021'
        },
        {
          value: 'bottom-ral-7023',
          label: 'RAL-7023',
          icon: 'ral-7023'
        },
        {
          value: 'bottom-ral-7032',
          label: 'RAL-7032',
          icon: 'ral-7032'
        },
        {
          value: 'bottom-ral-7045',
          label: 'RAL-7045',
          icon: 'ral-7045'
        },
        {
          value: 'bottom-ral-9002',
          label: 'RAL-9002',
          icon: 'ral-9002'
        },
        {
          value: 'bottom-ral-9005',
          label: 'RAL-9005',
          icon: 'ral-9005'
        },
        {
          value: 'bottom-ral-9006',
          label: 'RAL-9006',
          icon: 'ral-9006'
        },
        {
          value: 'bottom-ral-9010',
          label: 'RAL-9010',
          icon: 'ral-9010'
        }
      ]
    },
    {
      name: 'frame',
      label: $localize`Frame`,
      type: FieldType.GRID,
      condition: {
        items: [
          {
            field: 'handle',
            value: 'mounted'
          },
          {
            field: 'handle-position',
            value: 'top'
          }
        ]
      },
      selected: 0,
      options: [
        {
          value: 'top-ral-1026',
          label: 'RAL-1026',
          icon: 'ral-1026'
        },
        {
          value: 'top-ral-3004',
          label: 'RAL-3004',
          icon: 'ral-3004'
        },
        {
          value: 'top-ral-4010',
          label: 'RAL-4010',
          icon: 'ral-4010'
        },
        {
          value: 'top-ral-5001',
          label: 'RAL-5001',
          icon: 'ral-5001'
        },
        {
          value: 'top-ral-5005',
          label: 'RAL-5005',
          icon: 'ral-5005'
        },
        {
          value: 'top-ral-5008',
          label: 'RAL-5008',
          icon: 'ral-5008'
        },
        {
          value: 'top-ral-6021',
          label: 'RAL-6021',
          icon: 'ral-6021'
        },
        {
          value: 'top-ral-6033',
          label: 'RAL-6033',
          icon: 'ral-6033'
        },
        {
          value: 'top-ral-7000',
          label: 'RAL-7000',
          icon: 'ral-7000'
        },
        {
          value: 'top-ral-7002',
          label: 'RAL-7002',
          icon: 'ral-7002'
        },
        {
          value: 'top-ral-7016',
          label: 'RAL-7016',
          icon: 'ral-7016'
        },
        {
          value: 'top-ral-7021',
          label: 'RAL-7021',
          icon: 'ral-7021'
        },
        {
          value: 'top-ral-7023',
          label: 'RAL-7023',
          icon: 'ral-7023'
        },
        {
          value: 'top-ral-7032',
          label: 'RAL-7032',
          icon: 'ral-7032'
        },
        {
          value: 'top-ral-7045',
          label: 'RAL-7045',
          icon: 'ral-7045'
        },
        {
          value: 'top-ral-9002',
          label: 'RAL-9002',
          icon: 'ral-9002'
        },
        {
          value: 'top-ral-9005',
          label: 'RAL-9005',
          icon: 'ral-9005'
        },
        {
          value: 'top-ral-9006',
          label: 'RAL-9006',
          icon: 'ral-9006'
        },
        {
          value: 'top-ral-9010',
          label: 'RAL-9010',
          icon: 'ral-9010'
        }
      ]
    },
    {
      name: 'frame',
      label: $localize`Frame`,
      type: FieldType.GRID,
      condition: {
        items: [
          {
            field: 'handle',
            value: 'mounted'
          },
          {
            field: 'handle-position',
            value: 'bottom'
          }
        ]
      },
      selected: 0,
      options: [
        {
          value: 'bottom-ral-1026',
          label: 'RAL-1026',
          icon: 'ral-1026'
        },
        {
          value: 'bottom-ral-3004',
          label: 'RAL-3004',
          icon: 'ral-3004'
        },
        {
          value: 'bottom-ral-4010',
          label: 'RAL-4010',
          icon: 'ral-4010'
        },
        {
          value: 'bottom-ral-5001',
          label: 'RAL-5001',
          icon: 'ral-5001'
        },
        {
          value: 'bottom-ral-5005',
          label: 'RAL-5005',
          icon: 'ral-5005'
        },
        {
          value: 'bottom-ral-5008',
          label: 'RAL-5008',
          icon: 'ral-5008'
        },
        {
          value: 'bottom-ral-6021',
          label: 'RAL-6021',
          icon: 'ral-6021'
        },
        {
          value: 'bottom-ral-6033',
          label: 'RAL-6033',
          icon: 'ral-6033'
        },
        {
          value: 'bottom-ral-7000',
          label: 'RAL-7000',
          icon: 'ral-7000'
        },
        {
          value: 'bottom-ral-7002',
          label: 'RAL-7002',
          icon: 'ral-7002'
        },
        {
          value: 'bottom-ral-7016',
          label: 'RAL-7016',
          icon: 'ral-7016'
        },
        {
          value: 'bottom-ral-7021',
          label: 'RAL-7021',
          icon: 'ral-7021'
        },
        {
          value: 'bottom-ral-7023',
          label: 'RAL-7023',
          icon: 'ral-7023'
        },
        {
          value: 'bottom-ral-7032',
          label: 'RAL-7032',
          icon: 'ral-7032'
        },
        {
          value: 'bottom-ral-7045',
          label: 'RAL-7045',
          icon: 'ral-7045'
        },
        {
          value: 'bottom-ral-9002',
          label: 'RAL-9002',
          icon: 'ral-9002'
        },
        {
          value: 'bottom-ral-9005',
          label: 'RAL-9005',
          icon: 'ral-9005'
        },
        {
          value: 'bottom-ral-9006',
          label: 'RAL-9006',
          icon: 'ral-9006'
        },
        {
          value: 'bottom-ral-9010',
          label: 'RAL-9010',
          icon: 'ral-9010'
        }
      ]
    },
    {
      name: 'frame',
      label: $localize`Frame`,
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
          value: 'ral-1026',
          label: 'RAL-1026',
          icon: 'ral-1026'
        },
        {
          value: 'ral-3004',
          label: 'RAL-3004',
          icon: 'ral-3004'
        },
        {
          value: 'ral-4010',
          label: 'RAL-4010',
          icon: 'ral-4010'
        },
        {
          value: 'ral-5001',
          label: 'RAL-5001',
          icon: 'ral-5001'
        },
        {
          value: 'ral-5005',
          label: 'RAL-5005',
          icon: 'ral-5005'
        },
        {
          value: 'ral-5008',
          label: 'RAL-5008',
          icon: 'ral-5008'
        },
        {
          value: 'ral-6021',
          label: 'RAL-6021',
          icon: 'ral-6021'
        },
        {
          value: 'ral-6033',
          label: 'RAL-6033',
          icon: 'ral-6033'
        },
        {
          value: 'ral-7000',
          label: 'RAL-7000',
          icon: 'ral-7000'
        },
        {
          value: 'ral-7002',
          label: 'RAL-7002',
          icon: 'ral-7002'
        },
        {
          value: 'ral-7016',
          label: 'RAL-7016',
          icon: 'ral-7016'
        },
        {
          value: 'ral-7021',
          label: 'RAL-7021',
          icon: 'ral-7021'
        },
        {
          value: 'ral-7023',
          label: 'RAL-7023',
          icon: 'ral-7023'
        },
        {
          value: 'ral-7032',
          label: 'RAL-7032',
          icon: 'ral-7032'
        },
        {
          value: 'ral-7045',
          label: 'RAL-7045',
          icon: 'ral-7045'
        },
        {
          value: 'ral-9002',
          label: 'RAL-9002',
          icon: 'ral-9002'
        },
        {
          value: 'ral-9005',
          label: 'RAL-9005',
          icon: 'ral-9005'
        },
        {
          value: 'ral-9006',
          label: 'RAL-9006',
          icon: 'ral-9006'
        },
        {
          value: 'ral-9010',
          label: 'RAL-9010',
          icon: 'ral-9010'
        }
      ]
    },
    {
      name: 'handle',
      label: $localize`Handle`,
      type: FieldType.LIST,
      selected: 0,
      options: [
        {
          value: 'shaped',
          label: $localize`Shaped in the door plane`,
          image: ''
        },
        {
          value: 'flushed',
          label: $localize`Flushed with the door plane`,
          image: ''
        },
        {
          value: 'mounted',
          label: $localize`Mounted to the door plane`,
          image: ''
        },
        {
          value: 'long',
          label: $localize`Long handle`,
          image: ''
        }
      ]
    },
    {
      name: 'handle-position',
      label: $localize`Handle position`,
      type: FieldType.LIST,
      condition: {
        relation: 'OR',
        items: [
          {
            field: 'handle',
            value: 'flushed'
          },
          {
            field: 'handle',
            value: 'mounted'
          }
        ]
      },
      selected: 0,
      options: [
        {
          value: 'top',
          label: $localize`Top`,
          image: ''
        },
        {
          value: 'bottom',
          label: $localize`Bottom`,
          image: ''
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
            value: 'top'
          }
        ]
      },
      selected: 0,
      options: [
        {
          value: 'flushed-top-black',
          label: $localize`Black`,
          icon: 'lock-black'
        },
        {
          value: 'flushed-top-silver',
          label: $localize`Silver`,
          icon: 'lock-silver'
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
            value: 'bottom'
          }
        ]
      },
      selected: 0,
      options: [
        {
          value: 'flushed-bottom-black',
          label: $localize`Black`,
          icon: 'lock-black'
        },
        {
          value: 'flushed-bottom-silver',
          label: $localize`Silver`,
          icon: 'lock-silver'
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
            value: 'mounted'
          },
          {
            field: 'handle-position',
            value: 'top'
          }
        ]
      },
      selected: 0,
      options: [
        {
          value: 'mounted-top-black',
          label: $localize`Black`,
          icon: 'lock-black'
        },
        {
          value: 'mounted-top-silver',
          label: $localize`Silver`,
          icon: 'lock-silver'
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
            value: 'mounted'
          },
          {
            field: 'handle-position',
            value: 'bottom'
          }
        ]
      },
      selected: 0,
      options: [
        {
          value: 'mounted-bottom-black',
          label: $localize`Black`,
          icon: 'lock-black'
        },
        {
          value: 'mounted-bottom-silver',
          label: $localize`Silver`,
          icon: 'lock-silver'
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
          label: $localize`Black`,
          icon: 'lock-black'
        },
        {
          value: 'long-silver',
          label: $localize`Silver`,
          icon: 'lock-silver'
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
    },
    {
      name: 'panel',
      label: $localize`Panel`,
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
          value: 'ral-1026',
          label: 'RAL-1026',
          icon: 'ral-1026'
        },
        {
          value: 'ral-3004',
          label: 'RAL-3004',
          icon: 'ral-3004'
        },
        {
          value: 'ral-4010',
          label: 'RAL-4010',
          icon: 'ral-4010'
        },
        {
          value: 'ral-5001',
          label: 'RAL-5001',
          icon: 'ral-5001'
        },
        {
          value: 'ral-5005',
          label: 'RAL-5005',
          icon: 'ral-5005'
        },
        {
          value: 'ral-5008',
          label: 'RAL-5008',
          icon: 'ral-5008'
        },
        {
          value: 'ral-6021',
          label: 'RAL-6021',
          icon: 'ral-6021'
        },
        {
          value: 'ral-6033',
          label: 'RAL-6033',
          icon: 'ral-6033'
        },
        {
          value: 'ral-7000',
          label: 'RAL-7000',
          icon: 'ral-7000'
        },
        {
          value: 'ral-7002',
          label: 'RAL-7002',
          icon: 'ral-7002'
        },
        {
          value: 'ral-7016',
          label: 'RAL-7016',
          icon: 'ral-7016'
        },
        {
          value: 'ral-7021',
          label: 'RAL-7021',
          icon: 'ral-7021'
        },
        {
          value: 'ral-7023',
          label: 'RAL-7023',
          icon: 'ral-7023'
        },
        {
          value: 'ral-7032',
          label: 'RAL-7032',
          icon: 'ral-7032'
        },
        {
          value: 'ral-7045',
          label: 'RAL-7045',
          icon: 'ral-7045'
        },
        {
          value: 'ral-9002',
          label: 'RAL-9002',
          icon: 'ral-9002'
        },
        {
          value: 'ral-9005',
          label: 'RAL-9005',
          icon: 'ral-9005'
        },
        {
          value: 'ral-9006',
          label: 'RAL-9006',
          icon: 'ral-9006'
        },
        {
          value: 'varnish-brass',
          label: $localize`Structural varnish` + ' Brass'
        },
        {
          value: 'varnish-concrete',
          label: $localize`Structural varnish` + ' ' + $localize`Concrete`
        },
        {
          value: 'varnish-rust',
          label: $localize`Structural varnish` + ' Rust'
        }
      ]
    }
  ]
}
