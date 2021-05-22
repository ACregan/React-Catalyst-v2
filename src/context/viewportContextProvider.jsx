import React, { useState, useRef, useEffect } from 'react'
import propTypes from 'prop-types'
import useResizeObserver from '../hooks/useResizeObserver'
import 'matchmedia-polyfill'
import 'matchmedia-polyfill/matchMedia.addListener'
import { getScreenSize } from '../utilities/utilities'

export const ViewportContext = React.createContext()

const ViewportContextProvider = ({ children }) => {
  const ref = useRef(null)
  const [appContainerRef, { contentRect }] = useResizeObserver(ref)
  const [viewportHeight, setViewportHeight] = useState(ViewportContext.viewportHeight)
  const [viewportWidth, setViewportWidth] = useState(ViewportContext.viewportWidth)
  const [viewportX, setViewportX] = useState(0)
  const [viewportY, setViewportY] = useState(0)
  const [pageSizeX, setPageSizeX] = useState(0)
  const [pageSizeY, setPageSizeY] = useState(0)
  const [screenSize, setScreenSize] = useState('lg')

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
    // console.log(contentRect)
    if (contentRect !== undefined) {
      setPageSizeX(contentRect.width)
      setPageSizeY(contentRect.height)
      setScreenSize(getScreenSize(contentRect.width))
      setViewportWidth(window.innerWidth)
      setViewportHeight(window.innerHeight)
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
    screenSize: screenSize,
    scrollX: viewportX,
    scrollY: viewportY,
  }

  return (
    <ViewportContext.Provider value={contextObject}>
      <div ref={appContainerRef}>{children}</div>
    </ViewportContext.Provider>
  )
}

ViewportContextProvider.propTypes = {
  children: propTypes.node.isRequired,
}

export default ViewportContextProvider
