export default {
  main: {
    backgroundColor: '#fff',
    border: '.0625rem solid #e6e6e6',
    borderBottomRightRadius: '.1875rem',
    borderTopRightRadius: '.1875rem',
    maxWidth: '58.4375rem',
    margin: '1rem auto',
    width: 'calc(100% - 2.5rem)',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start'
  },

  image: {
    order: '1',
    flex: '1 0 60%',
    alignSelf: 'flex-start',
    backgroundColor: '#fafafa'
  },

  text: {
    order: '2',
    flex: '1 0 40%',
    alignSelf: 'flex-start'
  }
}
