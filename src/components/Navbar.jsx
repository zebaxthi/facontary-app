import ThemeSwitcher from "@/components/ThemeSwitcher";
import {
  Navbar as NextUINavbar,
  NavbarItem,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";

function Navbar({ page }) {
  return (
    <NextUINavbar isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">{page}</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}

export default Navbar;
