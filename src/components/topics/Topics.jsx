import { useEffect, useState} from 'react'
import { getTopics } from '../../api/api';
import  TopicsCard  from "./TopicsCard";
import Loading from "../../utils/Loading";


const Topics = () => {
    const [topics, setTopics]= useState([]);
      const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        getTopics().then((topics) => {
            setTopics(topics)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <section className='main'><Loading /></section>;

  return (
    <section className='main'>
    <div className='topics-grid'>
        {topics.map((topic) => {
            
            return (
                <TopicsCard  topic={topic} key={topic.slug}/>
            )
        })}
    </div>
    </section>
  )
}

export default Topics;
