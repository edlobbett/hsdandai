import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Property from "./pages/Property.tsx";
import HubSpotSprints from "./pages/HubSpotSprints.tsx";
import RevOps from "./pages/RevOps.tsx";
import DigitalAI from "./pages/DigitalAI.tsx";
import Insights from "./pages/Insights.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/property" element={<Property />} />
          <Route path="/hubspot-sprints" element={<HubSpotSprints />} />
          <Route path="/revops" element={<RevOps />} />
          <Route path="/digital-ai" element={<DigitalAI />} />
          <Route path="/insights" element={<Insights />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
