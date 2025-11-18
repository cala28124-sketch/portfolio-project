import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const MatterBox: React.FC = () => {
  const [spawn, setspawn] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const externalBoxRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const externalBodyRef = useRef<Matter.Body | null>(null);

  useEffect(() => {
    if (!boxRef.current) return;
    const container = boxRef.current;

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
    } = Matter;

    // --- Create an Engine ---
    const engine = Engine.create();
    engineRef.current = engine;

    const Width = container.offsetWidth;
    const Height = container.offsetHeight;

    const render = Render.create({
      element: boxRef.current,
      engine: engine,
      options: {
        width: Width,
        height: Height,
        wireframes: false,
        background: "transparent",
        showInternalEdges: false,
        wireframeStrokeStyle: "red",
      },
    });

    const mouse = Mouse.create(render.canvas);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(engine.world, mouseConstraint);

    render.mouse = mouse;

    const boxA = Bodies.rectangle(400, 200, 80, 80, {
      render: { fillStyle: "#007ACC" },
    });
    const boxB = Bodies.rectangle(450, 50, 80, 80, {
      render: { fillStyle: "#E91E63" },
    });
    const externalBoxBody = Bodies.rectangle(200, 100, 150, 60, {
      frictionAir: 0.05,
      mass: 10,
      render: {
        visible: false,
      },
    });
    const ground = Bodies.rectangle(Width / 2, Height, Width, 500, {
      isStatic: true,
      render: { fillStyle: "#555" },
    });
    const wallleft = Bodies.rectangle(0, Height / 2, 50, Height, {
      isStatic: true,
    });

    const wallright = Bodies.rectangle(Width, Height / 2, 50, Height, {
      isStatic: true,
    });

    externalBodyRef.current = externalBoxBody;

    const updateExternalDiv = () => {
      const boxElement = externalBoxRef.current;
      if (!boxElement) return;

      const { x, y } = externalBoxBody.position;

      const angle = externalBoxBody.angle;

      boxElement.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
    };

    Matter.Events.on(engine, "afterUpdate", updateExternalDiv);

    updateExternalDiv();

    Composite.add(engine.world, [boxA, boxB, ground, wallleft, wallright]);

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);

      if (render.canvas) {
        render.canvas.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (spawn && engineRef.current && externalBodyRef.current) {
      Matter.Composite.add(engineRef.current.world, externalBodyRef.current);

      const boxElement = externalBoxRef.current;
      if (boxElement && externalBodyRef.current) {
        const { x, y } = externalBodyRef.current.position;
        const angle = externalBodyRef.current.angle;
        boxElement.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
      }
    }
  }, [spawn]);

  return (
    <>
      <button
        onClick={() => {
          setspawn(true);
        }}
        className="absolute top-4 left-4 bg-red-500"
      >
        test
      </button>
      <div
        ref={boxRef}
        style={{
          zIndex: "0",
        }}
        className="w-full h-screen absolute"
      >
        {spawn && (
          <div
            ref={externalBoxRef}
            style={{
              width: "150px",
              height: "60px",
              zIndex: "10",
              pointerEvents: "none",
              position: "absolute",
              top: "-30px",
              left: "-75px",
            }}
            className="bg-red-500"
          >
            test
          </div>
        )}
      </div>
    </>
  );
};

export default MatterBox;
