import { WindIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarTrigger,
} from "../ui/menubar";
import { MenubarMenu } from "../ui/menubar";
import { SidebarTrigger } from "../ui/sidebar";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 border-b border-gray-100 px-6 sticky top-0 backdrop-blur-sm">
      <div className="flex items-center gap-1">
        <SidebarTrigger />
        <div className="flex items-center">
          <p className="text-lg font-semibold italic bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Vistrti
          </p>
          <WindIcon className="w-5 h-5 text-blue-500" />
        </div>
      </div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Avatar className="w-5 h-5 mr-2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            Account
          </MenubarTrigger>
          <MenubarContent className="mr-4">
            <MenubarItem>My Profile</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Applied Campaigns</MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="text-red-500">Logout</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};
