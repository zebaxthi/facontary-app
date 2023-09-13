"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useState, useMemo } from "react";
import classnames from "tailwindcss-classnames";
import { SiNextdotjs } from "react-icons/si";
import { IoIosArrowBack } from "react-icons/io";
import { TbHome } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import { useRouter, usePathname } from "next/navigation";

const menuItems = [
  { id: 1, label: "Inicio", icon: TbHome, link: "/" },
  { id: 2, label: "Inventario", icon: MdOutlineInventory2, link: "/inventory" },
];

function Sidebar() {
  const [toggleCollapse, setToggleCollapse] = useState(false);

  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === pathname),
    [pathname]
  );

  const wapperClasses = classnames(
    "h-screen pt-8 pb-4 flex justify-between flex-col",
    {
      ["w-60"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classnames("p-4 absolute right-0", {
    "rotate-180": toggleCollapse,
  });

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  return (
    <Card
      className={wapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <CardHeader className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <SiNextdotjs className="w-8 h-8" />
            <span
              className={classnames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              Facontary
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={() => {
                setToggleCollapse(!toggleCollapse);
              }}
            >
              <IoIosArrowBack className="w-8 h-8" />
            </button>
          )}
        </div>
      </CardHeader>
      <CardBody className="px-3 py-3 mt-24 overflow-hidden">
        {menuItems.map(({ icon: IconType, ...menu }) => {
          return (
            <div key={menu.id} className="flex items-start w-full">
              <Link href={menu.link}>
                <Button color="default" variant="light">
                  <div style={{ width: "1rem" }}>
                    <IconType className="w-4 h-4" />
                  </div>
                  <div>
                    {!toggleCollapse && (
                      <span
                        className={classnames("text-md font-medium", {
                          hidden: toggleCollapse,
                        })}
                      >
                        {menu.label}
                      </span>
                    )}
                  </div>
                </Button>
              </Link>
            </div>
          );
        })}
      </CardBody>
      <CardFooter className="px-3 py-3">
        <Button color="default" variant="light">
          <div style={{ width: "1rem" }}>
            <MdLogout className="w-4 h-4" />
          </div>
          <div>
            {!toggleCollapse && (
              <span
                className={classnames("text-md font-medium text-red-400", {
                  hidden: toggleCollapse,
                })}
              >
                Cerrar sesión
              </span>
            )}
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Sidebar;
