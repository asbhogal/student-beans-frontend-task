import React, { useState } from 'react'
import Image from './children/image'
import styles from './styles'
import UnlikedIcon from './children/like_button/children/unliked_icon'
import LikedIcon from './children/like_button/children/liked_icon'
import formatNumber from './utils/formatNumber'

const App = (props) => {
  const { data } = props

  const [commentLikes, setCommentLikes] = useState({})
  const [totalLikes, setTotalLikes] = useState(0)
  const [likeCount, setLikeCount] = useState(data.edge_media_preview_like.count)

  const comments = data.edge_media_to_comment.edges

  const sortedComments = comments
    .slice()
    .sort((a, b) => b.node.taken_at_timestamp - a.node.taken_at_timestamp)

  const userComments = {}

  sortedComments.forEach((comment) => {
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

  const handleTotalLikeButtonClick = () => {
    setTotalLikes((prevTotalLikes) => {
      const newTotalLikes = prevTotalLikes === 0 ? 1 : 0
      const newCount = newTotalLikes === 1 ? likeCount + 1 : likeCount - 1
      setLikeCount(newCount)
      return newTotalLikes
    })
  }

  const handleAriaChecked = (userId) => {
    return commentLikes[userId]?.isLiked || false
  }

  const styleHashtagText = (text) => {
    const hashtagRegex = /#\S+/g
    const words = text.split(hashtagRegex)
    const hashtags = text.match(hashtagRegex) || []

    return words.map((word, index) => (
      <span key={index}>
        {word}
        {hashtags[index] && (
          <a
            href={`http://instagram.com/explore/tags/${hashtags[index]}`}
            target="_blank"
            rel="noreferrer"
            style={styles.hashtags}
          >
            {hashtags[index]}
          </a>
        )}
      </span>
    ))
  }

  return (
    <main style={styles.main}>
      <h1 className="sr-only">avfcofficial Instagram Post</h1>
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
            <p style={styles.location}>{data.location.name}</p>
          </div>
        </div>
        <div style={styles.commentsList}>
          <div style={styles.commentsBox}>
            <span>
              <span style={styles.users}>{data.owner.username}</span>
              <span style={styles.ownerCaption}>
                {styleHashtagText(
                  data.edge_media_to_caption.edges[0].node.text
                )}
              </span>
            </span>
            <ul style={styles.commentsUl}>
              {sortedComments.map((comment) => (
                <li
                  style={styles.comments}
                  key={`${comment.node.owner.id}-${comment.node.text}`}
                >
                  <span>
                    <span style={styles.users}>
                      {comment.node.owner.username}
                    </span>
                    {userComments[comment.node.owner.id]?.comments.map(
                      (text, index) => (
                        <span key={index}>{styleHashtagText(text)}</span>
                      )
                    )}
                  </span>
                  <button
                    role="switch"
                    style={styles.button}
                    onClick={() => handleLikeButtonClick(comment.node.owner.id)}
                    aria-checked={handleAriaChecked(comment.node.owner.id)}
                  >
                    {commentLikes[comment.node.owner.id]?.isLiked ? (
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
              <p style={styles.users}>{formatNumber(likeCount)} likes</p>
              <p style={styles.date}>4 days ago</p>
            </div>
            <button
              role="switch"
              style={styles.button}
              onClick={handleTotalLikeButtonClick}
              aria-checked={totalLikes === 1}
            >
              {totalLikes === 1 ? (
                <LikedIcon size={30} />
              ) : (
                <UnlikedIcon size={30} />
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
