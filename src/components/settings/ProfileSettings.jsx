function ProfileSettings() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Admin Profile</h2>

      <input
        type="text"
        placeholder="Admin Name"
        className="w-full border p-2 rounded mb-3"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded mb-3"
      />

      <button className="bg-blue-600 text-white px-5 py-2 rounded">
        Update Profile
      </button>
    </div>
  );
}

export default ProfileSettings;