import { siteConfig } from './lib/site-config'
import logoChop from '/public/images/logos/chop-logo.jpeg'
import logoNimble from '/public/images/logos/nimble-logo-round.png'
import logoTCA from '/public/images/logos/tca-logo.png'
import logoZTM from '/public/images/logos/ztm-logo.png'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'd5bfe8f4b71b4bc291a6abb36e9ff70a',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Engineer, Entrepreneur, & Star Wars Aficionado',
  domain: 'tristandeane.ca',
  author: 'Tristan Deane',
  email: 'contact@tristandeane.ca',

  // open graph metadata (optional)
  description:
    'Hey friend, I’m Tristan, a software engineer and entrepreneur based in Edmonton, Canada. I build digital products and occasionally remember to write about them.',

  // social usernames (optional)
  twitter: 'SoftwareTrizzey',
  github: 'software-trizzey',
  linkedin: 'software-trizzey',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Home',
      url: '/'
      // pageId: 'f1199d37579b41cbabfc0b5174f4256a'
    },
    {
      title: 'Blog',
      url: '/posts'
      // pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    },
    {
      title: 'Projects',
      url: '/projects'
      // pageId: 'f1199d37579b41cbabfc0b5174fas123'
    }
  ],

  resume: [
    {
      company: 'Nimble Hiring',
      logo: logoNimble,
      location: 'Remote',
      website: '',
      highlights: [
        'Researched and designed a pre-commit git hook which resulted in a 30% reduction of CI/CD errors.',
        'Automated annual update of hiring season process, which saved 2 story points of work for developers and QA.',
        'Championed the adoption of TypeScript to increase code resiliency and reduce the rate of developer-injected bugs.',
        'As a side project, I developed a NextJS leaderboard application to boost connection opportunities for remote-based team members.',
        'Squashed project compatibility issues with Apple M1 devices by writing a custom Docker override file and walkthrough for the development team.',
        'Used Django, ReactJS, and various CSS libraries to design and build scalable APIs and a delightful UI/UX that serves a 10k+ user base.',
        'Conducted code reviews, interviewed candidates, and helped design the current engineering hiring criteria.'
      ],
      position: 'Software Engineer',
      startDate: 'Oct. 2021',
      endDate: 'Present'
    },
    {
      company: 'TCA Developments',
      logo: logoTCA,
      position: 'Full-Stack Developer',
      location: 'Edmonton, AB',
      website: '',
      highlights: [
        'Solely responsible for designing and developing an inventory and checkout system to curb property theft.',
        'The database and API were developed with Django and consumed by a NextJS client.',
        'To help these differing frameworks communicate, I used JWT (JSON Web Tokens).',
        'As a result of this application, the company reduced theft by about 81%.'
      ],
      startDate: 'Feb. 2020',
      endDate: 'Oct. 2021'
    },
    {
      company: 'ZTM Academy',
      logo: logoZTM,
      position: 'Hacktoberfest Maintainer (Volunteer)',
      location: 'Remote',
      website: '',
      highlights: [
        'Developed submission criteria for repository contributors.',
        'Performed code reviews on contributor pull requests.',
        'Provided support to contributors experiencing issues with the project or their submissions.',
        'Technical Stack: Stencil.js, GitHub Actions, Discord'
      ],
      startDate: 'Oct. 2021',
      endDate: 'Oct. 2021'
    },
    {
      company: 'Chop Steakhouse & Bar',
      logo: logoChop,
      position: 'Server',
      location: 'Edmonton, AB',
      website: '',
      highlights: [
        'Ensured all guests had an outstanding experience by utilizing customer service techniques.',
        'Leveraged suggestive selling techniques to increase the guest cheque average.',
        'Worked with fellow staff members to foster a positive team atmosphere.'
      ],
      startDate: 'Feb. 2014',
      endDate: 'May 2021'
    }
  ]
})
