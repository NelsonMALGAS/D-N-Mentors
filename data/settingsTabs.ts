import { Tab } from "@/types/types";
import { FiUser, FiLock, FiBell, FiSliders, FiSettings, FiShield, FiCreditCard, FiTool } from "react-icons/fi";

const tabs: Tab[] = [
  { name: 'Profile', key: 'profile', icon: FiUser },
  { name: 'Privacy', key: 'privacy', icon: FiLock },
  { name: 'Notifications', key: 'notifications', icon: FiBell },
  { name: 'Theme', key: 'theme', icon: FiSliders },
  { name: 'Application', key: 'application', icon: FiTool },
  { name: 'Integrations', key: 'integrations', icon: FiSettings },
  { name: 'Security', key: 'security', icon: FiShield },
  { name: 'Billing', key: 'billing', icon: FiCreditCard },
];

export default tabs;
