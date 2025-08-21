module.exports = function (plop) {
    plop.setGenerator('component', {
      description: 'Create a React component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Component name:',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/component.tsx.hbs',
                  type: 'add',
          path: 'src/components/{{pascalCase name}}/index.tsx',
          template: "export { default } from './{{pascalCase name}}';",
        },
      ],
    });
  };
  