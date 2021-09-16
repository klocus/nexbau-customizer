import { Item } from '../Item.interface';
import { FieldType } from '../FieldType.enum';

export const Roots: Item = {
  id: 3,
  name: 'roots',
  label: 'Roots',
  fields: [
    {
      name: 'frame',
      label: $localize`Frame`,
      type: FieldType.GRID,
      selected: 0,
      options: [
        {
          value: 'oak',
          label: $localize`Oak`
        },
        {
          value: 'meranti',
          label: $localize`Meranti`
        },
        {
          value: 'walnut',
          label: $localize`Walnut`
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
          value: 'silver',
          label: $localize`Silver`
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
          value: 'silver',
          label: $localize`Silver`
        }
      ]
    },
    {
      name: 'panel-left',
      label: $localize`Left panel`,
      type: FieldType.GRID,
      selected: 0,
      options: [
        {
          value: 'ral-6033',
          label: 'RAL-6033'
        },
        {
          value: 'ral-6021',
          label: 'RAL-6021'
        },
        {
          value: 'ral-5001',
          label: 'RAL-5001'
        },
        {
          value: 'ral-5005',
          label: 'RAL-5005'
        },
        {
          value: 'ral-7045',
          label: 'RAL-7045'
        },
        {
          value: 'ral-7016',
          label: 'RAL-7016'
        },
        {
          value: 'structural-varnish-rust',
          label: $localize`Structural varnish` + ' Rust'
        },
        {
          value: 'structural-varnish-brass',
          label: $localize`Structural varnish` + ' Brass'
        },
        {
          value: 'milled-oak',
          label: $localize`Milled oak`
        },
        {
          value: 'milled-walnut',
          label: $localize`Milled walnut`
        },
        {
          value: 'milled-meranti',
          label: $localize`Milled meranti`
        },
        {
          value: 'steel',
          label: $localize`Steel`
        },
        {
          value: 'printed-steel',
          label: $localize`Printed steel`
        },
        {
          value: 'quartz-sinter-001',
          label: $localize`Quartz sinter` + ' 001'
        },
        {
          value: 'quartz-sinter-002',
          label: $localize`Quartz sinter` + ' 002'
        }
      ]
    },
    {
      name: 'panel-right',
      label: $localize`Right panel`,
      type: FieldType.GRID,
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
          value: 'glass-milk',
          label: $localize`Milk glass`
        },
        {
          value: 'steel',
          label: $localize`Polished steel`
        }
      ]
    }
  ]
}
