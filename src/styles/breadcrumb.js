export default {
  example: {},
  exampleAppear: {
    opacity: 0.01,
  },

  exampleAppearActive: {
    opacity: 1,
    transition: 'opacity .5s ease-in',
  },
  segment: {
    textAlign: 'center',
    padding: '0',
    border: 'none',
    boxShadow: 'none',
    margin: '0',
  },
  column: {
    padding: '0',
  },
  row: {
    paddingTop: '1.5rem',
  },
  label: {
    backgroundColor: 'white',
  },
  grid: {},
  finishedIcon: {
    boxShadow: '0 0 0 0.1em #21ba45 inset',
    margin: '0',
  },
  currentIcon: {
    boxShadow: '0 0 0 0.1em #2185d0 inset',
    margin: '0',
  },
  unfinishedIcon: {
    margin: '0',
    boxShadow: '0 0 0 0.1em #D7D7D7 inset',
  },
  leftBarUnfinished: {
    position: 'absolute',
    top: 20,
    height: 1,
    borderTopStyle: 'solid',
    borderTopWidth: 3,
    borderTopColor: '#D7D7D7',
    left: 0,
    right: '51%',
    marginRight: 20,
  },
  rightBarUnfinished: {
    position: 'absolute',
    top: 20,
    height: 1,
    borderTopStyle: 'solid',
    borderTopWidth: 3,
    borderTopColor: '#D7D7D7',
    right: 0,
    left: '51%',
    marginLeft: 20,
  },
  leftBarFinished: {
    position: 'absolute',
    top: 20,
    height: 1,
    borderTopStyle: 'solid',
    borderTopWidth: 3,
    borderTopColor: '#21ba45',
    left: 0,
    right: '51%',
    marginRight: 20,
  },
  rightBarFinished: {
    position: 'absolute',
    top: 20,
    height: 1,
    borderTopStyle: 'solid',
    borderTopWidth: 3,
    borderTopColor: '#21ba45',
    right: 0,
    left: '51%',
    marginLeft: 20,
  },
};
