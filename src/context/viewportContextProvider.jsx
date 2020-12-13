import React, { useState, useContext, useEffect } from 'react'
import useResizeObserver from '../hooks/useResizeObserver'
// import ViewportContext from './context'
import styles from './ViewportContextProvider.module'
import 'matchmedia-polyfill'
import 'matchmedia-polyfill/matchMedia.addListener'

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
  const [appContainerRef, { contentRect }] = useResizeObserver()
  const [viewportHeight, setViewportHeight] = useState(ViewportContext.viewportHeight)
  const [viewportWidth, setViewportWidth] = useState(ViewportContext.viewportWidth)

  useEffect(() => {
    if (contentRect !== undefined) {
      setViewportWidth(contentRect.width)
      setViewportHeight(contentRect.height)
    }
  }, [contentRect, setViewportWidth, setViewportHeight])

  const contextObject = {
    viewportHeight,
    viewportWidth,
    isMobile: window.matchMedia('only screen and (max-width: 900px)').matches,
    isPortrait: viewportWidth < viewportHeight,
    screenSize: calculateScreenSize(viewportWidth),
  }

  return (
    <ViewportContext.Provider value={contextObject}>
      <article ref={appContainerRef} className={styles.contextContainer}>
        {children}
      </article>
    </ViewportContext.Provider>
  )
}

export default ViewportContextProvider
