import React from 'react'

export default function PhotosComponet(props) {

    if (props.photos) {
        return (
            <div>
                {/* <img src={props.photos[0].src.small} alt="" /> */}
                {props.photos.map((photo, index) => {
                    return (
                        <div key={index}>
                            <a href={photo.src.original} target="_blank">
                                <img src={photo.src.small} />
                            </a>
                        </div>

                    )

                })}

            </div>
        )

    } else {
        return null;
    }

}

