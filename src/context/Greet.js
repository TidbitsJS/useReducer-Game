import React from 'react'
import { LocaleContext } from 'context/LocaleProvider'

const Greet = () => {
    return(
        <LocaleContext.Consumer>
            {localeVal => 
                localeVal.locale === 'en' 
                    ? <h1>Welcome</h1>
                    : <h1>Bienvenue</h1>}
        </LocaleContext.Consumer>
    )
}

export default Greet
