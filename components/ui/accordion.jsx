'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Accordion({ type = 'single', collapsible = true, children }) {
  return (
    <AccordionPrimitive.Root type={type} collapsible={collapsible} className="w-full">
      {children}
    </AccordionPrimitive.Root>
  );
}

export function AccordionItem({ value, title, children }) {
  return (
    <AccordionPrimitive.Item value={value} className="border-b border-gray-700">
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          className={cn(
            'flex flex-1 justify-between items-center px-4 py-3 text-left text-lg font-medium text-white bg-gray-800 hover:bg-gray-700 transition-all',
            'focus:outline-none'
          )}
        >
          {title}
          <ChevronDown className="h-5 w-5 transition-transform duration-300" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="px-4 py-3 bg-gray-900 text-gray-300">
        {children}
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}
