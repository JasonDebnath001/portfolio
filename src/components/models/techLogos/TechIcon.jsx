import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useRef, useMemo } from 'react'
import * as THREE from 'three'

const TechIcon = ({model}) => {
    const scene = useGLTF(model.modelPath)
    const materialApplied = useRef(false)
    
    const whiteMaterial = useMemo(() => new THREE.MeshStandardMaterial({color: "white"}), [])

    useEffect(()=>{
        if(model.name === 'Interactive Developer' && !materialApplied.current){
            scene.scene.traverse((child)=>{
                if(child.isMesh && child.name === 'Object_5'){
                    child.material = whiteMaterial
                    materialApplied.current = true
                }
            })
        }
    },[scene, model.name, whiteMaterial])

  return (
    <Canvas>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5,5,5]} intensity={1} />
        <Environment preset='city' />

        <OrbitControls enableZoom={false} />

        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene} />
            </group>
        </Float>
    </Canvas>
  )
}

export default TechIcon
