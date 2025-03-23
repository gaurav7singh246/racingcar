// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Hide the splash screen after 1 second
    setTimeout(() => {
        const splashScreen = document.getElementById("splashScreen");
        splashScreen.style.display = "none";
    }, 1000);

    // Initialize the game
    initGame();
});

function initGame() {
    // Scene Setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("gameCanvas"), antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);

    // Lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Game Variables
    let distance = 0;
    let speed = 0;
    let score = 0;

    // Update HUD
    function updateHUD() {
        document.getElementById("speedometer").textContent = `Speed: ${Math.round(speed * 3.6)} km/h`;
        document.getElementById("distance").textContent = `Distance: ${Math.round(distance)} m`;
        document.getElementById("score").textContent = `Score: ${score}`;
    }

    // Game Loop
    function animate() {
        requestAnimationFrame(animate);
        distance += speed * 0.1;
        score += Math.round(speed);
        updateHUD();
        renderer.render(scene, camera);
    }
    animate();
}
