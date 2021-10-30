import React from 'react'

export default function Greet(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>Thank you for registration...</h3>
            <h3>Verification sent to email: {props.email}</h3>
        </div>
    )
}
