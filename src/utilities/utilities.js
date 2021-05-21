import { useContext } from 'react'
import { VIEWPORT_SIZES } from '../constants/viewport'
import { ViewportContext } from '../context/viewportContextProvider'

/**
 * Get screen size based on the width value passed in
 * @param width Width (in pixels) of the screen or container
 * @returns A string, one of: 'xs', 'sm', 'md', 'lg' or 'xl'
 */
export const getScreenSize = (width) => {
  switch (true) {
    case width <= 599:
      return 'xs'
    case width >= 600 && width < 900:
      return 'sm'
    case width >= 900 && width < 1200:
      return 'md'
    case width >= 1200 && width < 1800:
      return 'lg'
    case width >= 1800:
      return 'xl'
    default:
      return 'default'
  }
}

/**
 * Check to see if the current viewport is smaller than that passed into this function
 * @param screenSizeToCheck Width as a string ('xs', 'sm', 'md', 'lg' or 'xl')
 * @returns true or false
 */
const useScreenSmallerThan = (screenSizeToCheck) => {
  const currentScreenSize = useContext(ViewportContext)
  return VIEWPORT_SIZES[currentScreenSize.screenSize] < VIEWPORT_SIZES[screenSizeToCheck]
}
export { useScreenSmallerThan as isScreenSmallerThan }

/**
 * Check to see if the current viewport is larger than that passed into this function
 * @param screenSizeToCheck Width as a string ('xs', 'sm', 'md', 'lg' or 'xl')
 * @returns true or false
 */
const useScreenLargerThan = (screenSizeToCheck) => {
  const currentScreenSize = useContext(ViewportContext)
  return VIEWPORT_SIZES[currentScreenSize.screenSize] > VIEWPORT_SIZES[screenSizeToCheck]
}
export { useScreenLargerThan as isScreenLargerThan }
