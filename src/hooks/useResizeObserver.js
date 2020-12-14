import { useRef, useLayoutEffect, useState, useCallback } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

const useResizeObserver = (observer) => {
  const [entry, setEntry] = useState({})
  const [node, setNode] = useState(null)

  const disconnect = useCallback(() => {
    const { current } = observer
    current && current.disconnect()
  }, [observer])

  const observe = useCallback(() => {
    observer.current = new ResizeObserver(([entry]) => setEntry(entry))
    node && observer.current.observe(node)
  }, [node, observer])

  useLayoutEffect(() => {
    observe()
    return () => disconnect()
  }, [disconnect, observe])

  return [setNode, entry]
}

export default useResizeObserver
