import React from 'react'
import { Link } from 'react-router-dom'

const TopicsCard = ({ topic }) => {
    return (
      <div key={topic.slug}>
          <li>
              <Link to={`/articles?topic=${topic.slug}`}>
                  <h2>{topic.slug}</h2>
              </Link>
          </li>
      </div>
    )
  }

export default TopicsCard;
