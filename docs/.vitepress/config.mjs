import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CPC Master Practitioner & Academic Guide',
  description:
    'An end-to-end, searchable, offline-ready reference to the Code of Civil Procedure, 1908 — for academic mastery and courtroom practice.',
  lang: 'en-IN',
  // GitHub Pages serves a project site under /<repo>/; the workflow sets DOCS_BASE.
  base: process.env.DOCS_BASE ?? '/',
  cleanUrls: true,
  lastUpdated: true,
  appearance: true,

  head: [['meta', { name: 'theme-color', content: '#8b1a1a' }]],

  themeConfig: {
    siteTitle: 'CPC Guide',

    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Sections',
        items: [
          { text: 'Part I — Suits in General (ss. 9–35B)', link: '/sections/sec-9-to-14' },
          { text: 'Jurisdiction & Transfer (ss. 15–25)', link: '/sections/sec-15-to-25' },
          { text: 'Part II — Execution (ss. 36–74)', link: '/sections/sec-36-to-74' },
          { text: 'Part XI — Miscellaneous (ss. 144–158)', link: '/sections/sec-144-148a-151' }
        ]
      },
      {
        text: 'Orders',
        items: [
          { text: 'Parties & Frame of Suit (O. I–II)', link: '/orders/order-1-and-2' },
          { text: 'Pleadings (O. VI–VIII)', link: '/orders/order-6-7-8' },
          { text: 'Temporary Injunctions (O. XXXIX)', link: '/orders/order-39' }
        ]
      },
      { text: 'Drafting Toolkit', link: '/drafts/' }
    ],

    sidebar: [
      {
        text: 'Part I — Suits in General (Sections 9 to 35B)',
        collapsed: false,
        items: [
          {
            text: 'Sections 9–14 — Jurisdiction, Res Sub Judice & Res Judicata',
            link: '/sections/sec-9-to-14'
          },
          {
            text: 'Sections 15–25 — Place of Suing, Objections & Transfer',
            link: '/sections/sec-15-to-25'
          }
        ]
      },
      {
        text: 'Part II — Execution (Sections 36 to 74)',
        collapsed: false,
        items: [
          {
            text: 'Sections 36–74 — Execution, Attachment & Arrest',
            link: '/sections/sec-36-to-74'
          }
        ]
      },
      {
        text: 'Parts VII & VIII — Appeals, Review, Revision (Sections 96 to 115)',
        collapsed: true,
        items: [{ text: 'Coming in a later batch', link: '/roadmap' }]
      },
      {
        text: 'Part XI — Miscellaneous & Inherent Powers (Sections 144 to 158)',
        collapsed: false,
        items: [
          {
            text: 'Sections 144, 148A & 151 — Restitution, Caveat, Inherent Powers',
            link: '/sections/sec-144-148a-151'
          }
        ]
      },
      {
        text: 'First Schedule — Orders: Pleadings',
        collapsed: false,
        items: [
          { text: 'Orders I & II — Parties and Frame of Suit', link: '/orders/order-1-and-2' },
          {
            text: 'Orders VI, VII & VIII — Pleadings, Plaint, Written Statement',
            link: '/orders/order-6-7-8'
          }
        ]
      },
      {
        text: 'First Schedule — Orders: Interlocutory',
        collapsed: false,
        items: [{ text: 'Order XXXIX — Temporary Injunctions', link: '/orders/order-39' }]
      },
      {
        text: 'First Schedule — Orders: Trial',
        collapsed: true,
        items: [{ text: 'Coming in a later batch', link: '/roadmap' }]
      },
      {
        text: 'First Schedule — Orders: Execution',
        collapsed: true,
        items: [{ text: 'Coming in a later batch', link: '/roadmap' }]
      },
      {
        text: 'Courtroom Drafting Toolkit',
        collapsed: false,
        items: [{ text: 'Model Petitions & Applications', link: '/drafts/' }]
      }
    ],

    outline: { level: [2, 3], label: 'On this page' },

    docFooter: { prev: 'Previous provision', next: 'Next provision' },

    footer: {
      message:
        'Study and practice aid only. Always verify against the current bare Act, State amendments and High Court Rules before filing.',
      copyright: 'CPC Master Practitioner & Academic Guide'
    }
  }
})
