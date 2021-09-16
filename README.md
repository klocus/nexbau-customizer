# Nexbau Customizer

#### A simple app for configuring doors.

#### https://nexbau-customizer.web.app/en/

## Development server

Run `ng serve --configuration=pl --open` for a dev server. The app will automatically reload if you change any of the source files.

## Build

Run `ng build --localize` to build the project. The build artifacts will be stored in the `dist/` directory.

## Regenerate base translation file

Run `ng xi18n --output-path src/locales` to generate `messages.xlf`

*More info: https://lokalise.com/blog/angular-i18n/*

## Item options

All available product configuration fields are available in the `/src/app/data/Items.database.ts`.

### Structure of item options

Each field is a separate layer, so it is important that the image files are transparent, with *.PNG extension, and the same size.

```
{
  id: 1,
  name: 'itemName',
  label: 'Item Name',
  fields: [
    {
      name: 'color',
      label: 'Color',
      type: FieldType.GRID, // or FieldType.LIST
      selected: 0,
      options: [
        {
          value: '', // Leave empty if you want to hide the layer 
          label: 'None'
        },
        {
          value: 'blue',
          label: 'Blue'
        },
        {
          value: 'green',
          label: 'Green'
        }
      ]
    }
  ]
}
```

The paths of graphic files of particular options *(layers)* are created according to the following scheme:

```
/assets/images/items/{item_name}/{field_name}-{option_value}.png
```

So for the earlier item example, the following paths will be generated:

```
/assets/images/items/itemName/color-blue.png
/assets/images/items/itemName/color-green.png
```

### Conditions

It is possible to add a condition to a field so that it will only be displayed if the corresponding option is selected in another field.

Add the following object to the item object:

```
...
condition: {
  relation: 'OR', // Optional, defaults to "AND"
  items: [
    {
      field: 'color', // Field name we want to check
      value: 'blue', // Value that must be matched
      compare: '=' // Optional, defaults to "=". Available operators: =, !=
    },
    {
      field: 'color',
      value: 'green',
      compare: '='
    }
  ]
},
...
```

## Deploy

```
firebase deploy
```
