import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Button } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import BreadcrumbComponent from '../../../src/components/helpers/breadcrumb';

describe('RequestInformation', () => {
  let wrapper;

  const renderComponent = () => shallow(<BreadcrumbComponent />);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is wrapped in a Grid', () => {
    expect(wrapper.type()).toEqual(Grid);
  });

  describe(' Row', () => {
    let row;

    beforeEach(() => {
      row = wrapper.childAt(0);
    });

    it('is a row', () => {
      expect(row.type()).toEqual(Grid.Row);
    });
    describe('request Link', () => {
      let requestLink;

      beforeEach(() => {
        requestLink = row.childAt(0);
      });

      it('is a link', () => {
        expect(requestLink.type()).toEqual(Link);
      });
      describe('request column', () => {
        let requestColumn;

        beforeEach(() => {
          requestColumn = requestLink.childAt(0);
        });

        it('is a column', () => {
          expect(requestColumn.type()).toEqual(Grid.Column);
        });
        describe('request segment', () => {
          let requestSegment;

          beforeEach(() => {
            requestSegment = requestColumn.childAt(0);
          });

          it('is a segment', () => {
            expect(requestSegment.type()).toEqual(Segment);
          });
          describe('request button', () => {
            let requestbutton;

            beforeEach(() => {
              requestbutton = requestSegment.childAt(0).childAt(0);
            });

            it('is a button', () => {
              expect(requestbutton.type()).toEqual(Button);
            });
          });
        });
      });
    });
    describe('request Link', () => {
      let informationLink;

      beforeEach(() => {
        informationLink = row.childAt(1);
      });

      it('is a link', () => {
        expect(informationLink.type()).toEqual(Link);
      });
      describe('information column', () => {
        let informationColumn;

        beforeEach(() => {
          informationColumn = informationLink.childAt(0);
        });

        it('is a column', () => {
          expect(informationColumn.type()).toEqual(Grid.Column);
        });
        describe('information segment', () => {
          let informationSegment;

          beforeEach(() => {
            informationSegment = informationColumn.childAt(0);
          });

          it('is a segment', () => {
            expect(informationSegment.type()).toEqual(Segment);
          });
          describe('information button', () => {
            let informationbutton;

            beforeEach(() => {
              informationbutton = informationSegment.childAt(0).childAt(0);
            });

            it('is a button', () => {
              expect(informationbutton.type()).toEqual(Button);
            });
          });
        });
      });
    });
    describe('location Link', () => {
      let locationLink;

      beforeEach(() => {
        locationLink = row.childAt(2);
      });

      it('is a link', () => {
        expect(locationLink.type()).toEqual(Link);
      });
      describe('location column', () => {
        let locationColumn;

        beforeEach(() => {
          locationColumn = locationLink.childAt(0);
        });

        it('is a column', () => {
          expect(locationColumn.type()).toEqual(Grid.Column);
        });
        describe('location segment', () => {
          let locationSegment;

          beforeEach(() => {
            locationSegment = locationColumn.childAt(0);
          });

          it('is a segment', () => {
            expect(locationSegment.type()).toEqual(Segment);
          });
          describe('location button', () => {
            let locationbutton;

            beforeEach(() => {
              locationbutton = locationSegment.childAt(0).childAt(0);
            });

            it('is a button', () => {
              expect(locationbutton.type()).toEqual(Button);
            });
          });
        });
      });
    });
    describe('price Link', () => {
      let priceLink;

      beforeEach(() => {
        priceLink = row.childAt(3);
      });

      it('is a link', () => {
        expect(priceLink.type()).toEqual(Link);
      });
      describe('price column', () => {
        let priceColumn;

        beforeEach(() => {
          priceColumn = priceLink.childAt(0);
        });

        it('is a column', () => {
          expect(priceColumn.type()).toEqual(Grid.Column);
        });
        describe('price segment', () => {
          let priceSegment;

          beforeEach(() => {
            priceSegment = priceColumn.childAt(0);
          });

          it('is a segment', () => {
            expect(priceSegment.type()).toEqual(Segment);
          });
          describe('price button', () => {
            let pricebutton;

            beforeEach(() => {
              pricebutton = priceSegment.childAt(0).childAt(0);
            });

            it('is a button', () => {
              expect(pricebutton.type()).toEqual(Button);
            });
          });
        });
      });
    });
    describe('review Link', () => {
      let reviewLink;

      beforeEach(() => {
        reviewLink = row.childAt(4);
      });

      it('is a link', () => {
        expect(reviewLink.type()).toEqual(Link);
      });
      describe('review column', () => {
        let reviewColumn;

        beforeEach(() => {
          reviewColumn = reviewLink.childAt(0);
        });

        it('is a column', () => {
          expect(reviewColumn.type()).toEqual(Grid.Column);
        });
        describe('review segment', () => {
          let reviewSegment;

          beforeEach(() => {
            reviewSegment = reviewColumn.childAt(0);
          });

          it('is a segment', () => {
            expect(reviewSegment.type()).toEqual(Segment);
          });
          describe('review button', () => {
            let reviewbutton;

            beforeEach(() => {
              reviewbutton = reviewSegment.childAt(0).childAt(0);
            });

            it('is a button', () => {
              expect(reviewbutton.type()).toEqual(Button);
            });
          });
        });
      });
    });
  });
});