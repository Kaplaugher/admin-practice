import { getSession } from 'next-auth/client';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Profile({ session }) {
  return (
    <div className="h-screen flex bg-blue-gray-50 overflow-hidden">
      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <main className="flex-1 flex overflow-hidden">
          <div className="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
            <div className="flex-1 flex xl:overflow-hidden">
              {/* Main content */}
              <div className="flex-1 max-h-screen xl:overflow-y-auto">
                <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
                  <h1 className="text-3xl font-extrabold text-blue-gray-900">
                    Account
                  </h1>

                  <form className="mt-6 space-y-8 divide-y divide-y-blue-gray-200">
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                      <div className="sm:col-span-6">
                        <h2 className="text-xl font-medium text-blue-gray-900">
                          Profile
                        </h2>
                        <p className="mt-1 text-sm text-blue-gray-500">
                          This information will be displayed publicly so be
                          careful what you share.
                        </p>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          autoComplete="given-name"
                          className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-theme-green focus:border-theme-green"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          autoComplete="family-name"
                          className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-theme-green focus:border-theme-green"
                        />
                      </div>

                      <div className="sm:col-span-6">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          Username
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-blue-gray-300 bg-blue-gray-50 text-blue-gray-500 sm:text-sm">
                            shipt.com/
                          </span>
                          <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="username"
                            defaultValue={session.user.name}
                            className="flex-1 block w-full min-w-0 border-blue-gray-300 rounded-none rounded-r-md text-blue-gray-900 sm:text-sm focus:ring-theme-green focus:border-theme-green"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-6">
                        <label
                          htmlFor="photo"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          Photo
                        </label>
                        <div className="mt-1 flex items-center">
                          <img
                            className="inline-block h-12 w-12 rounded-full"
                            src={session?.user.image}
                            alt=""
                          />
                          <div className="ml-4 flex">
                            <div className="relative bg-white py-2 px-3 border border-blue-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-theme-green">
                              <label
                                htmlFor="user_photo"
                                className="relative text-sm font-medium text-blue-gray-900 pointer-events-none"
                              >
                                <span>Change</span>
                                <span className="sr-only"> user photo</span>
                              </label>
                              <input
                                id="user_photo"
                                name="user_photo"
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                              />
                            </div>
                            <button
                              type="button"
                              className="ml-3 bg-transparent py-2 px-3 border border-transparent rounded-md text-sm font-medium text-blue-gray-900 hover:text-blue-gray-700 focus:outline-none focus:border-blue-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-gray-50 focus:ring-theme-green"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="sm:col-span-6">
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          Description
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="description"
                            name="description"
                            rows={4}
                            className="block w-full border-blue-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-theme-green focus:border-theme-green"
                            defaultValue={''}
                          />
                        </div>
                        <p className="mt-3 text-sm text-blue-gray-500">
                          Brief description for your profile. URLs are
                          hyperlinked.
                        </p>
                      </div>

                      <div className="sm:col-span-6">
                        <label
                          htmlFor="url"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          URL
                        </label>
                        <input
                          type="text"
                          name="url"
                          id="url"
                          className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-theme-green focus:border-theme-green"
                        />
                      </div>
                    </div>

                    <div className="pt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                      <div className="sm:col-span-6">
                        <h2 className="text-xl font-medium text-blue-gray-900">
                          Personal Information
                        </h2>
                        <p className="mt-1 text-sm text-blue-gray-500">
                          This information will be displayed publicly so be
                          careful what you share.
                        </p>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="email_address"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email_address"
                          id="email_address"
                          autoComplete="email"
                          className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-theme-green focus:border-theme-green"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="phone_number"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          Phone number
                        </label>
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          autoComplete="tel"
                          className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-theme-green focus:border-theme-green"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          id="country"
                          autoComplete="country"
                          className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-theme-green focus:border-theme-green"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="language"
                          className="block text-sm font-medium text-blue-gray-900"
                        >
                          Language
                        </label>
                        <input
                          type="text"
                          name="language"
                          id="language"
                          className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-theme-green focus:border-theme-green"
                        />
                      </div>

                      <p className="text-sm text-blue-gray-500 sm:col-span-6">
                        This account was created on{' '}
                        <time dateTime="2017-01-05T20:35:40">
                          January 5, 2017, 8:35:40 PM
                        </time>
                        .
                      </p>
                    </div>

                    <div className="pt-8 flex justify-end">
                      <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-green"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-theme-green hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-green"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // get users
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
