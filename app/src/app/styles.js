export default {
  main: {
    backgroundColor: '#fff',
    border: '.0625rem solid #e6e6e6',
    borderBottomRightRadius: '.1875rem',
    borderTopRightRadius: '.1875rem',
    maxWidth: '58.4375rem',
    margin: '3rem auto',
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

  location: {
    fontSize: '.75rem'
  },

  text: {
    order: '2',
    flex: '1 0 40%',
    alignSelf: 'flex-start',
    width: '100%'
  },

  profile: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem 1.25rem',
    borderBottom: '.0625rem solid #eeeeef'
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
    marginRight: '.625rem'
  },

  commentsList: {
    margin: '.625rem 1.25rem'
  },

  commentsBox: {
    maxHeight: '19.3125rem',
    overflowY: 'auto',
    fontSize: '.875rem'
  },

  commentsUl: {
    listStyleType: 'none',
    paddingLeft: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '.125rem',
    margin: '0.125rem 0 0 0',
    width: 'fit-content'
  },

  hashtags: {
    color: '#103770',
    cursor: 'pointer',
    textDecoration: 'none'
  },

  users: {
    fontWeight: 'bold',
    marginRight: '.3125rem',
    textDecoration: 'none'
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
  },

  owner: {
    textDecoration: 'none'
  },

  ownerCaption: {
    whiteSpace: 'pre'
  }
}
