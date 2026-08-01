function NotificationSettings() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">
        Notification Settings
      </h2>

      <label className="block mb-3">
        <input type="checkbox" className="mr-2" />
        Email Notifications
      </label>

      <label className="block mb-3">
        <input type="checkbox" className="mr-2" />
        Join Request Alerts
      </label>

      <label className="block">
        <input type="checkbox" className="mr-2" />
        Event Reminders
      </label>
    </div>
  );
}

export default NotificationSettings;