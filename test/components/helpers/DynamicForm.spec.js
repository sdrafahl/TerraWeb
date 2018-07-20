import React from 'react';
import {
  Button,
  Form,
  Segment,
  Header,
  Radio,
  Checkbox,
  TextArea,
  Dropdown,
  Input,
  Popup,
} from 'semantic-ui-react';
import { shallow } from 'enzyme';
import { Chance } from 'chance';
import DynamicFormComponent from '../../../src/components/helpers/DynamicForm';
import InlineErrorComponent from '../../../src/components/helpers/InlineError';

const chance = new Chance();

const numberOfFields = (Math.abs(chance.integer()) % 20) + 2;

const randomType = (useRowCombination) => {
  switch (chance.integer() % 5) {
    case 0:
      return 'textArea';
    case 1:
      return 'radio';
    case 2:
      return 'checkbox';
    case 3:
      if (useRowCombination) {
        return 'rowCombination';
      }
      return 'input';
    case 4:
      return 'input';
    default:
      return 'textArea';
  }
};

const failTest = (wrapper, field, count) => {
  if (chance.integer() % 2 && field.validation) {
    const state = { errors: {} };
    state.errors[field.id] = 'Nothing is Selected';
    wrapper.setState(state);
    wrapper.update();
    expect(
      wrapper
        .childAt(1)
        .childAt(0)
        .childAt(count)
        .find(InlineErrorComponent)
        .props().text,
    ).toEqual('Nothing is Selected');
  }
};

const createRandomOptions = () => {
  const options = [];
  const numberOfOptions = (Math.abs(chance.integer()) % 11) + 2;
  for (let counter = 0; counter < numberOfOptions; counter += 1) {
    options[counter] = chance.word();
  }
  return options;
};

const generateTestFormJson = () => {
  const name = chance.word();
  const jsonForm = {};
  const fields = [];
  for (let counter = 0; counter < numberOfFields; counter += 1) {
    const type = randomType(true);

    let field = {};
    if (type === 'rowCombination') {
      const numberOfSubFields = (chance.integer() % 11) + 2;
      const subFields = [];
      for (let counting = 0; counting < numberOfSubFields; counting += 1) {
        const subFieldType = randomType(false);
        const subField = {
          name: chance.word(),
          type: subFieldType,
          id: chance.word(),
        };

        if (chance.integer() % 2 === 0) {
          subField.validation = 'required';
        }

        if (type === 'radio') {
          subField.options = createRandomOptions();
        }

        if (subFieldType === 'textArea' || type === 'input') {
          subField.placeholder = chance.word();
        }
        subFields[counting] = subField;
      }

      field = {
        name: chance.word(),
        type: 'rowCombination',
        fields: subFields,
      };
    } else {
      field = {
        name: chance.word(),
        type,
        id: chance.word(),
      };

      if (chance.integer() % 2 === 0) {
        field.validation = 'required';
      }
      if (type === 'radio') {
        field.options = createRandomOptions();
      }
      if (type === 'textArea' || type === 'input') {
        field.placeholder = chance.word();
      }
    }

    fields[counter] = field;
  }
  jsonForm[name] = {};
  jsonForm[name].description = chance.word();
  jsonForm[name].fields = fields;
  return jsonForm;
};

describe('DynamicForm', () => {
  let wrapper;
  const setRequest = jest.fn();
  const testJson = generateTestFormJson();
  const route = jest.fn();
  const renderComponent = () =>
    shallow(
      <DynamicFormComponent
        jsonForm={() => testJson}
        setRequest={setRequest}
        form={Object.keys(testJson)[0]}
        route={() => {
          route();
        }}
      />,
    );

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Segment', () => {
    expect(wrapper.type()).toEqual(Segment);
  });

  it('is styled as a padded Segment', () => {
    expect(wrapper.props().padded).toBeTruthy();
  });

  describe('header', () => {
    let header;

    beforeEach(() => {
      header = wrapper.childAt(0);
    });

    it('is a header', () => {
      expect(header.type()).toEqual(Header);
    });

    it('is has an as equal to h1', () => {
      expect(header.props().as).toEqual('h1');
    });

    it('is the correct text in the header', () => {
      expect(header.childAt(0).debug()).toEqual(testJson[Object.keys(testJson)[0]].description);
    });
    describe('popup', () => {
      let popup;

      beforeEach(() => {
        popup = header.childAt(1);
      });

      it('is a popup', () => {
        expect(popup.type()).toEqual(Popup);
      });
    });
  });
  describe('form segment', () => {
    let formSegment;

    beforeEach(() => {
      formSegment = wrapper.childAt(1);
    });

    it('is a segment', () => {
      expect(formSegment.type()).toEqual(Segment);
    });

    describe('form', () => {
      let formComponent;
      beforeEach(() => {
        formComponent = formSegment.childAt(0);
      });
      it('is a form', () => {
        expect(formComponent.type()).toEqual(Form);
      });

      describe('form data', () => {
        let count = -1;
        beforeEach(() => {
          count += 1;
          wrapper = renderComponent();
          formSegment = wrapper.childAt(1);
          formComponent = formSegment.childAt(0);
        });
        testJson[Object.keys(testJson)[0]].fields.forEach((field) => {
          it(`field ${count} is correct`, () => {
            if (field.type !== 'rowCombination') {
              const pre = formComponent.childAt(count);
              const label = pre.childAt(0);
              if (field.validation) {
                expect(label.childAt(0).text()).toEqual(` * ${field.name}`);
              } else {
                expect(label.childAt(0).text()).toEqual(field.name);
              }
            }
            expect(
              wrapper
                .childAt(1)
                .childAt(0)
                .childAt(count)
                .childAt(1)
                .props().name === field.name,
            );
            if (field.type === 'checkbox') {
              expect(
                wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(1)
                  .type(),
              ).toEqual(Checkbox);
              failTest(wrapper, field, count);
            }
            if (field.type === 'radio') {
              expect(
                wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(1)
                  .type(),
              ).toEqual(Form.Group);
              failTest(wrapper, field, count);
            }
            if (field.type === 'textArea') {
              expect(
                wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(1)
                  .type(),
              ).toEqual(TextArea);
              failTest(wrapper, field, count);
            }
            if (field.type === 'dropDown') {
              expect(
                wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(1)
                  .type(),
              ).toEqual(Dropdown);
              failTest(wrapper, field, count);
            }

            if (field.type === 'rowCombination') {
              let subFieldCounter = 0;
              field.fields.forEach((input) => {
                const rowInput = wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(subFieldCounter)
                  .childAt(1);

                switch (input.type) {
                  case 'input':
                    expect(rowInput.type()).toEqual(Form.Input);
                    break;
                  case 'dropDown':
                    expect(rowInput.type()).toEqual(Dropdown);
                    break;
                  case 'textArea':
                    expect(rowInput.type()).toEqual(TextArea);
                    break;
                  case 'checkbox':
                    expect(rowInput.type()).toEqual(Checkbox);
                    break;
                  case 'radio':
                    expect(rowInput.type()).toEqual(Checkbox);
                    break;
                  default:
                }
                failTest(wrapper, field, count);
                subFieldCounter += 1;
              });
            }

            if (field.type === 'input') {
              expect(
                wrapper
                  .childAt(1)
                  .childAt(0)
                  .childAt(count)
                  .childAt(1)
                  .type(),
              ).toEqual(Form.Input);

              failTest(wrapper, field, count);
            }
          });
        });
      });

      describe('Form Button', () => {
        let formButton;

        beforeEach(() => {
          formButton = formComponent.childAt(numberOfFields);
        });

        it('It is a button', () => {
          expect(formButton.type()).toEqual(Form.Button);
        });
      });
    });
  });
});
