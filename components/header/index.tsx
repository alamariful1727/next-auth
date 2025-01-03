"use client"

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link  from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "../button";

const navigation = [
  { name: "Users", href: "/users" },
  { name: "Alerts", href: "/alerts" },
];
const userNavigation = [
  { name: "Change Password", href: "/change-password" },
  { name: "Change Language", href: "/change-language" },
];

const Header = () => {
  const currentPathname = usePathname();
  const {data: session} = useSession();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Disclosure as="nav" className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <Image
                  alt="Alert Ready Manager"
                  src="https://www.alertready.ca/wp-content/uploads/2021/09/Alert-Ready-Main.png"
                  width={233}
                  height={64}
                  priority
                />
              </Link>
            </div>
            <div className="hidden sm:-my-px sm:ml-8 sm:flex sm:space-x-8">
              {navigation.map(({name, href}) => (
                <Link
                  key={name}
                  href={href}
                  className={
                    clsx(
                      currentPathname === href
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "inline-flex items-center border-b-2 px-1 pt-1 text-base font-medium",
                    )
                  }
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
          {/* Profile dropdown */}
          {session ? 
            <>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Image
                        alt="User Image"
                        src={session?.user?.image || ""}
                        className="inline-block size-10 rounded-full"
                        width={120}
                        height={120}
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {userNavigation.map(({name, href}) => (
                      <MenuItem key={name}>
                        <Link
                          href={href}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                        >
                          {name}
                        </Link>
                      </MenuItem>
                    ))}
                    <MenuItem>
                      <button 
                        type="button" 
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none" 
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
              {/* Mobile menu button  */}
              <div className="-mr-2 flex items-center sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-[open]:block"
                    />
                </DisclosureButton>
              </div>
            </>
          : <div className="flex items-center">
            <Button theme="primary" onClick={() => signIn()}>Login</Button>
            </div>}
        </div>
      </div>

      {/* Mobile Design */}
      {session && <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pb-3 pt-2">
          {navigation.map(({name, href}) => (
            <Link
              key={name}
              href={href}
              className={
                clsx(
                  "block border-l-4 text-base font-medium",
                  currentPathname === href
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                    : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                )
              }
            >
              <DisclosureButton as="div" className="py-2 pl-3 pr-4">
                {name}
              </DisclosureButton>
            </Link>
          ))}
        </div>
        <div className="border-t border-gray-200 pb-3 pt-4">
          <div className="flex items-center px-4">
            <div className="shrink-0">
              <Image
                alt="User Image"
                src={session?.user?.image || ""}
                className="inline-block size-10 rounded-full"
                width={120}
                height={120}
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">
                {session?.user?.name}
              </div>
              <div className="text-sm font-medium text-gray-500">
                {session?.user?.email}
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-1">
            {userNavigation.map(({name, href}) => (
              <Link
                key={name}
                href={href}
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                <DisclosureButton
                >
                  {name}
                </DisclosureButton>
              </Link>
            ))}
            <DisclosureButton 
              className="block px-4 py-2 w-full text-left text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800" 
              onClick={handleSignOut}
            >
              Sign Out
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>}
    </Disclosure>
  );
};

export default Header;