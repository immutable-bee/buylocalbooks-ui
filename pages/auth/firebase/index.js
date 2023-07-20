import { useEffect, useState } from "react";
import Loading from "../../../components/utility/Loading";
import { useRouter } from "next/router";
import {
  applyActionCode,
  verifyPasswordResetCode,
  confirmPasswordReset,
} from "firebase/auth";
import { auth } from "../../../firebase/config";

const Firebase = () => {
  const router = useRouter();
  const { mode, actionCode } = router.query;

  const [loading, setLoading] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetStatus, setResetStatus] = useState(null);

  useEffect(() => {
    if (mode === "resetPassword" && actionCode) {
      verifyPasswordResetCode(auth, actionCode)
        .then((email) => {
          // This will give you the email of the user, now ask user for the new password.
          setResetStatus("inputNewPassword");
        })
        .catch((error) => {
          // Invalid or expired action code. Ask user to try to reset the password again.
          console.error(error);
          setResetStatus("errorCode");
        });
    }
  }, [actionCode]);

  const resetPassword = (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setLoading(true);
    confirmPasswordReset(auth, actionCode, newPassword)
      .then((resp) => {
        // Password has been reset successfully.
        setLoading(false);
        setResetStatus("success");
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setResetStatus("errorReset");
      });
  };

  switch (mode) {
    case "resetPassword":
      return (
        <div className="min-h-screen bg-pink-100 flex items-center justify-center">
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h1 className="text-3xl text-purple-600 mb-8">Reset Password</h1>
            {resetStatus === "inputNewPassword" ? (
              <form onSubmit={resetPassword}>
                <label className="block">
                  New Password:
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="mt-1 p-2 w-full border rounded-lg"
                  />
                </label>
                <label className="block">
                  {confirmPassword && confirmPassword === newPassword
                    ? "Passwords do not match"
                    : "Confirm Password:"}
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className={`mt-1 p-2 w-full border rounded-lg ${
                      confirmPassword &&
                      (newPassword === confirmPassword
                        ? "bg-blb-blue"
                        : "bg-red-100")
                    }`}
                  />
                </label>
                {loading ? (
                  <Loading />
                ) : (
                  <button
                    type="submit"
                    className="flex-grow bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                  >
                    Confirm New Password
                  </button>
                )}
              </form>
            ) : resetStatus === "success" ? (
              <>
                <h1 className="text-2xl text-blb-blue-600 mb-8">
                  Password Reset!
                </h1>
                <div className="flex justify-center gap-2">
                  <h1 className="text-2xl">Redirecting</h1>
                  <div className="pt-4">
                    <Loading />
                  </div>
                </div>
              </>
            ) : (
              <div className="flex justify-center gap-2">
                <h1 className="text-2xl">Authenticating</h1>
                <div className="pt-4">
                  <Loading />
                </div>
              </div>
            )}
          </div>
        </div>
      );

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
