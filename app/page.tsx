'use client'; 

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { ARButton, XR } from '@react-three/xr';
import { Suspense } from 'react';

// Fixed the typo here: changed 'ffunction' to 'function'
function Model() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} /> 
      <meshStandardMaterial color="cyan" />
    </mesh>
  );
}

export default function ARPage() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#111' }}>
      <ARButton style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', zIndex: 100 }} />
      
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <XR>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          
          <Suspense fallback={null}>
            <Model />
            <Environment preset="city" />
          </Suspense>

          <OrbitControls />
        </XR>
      </Canvas>
    </div>
  );
}
