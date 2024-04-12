import { useRouter } from "next/navigation";
import useIsSignedIn from "./useIsSignedIn";

function useIsAuthed() {
  const { isSignedIn } = useIsSignedIn();
  const router = useRouter();

  const toSignInPage = (): boolean => {
    if (!isSignedIn)
      if (confirm("You are not signed in. Would you like to sign in?")) {
        router.push("/sign-in");
        return false;
      } else {
        alert("Cancel.");
        return false;
      }
    return true;
  };

  return { toSignInPage };
}

export default useIsAuthed;
