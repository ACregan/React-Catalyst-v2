import React, { useRef, useLayoutEffect, useState } from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

// Dont do this, its unreliable. Lets use IntersectionObserver instead.
// https://www.telerik.com/blogs/observing-visibility-in-react
//
// const TopTest = () => {
//   const [distanceFromTop, setDistanceFromTop] = useState(0)
//   const itemRef = useRef()
//
//   useLayoutEffect(function () {
//     setTimeout(() => {
//       let offsetTop = itemRef.current.offsetTop
//       setDistanceFromTop(offsetTop)
//     }, 50) // Update the content of the element after 2seconds
//   }, [])
//
//   return (
//     <div ref={itemRef}>
//       <p>{`I am ${distanceFromTop} pixels from the top of the page.`}</p>
//     </div>
//   )
// }

//Implemented with useIntersectionObserver hook:

const TopTest = () => {
  const [ref, entry] = useIntersectionObserver({
    rootMargin: '30px',
    threshold: 0.1,
  })

  return (
    <div ref={ref}>
      <p>{`I am ${entry.intersectionRatio > 0 ? '' : 'not '}in the viewport.`}</p>
    </div>
  )
}

export default TopTest
