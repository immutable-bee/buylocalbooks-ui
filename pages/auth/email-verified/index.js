import { useEffect } from "react";
import Loading from "../../../components/utility/Loading";
import { useRouter } from "next/router";

const EmailVerified = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, [5000]);
  }, []);

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
};

export default EmailVerified;
