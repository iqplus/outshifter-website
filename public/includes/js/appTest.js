var AppTest = function () {

    // Configure your application here
    var config = {
        showStats: false,
        background: "transparent", //"RGB(238,238,238)",
        cameraPosition: { x: 300, y: 500, z: 500 },
        cameraLookAt: { x: 0, y: 0, z: 100 },
        enableCameraRotation: false,
        cameraRotationDistance: 300,
        // Gradient Notes: pos is 0 to 1, 0 top, 1 bottom, play with values to get what you want
        enableTopGradient: false,
        topGradientColors:  [
            { color: "RGBA(238,238,238,1)", pos: 0 },
            { color: "RGBA(238,238,238,1)", pos: 0.5 },
            { color: "RGBA(238,238,238,0)", pos: 0.8 }
        ],
        enableBtmGradient: false,
        btmGradientColors: [
            { color: "RGBA(238,238,238,0)", pos: 0 },
            { color: "RGBA(238,238,238,0)", pos: 0.2 },
            { color: "RGBA(238,238,238,1)", pos: 1 },
        ],
        particleGradient: [
            {r:138,g:43,b:226},
            {r:65,g:105,b:225},
            {r:0,g:191,b:225},
        ],
        particleBaseSize: 16,
        // Change your wave sizes here, they animate on X and Z
        waveAmplitudeX: 50,
        waveAmplitudeZ: 50,
        particleGap: 15,
        // Note particles are rotated by 90 deg, so point of view is x=z and z=x depending on camera location and lookAt position
        // WARNING: Too many and CPU/GPU load will be too much
        noOfParticlesOnX: 50, // Ensure this is divisible by 2!
        noOfParticlesOnZ: 100,
    };
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    // App vars
    var vars = {
        dom: {
            canvas1: false,
            canvas2: false,
        },
        ctx2: false,
        noOfParticles: false,
        stats: false,
        scene: false,
        camera: false,
        renderer: false,
        particles: false,

        positions: false,
        scales: false,
        ix: false,
        iz: false,
    };

    var t = 0;
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    function init() {
        // Var ini
        config.cameraLookAt = new THREE.Vector3(
            config.cameraLookAt.x,
            config.cameraLookAt.y,
            config.cameraLookAt.z
        )

        vars.dom.canvas1 = document.getElementById("canvas21"); // WebGL/ThreeJS
        vars.dom.canvas2 = document.getElementById("canvas22"); // Gradients
        vars.ctx2 = canvas2.getContext("2d");

        // Page css background color
        document.body.style.backgroundColor = config.background;

        // Setup Three
        vars.scene = new THREE.Scene();
        vars.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
        vars.camera.position.set(
            config.cameraPosition.x,
            config.cameraPosition.y,
            config.cameraPosition.z
        );
        vars.camera.lookAt(vars.scene.position);

        vars.renderer = new THREE.WebGLRenderer({
            canvas: vars.dom.canvas1,
            antialias: true,
            alpha: true
        });
        vars.renderer.setPixelRatio(window.devicePixelRatio);
        vars.renderer.setSize(window.innerWidth, window.innerHeight);


        // Stats
        if (config.showStats){
            vars.stats = new Stats();
            document.body.appendChild(vars.stats.dom);
        }


        // Setup scene
        setupScene();


        // Build gradients
        if (config.enableTopGradient){
            drawGradient(vars.ctx2,0,100,config.topGradientColors);
        }
        if (config.enableBtmGradient){
            drawGradient(vars.ctx2,0,145,config.btmGradientColors);
        }

        if (!config.enableTopGradient && !config.enableBtmGradient){
            vars.dom.canvas2.style.display = "none";
        }


        // Event listeners
        window.addEventListener("resize", onWindowResize, false);

        // Start render enterframe loop
        render();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -






    function drawGradient(ctx,deg,length,gradientColors) {
        var angle = degToRad(deg);
        var x1 = 10;
        var y1 = 10;
        var x2 = x1 + Math.sin(angle) * length;
        var y2 = y1 + Math.cos(angle) * length;

        ctx.fillStyle = ctx.createLinearGradient(x1, y1, x2, y2);

        for (let i = 0; i < gradientColors.length; i++) {
            // log(gradientColors[i].color);
            ctx.fillStyle.addColorStop(gradientColors[i].pos, gradientColors[i].color);
        }

        ctx.fillRect(0, 0, 300, 300);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -






    function setupScene() {
        var numParticles = config.noOfParticlesOnX * config.noOfParticlesOnZ;

        var positions = new Float32Array(numParticles * 3);
        var scales = new Float32Array(numParticles);
        var colors = new Float32Array(numParticles * 3);

        let c = new AFTC.Color();

        let rgbSet1 = c.fadeFromTo(
            config.particleGradient[0].r,
            config.particleGradient[0].g,
            config.particleGradient[0].b,
            config.particleGradient[1].r,
            config.particleGradient[1].g,
            config.particleGradient[1].b,
            config.noOfParticlesOnX/2
        );

        let rgbSet2 = c.fadeFromTo(
            config.particleGradient[1].r,
            config.particleGradient[1].g,
            config.particleGradient[1].b,
            config.particleGradient[2].r,
            config.particleGradient[2].g,
            config.particleGradient[2].b,
            config.noOfParticlesOnX/2
        );

        let rgbs = rgbSet1.concat(rgbSet2);

        // let rgbs = c.fadeFromTo(255, 0, 0, 0, 0, 255, config.noOfParticlesOnX/2);
        // log(rgbs);

        var i = 0,
            j = 0;
        var rowColor = {};

        for (var ix = 0; ix < config.noOfParticlesOnX; ix++) {
            for (var iz = 0; iz < config.noOfParticlesOnZ; iz++) {
                positions[i] = ix * config.particleGap - config.noOfParticlesOnX * config.particleGap / 2; // x
                positions[i + 1] = 0; // y
                positions[i + 2] = iz * config.particleGap - config.noOfParticlesOnZ * config.particleGap / 2; // z

                if (!rgbs[ix]) {
                    log(ix);
                }

                colors[i] = (1 / 255) * rgbs[ix].r;
                colors[i + 1] = (1 / 255) * rgbs[ix].g;
                colors[i + 2] = (1 / 255) * rgbs[ix].b;
                rowColor = { r: colors[i], g: colors[i + 1], b: colors[i + 2] };


                scales[j] = vars.particleBaseSize;
                i += 3;
                j++;
                vars.noOfParticles++;
            }
            // log(rowColor);
        }


        var material = new THREE.ShaderMaterial({
            uniforms: {
                ccc: { value: new THREE.Color(0xffffff) }
            },
            vertexShader: document.getElementById('vertexshader').textContent,
            fragmentShader: document.getElementById('fragmentshader').textContent,

            blending: THREE.AdditiveBlending,
            depthTest: false,
            transparent: true,
            vertexColors: true
        });


        var geometry = new THREE.BufferGeometry();
        // BufferAttribute vs Float32BufferAttribute ??
        geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute("scale", new THREE.Float32BufferAttribute(scales, 1));
        geometry.setAttribute("customColor", new THREE.Float32BufferAttribute(colors, 3));

        vars.particles = new THREE.Points(geometry, material);
        vars.particles.rotation.y = degToRad(90);
        vars.scene.add(vars.particles);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    function onWindowResize() {
        vars.camera.aspect = window.innerWidth / window.innerHeight;
        vars.camera.updateProjectionMatrix();

        vars.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





    function render() {
        t += 0.1;

        if (config.enableCameraRotation){
            vars.camera.position.x = Math.sin(t / 50) * config.cameraRotationDistance;
            vars.camera.position.z = Math.cos(t / 50) * config.cameraRotationDistance;
            vars.camera.lookAt(vars.scene.position);
        }

        vars.positions = vars.particles.geometry.attributes.position.array;
        vars.scales = vars.particles.geometry.attributes.scale.array;

        var i = 0,
            j = 0;

        for (vars.ix = 0; vars.ix < config.noOfParticlesOnX; vars.ix++) {
            for (vars.iz = 0; vars.iz < config.noOfParticlesOnZ; vars.iz++) {
                vars.positions[i + 1] =
                    Math.sin((vars.ix + t) * 0.3) * config.waveAmplitudeX +
                    Math.cos((vars.iz + t) * 0.15) * config.waveAmplitudeZ;

                vars.scales[j] =
                    (Math.sin((vars.ix + t) * 0.3) + 1) * config.particleBaseSize +
                    (Math.sin((vars.iz + t) * 0.5) + 1) * config.particleBaseSize;

                i += 3;
                j++;
            }
        }

        vars.particles.geometry.attributes.position.needsUpdate = true;
        vars.particles.geometry.attributes.scale.needsUpdate = true;

        vars.renderer.render(vars.scene, vars.camera);

        if (config.showStats){
            vars.stats.update();
        }
        requestAnimationFrame(render);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    // Constructor simulation
    init();
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -