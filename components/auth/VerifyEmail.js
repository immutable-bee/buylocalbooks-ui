import { useEffect, useState } from "react";
import { applyActionCode } from "firebase/auth";
import { useRouter } from "next/router";
import Loading from "../utility/Loading";

// TODO:
// Add handler/ui for error codes

const VerifyEmail = ({ auth, actionCode }) => {
  const router = useRouter();
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (actionCode) {
      applyActionCode(auth, actionCode)
        .then(() => {
          setVerified(true);
          setTimeout(() => {
            router.push("/");
          }, [5000]);
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [actionCode]);

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center">
      <div className="bg-white shadow-lg p-8 rounded-lg">
        {verified ? (
          <>
            <h1 className="text-3xl text-purple-600 mb-8">
              Congratulations! Your email has been successfully verified.
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
            <div className="pt-3">
              <Loading />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
