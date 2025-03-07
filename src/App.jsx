import ConditionalRendaring from "./components/ConditionalRendaring";
import FromSubmit from "./components/FromSubmit";
import ImmediatelyInvokd from "./components/ImmediatelyInvokd";
import InlineIfElse from "./components/InlineIfElse";
import LoopInside from "./components/LoopInside";
import ParentComponent from "./components/ProposComponent/ParentComponent";
import RespondingEvent from "./components/RespondingEvent";
import UseRefAPICall from "./components/UseRefAPICall";
import UseRefComponent from "./components/UseRefComponent";
import UseRefWorkingWithAttribute from "./components/UseRefWorkingWithAttribute";
import ParentUseState from "./components/useState/ParentUseState";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <InlineIfElse />
      <ImmediatelyInvokd />
      <LoopInside />
      <ConditionalRendaring />
      <ParentComponent />
      <RespondingEvent />
      <FromSubmit />
      <UseRefComponent />
      <UseRefWorkingWithAttribute />
      <UseRefAPICall />
      <ParentUseState />
    </>
  );
}

export default App;
