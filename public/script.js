let boxes = 28;
let textures = [];
let currentPos = 0;
let arrow;
let sphereRot = 0;
let arrows = [
  [
    // 0
    {
      position: [-300, 800, -500],
      rotation: -25,
    },
  ],
  [
    // 1
    {
      position: [0, 800, -500],
      rotation: 0,
    },
    {
      position: [-70, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 2
    {
      position: [0, 800, -500],
      rotation: 0,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 3
    {
      position: [-30, 800, -500],
      rotation: 0,
    },
    {
      position: [50, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 4
    {
      position: [-60, 800, -500],
      rotation: -5,
    },
    {
      position: [30, 1500, 400],
      rotation: 183,
    },
  ],
  [
    // 5
    {
      position: [20, 800, -500],
      rotation: -5,
    },
    {
      position: [-35, 1500, 400],
      rotation: 183,
    },
  ],
  [
    // 6
    {
      position: [-40, 800, -500],
      rotation: 5,
    },
    {
      position: [250, 1500, 400],
      rotation: 190,
    },
  ],
  [
    // 7
    {
      position: [100, 800, -500],
      rotation: -10,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 8
    {
      position: [300, 800, -500],
      rotation: -10,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 9
    {
      position: [-50, 800, -500],
      rotation: -5,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 10
    {
      position: [-50, 800, -500],
      rotation: 0,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 11
    {
      position: [-20, 800, -500],
      rotation: 0,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 12
    {
      position: [40, 800, -500],
      rotation: 0,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 13
    {
      position: [0, 800, -500],
      rotation: 10,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 14
    {
      position: [-150, 800, -500],
      rotation: 12,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 15
    {
      position: [-130, 800, -500],
      rotation: 0,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 16
    {
      position: [-150, 800, -500],
      rotation: 0,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 17
    {
      position: [-150, 800, -500],
      rotation: 0,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 18
    {
      position: [-100, 800, -500],
      rotation: 0,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 19
    {
      position: [-50, 800, -500],
      rotation: 5,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 20
    {
      position: [-90, 800, -500],
      rotation: 0,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 21
    {
      position: [280, 800, -500],
      rotation: 0,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 22
    {
      position: [280, 800, -500],
      rotation: 0,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 23
    {
      position: [-120, 800, -500],
      rotation: 0,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 24
    {
      position: [-120, 800, -500],
      rotation: 0,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 25
    {
      position: [-170, 800, -500],
      rotation: -5,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 26
    {
      position: [-190, 800, -500],
      rotation: -5,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ],
  [
    // 27
    {
      position: [-190, 800, -500],
      rotation: -5,
    },
    {
      position: [0, 1500, 400],
      rotation: 180,
    },
  ]
];

let x = 0;
let y = 800;
let z = -500;
let globRot = 0;

function reset() {
    x = 0;
    y = 800;
    z = -500;
    globRot = 0;
}

function preload() {

    for(let i = 0; i < boxes; i++) {

        let tex = loadImage(`assets/boxes/${i + 1}.jpg`);
        textures.push(tex);

    };

    arrow = loadModel("assets/3d/arrow.obj", true);

};

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
};

function draw() {
  background(0, 255, 0);
  angleMode(DEGREES);

  orbitControl(2, 2, 0);

  push();
  noStroke();
  rotateY(sphereRot);
  texture(textures[currentPos]);
  sphere(2000);
  pop();

  // arrows
    for (let i = 0; i < arrows[currentPos].length; i++) {
        scale(1, 0.5, 1.5);
        push();
        noStroke();
        translate(
          arrows[currentPos][i].position[0],
          arrows[currentPos][i].position[1],
          arrows[currentPos][i].position[2]
        );
        rotateY(arrows[currentPos][i].rotation);
        specularMaterial('gold'); // For effect
        model(arrow);
        pop();

    };

//   for (let i = 0; i < 1; i++) {
//     scale(1, 0.5, 1.5);
//     push();
//     noStroke();
//     translate(
//       x,
//       y,
//       z
//     );
//     rotateY(globRot);
//     specularMaterial("gold"); // For effect
//     model(arrow);
//     pop();
//   }
};


function keyPressed() {
    if (key === 'w') {
        if (currentPos < boxes - 1) {
            currentPos++;
        };
    } else if (key === 's') {
        if (currentPos > 0) {
            currentPos--;
        };
    };

    if (
      currentPos === 6 ||
      currentPos === 7 ||
      currentPos === 8 ||
      currentPos === 21 ||
      currentPos === 22
    ) {
      sphereRot = 180;
    } else {
      sphereRot = 0;
    };

    console.log(currentPos);
};

