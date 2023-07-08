import { useEffect, useMemo, useState} from 'react'

export function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    }
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting), options
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
  }