import { Button, IconButton, Menu, MenuItem } from "@jamsr-ui/react";
import Sidebar from "@/components/siderbar/Sidebar";

export const MenuColors = () => {
  return (
    <div className="flex justify-center">
      <Menu
        classNames={{
          popover: "min-w-[300px]",
        }}
        trigger={
          <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        }
      >
        <Sidebar/>
        
        
      </Menu>
    </div>
  );
};
