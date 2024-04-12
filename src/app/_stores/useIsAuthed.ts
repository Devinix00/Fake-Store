import { useRouter } from "next/navigation";
import useIsSignedIn from "./useIsSignedIn";

function useIsAuthed() {
  const router = useRouter();
  const { isSignedIn } = useIsSignedIn();

  const toSignInPage = () => {
    if (!isSignedIn)
      if (confirm("You are not signed in. Would you like to sign in?"))
        return router.push("/sign-in");
      else {
        return alert("Cancel.");
      }
  };

  return { toSignInPage };
}

export default useIsAuthed;
