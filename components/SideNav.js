import Link from 'next/link';
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline';

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '/', current: true },
  { name: 'Team', icon: UsersIcon, href: '/team', count: 3, current: false },
  {
    name: 'Projects',
    icon: FolderIcon,
    href: '/projects',
    count: 4,
    current: false,
  },
  { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
  { name: 'Documents', icon: InboxIcon, href: '#', count: 12, current: false },
  { name: 'Reports', icon: ChartBarIcon, href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SideNav({ session }) {
  return (
    <div className="flex flex-col h-screen flex-1 border-r border-gray-200 bg-white">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <img className="h-8 w-auto" src="/shipt.png" alt="shipt" />
        </div>
        <nav
          className="mt-5 flex-1 px-2 bg-white space-y-1"
          aria-label="Sidebar"
        >
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <div
                className={classNames(
                  item.current
                    ? 'bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer'
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? 'text-gray-500'
                      : 'text-gray-400 group-hover:text-gray-500',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                <span className="flex-1">{item.name}</span>
                {item.count ? (
                  <span
                    className={classNames(
                      item.current
                        ? 'bg-white'
                        : 'bg-gray-100 group-hover:bg-gray-200',
                      'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'
                    )}
                  >
                    {item.count}
                  </span>
                ) : null}
              </div>
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
        <a href="#" className="flex-shrink-0 w-full group block">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src={session.user.image}
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {session.user.name}
              </p>
              <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                View profile
              </p>
            </div>
          </div>
        </a>
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
