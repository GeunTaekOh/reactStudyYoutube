import React from 'react'
import { useLocation } from 'react-router-dom'
import ChannelInfo from '../components/ChannelInfo'
import RelatedVideos from '../components/RelatedVideos';
export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className={`${styles.section}`}>
      <article className={`${styles.article}`}>
        <iframe
          id='player'
          type='text/html'
          width='100%'
          height='640'
          src={`http://www.youtube.com/embed/${video.id}`}
          title={title}
        />
        <div className='p-8'>
          <h2 className='text-xl font-bold'>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle}/>
          <pre className={`${styles.pre}`}>{description}</pre>
        </div>
      </article>
      <section className={`${styles.videoSection}`}>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  )
}

const styles = {
  section: 'flex flex-col lg:flex-row',
  article: 'basis-4/6',
  videoSection: 'basis-2/6',
  pre: 'whitespace-pre-wrap',
}