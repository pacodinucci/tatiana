import { useRef, useState, useEffect } from 'react';

function useIntersection(opciones = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementoRef = useRef();
    console.log(elementoRef)

    const [isStillVisible, setIsStillVisible] = useState(false);
    
  
    useEffect(() => {
      const elemento = elementoRef.current;
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          setIsIntersecting(entry.isIntersecting)
          console.log(entry)

          if (entry.isIntersecting && !isStillVisible) {
            setIsStillVisible(true);
          }
        });
      }, opciones)
  
      if(elemento) {
        observer.observe(elemento)
      }

      return () => {
        if(elemento) {
            observer.unobserve(elemento);
        }
      }
  
    }, [opciones, isStillVisible]);

    return [elementoRef, isIntersecting || isStillVisible];
}

export default useIntersection;