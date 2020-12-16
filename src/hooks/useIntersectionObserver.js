import { useState, useRef, useEffect } from 'react'

//https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5

// USAGE:
/*
  In your component, call it like so:

  const [ref, entry] = useIntersectionObserver({
    rootMargin: '30px',
    threshold: 0.1,
  })

  return (
    <div ref={ref}>
      <p>{`I am ${entry.intersectionRatio > 0 ? '' : 'not '}in the viewport.`}</p>
    </div>
*/

const useIntersectionObserver = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({})
  const [node, setNode] = useState(null)

  const observer = useRef(null)

  useEffect(() => {
    if (observer.current) observer.current.disconnect()

    observer.current = new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      root,
      rootMargin,
      threshold,
    })

    const { current: currentObserver } = observer

    if (node) currentObserver.observe(node)

    return () => currentObserver.disconnect()
  }, [node, root, rootMargin, threshold])

  return [setNode, entry]
}

export default useIntersectionObserver
