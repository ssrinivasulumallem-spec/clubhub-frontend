import Layout from "../../components/layout/Layout";
import ProfileSettings from "../../components/settings/ProfileSettings";
import PasswordSettings from "../../components/settings/PasswordSettings";


function Settings() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <ProfileSettings />
      <PasswordSettings />
    </Layout>
  );
}

export default Settings;