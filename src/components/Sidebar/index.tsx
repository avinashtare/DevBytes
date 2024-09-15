import React from "react";
import { LINKS } from "@/constants/sidebar-links";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar-scroll w-[15%] h-[90vh] fixed overflow-y-scroll">
      <ul className="w-full">
        {LINKS.map((e) => (
          <li key={e.url + Math.random()} className="w-full flex mb-3">
            <Link
              href={e.url}
              className="flex-1 hover:bg-secondary p-2 rounded-md border-border border flex justify-left items-center gap-2"
            >
              <e.icon className="text-2xl text-[${}]" fill={e.color} />
              {e.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
