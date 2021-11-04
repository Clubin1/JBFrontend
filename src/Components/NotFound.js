import React from 'react'

const NotFound = () => {
    return (
       <>
        <div class="notFoundContainer">
            <h1 class="nfTitle">Whoops!</h1>
            <p class="nfText">It seems like we couldn't find the page you were looking for</p>
            <a href="/">
            <button type="button" class="btn landingButton btn-primary me-3">
                Return Home
          </button>
            </a>
        </div>
       </>
    )
}

export default NotFound
