import styles from '../styles'

const styleHashtagText = (text) => {
  const hashtagRegex = /#\S+/g
  const words = text.split(hashtagRegex)
  const hashtags = text.match(hashtagRegex) || []

  return words.map((word, index) => (
    <span key={index}>
      {word}
      {hashtags[index] && (
        <a
          href={`https://instagram.com/explore/tags/${hashtags[index]}`}
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

export default styleHashtagText
