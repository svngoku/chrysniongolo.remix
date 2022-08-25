import { Link } from "@remix-run/react";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


export default function PlaygroundIndexPage() {
  return (
      <>
         <div className="relative mx-10vw">
            <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl lg: mb-24 h-auto pt-24 lg:min-h-[40rem] lg:pb-12 lg:mb-64">
              <h1>Playground</h1>
            </div>
        </div>
    </>
  );
}
