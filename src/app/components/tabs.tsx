import * as RadixTabs from "@radix-ui/react-tabs";
import React, { ReactNode } from "react";

interface TabsEntry {
  value: string;
  component: ReactNode;
}

type TabsProps = { entries: TabsEntry[]; defaultValue: string };

export function Tabs({ entries, defaultValue }: TabsProps) {
  return (
    <RadixTabs.Root defaultValue={defaultValue} className="w-full flex flex-col">
      <RadixTabs.List className="max-w-[300px] mx-auto shrink-0 flex items-center justify-center border-b border-gray-100/60">
        {entries.map(({ value }) => (
          <RadixTabs.Trigger
            key={value}
            value={value}
            className="bg-gray-900 flex items-center justify-center px-4 font-medium first:rounded-tl-md py-2 select-none outline-none data-[state=active]:text-teal-400 text-gray-100/60"
          >
            {value}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>

      {entries.map(({ value, component }) => (
        <RadixTabs.Content key={value} value={value} className="flex grow">
          {component}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
}
