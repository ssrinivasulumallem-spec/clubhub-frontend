import { useState } from "react";

function ProfileSettings() {
  // Existing profile details
  const [name, setName] = useState("Admin");
  const [email, setEmail] = useState("admin@clubhub.com");
  const [profileImage, setProfileImage] = useState(null);

  // Updated profile details to display after clicking Update
  const [savedName, setSavedName] = useState("Admin");
  const [savedEmail, setSavedEmail] = useState("admin@clubhub.com");
  const [savedImage, setSavedImage] = useState(null);

  // Select profile picture
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  // Update profile
  const handleUpdateProfile = () => {
    setSavedName(name);
    setSavedEmail(email);
    setSavedImage(profileImage);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6">
        Profile Settings
      </h2>

      {/* Profile Picture */}
      <div className="flex flex-col items-center mb-6">

        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center text-4xl">
            👤
          </div>
        )}

        <label className="mt-4 bg-gray-100 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          Change Profile Picture

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>

      </div>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Name
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Email
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>

      {/* Update Button */}
      <button
        onClick={handleUpdateProfile}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
      >
        Update Profile
      </button>

      {/* Current Profile */}
      <div className="border-t border-gray-200 mt-8 pt-6">

        <h3 className="text-lg font-semibold mb-4">
          Current Profile
        </h3>

        <div className="flex items-center gap-4">

          {savedImage ? (
            <img
              src={savedImage}
              alt="Current Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
              👤
            </div>
          )}

          <div>
            <p className="font-semibold text-lg">
              {savedName}
            </p>

            <p className="text-gray-500">
              {savedEmail}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProfileSettings;