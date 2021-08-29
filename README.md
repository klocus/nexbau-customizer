# Nexbau

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Development server

Run `ng serve --configuration=pl --open` for a dev server. The app will automatically reload if you change any of the source files.

## Build

Run `ng build --configuration=production,pl` to build the project. The build artifacts will be stored in the `dist/` directory.

## Regenerate base translation file

Run `ng xi18n --output-path src/i18n` to generate `messages.xlf`

*More info: https://lokalise.com/blog/angular-i18n/*

## Item options

All available product configuration fields are available in the `/src/app/data/db.ts`.

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
/assets/img/items/{item_name}/{field_name}-{option_value}.png
```

So for the earlier item example, the following paths will be generated:

```
/assets/img/items/itemName/color-blue.png
/assets/img/items/itemName/color-green.png
```

### Conditions

It is possible to add a condition to a field so that it will only be displayed if the corresponding option is selected in another field.

Add the following object to the item object:

```
...
condition: {
  field: 'color',
  value: 'blue'
},
...
```

`field` is the field name we want to check and `value` is the value that must be matched.

## Deploy for GitHub Pages

```
ng build --configuration=production,pl --output-path docs --base-href https://{profile}.github.io/{repo}/ --deploy-url=https://{profile}.github.io/{repo}/
```
