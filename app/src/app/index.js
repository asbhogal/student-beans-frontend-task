import React, { useState } from 'react'
import Image from './children/image'
import LikeButton from './children/like_button'
import styles from './styles'
import UnlikedIcon from './children/like_button/children/unliked_icon'
import LikedIcon from './children/like_button/children/liked_icon'
import formatNumber from './utils/formatNumber'

const App = (props) => {
  const [commentLikes, setCommentLikes] = useState({})

  const { data } = props

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

    if (!commentLikes[userId]) {
      setCommentLikes((prevLikes) => ({
        ...prevLikes,
        [userId]: {
          isLiked: false
        }
      }))
    }
  })

  const handleLikeButtonClick = (userId) => {
    setCommentLikes((prevLikes) => ({
      ...prevLikes,
      [userId]: {
        isLiked: !prevLikes[userId]?.isLiked
      }
    }))
  }

  const handleAriaPressed = (userId) => {
    return commentLikes[userId]?.isLiked || false
  }

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
            <p style={{ fontSize: '.75rem' }}>{data.location.name}</p>
          </div>
        </div>
        <div style={styles.commentsList}>
          <div style={{ maxHeight: '19rem', overflowY: 'auto' }}>
            <span style={{ fontSize: '.875rem' }}>
              <span style={styles.users}>{data.owner.username}</span>
              <span style={{ whiteSpace: 'pre' }}>
                {data.edge_media_to_caption.edges[0].node.text}
              </span>
            </span>
            <ul
              style={{
                listStyleType: 'none',
                paddingLeft: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '.125rem',
                margin: '0'
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
                  <button
                    style={styles.button}
                    onClick={() => handleLikeButtonClick(userId)}
                    aria-pressed={handleAriaPressed(userId)}
                  >
                    {commentLikes[userId] && commentLikes[userId].isLiked ? (
                      <LikedIcon />
                    ) : (
                      <UnlikedIcon />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div style={styles.comments}>
            <div>
              <p style={styles.users}>
                {formatNumber(data.edge_media_preview_like.count)} likes
              </p>
              <p style={styles.date}>4 days ago</p>
            </div>
            <UnlikedIcon />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
