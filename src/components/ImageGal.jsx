import React from 'react'

const ImageGal = (props) => {
    return (
        <React.Fragment>
            <div class="col-xl-3 col-md-6 col-sm-12 rounded-5 p-1">
                <iframe class="rounded-5" width="260" height="440"
                    src={props.src} title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen alt={props.alt} value={props.tytle}></iframe>
            </div>
        </React.Fragment>
    )
}

export default ImageGal