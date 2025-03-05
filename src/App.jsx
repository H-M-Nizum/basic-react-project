import ConditionalRendaring from "./components/ConditionalRendaring";
import ImmediatelyInvokd from "./components/ImmediatelyInvokd";
import InlineIfElse from "./components/InlineIfElse";
import LoopInside from "./components/LoopInside";
import ParentComponent from "./components/ProposComponent/ParentComponent";
import RespondingEvent from "./components/RespondingEvent";

function App() {
  return (
    <>
      <InlineIfElse />
      <ImmediatelyInvokd />
      <LoopInside />
      <ConditionalRendaring />
      <ParentComponent />
      <RespondingEvent />
    </>
  );
}

export default App;
