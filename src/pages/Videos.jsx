import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import { useYoutubeApi } from '../context/YoutubeApiContext'

export default function Videos() {
  const { keyword } = useParams()
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ['videos', keyword],
    () => {
      return youtube.search(keyword)
    },
    {staleTime: 60 * 1000 * 1}
  )

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && (
        <p>Something is wrong</p>
      )}
      {videos && (
        <ul className={styles.grid}>
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
            />
          ))}
        </ul>
      )}
    </>
  )
}

const styles = {
  grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'
}