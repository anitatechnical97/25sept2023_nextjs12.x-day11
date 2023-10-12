import React from 'react'

export default function Nav() {
        return (
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">We are Hiring</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Investor Relations</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Advertise</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-disabled="true">Free Listing</a>
                </li>
            </ul>
        )
}
