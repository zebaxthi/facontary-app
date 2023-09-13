"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/switch";
import { MoonIcon } from "@/assets/MoonIcon";
import { SunIcon } from "@/assets/SunIcon";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isSelected, setIsSelected] = useState(true);

  useEffect(() => {
    if (theme === "light") {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected
      isSelected={isSelected}
      onValueChange={setIsSelected}
      size="md"
      color="default"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onChange={(e) => {
        if (e.target.checked) {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }}
    ></Switch>
  );
}
