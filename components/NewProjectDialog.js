import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';
import { Switch } from '@headlessui/react';

export default function NewProjectDialog({ projects, setProjects }) {
  let [isOpen, setIsOpen] = useState(false);
  let [isPinned, setIsPinned] = useState(false);
  const titleRef = useRef(null);
  const teamRef = useRef(null);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  function newProject() {
    setProjects([
      ...projects,
      {
        ...projects[0],
        title: titleRef.current.value,
        team: teamRef.current.value,
        pinned: isPinned,
      },
    ]);
    setIsOpen(false);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="px-4 py-2 text-sm font-medium text-white bg-theme-green rounded-md  focus:outline-none "
      >
        New Project
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <div>
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </div>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Create a New Project
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore, excepturi.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <div className="mt-1">
                    <input
                      ref={titleRef}
                      type="text"
                      name="title"
                      id="title"
                      className="shadow-sm focus:ring-theme-green focus:border-theme-green block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Project Title"
                    />
                  </div>
                  <label
                    htmlFor="team"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Team
                  </label>
                  <div className="mt-1">
                    <input
                      ref={teamRef}
                      type="text"
                      name="team"
                      id="team"
                      className="shadow-sm focus:ring-theme-green focus:border-theme-green block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Team"
                    />
                  </div>
                </div>
                <div className="my-1">
                  <label
                    htmlFor="pin"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pin Project?
                  </label>

                  <Switch
                    checked={isPinned}
                    onChange={setIsPinned}
                    className={classNames(
                      isPinned ? 'bg-theme-green' : 'bg-gray-200',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-green mt-2'
                    )}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        isPinned ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-theme-green border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={newProject}
                  >
                    Create
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
