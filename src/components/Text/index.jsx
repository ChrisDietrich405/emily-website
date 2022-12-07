import React from 'react'
import styles from "./styles.module.css"

const Text = ({data}) => {
  return (
    < >
      {data.map((content) => {
        return (
          <div className={styles.text_container}>
          <h3>{content.title}</h3> 
          {content.body.map((paragraph) => {
            return (
              <p>{paragraph}</p>
            )
          })} 
          </div>
        )
      })}
    </>
  )
}

export default Text