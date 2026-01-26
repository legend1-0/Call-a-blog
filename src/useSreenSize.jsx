import React, { useEffect, useState } from 'react'

const useSreenSize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const onResize = () => {
            window.addEventListener("resize", onResize);
            return () => window.removeEventListener("resize", onResize)
        }
    }, [])
return width
}

export default useSreenSize
