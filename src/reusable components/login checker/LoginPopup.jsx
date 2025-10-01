import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
const LoginPopup = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const handleNavigateBack = () => {
    navigate(-1);
  };
  const LoginHandler = () => {
    loginWithRedirect();
  };
  return (
    <div className="backdrop-blur-3xl fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl text-center text-gray-800">
        <h2 className="text-xl font-bold text-red-600">Login Required</h2>
        <div className="w-11/12 justify-self-center">
          <p className="mt-3 py-4">
            "Stop right there, criminal scum! Pay the toll (which is just your
            email and password)."
          </p>
          <img
            className="w-8/12 justify-self-center"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHZseDdtZzN5emt4anZiNWhxbGFyZjIxM2dydjliOHBncGE2cDg1eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nzsWN8iSDwSlhCDokc/giphy.gif"
            alt="not found"
          />
        </div>
        <div className="flex gap-3 justify-center">
          <button
            onClick={handleNavigateBack}
            className="mt-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer transition"
          >
            Go Back
          </button>
          <button
            className="mt-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer transition"
            onClick={LoginHandler}
            type="button"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
