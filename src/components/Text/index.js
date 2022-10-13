import React from 'react'
import styles from "./styles.module.css"

const Text = ({servicesData}) => {
  return (
    < >
      {servicesData.map((service) => {
        return (
          <div className={styles.text_container}>
          <h3>{service.title}</h3> 
          {service.body.map((paragraph) => {
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