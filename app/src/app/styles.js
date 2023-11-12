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
  },

  profile: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    margin: '.625rem',
    borderBottom: '.0625rem solid #eeeeef',
    padding: '1.25rem 0'
  },

  profileImg: {
    width: '3.125rem',
    height: '3.125rem'
  },

  comments: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '.3125rem',
    fontSize: '.875rem'
  },

  commentsList: {
    margin: '0 .625rem'
  },

  users: {
    fontWeight: 'bold',
    marginRight: '.3125rem'
  },

  button: {
    display: 'inline-block',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '0'
  },

  date: {
    textTransform: 'uppercase',
    color: '#595959',
    fontSize: '.625rem',
    marginTop: '.3125rem'
  }
}
