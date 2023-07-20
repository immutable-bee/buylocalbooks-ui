import { useRouter } from "next/router";
import { auth } from "../../../firebase/config";
import ResetPassword from "../../../components/auth/ResetPassword";
import VerifyEmail from "../../../components/auth/VerifyEmail";

const Firebase = () => {
  const router = useRouter();
  const { mode, oobCode } = router.query;

  switch (mode) {
    case "resetPassword":
      return <ResetPassword mode={mode} actionCode={oobCode} />;

    case "verifyEmail":
      return <VerifyEmail auth={auth} actionCode={oobCode} />;

    case "recoverEmail":
      break;

    default:
  }
};

export default Firebase;
