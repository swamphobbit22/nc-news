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
    <ul className="list-container">
        {topics.map((topic) => {
            
            return (
                <TopicsCard  topic={topic} key={topic.slug}/>
            )
        })}
    </ul>
    </section>
  )
}

export default Topics;
