import React from 'react'

export default propos => {
    if(propos.test) {
        return propos.children
    } else {
        return false
    }
}