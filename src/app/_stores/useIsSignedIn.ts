import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UseIsSignedInReturn {
  isSignedIn: boolean;
  setIsSignedIn: (authState: boolean) => void;
}

const useIsSignedIn = create(
  persist<UseIsSignedInReturn>(
    (set, _get) => ({
      isSignedIn: false,
      setIsSignedIn: (authState: boolean) =>
        set(() => ({ isSignedIn: authState })),
    }),
    {
      name: "storage",
    }
  )
);

export default useIsSignedIn;
