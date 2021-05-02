import React from 'react';
import Card from '@material-ui/core/Card';

export default function PhotosComponet(props) {

    if (props.photos) {
        return (
            <div>
                {/* <img src={props.photos[0].src.small} alt="" /> */}
                {props.photos.map((photo, index) => {
                    return (
                        <Card className="photoCard" key={index}>
                            <a href={photo.src.original} target="_blank" alt="image" rel="noreferrer">
                                <img src={photo.src.small} />
                            </a>
                        </Card>

                    )

                })}

            </div>
        )

    } else {
        return null;
    }

}

