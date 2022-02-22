import { useMemo } from 'react'
import html2canvas from 'html2canvas';

import './Gallery.css'

import { useMachine } from '@xstate/react';
import { createGalleryMachine } from './GalleryMachine';

interface GalleryProps {
    address: string
}

export default function Gallery({ address }: GalleryProps) {

    const galleryMachine =  useMemo(() => {
        return createGalleryMachine(address)
    }, [address]) 

    const [current, send] = useMachine(galleryMachine)
    const { collection } = current.context
 
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
                <ul>
                    {
                        collection && collection.size > 0 && Array.from(collection.entries()).map((entry) => {
                            const nfts = entry[1];
                            return nfts.map((nft) => {
                                const url = nft.url//nft.uris && nft.uris.length > 0 ? atob(nft.uris[0]) : nft.url
                                return (
                                    <li key={nft.identifier}>
                                        <img src={url} alt=''></img>
                                    </li>
                                )
                            })
                        })
                    }
                </ul>
            </div>
            <button onClick={captureScreenShot}>Capture</button>
        </div>
    )
}
