import UserProfile from "./UserProfile";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          User Dashboard
        </h2>
        <UserProfile />
      </div>
    </div>
  );
};

export default UserDashboard;
