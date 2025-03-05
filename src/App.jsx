import ConditionalRendaring from "./components/ConditionalRendaring";
import ImmediatelyInvokd from "./components/ImmediatelyInvokd";
import InlineIfElse from "./components/InlineIfElse";
import LoopInside from "./components/LoopInside";
import ParentComponent from "./components/ProposComponent/ParentComponent";

function App() {
  return (
    <>
      <InlineIfElse />
      <ImmediatelyInvokd />
      <LoopInside />
      <ConditionalRendaring />
      <ParentComponent />
    </>
  );
}

export default App;
