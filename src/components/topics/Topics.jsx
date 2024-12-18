import { useEffect, useState} from 'react'
import { getTopics } from '../../api/api';
import  TopicsCard  from "./TopicsCard";


const Topics = () => {
    const [topics, setTopics]= useState([]);

    useEffect(() => {
        getTopics().then((topics) => {
            setTopics(topics)
        })
    }, [])

  return (
    <ul className="list-container">
        {topics.map((topic) => {
            
            return (
                <TopicsCard  topic={topic} key={topic.slug}/>
            )
        })}
    </ul>
  )
}

export default Topics;
