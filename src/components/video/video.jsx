import React from 'react'

export default function video({src}) {
  return (
    <div>
              <iframe src={src}
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
        />
        </div>
  )
}
