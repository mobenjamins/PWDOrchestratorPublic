import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setShowVideoModal } from '../../redux/globals.slice'


function VideoModal() {
  const dispatch = useDispatch()
  const {videoUrl} = useSelector(state => state.globals)

  const onExitModal = () => {
    dispatch(setShowVideoModal({value: false, videoUrl: ''}))
    console.log("onExitModal")
  }

  return(
    <div className='video-modal' onClick={()=> onExitModal()}>
      <div className='video-wrapper'>
        <iframe 
         width="100%" 
         height="100%" 
         src={videoUrl} 
         title="YouTube video player" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default VideoModal
