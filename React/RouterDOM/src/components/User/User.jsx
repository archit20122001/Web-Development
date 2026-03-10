import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function User() {
    const { userId } = useParams();
    console.log("User Component Rendered: ", userId);
    return (
        <div className="p-10 text-center text-2xl">
            <p>
                This is user page, User: {userId}
            </p>
        </div>
    )
}

export default User