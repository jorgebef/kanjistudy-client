import { RefObject, useCallback, useEffect, useState } from 'react'

const useAppear = (ref: RefObject<Element>) => {
  const [isVisible, setIsVisible] = useState(false)

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      // To use hook, the children that want to be toggled need to have class 'aos'
      // ---------------------------------------------------------------------------
      // Extract the toggle function which is called on intersect and leaving intersect
      const AOSappear = (c: HTMLCollection) => {
        Array.from(c).forEach((i: Element) => {
          if (i.classList.contains('aos')) {
            i.classList.add('appear')
          }
        })
      }
      const AOSdisappear = (c: HTMLCollection) => {
        Array.from(c).forEach((i: Element) => {
          if (i.classList.contains('aos')) {
            i.classList.remove('appear')
          }
        })
      }
      // run the checks whether the ref intersects or leaves intersect
      const [entry] = entries
      if (entry.isIntersecting) {
        // ref?.current?.firstElementChild?.classList.add('appear')
        const children = ref?.current?.children
        if (children) AOSappear(children)
        setIsVisible(true)
      } else {
        // ref?.current?.firstElementChild?.classList.remove('appear')
        const children = ref?.current?.children
        if (children) AOSdisappear(children)
        setIsVisible(false)
      }
    },
    [ref]
  )

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.35,
  }

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      callback,
      options
    )
    const currRef: Element | null = ref?.current
    if (currRef) observer.observe(currRef)

    return () => observer.disconnect()
  }, [options, ref, callback])

  return isVisible
}

export default useAppear
