import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 100 }) => {
  const mesh = useRef();

  // Generate random positions and properties for particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = Math.random() * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push({
        position: [x, y, z],
        speed: Math.random() * 0.05 + 0.02, // Slower speed
        sway: Math.random() * 0.02 + 0.01, // Swaying motion
        swayOffset: Math.random() * Math.PI * 2, // Random starting phase
        size: Math.random() * 0.1 + 0.05, // Random size
      });
    }
    return temp;
  }, [count]);

  // Create geometry and material for particles
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    particles.forEach((particle, i) => {
      positions[i * 3] = particle.position[0];
      positions[i * 3 + 1] = particle.position[1];
      positions[i * 3 + 2] = particle.position[2];
      sizes[i] = particle.size;
    });

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [particles, count]);

  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        size: 0.1,
        color: "#ffffff",
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending, // Makes particles glow
        vertexColors: false,
      }),
    []
  );

  // Update particle positions
  useFrame((state) => {
    if (!mesh.current?.geometry?.attributes?.position?.array) return;

    const positions = mesh.current.geometry.attributes.position.array;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < positions.length; i += 3) {
      const particle = particles[i / 3];

      // Add gentle swaying motion
      positions[i] += Math.sin(time + particle.swayOffset) * particle.sway;
      positions[i + 1] -= particle.speed;
      positions[i + 2] += Math.cos(time + particle.swayOffset) * particle.sway;

      // Reset particle position when it goes below -10
      if (positions[i + 1] < -10) {
        positions[i] = (Math.random() - 0.5) * 20;
        positions[i + 1] = 20;
        positions[i + 2] = (Math.random() - 0.5) * 20;
      }
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return <points ref={mesh} geometry={geometry} material={material} />;
};

export default Particles;
