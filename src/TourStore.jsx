// TourStore.jsx
import { create } from 'zustand';

//useTourStore is a custom hook now so we can use it anywhere without setting up providers
const useTourStore = create((set) => ({
  run: false,
  stepIndex: 0,
  steps: [],
  tourActive: false,
  setRun: (run) => set({ run }), 
  setStepIndex: (stepIndex) => set({ stepIndex }),
  setSteps: (steps) => set({ steps }),
  setTourActive: (tourActive) => set({ tourActive }),
  startTour: () => set({ run: true, tourActive: true, stepIndex: 0 }),
  stopTour: () => set({ run: false, tourActive: false, stepIndex: 0 }),
  nextStep: () => set((state) => ({ stepIndex: state.stepIndex + 1 })),
}));

export default useTourStore;
