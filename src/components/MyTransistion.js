import { Transition } from "react-transition-group";
import gsap from "gsap";

const startState = { autoAlpha: 0, scale: 1 };

export default function MyTransition(props) {
  const duration = 1.2;
  return (
    <Transition
      unmountOnExit
      in={props.show}
      timeout={3000}
      onEnter={(node) => gsap.set(node, startState)}
      addEndListener={(node, done) => {
        gsap.to(node, {
          duration: duration,
          delay: props.show ? duration / 2 : 0,
          autoAlpha: props.show ? 1 : 0,
          position: "absolute",
          top: 0,
          left: 0,
          scale: props.show ? 1 : 0,
          onComplete: done,
        });
      }}
    >
      {props.children}
    </Transition>
  );
}
