function PasswordSettings() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>

      <input
        type="password"
        placeholder="Current Password"
        className="w-full border p-2 rounded mb-3"
      />

      <input
        type="password"
        placeholder="New Password"
        className="w-full border p-2 rounded mb-3"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full border p-2 rounded mb-3"
      />

      <button className="bg-green-600 text-white px-5 py-2 rounded">
        Change Password
      </button>
    </div>
  );
}

export default PasswordSettings;