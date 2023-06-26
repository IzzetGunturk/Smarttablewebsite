import Spline from '@splinetool/react-spline';
import React from 'react'

function SplineObject() {
  return (
    <div className="flex items-center justify-center p-10 mt-8 lg:mt-0">
      <Spline style={{ width: '700px', height: '500px' }}
        scene="https://prod.spline.design/0TJXzR4YRY3ZPIJB/scene.splinecode"
      />
    </div>
  )
}

export default SplineObject