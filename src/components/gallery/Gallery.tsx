import React from 'react'
import html2canvas from 'html2canvas';

import './Gallery.css'

import wedding from '../../assets/wedding.jpg'
import rocks from '../../assets/rocks.jpg'
import falls2 from '../../assets/falls2.jpg'
import paris from '../../assets/paris.jpg'
import nature from '../../assets/nature.jpg'
import mist from '../../assets/mist.jpg'
import underwater from '../../assets/underwater.jpg'
import ocean from '../../assets/ocean.jpg'
import mountainskies from '../../assets/mountainskies.jpg'

export default function Gallery() {
 
    function captureScreenShot():void {
        const gallery = document.getElementById('gallery')
        const options = {
            backgroundColor: "#282c34",
            onclone: (cloned: any) => {
                const elem = cloned.getElementById('gallery')
                elem.style.maxHeight = "100%"
                elem.style.border = "none"
                elem.style.overflowY = "visible"
            }
        }
        if(gallery) {
            html2canvas(gallery, options).then(
                function(canvas) {
                const image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
                const link = document.createElement('a');
                link.download = "my-image.png";
                link.href = image;
                link.click();
            })
        }
    }

    return (
        <div >
            <div id="gallery" className="gallery-area">
                <div className="row">
                    <div className="column">
                        <img src={wedding} />
                        <img src={rocks} />
                        <img src={falls2} />
                        <img src={paris} />
                        <img src={nature} />
                        <img src={mist} />
                        <img src={paris} />
                    </div>
                        <div className="column">
                        <img src={underwater} />
                        <img src={ocean} />
                        <img src={wedding} />
                        <img src={mountainskies} />
                        <img src={rocks} />
                        <img src={underwater} />
                    </div>
                    <div className="column">
                        <img src={wedding} />
                        <img src={rocks} />
                        <img src={falls2} />
                        <img src={paris} />
                        <img src={nature} />
                        <img src={mist} />
                        <img src={paris} />
                    </div>
                        <div className="column" >
                        <img src={underwater} />
                        <img src={ocean} />
                        <img src={wedding} />
                        <img src={mountainskies} />
                        <img src={rocks} />
                        <img src={underwater} />
                    </div>
                </div>
            </div>
            <button onClick={captureScreenShot}>Capture</button>
        </div>
    )
}
