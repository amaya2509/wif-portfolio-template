import {Canvas} from '@react-three/fiber';
import {OrbitControls, Stars} from '@react-three/drei';

const SkillsBackground = () => {
    return (
        <Canvas
        style={{position: 'absolute', top: 0, left: 0, zIndex: 0}}
        camera={{position: [0, 0, 5], fov: 75}}
        >
            <ambientLight intensity={0.5} />
            <Stars
                radius={50} // Radius of the star field
                depth={60} // Depth of the star field
                count={7000} // Amount of stars
                factor={4} // Size factor of the stars
                saturation={0} // Saturation 0-1
                fade // Fade stars
                speed={0.5} // Speed of the stars
                />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={1} />
        </Canvas>
    )
}

export default SkillsBackground;