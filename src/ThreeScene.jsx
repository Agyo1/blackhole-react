import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

const ThreeScene = () => {
    const renderer = useRef(null);
    const scene = useRef(null);
    const camera = useRef(null);
    const controls = useRef(null);
    const composer = useRef(null);

    useEffect(() => {
        const canvas = document.getElementById('bg');

        // Create a new scene
        scene.current = new THREE.Scene();

        // Create a new camera and set its position
        camera.current = new THREE.PerspectiveCamera(
            75,
            canvas.width / canvas.height,
            0.1,
            1000
        );
        camera.current.position.z = 7;
        camera.current.position.y = 2;

        // Create a new WebGLRenderer and set its size to match the canvas
        renderer.current = new THREE.WebGLRenderer({ canvas });

        renderer.current.setPixelRatio(window.devicePixelRatio);
        renderer.current.setSize(window.innerWidth, window.innerHeight);

        composer.current = new EffectComposer(renderer.current);

        controls.current = new OrbitControls(
            camera.current,
            renderer.current.domElement
        );
        controls.current.enableDamping = true; // optional damping effect for smooth orbiting
        controls.current.dampingFactor = 0.25;
        controls.current.screenSpacePanning = false;
        controls.current.minDistance = 10;
        controls.current.maxDistance = 100;
        window.addEventListener('keydown', () => {
            const speed = 10; // Adjust speed as needed
            switch (event.key) {
                case 'w':
                    camera.current.position.z -= speed;
                    break;
                case 's':
                    camera.current.position.z += speed;
                    break;
                case 'a':
                    camera.current.position.x -= speed;
                    break;
                case 'd':
                    camera.current.position.x += speed;
                    break;
            }
        });
        controls.current.autoRotate = true;
        controls.current.autoRotateSpeed = 0.5; // Adjust the speed (default is 2)

        const light = new THREE.DirectionalLight(0xffffff, 10);
        light.position.set(0, 3, 1).normalize();
        scene.current.add(light);

        const spaceTexture = new THREE.TextureLoader().load(
            'src/assets/stars.jpg'
        );
        scene.current.background = spaceTexture;

        // Create a mesh with disk geometry and shader material
        const diskGeometry = new THREE.RingGeometry(3, 6, 64);
        const diskTexture = new THREE.TextureLoader().load(
            'src/assets/accretion-disk.jpg'
        );
        const normalTexture = new THREE.TextureLoader().load(
            'src/assets/normal-map.jpg'
        );
        const diskMesh = new THREE.Mesh(
            diskGeometry,
            new THREE.MeshStandardMaterial({
                map: diskTexture,
                normalMap: normalTexture,
                normalScale: new THREE.Vector2(0.2, 0.2),
            })
        );
        diskMesh.rotation.x = -Math.PI / 2;
        //scene.current.add(diskMesh);

        // Create a new geometry and material
        const geometry = new THREE.SphereGeometry(3, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const sphere = new THREE.Mesh(geometry, material);
        scene.current.add(sphere);

        // helper
        const gridHelper = new THREE.GridHelper(100, 25);
        scene.current.add(gridHelper);

        const renderPass = new RenderPass(scene.current, camera.current);
        composer.current.addPass(renderPass);

        // Add a shader pass for gravitational lensing
        const lensingPass = new ShaderPass({
            /* uniforms: {
                tDiffuse: { value: spaceTexture },
                time: { value: 0 },
            },
            vertexShader: `
                uniform float time;
varying vec2 vUv;

void main() {
    vUv = uv;
    
    // Calculate distortion amount based on time
    float distortion = sin(time * 0.5) * 0.05; // Adjust distortion factor as needed
    
    // Apply distortion to vertex position
    vec3 pos = position;
    float dist = length(pos.xy);
    pos.xy += normalize(pos.xy) * distortion * dist;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
            `,
            fragmentShader: `
            uniform sampler2D tDiffuse;
varying vec2 vUv;

void main() {
    // Get the current UV coordinate
    vec2 uv = vUv;
    
    // Sample the background texture
    vec4 background = texture2D(texture,vUv);
    
    // Apply gravitational lensing effect to UV coordinate
    float distortion = 0.02; // Adjust distortion factor as needed
    vec2 lensingUV = uv + distortion * (uv - 0.5);
    
    // Sample the background texture using distorted UV coordinate
    vec4 color = texture2D(texture, lensingUV);
    
    // Blend the original background color with the lensed color
    gl_FragColor = mix(background, color, 0.5); // Adjust blend factor as needed
}


            `, */
        });
        composer.current.addPass(lensingPass);

        // Animate the scene
        const animate = () => {
            requestAnimationFrame(animate);
            controls.current.update();

            //composer.current.render();

            renderer.current.render(scene.current, camera.current);
        };

        animate();

        // Cleanup function
        return () => {
            // Remove the renderer
            if (renderer.current) {
                renderer.current.dispose();
            }
        };
    }, []);

    return <canvas id='bg' />;
};

export default ThreeScene;
