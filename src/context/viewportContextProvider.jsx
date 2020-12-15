import React, { useState, useMemo, useRef, useEffect } from 'react'
import useResizeObserver from '../hooks/useResizeObserver'
// import ViewportContext from './context'
import styles from './ViewportContextProvider.module'
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

  const onScroll = (e) => {
    setViewportX(e.target.scrollLeft)
    setViewportY(e.target.scrollTop)
  }
  const delayedOnScroll = useMemo(() => throttle((e) => onScroll(e), 200), [])

  useEffect(() => {
    if (contentRect !== undefined) {
      setViewportWidth(contentRect.width)
      setViewportHeight(contentRect.height)
    }
  }, [contentRect, target, setViewportWidth, setViewportHeight, setViewportX, setViewportY])

  const contextObject = {
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
      <div ref={appContainerRef} className={styles.contextContainer} onScroll={delayedOnScroll}>
        {children}
      </div>
    </ViewportContext.Provider>
  )
}

export default ViewportContextProvider
