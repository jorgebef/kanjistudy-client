import { useCallback, useEffect, useState } from 'react'

const useAppear = (ref: any) => {
  const [isVisible, setIsVisible] = useState(false)

  const callback = useCallback(
    entries => {
      const [entry] = entries
      if (entry.isIntersecting) {
        ref?.current?.classList.add('appear')
        console.log('VISIBLE')
        setIsVisible(true)
      } else {
        ref?.current?.classList.remove('appear')
        console.log('NOT VISIBLE')
        setIsVisible(false)
      }
    },
    [ref]
  )

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    const currRef = ref?.current
    if (currRef) observer.observe(currRef)

    return () => {
      if (currRef) observer.unobserve(currRef)
    }
  }, [ref, callback, options])

  return isVisible
}

export default useAppear
