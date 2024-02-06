import React from 'react'

import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w[470px] mt-5`}>
          Take control of your finances with our intuitive tools. Track
          expenses, view transaction history, and receive real-time updates to
          stay on top of your financial activities effortlessly. With our secure
          platform, enjoy peace of mind while handling your financial tasks
          seamlessly and efficiently.
        </p>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )
}

export default CardDeal
