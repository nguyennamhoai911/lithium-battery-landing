import {
  ActionHub,
  RoutingMatrix,
  PriorityChannels,
  InquiryFlow,
  ProcessTimeline,
} from "./components/contact/parts";
import {
  DealerLocator,
  Headquarters,
  SocialProof,
  Capability,
  FAQ,
  FinalDock,
  StickyRail,
  MobileBar,
} from "./components/contact/parts2";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased pb-20 lg:pb-0">
      <ActionHub />
      <RoutingMatrix />
      <PriorityChannels />
      <InquiryFlow />
      <ProcessTimeline />
      <DealerLocator />
      <Headquarters />
      <SocialProof />
      <Capability />
      <FAQ />
      <FinalDock />
      <StickyRail />
      <MobileBar />
    </div>
  );
}
