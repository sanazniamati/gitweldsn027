import {
  Stage,
  Layer,
  Line,
  Group,
  Image,
  Text,
  Arrow,
  Shape,
} from "react-konva";
import useImage from "use-image";
import { useRef, useState } from "react";

export default function App() {
  const url = "img.gif";
  const [image] = useImage(url);
  const stageRef = useRef();
  const [text, setText] = useState("");
  const handleMouseMove = (e) => {
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    const x = pointerPosition.x;
    const y = pointerPosition.y;
    setText(() => "X:" + x + " Y:" + y);
  };
  const handelMouseOut = () => {
    setText("");
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseOut={handelMouseOut}
    >
      <Layer>
        <Group>
          {/*<Image x={100} y={10} image={image} />*/}
          <Text text={text} x={10} y={50} fontSize={20} />
        </Group>
        <Group>
          <Arrow
            points={[155, 231, 155, 424]}
            pointerLength={5}
            pointerWidth={5}
            pointerAtBeginning={true}
            stroke={"red"}
            strokeWidth={3}
          />
        </Group>
        <Group>
          <Arrow
            points={[968, 221, 968, 422]}
            pointerLength={5}
            pointerWidth={5}
            pointerAtBeginning={true}
            stroke={"red"}
            strokeWidth={3}
          />
        </Group>

        {/*  beta*/}
        <Arrow
          points={[580, 157, 593, 157]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"red"}
          strokeWidth={3}
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(595, 156);
            context.quadraticCurveTo(664, 157, 732, 190);
            context.fillStrokeShape(shape);
          }}
          stroke="green"
          strokeWidth={2}
          draggable
        />
        <Arrow
          points={[748, 200, 736, 192]}
          pointerLength={5}
          pointerWidth={5}
          pointerAtEnding={true}
          stroke={"red"}
          strokeWidth={3}
        />
        <Line stroke={"red"} strokeWidth={2} points={[154, 426, 248, 426]} />
        <Line stroke={"red"} strokeWidth={2} points={[875, 426, 973, 426]} />
        <Line stroke={"red"} strokeWidth={2} points={[154, 228, 248, 228]} />
        <Line stroke={"red"} strokeWidth={2} points={[875, 216, 973, 216]} />
        <Line stroke={"green"} strokeWidth={2} points={[527, 423, 527, 554]} />
        <Line stroke={"green"} strokeWidth={2} points={[598, 150, 598, 554]} />
        <Line stroke={"green"} strokeWidth={2} points={[716, 217, 734, 187]} />
        <Group>
          <Arrow
            points={[530, 550, 596, 550]}
            pointerLength={5}
            pointerWidth={5}
            pointerAtBeginning={true}
            fill={"yellow"}
            stroke={"red"}
            strokeWidth={3}
            draggable
          />
        </Group>
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(250, 229);
            context.lineTo(250, 229);
            context.lineTo(412, 229);
            context.lineTo(527, 425);
            context.lineTo(250, 425);
            context.lineTo(250, 338);
            context.lineTo(269, 332);
            context.lineTo(232, 322);
            context.lineTo(250, 317);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="lightgrey"
          stroke="red"
          strokeWidth={4}
          draggable
        />
        <Line points={[526, 425, 600, 425]} stroke="red" strokeWidth={4} />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(875, 217);
            context.lineTo(717, 217);
            context.lineTo(600, 425);
            context.lineTo(875, 425);
            context.lineTo(875, 333);
            context.lineTo(895, 325);
            context.lineTo(855, 314);
            context.lineTo(875, 309);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="lightgrey"
          stroke="red"
          strokeWidth={4}
          draggable
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(404, 423);
            context.lineTo(404, 480);
            context.lineTo(719, 480);
            context.lineTo(719, 423);
            context.fillStrokeShape(shape);
          }}
          stroke="red"
          strokeWidth={4}
          draggable
        />
        <Line points={[429, 425, 405, 449]} stroke="red" strokeWidth={2} />
        <Line points={[459, 426, 405, 480]} stroke="red" strokeWidth={2} />
        <Line points={[489, 426, 435, 480]} stroke="red" strokeWidth={2} />
        <Line points={[519, 426, 465, 480]} stroke="red" strokeWidth={2} />
        <Line points={[549, 426, 495, 480]} stroke="red" strokeWidth={2} />
        <Line points={[579, 426, 525, 480]} stroke="red" strokeWidth={2} />
        <Line points={[609, 426, 555, 480]} stroke="red" strokeWidth={2} />
        <Line points={[639, 426, 585, 480]} stroke="red" strokeWidth={2} />
        <Line points={[664, 426, 610, 480]} stroke="red" strokeWidth={2} />
        <Line points={[694, 426, 640, 480]} stroke="red" strokeWidth={2} />
        <Line points={[720, 429, 670, 480]} stroke="red" strokeWidth={2} />
        <Line points={[720, 459, 700, 480]} stroke="red" strokeWidth={2} />

        <Text x={168} y={296} text={"t2"} fontSize={40} />
        <Text x={936} y={296} text={"t1"} fontSize={40} />
        <Text x={555} y={510} text={"b"} fontSize={40} />
        <Text x={653} y={113} text={"β"} fontSize={45} />
      </Layer>
    </Stage>
  );
}
