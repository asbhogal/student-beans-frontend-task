import React from 'react'
import Image from './children/image'
import LikeButton from './children/like_button'
import styles from './styles'
import UnlikedIcon from './children/like_button/children/unliked_icon'
import LikedIcon from './children/like_button/children/liked_icon'
import formatNumber from './utils/formatNumber'

const App = (props) => {
  const { data } = props

  console.log(data)
  //console.log(data.edge_media_to_comment.edges)
  //console.log(data.edge_media_to_comment.edges)

  const comments = data.edge_media_to_comment.edges

  const userComments = {}

  comments.forEach((comment) => {
    const userId = comment.node.owner.id
    const text = comment.node.text
    const username = comment.node.username

    if (!userComments[username]) {
      userComments[userId] = {
        username: comment.node.owner.username,
        comments: []
      }
    }

    userComments[userId].comments.push(text)
  })

  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <div style={styles.profile}>
          <img
            className="owner-profile-pic"
            style={styles.profileImg}
            src={data.owner.profile_pic_url}
            alt="The Aston Villa Football Club logo, with the emblem surrounded by a multicolored ring, tinted red in the top left and orange in the bottom right"
          />
          <div>
            <h2>{data.owner.username}</h2>
            <p>{data.location.name}</p>
          </div>
        </div>
        <div>
          <div style={styles.commentsList}>
            <div>
              <p style={styles.users}>{data.owner.username}</p>
              <p>{data.edge_media_to_caption.edges[0].node.text}</p>
            </div>

            <ul
              style={{
                listStyleType: 'none',
                paddingLeft: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '.125rem'
              }}
            >
              {Object.keys(userComments).map((userId) => (
                <li style={styles.comments} key={userId}>
                  <span>
                    <span style={styles.users}>
                      {userComments[userId].username}
                    </span>
                    {userComments[userId].comments.map((text, index) => (
                      <span key={index}>{text}</span>
                    ))}
                  </span>
                  <button style={styles.button}>
                    <UnlikedIcon />
                  </button>
                </li>
              ))}
            </ul>

            <div style={styles.comments}>
              <div>
                <p style={styles.users}>
                  {formatNumber(data.edge_media_preview_like.count)} likes
                </p>
                <p style={styles.date}>4 days ago</p>
              </div>
              <LikeButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
