import React from 'react'
import Image from './children/image'
import LikeButton from './children/like_button'
import styles from './styles'
import UnlikedIcon from './children/like_button/children/unliked_icon'
import LikedIcon from './children/like_button/children/liked_icon'

const App = (props) => {
  const { data } = props

  // console.log(data)

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
            <div style={styles.comments}>
              <div style={styles.comments}>
                <p style={styles.users}>User block</p>
                <p>Comments block</p>
              </div>
              <button style={styles.button}>
                <UnlikedIcon />
              </button>
            </div>
            <div style={styles.comments}>
              <div>
                <p style={styles.users}>6,244 likes</p>
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
