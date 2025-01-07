import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const TopicsCard = ({ topic }) => {
  //get images dynamicall from unsplash
  const [imageUrl, setImageUrl] = useState(null)

  // use import.met.env for vite!!!!
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY; 

  useEffect(() => {
    const fetchImage = async () => {
      
      if(accessKey){
        
        try {
          const response = await fetch(
           `https://api.unsplash.com/search/photos?query=${topic.slug}&client_id=${accessKey}&per_page=1`
          );
          const data = await response.json();
          
            setImageUrl(data.results[0].urls.small);
         
        } catch(err){
          console.error('Error fetching image:', err)
        }
      }
    }
    fetchImage();
  }, [accessKey, topic.slug])

    return (
     
        <div className='topic-cards'>
          <div  key={topic.slug}>
              <Link className='link' to={`/articles?topic=${topic.slug}`}>
                  <h2>{topic.slug}</h2>
              </Link>
          </div>
          <div>
            {imageUrl ? (
              <img src={imageUrl} alt={`${topic.slug}`} style={{ maxWidth: "100%"}} />
            ): (<p>Loading image...</p>)}  
          </div>
        </div>
      
      
    )
  }

export default TopicsCard;

