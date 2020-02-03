import React, { useEffect } from 'react'
import Lottie from 'react-lottie'
import animationData from './lotties/animation.json'

export default function Loading() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div style={{ overflowY: scroll, width: "100%" }}>
            <div style={{ height: "80vh" }} className="d-flex align-items-center">
                <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
        </div>
    )
}
