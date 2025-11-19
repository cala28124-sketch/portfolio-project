import React, {
  useEffect,
  useRef,
  useState,
  type Ref,
  type MutableRefObject,
} from "react";
import Matter from "matter-js";
import Card from "./card";

interface Props {
  engineRef: MutableRefObject<Matter.Engine | null>;
  spawn?: boolean;
}

const TestComp = ({ engineRef, spawn }: Props) => {
  const externalBodyRef = useRef<Matter.Body | null>(null);
  const externalBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!spawn || !engineRef.current || !externalBoxRef.current) {
      if (engineRef.current && externalBodyRef.current) {
        Matter.Composite.remove(
          engineRef.current.world,
          externalBodyRef.current
        );
        externalBodyRef.current = null;
      }
      return;
    }

    const engine = engineRef.current;
    const { Bodies, Composite, Events } = Matter;

    const boxElement = externalBoxRef.current;
    const bodyWidth = boxElement.offsetWidth;
    const bodyHeight = boxElement.offsetHeight;

    const externalBoxBody = Bodies.rectangle(200, 50, bodyWidth, bodyHeight, {
      frictionAir: 0.05,
      mass: 10,
      render: { visible: false },
    });
    externalBodyRef.current = externalBoxBody;

    const updateExternalDiv = () => {
      if (!externalBoxRef.current) return;

      const { x, y } = externalBoxBody.position;
      const angle = externalBoxBody.angle;

      const translateX = x - bodyWidth / 2;
      const translateY = y - bodyHeight / 2;

      externalBoxRef.current.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotate(${angle}rad)`;
    };

    Composite.add(engine.world, externalBoxBody);
    Events.on(engine, "afterUpdate", updateExternalDiv);

    updateExternalDiv();

    return () => {
      Events.off(engine, "afterUpdate", updateExternalDiv);
      if (externalBodyRef.current) {
        Composite.remove(engine.world, externalBodyRef.current);
        externalBodyRef.current = null;
      }
    };
  }, [spawn]);

  return <>{spawn && <Card reference={externalBoxRef}></Card>}</>;
};

export default TestComp;
