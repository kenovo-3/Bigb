import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

// The Last Run - React + Three.js Prototype
// Features:
// - Main menu with Play / Character selection / Difficulty
// - In-game HUD: score, pause, restart
// - Procedural chunk spawning (endless runner style)
// - Player cube with left/right/jump and camera follow
// - Responsive layout with Tailwind classes

export default function TheLastRunPro() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const playerRef = useRef(null);
  const chunksRef = useRef([]);
  const animRef = useRef(null);

  // UI state
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("medium"); // easy, medium, hard
  const [character, setCharacter] = useState(0); // index for character color/style

  // Gameplay params (mapped from difficulty)
  const paramsRef = useRef({ baseSpeed: 0.12, spawnInterval: 1.0, gravity: 0.025 });

  // Character options
  const characterOptions = [
    { name: "Runner A", color: "#00ff88" },
    { name: "Runner B", color: "#8899ff" },
    { name: "Runner C", color: "#ffdd55" },
    { name: "Runner D", color: "#ff7b7b" },
  ];

  // Map difficulty → speed & gravity
  useEffect(() => {
    const map = {
      easy: { baseSpeed: 0.08, spawnInterval: 1.4, gravity: 0.02 },
      medium: { baseSpeed: 0.12, spawnInterval: 1.0, gravity: 0.025 },
      hard: { baseSpeed: 0.18, spawnInterval: 0.75, gravity: 0.03 },
    };
    paramsRef.current = map[difficulty] || map.medium;
  }, [difficulty]);

  // Initialize scene
  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05060a);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 3.5, 7);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xffffff, 0.9);
    dir.position.set(5, 10, 7);
    dir.castShadow = true;
    scene.add(dir);

    // Player
    const playerGeo = new THREE.BoxGeometry(1, 1.8, 1);
    const mat = new THREE.MeshStandardMaterial({ color: characterOptions[character].color });
    const player = new THREE.Mesh(playerGeo, mat);
    player.castShadow = true;
    player.position.set(0, 1, 0);
    scene.add(player);
    playerRef.current = player;

    // Floor chunks
    const chunkPool = [];
    const chunkCount = 12;
    for (let i = 0; i < chunkCount; i++) {
      const mesh = createChunk();
      mesh.position.z = -i * 10;
      scene.add(mesh);
      chunkPool.push(mesh);
    }
    chunksRef.current = chunkPool;

    // Input state
    const input = { left: false, right: false, jump: false };

    function keyDown(e) {
      if (e.key === "ArrowLeft" || e.key === "a") input.left = true;
      if (e.key === "ArrowRight" || e.key === "d") input.right = true;
      if (e.key === " " || e.key === "Spacebar") input.jump = true;
      if (e.key === "p") setPaused((p) => !p);
    }
    function keyUp(e) {
      if (e.key === "ArrowLeft" || e.key === "a") input.left = false;
      if (e.key === "ArrowRight" || e.key === "d") input.right = false;
      if (e.key === " " || e.key === "Spacebar") input.jump = false;
    }
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);

    // Player physics
    const playerState = { vy: 0, grounded: true, x: 0 };

    // Score
    let internalScore = 0;

    function animate() {
      animRef.current = requestAnimationFrame(animate);

      if (paused || !started) {
        renderer.render(scene, camera);
        return;
      }

      const dt = 0.016;

      // Score increases with distance
      internalScore += paramsRef.current.baseSpeed * 10 * dt;
      setScore(Math.floor(internalScore));

      // Player left/right
      const strafeSpeed = 6 * dt * (paramsRef.current.baseSpeed / 0.12);
      if (input.left) playerState.x -= strafeSpeed;
      if (input.right) playerState.x += strafeSpeed;
      if (playerState.x < -3) playerState.x = -3;
      if (playerState.x > 3) playerState.x = 3;

      // Jump
      if (input.jump && playerState.grounded) {
        playerState.vy = 0.42;
        playerState.grounded = false;
      }
      playerState.vy -= paramsRef.current.gravity || 0.025;
      player.position.x = THREE.MathUtils.lerp(player.position.x, playerState.x, 0.2);
      player.position.y += playerState.vy;
      if (player.position.y <= 1) {
        player.position.y = 1;
        playerState.vy = 0;
        playerState.grounded = true;
      }

      // Move chunks (simulate running forward)
      const move = paramsRef.current.baseSpeed * (1 + score / 2000);
      for (let i = 0; i < chunksRef.current.length; i++) {
        const c = chunksRef.current[i];
        c.position.z += move;
        if (c.position.z > 10) {
          c.position.z = -((chunksRef.current.length - 1) * 10) - Math.random() * 4;
          randomizeChunk(c);
        }
      }

      // Collision check
      for (let c of chunksRef.current) {
        if (c.userData.obstacles) {
          for (let obs of c.userData.obstacles) {
            const worldPos = obs.getWorldPosition(new THREE.Vector3());
            const dist = worldPos.distanceTo(player.position);
            if (dist < 1.2) {
              setPaused(true);
              setStarted(false);
            }
          }
        }
      }

      // Camera follow
      const camTarget = new THREE.Vector3(
        player.position.x,
        player.position.y + 2.5,
        player.position.z + 7
      );
      camera.position.lerp(camTarget, 0.12);
      camera.lookAt(
        new THREE.Vector3(player.position.x, player.position.y + 1, player.position.z - 2)
      );

      renderer.render(scene, camera);
    }

    animate();

    // Resize handler
    function handleResize() {
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [character, started]);

  // Chunk generator
  function createChunk() {
    const g = new THREE.BoxGeometry(10, 0.5, 10);
    const m = new THREE.MeshStandardMaterial({ color: 0x1a1a2b });
    const mesh = new THREE.Mesh(g, m);
    mesh.receiveShadow = true;
    mesh.userData = { obstacles: [] };
    return mesh;
  }

  function randomizeChunk(chunk) {
    for (let obs of chunk.userData.obstacles || []) chunk.remove(obs);
    chunk.userData.obstacles = [];

    const layout = Math.random();
    if (layout < 0.6) {
      const count = 1 + Math.floor(Math.random() * 3);
      for (let i = 0; i < count; i++) {
        const ox = (Math.random() - 0.5) * 6;
        const oz = (Math.random() - 0.5) * 6;
        const obs = new THREE.Mesh(
          new THREE.BoxGeometry(1, 2, 1),
          new THREE.MeshStandardMaterial({ color: 0xff3333 })
        );
        obs.position.set(ox, 1, oz);
        chunk.add(obs);
        chunk.userData.obstacles.push(obs);
      }
    }
  }

  // UI handlers
  function handleStart() {
    setScore(0);
    setPaused(false);
    setStarted(true);
  }
  function handleRestart() {
    window.location.reload();
  }

  // --- JSX Render ---
  return (
    <div ref={mountRef} className="w-full h-screen relative overflow-hidden">
      {!started ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-4 text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">The Last Run</h1>
          <p className="mb-6 max-w-lg text-sm md:text-base">
            Escape the collapsing Odyssey. Run, jump, slide — survive as long as you can.
          </p>

          {/* Character select */}
          <div className="mb-4">
            <p className="mb-2">Character</p>
            <div className="flex gap-2 flex-wrap justify-center">
              {characterOptions.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setCharacter(i)}
                  className={`px-3 py-2 rounded-md border ${
                    character === i ? "border-white bg-gray-800" : "border-gray-600"
                  }`}
                  style={{ color: c.color }}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div className="mb-4">
            <label className="mr-2">Difficulty</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="bg-gray-800 px-3 py-2 rounded-md"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-3">
            <button
              onClick={handleStart}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg"
            >
              Play
            </button>
            <button
              onClick={() => alert("Share feature coming soon")}
              className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg text-lg"
            >
              Share
            </button>
          </div>

          <p className="mt-6 text-xs md:text-sm opacity-80">
            Controls: A/D or ←/→ to move, Space to jump, P to pause.
          </p>
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 text-white text-sm md:text-base">
          <div>Distance: {score}</div>
          <div className="flex gap-2">
            <button
              onClick={() => setPaused((p) => !p)}
              className="bg-yellow-600 px-3 py-1 rounded"
            >
              {paused ? "Resume" : "Pause"}
            </button>
            <button
              onClick={handleRestart}
              className="bg-red-600 px-3 py-1 rounded"
            >
              Restart
            </button>
          </div>
          <div>Difficulty: {difficulty}</div>
        </div>
      )}

      {/* footer */}
      <div className="absolute bottom-2 right-2 text-xs text-white opacity-70">
        Prototype • Character: {characterOptions[character].name}
      </div>
    </div>
  );
}
