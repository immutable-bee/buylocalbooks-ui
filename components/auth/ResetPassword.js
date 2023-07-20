import { useState, useEffect } from "react";
import { verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";
import { auth } from "../../firebase/config";
import Loading from "../../components/utility/Loading";
import { useRouter } from "next/router";

// TODO:
// Add handlers/ui for error codes

const ResetPassword = ({ mode, actionCode }) => {
  const router = useRouter();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetStatus, setResetStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (mode === "resetPassword" && actionCode) {
      verifyPasswordResetCode(auth, actionCode)
        .then((email) => {
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
        setTimeout(() => {
          router.push("/");
        }, [5000]);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setResetStatus("errorReset");
      });
  };

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
              {confirmPassword === ""
                ? "Confirm Password:"
                : confirmPassword === newPassword
                ? "Passwords match"
                : "Passwords do not match"}
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
              <div className="mt-4">
                <Loading />
              </div>
            ) : (
              <button
                type="submit"
                className="flex-grow bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors mt-4"
              >
                Confirm New Password
              </button>
            )}
          </form>
        ) : resetStatus === "success" ? (
          <>
            <h1 className="text-2xl text-blb-blue-600 mb-8">Password Reset!</h1>
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
            <div className="pt-3">
              <Loading />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
