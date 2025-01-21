import { create } from 'zustand';
import type { Package, SelectedPackage } from '../types/booking';

interface BookingState {
  selectedMembership: SelectedPackage | null;
  selectedClasses: SelectedPackage[];
  addPackage: (pkg: Package, quantity?: number) => void;
  removePackage: (packageId: string) => void;
  clearSelection: () => void;
  updateQuantity: (packageId: string, quantity: number) => void;
}

export const useBooking = create<BookingState>((set) => ({
  selectedMembership: null,
  selectedClasses: [],
  
  addPackage: (pkg, quantity = 1) => set((state) => {
    if (pkg.type === 'membership') {
      // Replace existing membership
      return {
        ...state,
        selectedMembership: { ...pkg, quantity: 1 }
      };
    } else {
      // Add to classes if not already present
      const existingClass = state.selectedClasses.find(p => p.id === pkg.id);
      if (existingClass) {
        return state;
      }
      return {
        ...state,
        selectedClasses: [...state.selectedClasses, { ...pkg, quantity }]
      };
    }
  }),

  removePackage: (packageId) => set((state) => {
    if (state.selectedMembership?.id === packageId) {
      return { ...state, selectedMembership: null };
    }
    return {
      ...state,
      selectedClasses: state.selectedClasses.filter(p => p.id !== packageId)
    };
  }),

  updateQuantity: (packageId, quantity) => set((state) => ({
    ...state,
    selectedClasses: state.selectedClasses.map(pkg =>
      pkg.id === packageId ? { ...pkg, quantity } : pkg
    )
  })),

  clearSelection: () => set({ selectedMembership: null, selectedClasses: [] })
}));