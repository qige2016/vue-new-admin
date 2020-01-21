const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate addedit',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'component name please',
      validate: notEmpty('name')
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
          name: 'addedit',
          value: 'addedit',
          checked: true
        },
        {
          name: 'formValidate',
          value: 'formValidate',
          checked: false
        }
      ],
      validate(value) {
        if (value.indexOf('addedit') === -1) {
          return 'Components require at least a addedit part.'
        }
        return true
      }
    }
  ],
  actions: data => {
    const name = '{{properCase name}}'
    const uuid = '{{uuid}}'
    const actions = [
      {
        type: 'add',
        path:
          process.cwd() +
          `/src/views/${name}/components/${name + 'AddEdit'}.vue`,
        templateFile: 'plop-templates/addedit/index.hbs',
        data: {
          name: name,
          uuid: uuid,
          addedit: data.blocks.includes('addedit'),
          formValidate: data.blocks.includes('formValidate')
        }
      }
    ]

    return actions
  }
}
