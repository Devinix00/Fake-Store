import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

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
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useIsSignedIn;
