import { useEffect, useState } from "react";
import Loading from "../../../components/utility/Loading";
import { useRouter } from "next/router";
import {
  applyActionCode,
  verifyPasswordResetCode,
  confirmPasswordReset,
} from "firebase/auth";
import { auth } from "../../../firebase/config";
import ResetPassword from "../../../components/auth/ResetPassword";

const Firebase = () => {
  const router = useRouter();
  const { mode, oobCode } = router.query;

  const [loading, setLoading] = useState(false);

  switch (mode) {
    case "resetPassword":
      return <ResetPassword mode={mode} actionCode={oobCode} />;

    case "verifyEmail":
      applyActionCode(auth, actionCode);

      setTimeout(() => {
        router.push("/");
      }, [5000]);

      return (
        <div className="min-h-screen bg-pink-100 flex items-center justify-center">
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h1 className="text-3xl text-purple-600 mb-8">
              Congratulations! Your email has been successfully verified.
            </h1>
            <div className="flex justify-center gap-2">
              <h1 className="text-2xl">Redirecting</h1>
              <div className="pt-4">
                <Loading />
              </div>
            </div>
          </div>
        </div>
      );

    case "recoverEmail":
      break;

    default:
  }
};

export default Firebase;
