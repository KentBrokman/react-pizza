


import React from "react"
import ContentLoader, { Facebook } from "react-content-loader"
import preloader from '../../assets/preloaderSmall.svg'

export const PizzaLoader = (props) => (
    // <img src={preloader} />
    // <Facebook animate={true}/>
    <ContentLoader
        speed={2}
        width={280}
        height={457}
        viewBox="0 0 280 457"
        backgroundColor="#ffdf8c"
        foregroundColor="#fe5f1e"
        {...props}
    >
        <circle cx="130" cy="130" r="130" />
        <rect x="0" y="275" rx="4" ry="4" width="280" height="24" />
        <rect x="0" y="310" rx="5" ry="5" width="280" height="84" />
        <rect x="16" y="412" rx="5" ry="5" width="77" height="24" />
        <rect x="124" y="404" rx="20" ry="20" width="150" height="44" />
        <rect x="136" y="300" rx="0" ry="0" width="1" height="0" />
    </ContentLoader>
)