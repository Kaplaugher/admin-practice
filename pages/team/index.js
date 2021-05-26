/* This example requires Tailwind CSS v2.0+ */
import {
  CheckCircleIcon,
  ChevronRightIcon,
  MailIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';
import TeamHeader from '../../components/TeamHeader';

export default function Team({ data }) {
  let members = data.results.map((person) => {
    return {
      member: {
        name: `${person.name.first} ${person.name.last}`,
        email: `${person.email}`,
        imageUrl: `${person.picture.medium}`,
      },
      date: '2020-01-07',
      dateFull: 'January 7, 2020',
      stage: 'Software',
    };
  });

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md p-12 h-screen">
      <TeamHeader />
      <ul className="divide-y divide-gray-200">
        {members.map((application) => (
          <li key={application.member.email}>
            <Link href="/team/1" className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={application.member.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {application.member.name}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <MailIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="truncate">
                          {application.member.email}
                        </span>
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <div>
                        <p className="text-sm text-gray-900">
                          Joined on{' '}
                          <time dateTime={application.date}>
                            {application.dateFull}
                          </time>
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <CheckCircleIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                          {application.stage}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <ChevronRightIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://randomuser.me/api/?page=1&results=10`);
  const data = await res.json();

  console.log(data);

  return {
    props: { data }, // will be passed to the page component as props
  };
}
