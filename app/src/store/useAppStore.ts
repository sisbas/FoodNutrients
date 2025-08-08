import { useState } from "react";

// Simple placeholder store using React state
export function useAppStore() {
  const [profile, setProfile] = useState("general_ri");
  return { profile, setProfile };
}
