import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Layer(props) {
  const ref = useRef()

  useFrame(({clock}) => {
    const time = clock.getElapsedTime()
    const rotationMod = Math.sin(time*props.rotationModFreq)
    const radiusMod = 1 + props.radiusModAmplitude * Math.sin(time*props.radiusModFreq)
    const augmentedRadiusX = radiusMod * props.radius * Math.sin(ref.current.rotation.y)
    const augmentedRadiusZ = radiusMod * props.radius * Math.cos(ref.current.rotation.y)

    ref.current.rotation.y = Math.PI / 2 + Math.PI * props.rotationAmount * rotationMod
    ref.current.position.x = Math.cos((Math.PI / props.layers)*props.no) * augmentedRadiusX
    ref.current.position.z = Math.cos((Math.PI / props.layers)*props.no) * augmentedRadiusZ
  })

  return(
    <mesh receiveShadow castShadow position={[props.no, 0, 0]} ref={ref}>
      <circleGeometry args={[props.radius * Math.sin((Math.PI / props.layers) * props.no), 64, 32]}/>
      <meshStandardMaterial color={props.color} side={THREE.DoubleSide}/>
    </mesh>
  )
}

function _LayeredSphere(props) {
	const ref = useRef()

  var sphereLayers = []

  const radius = 3

  for (var i = 0; i < props.layers; i++) {
  	var layer = <Layer {...props} key={i} no={i} radius={radius} color='hotpink'/>
  	sphereLayers.push(layer)
  }

  return (
    <mesh ref={ref}>
      {sphereLayers}
    </mesh>
  )
}

export default function LayeredSphere(props) {
  console.log('render')
	return(
		<Canvas shadowMap style={{position: 'relative', zIndex: '0'}}>
	  	<ambientLight/>
      <spotLight intesity={1} position={[10, 0, -10]} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512}/>
			<pointLight intesity={1} position={[-10, 0, -10]}/>
			<_LayeredSphere {...props}/>
    </Canvas>
	)
}