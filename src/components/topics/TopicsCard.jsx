import React from 'react'
import { Link } from 'react-router-dom'

const TopicsCard = ({ topic }) => {
    return (
      <section className='container'>
      <div className='topic-cards' key={topic.slug}>
              <Link className='link' to={`/articles?topic=${topic.slug}`}>
                  <h2>{topic.slug}</h2>
              </Link>
              <div>
                
              </div>
      </div>
      </section>
    )
  }

export default TopicsCard;
