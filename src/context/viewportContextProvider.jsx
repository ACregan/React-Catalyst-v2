import React, { useState, useMemo, useRef, useEffect } from 'react'
import useResizeObserver from '../hooks/useResizeObserver'
import useScrollPosition from '../hooks/useScrollPosition'
// import ViewportContext from './context'
import 'matchmedia-polyfill'
import 'matchmedia-polyfill/matchMedia.addListener'
import throttle from 'lodash.throttle'

export const ViewportContext = React.createContext()

const calculateScreenSize = (width) => {
  switch (true) {
    case width < 599:
      return 'xs'

    case width >= 600 && width <= 899:
      return 'sm'

    case width >= 900 && width <= 1199:
      return 'md'

    case width >= 1200 && width <= 1799:
      return 'lg'

    case width >= 1800:
      return 'xl'

    default:
      return 'xs'
  }
}

const ViewportContextProvider = ({ children }) => {
  const ref = useRef(null)
  const [appContainerRef, { contentRect, target }] = useResizeObserver(ref)
  const [viewportHeight, setViewportHeight] = useState(ViewportContext.viewportHeight)
  const [viewportWidth, setViewportWidth] = useState(ViewportContext.viewportWidth)
  const [viewportX, setViewportX] = useState(0)
  const [viewportY, setViewportY] = useState(0)
  const [pageSizeX, setPageSizeX] = useState(0)
  const [pageSizeY, setPageSizeY] = useState(0)

  const setScrollPosition = () => {
    setViewportX(window.pageXOffset)
    setViewportY(window.pageYOffset)
  }

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', setScrollPosition)
    }
    watchScroll()
    return () => {
      window.removeEventListener('scroll', setScrollPosition)
    }
  })

  useEffect(() => {
    if (contentRect !== undefined) {
      setPageSizeX(contentRect.width)
      setPageSizeY(contentRect.height)
    }
  }, [contentRect, setPageSizeX, setPageSizeY])

  useEffect(() => {
    if (window) {
      setViewportWidth(window.innerWidth)
      setViewportHeight(window.innerHeight)
    }
  }, [setViewportWidth, setViewportHeight])

  const contextObject = {
    pageSizeX,
    pageSizeY,
    viewportHeight,
    viewportWidth,
    isMobile: window.matchMedia('only screen and (max-width: 900px)').matches,
    isPortrait: viewportWidth < viewportHeight,
    screenSize: calculateScreenSize(viewportWidth),
    scrollX: viewportX,
    scrollY: viewportY,
  }

  return (
    <ViewportContext.Provider value={contextObject}>
      <div ref={appContainerRef}>{children}</div>
    </ViewportContext.Provider>
  )
}

export default ViewportContextProvider
