const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate a view',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'view name please',
      validate: notEmpty('name')
    },
    {
      type: 'input',
      name: 'dataName',
      message: 'data name please',
      validate: notEmpty('data name')
    },
    {
      type: 'input',
      name: 'uuid',
      message: 'uuid name please',
      validate: notEmpty('uuid')
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Blocks:',
      choices: [
        {
          name: 'search',
          value: 'search',
          checked: true
        },
        {
          name: 'detail',
          value: 'detail',
          checked: false
        },
        {
          name: 'addEdit',
          value: 'addEdit',
          checked: false
        },
        {
          name: 'delete',
          value: 'delete',
          checked: false
        },
        {
          name: 'formatter',
          value: 'formatter',
          checked: false
        }
      ],
      validate(value) {
        if (value.indexOf('search') === -1) {
          return 'View require at least a search part.'
        }
        return true
      }
    }
  ],
  actions: data => {
    const name = '{{name}}'
    const dataName = '{{dataName}}'
    const uuid = '{{uuid}}'
    const actions = [
      {
        type: 'add',
        path: `src/views/${name}/index.vue`,
        templateFile: 'plop-templates/view/index.hbs',
        data: {
          name: name,
          dataName: dataName,
          uuid: uuid,
          search: data.blocks.includes('search'),
          detail: data.blocks.includes('detail'),
          addEdit: data.blocks.includes('addEdit'),
          delete: data.blocks.includes('delete'),
          formatter: data.blocks.includes('formatter')
        }
      }
    ]

    return actions
  }
}
