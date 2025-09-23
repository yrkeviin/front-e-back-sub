import React from 'react'

export default function StaticCard({number, desc}) {
    return (
        <div className="card">
            <h2>{number}</h2>
            <p>{desc}</p>
        </div>
    )
}
