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
        type: FieldType.LIST,
        selected: 0,
        options: [
          {
            value: '',
            label: $localize`None`
          },
          {
            value: 'glass-black',
            label: $localize`Black glass`
          },
          {
            value: 'glass',
            label: $localize`Glass`
          },
          {
            value: 'glass-fragment',
            label: $localize`Glass fragment`
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
            value: 'black',
            label: $localize`Black`
          },
          {
            value: 'standard',
            label: $localize`Standard`
          },
          {
            value: 'black-long',
            label: $localize`Black Long`
          },
          {
            value: 'standard-long',
            label: $localize`Standard Long`
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
            value: '',
            label: $localize`None`
          },
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
        name: 'layout',
        label: $localize`Layout`,
        type: FieldType.GRID,
        noRender: true,
        selected: 0,
        options: [
          {
            value: '001',
            label: 'F-001'
          },
          {
            value: '002',
            label: 'F-002'
          },
          {
            value: '003',
            label: 'F-003'
          },
          {
            value: '004',
            label: 'F-004'
          },
          {
            value: '005',
            label: 'F-005'
          },
          {
            value: '006',
            label: 'F-006'
          }
        ]
      },
      {
        name: 'layout-color',
        label: $localize`Layout color`,
        type: FieldType.GRID,
        condition: {
          field: 'layout',
          value: '001'
        },
        selected: 0,
        options: [
          {
            value: '001-001',
            label: 'C-001'
          },
          {
            value: '001-002',
            label: 'C-002'
          },
          {
            value: '001-003',
            label: 'C-003'
          },
          {
            value: '001-004',
            label: 'C-004'
          },
          {
            value: '001-005',
            label: 'C-005'
          },
          {
            value: '001-006',
            label: 'C-006'
          },
          {
            value: '001-007',
            label: 'C-007'
          },
          {
            value: '001-008',
            label: 'C-008'
          },
          {
            value: '001-009',
            label: 'C-009'
          },
          {
            value: '001-010',
            label: 'C-010'
          },
          {
            value: '001-011',
            label: 'C-011'
          },
          {
            value: '001-012',
            label: 'C-012'
          },
          {
            value: '001-013',
            label: 'C-013'
          },
          {
            value: '001-014',
            label: 'C-014'
          },
          {
            value: '001-015',
            label: 'C-015'
          },
          {
            value: '001-016',
            label: 'C-016'
          },
          {
            value: '001-017',
            label: 'C-017'
          },
          {
            value: '001-018',
            label: 'C-018'
          },
          {
            value: '001-019',
            label: 'C-019'
          },
          {
            value: '001-020',
            label: 'C-020'
          },
          {
            value: '001-021',
            label: 'C-021'
          },
          {
            value: '001-022',
            label: 'C-022'
          },
          {
            value: '001-023',
            label: 'C-023'
          },
          {
            value: '001-024',
            label: 'C-024'
          },
          {
            value: '001-025',
            label: 'C-025'
          },
          {
            value: '001-026',
            label: 'C-026'
          },
          {
            value: '001-027',
            label: 'C-027'
          },
          {
            value: '001-028',
            label: 'C-028'
          },
          {
            value: '001-029',
            label: 'C-029'
          },
          {
            value: '001-030',
            label: 'C-030'
          },
          {
            value: '001-031',
            label: 'C-031'
          },
          {
            value: '001-032',
            label: 'C-032'
          },
          {
            value: '001-033',
            label: 'C-033'
          },
          {
            value: '001-034',
            label: 'C-034'
          },
          {
            value: '001-035',
            label: 'C-035'
          },
          {
            value: '001-036',
            label: 'C-036'
          },
          {
            value: '001-037',
            label: 'C-037'
          },
          {
            value: '001-038',
            label: 'C-038'
          },
          {
            value: '001-039',
            label: 'C-039'
          },
          {
            value: '001-040',
            label: 'C-040'
          },
          {
            value: '001-041',
            label: 'C-041'
          },
          {
            value: '001-042',
            label: 'C-042'
          },
          {
            value: '001-043',
            label: 'C-043'
          },
          {
            value: '001-044',
            label: 'C-044'
          },
          {
            value: '001-045',
            label: 'C-045'
          },
          {
            value: '001-046',
            label: 'C-046'
          },
          {
            value: '001-047',
            label: 'C-047'
          },
          {
            value: '001-048',
            label: 'C-048'
          },
          {
            value: '001-049',
            label: 'C-049'
          },          {
            value: '001-050',
            label: 'C-050'
          },          {
            value: '001-051',
            label: 'C-051'
          },
          {
            value: '001-052',
            label: 'C-052'
          },
          {
            value: '001-053',
            label: 'C-053'
          },
          {
            value: '001-054',
            label: 'C-054'
          },
          {
            value: '001-055',
            label: 'C-055'
          },
          {
            value: '001-056',
            label: 'C-056'
          },
          {
            value: '001-057',
            label: 'C-057'
          },
          {
            value: '001-058',
            label: 'C-058'
          },
          {
            value: '001-059',
            label: 'C-059'
          },
          {
            value: '001-060',
            label: 'C-060'
          },
          {
            value: '001-061',
            label: 'C-061'
          }
        ]
      },
      {
        name: 'layout-color',
        label: $localize`Layout color`,
        type: FieldType.GRID,
        condition: {
          field: 'layout',
          value: '002'
        },
        selected: 0,
        options: [
          {
            value: '002-001',
            label: 'C-001'
          }
        ]
      },
      {
        name: 'layout-color',
        label: $localize`Layout color`,
        type: FieldType.GRID,
        condition: {
          field: 'layout',
          value: '003'
        },
        selected: 0,
        options: [
          {
            value: '003-001',
            label: 'C-001'
          }
        ]
      },
      {
        name: 'layout-color',
        label: $localize`Layout color`,
        type: FieldType.GRID,
        condition: {
          field: 'layout',
          value: '004'
        },
        selected: 0,
        options: [
          {
            value: '004-001',
            label: 'C-001'
          }
        ]
      },
      {
        name: 'layout-color',
        label: $localize`Layout color`,
        type: FieldType.GRID,
        condition: {
          field: 'layout',
          value: '005'
        },
        selected: 0,
        options: [
          {
            value: '005-001',
            label: 'C-001'
          }
        ]
      },
      {
        name: 'layout-color',
        label: $localize`Layout color`,
        type: FieldType.GRID,
        condition: {
          field: 'layout',
          value: '006'
        },
        selected: 0,
        options: [
          {
            value: '006-001',
            label: 'C-001'
          }
        ]
      }
    ],
  }
];
