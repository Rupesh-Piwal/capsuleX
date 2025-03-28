import { Home, Archive, Plus, Clock, LogOut } from "lucide-react";

export const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "My Capsules", href: "/dashboard/capsules", icon: Archive },
  { name: "Create Capsule", href: "/dashboard/create", icon: Plus },
];

export const brandInfo = {
  name: "CapsuleX",
  icon: Clock,
  color: "#3170EE",
};

export const userInfo = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "/placeholder.svg",
  initials: "JD",
};
