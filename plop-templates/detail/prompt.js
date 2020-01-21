const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate detail',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'component name please',
      validate: notEmpty('name')
    },
    {
      type: 'input',
      name: 'dataName',
      message: 'data name please',
      validate: notEmpty('data name')
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Blocks:',
      choices: [
        {
          name: 'detail',
          value: 'detail',
          checked: true
        },
        {
          name: 'formatter',
          value: 'formatter',
          checked: false
        }
      ],
      validate(value) {
        if (value.indexOf('detail') === -1) {
          return 'Components require at least a detail part.'
        }
        return true
      }
    }
  ],
  actions: data => {
    const name = '{{properCase name}}'
    const dataName = '{{dataName}}'
    const actions = [
      {
        type: 'add',
        path:
          process.cwd() +
          `/src/views/${name}/components/${name + 'Detail'}.vue`,
        templateFile: 'plop-templates/detail/index.hbs',
        data: {
          name: name,
          dataName: dataName,
          detail: data.blocks.includes('detail'),
          formatter: data.blocks.includes('formatter')
        }
      }
    ]

    return actions
  }
}
