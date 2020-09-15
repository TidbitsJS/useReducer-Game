import React from 'react'
import { LocaleContext } from 'context/LocaleProvider'
import { Button } from 'react-bootstrap'

const Toggle = () => {
    return(
        <LocaleContext.Consumer>
            {localVal => (
                <Button onClick={localVal.changeLocale}>
                    Change Language
                </Button>
            )}
        </LocaleContext.Consumer>
    )
}

export default Toggle
