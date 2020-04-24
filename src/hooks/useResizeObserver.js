import React, { useCallback } from 'react'
import useResizeObserver from './useResizeObserver'

// https://tobbelindstrom.com/blog/resize-observer-hook/
const Component = () => {
  const [ref, { contentRect }] = useResizeObserver()

  const getContentRect = useCallback(
    (key) => {
      return contentRect && Math.round(contentRect[key])
    },
    [contentRect]
  )

  return (
    <div ref={ref}>
      {getContentRect('width')}x{getContentRect('height')}
    </div>
  )
}
