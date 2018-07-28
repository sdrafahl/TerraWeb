import React from 'react';
import { Grid, Segment, Header, Button, Image, Input, Icon } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import RequestReviewComponent from '../../../../src/components/pages/pipeline/requestReview';
import BreadcrumbComponent from '../../../../src/components/helpers/breadcrumb';
import DynamicDisplayComponent from '../../../../src/components/helpers/DynamicDisplay';
import SubmitModalComponent from '../../../../src/components/helpers/reviewModal';

describe('RequestReview', () => {
  let wrapper;

  const renderComponent = () =>
    shallow(<RequestReviewComponent typeOfRequest="Lawn Mowing" pageInProgress={4} current={4} />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Grid Container', () => {
    expect(wrapper.type()).toEqual(Grid);
  });

  it('is styled as a container Grid', () => {
    expect(wrapper.props().container).toBeTruthy();
  });

  it('contains two rows', () => {
    expect.assertions(3);

    const GridRows = wrapper.children();

    GridRows.forEach((row) => {
      expect(row.type()).toEqual(Grid.Row);
    });
  });

  describe('BreadcrumbRow', () => {
    let BreadcrumbRow;

    beforeEach(() => {
      BreadcrumbRow = wrapper.childAt(0);
    });

    it('is a Breadcrumb Row', () => {
      expect(BreadcrumbRow.type()).toEqual(Grid.Row);
    });

    describe('BreadcrumbSegment', () => {
      let BreadcrumbSegment;

      beforeEach(() => {
        BreadcrumbSegment = BreadcrumbRow.childAt(0);
      });

      it('is a Breadcrumb Segment', () => {
        expect(BreadcrumbSegment.type()).toEqual(Segment);
      });

      describe('BreadcrumbComponent', () => {
        let Breadcrumb;

        beforeEach(() => {
          Breadcrumb = BreadcrumbSegment.childAt(0);
        });

        it('is a breadcrumb', () => {
          expect(Breadcrumb.type()).toEqual(BreadcrumbComponent);
        });
        it('has a selection', () => {
          expect(Breadcrumb.props().selection).toEqual(4);
        });
      });
    });
  });

  describe('DynamicDisplay Row', () => {
    let dynamicDisplayRow;

    beforeEach(() => {
      dynamicDisplayRow = wrapper.childAt(1);
    });

    it('It is a row', () => {
      expect(dynamicDisplayRow.type()).toEqual(Grid.Row);
    })

    describe('It contains a DynamicDisplay Component', () => {

      let dynamicDisplayRowComponent;

      beforeEach(() => {
        dynamicDisplayRowComponent = dynamicDisplayRow.childAt(0);
      });

      it('is a dynamic dynamic display component', () => {
        expect(dynamicDisplayRowComponent.type()).toEqual(DynamicDisplayComponent);
      })
    });
  })
  describe('Submit Row', () => {
    let submitRow;

    beforeEach(() => {
      submitRow = wrapper.childAt(2);
    });

    it('It is a row', () => {
      expect(submitRow.type()).toEqual(Grid.Row);
    })
    describe('Submit Row Component', () => {
      let submitRowComponent;

      beforeEach(() => {
        submitRowComponent = submitRow.childAt(0);
      });

      it('It is a submit component', () => {
        expect(submitRowComponent.type()).toEqual(SubmitModalComponent);
      })
    });
  });
});
