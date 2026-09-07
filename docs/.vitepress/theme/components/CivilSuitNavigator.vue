<script setup>
/**
 * Civil Suit Lifecycle Navigator
 * ------------------------------------------------------------------
 * A three-level drill-down over the whole life of a civil suit:
 *
 *   Level 1  seven stages, as a horizontal rail
 *   Level 2  the sub-components of the selected stage
 *   Level 3  the Sections and Orders that govern the selected
 *            sub-component, as chips that link into the guide
 *
 * Honesty rule for chips: a chip is a LINK only where this guide
 * actually carries the provision. Every `to` below was checked against
 * the built HTML — no anchor is guessed. Where the guide does not yet
 * cover a provision the chip is marked `planned` and points at the
 * roadmap, so the lifecycle stays complete without inventing pages
 * that would 404.
 */
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'

/* Chapter routes, named once so a future file rename is a one-line fix. */
const S9 = '/sections/sec-9-to-14'
const S15 = '/sections/sec-15-to-25'
const S36 = '/sections/sec-36-to-74'
const S96 = '/sections/sec-96-to-115'
const S144 = '/sections/sec-144-148a-151'
const O12 = '/orders/order-1-and-2'
const O678 = '/orders/order-6-7-8'
const O39 = '/orders/order-39'

/* Covered chip. */
const c = (label, to, note) => ({ label, to, note })
/* Not-yet-written chip: complete for teaching, honest about coverage. */
const p = (label, note) => ({ label, to: null, note })

const stages = [
  {
    n: 1,
    key: 'institution',
    title: 'Pre-Litigation & Institution',
    short: 'Institution',
    tagline: 'Everything that must be right before the plaint is stamped.',
    groups: [
      {
        title: 'Statutory notices',
        blurb:
          'Where the defendant is the Government or a public officer acting in an official capacity, notice is a condition precedent. A plaint filed without it is liable to be rejected, not merely stayed.',
        chips: [
          p('s. 80', 'Notice to Government or public officer — two months'),
          p('s. 80(2)', 'Leave to sue for urgent relief without notice')
        ]
      },
      {
        title: 'Pre-institution ADR',
        blurb:
          'Where the court discerns elements of a settlement, it formulates terms and refers the parties out. A reference is not a dismissal — the suit survives and returns if the reference fails.',
        chips: [p('s. 89', 'Arbitration, conciliation, judicial settlement, mediation')]
      },
      {
        title: 'Is the civil court competent at all?',
        blurb:
          'The first question is subject-matter competence, not convenience. Section 9 is the gateway: every civil suit is triable unless barred expressly or by necessary implication.',
        chips: [
          c('s. 9', `${S9}#section-9-—-courts-to-try-all-civil-suits-unless-barred`, 'Suits of a civil nature')
        ]
      },
      {
        title: 'Bars that defeat the suit before it starts',
        blurb:
          'Distinct bars with distinct consequences: section 10 stays the later suit, section 11 destroys it, section 12 bars a fresh one, and sections 13–14 govern foreign judgments.',
        chips: [
          c('s. 10', `${S9}#section-10-—-stay-of-suit-res-sub-judice`, 'Res sub judice — stay, not dismissal'),
          c('s. 11', `${S9}#section-11-—-res-judicata`, 'Res judicata, with all eight Explanations'),
          c('s. 12', `${S9}#section-12-—-bar-to-further-suit`, 'Bar to further suit'),
          c('s. 13', `${S9}#section-13-—-when-foreign-judgment-not-conclusive`, 'Foreign judgment not conclusive'),
          c('s. 14', `${S9}#section-14-—-presumption-as-to-foreign-judgments`, 'Presumption as to foreign judgments')
        ]
      },
      {
        title: 'Place of suing — which court',
        blurb:
          'Pecuniary competence first (section 15), then territorial. Get this wrong and section 21 decides whether the error is fatal or forgiven.',
        chips: [
          c('s. 15', `${S15}#section-15-—-court-in-which-suits-to-be-instituted`, 'Lowest grade competent'),
          c('ss. 16–18', `${S15}#sections-16-17-18-—-suits-relating-to-immovable-property`, 'Immovable property'),
          c('s. 19', `${S15}#section-19-—-suits-for-compensation-for-wrongs-to-person-or-movables`, 'Wrongs to person or movables'),
          c('s. 20', `${S15}#section-20-—-other-suits-to-be-instituted-where-defendants-reside-or-cause-of-action-arises`, 'Residence or cause of action'),
          c('ss. 21, 21A', `${S15}#sections-21-21a-—-objections-to-jurisdiction`, 'Objection at the earliest opportunity'),
          c('ss. 22–25', `${S15}#sections-22-to-25-—-transfer-of-suits-appeals-and-other-proceedings`, 'Transfer of suits')
        ]
      },
      {
        title: 'Parties to the suit',
        blurb:
          'Joinder, misjoinder and non-joinder. Only the absence of a necessary party is fatal; the absence of a proper party is a defect the court can cure at any stage.',
        chips: [
          c('O. I', `${O12}#order-i-—-parties-to-suits`, 'Joinder, misjoinder, non-joinder'),
          c('O. I R. 10', `${O12}#order-i-—-parties-to-suits`, 'Striking out, adding, substituting parties')
        ]
      },
      {
        title: 'Cause of action & frame of suit',
        blurb:
          'One cause of action, one suit, all the reliefs. Order II Rule 2 punishes the claim you could have made and did not.',
        chips: [
          c('O. II', `${O12}#order-ii-—-frame-of-suit`, 'Frame of suit'),
          c('O. II R. 2', `${O12}#order-ii-—-frame-of-suit`, 'Splitting of claims and reliefs')
        ]
      },
      {
        title: 'Presentation of the plaint',
        blurb:
          'The physical act of institution, and the particulars the plaint must carry on its face if it is to survive Order VII Rule 11.',
        chips: [
          p('s. 26', 'Every suit instituted by presentation of a plaint'),
          p('O. IV', 'Institution of suits; register of suits'),
          c('O. VII R. 1', `${O678}#order-vii-—-the-plaint-and-rejection-of-the-plaint`, 'Particulars the plaint must contain'),
          c('Model plaint', '/drafts/#_1-plaint-—-suit-for-permanent-injunction-and-declaration', 'Drafting toolkit')
        ]
      }
    ]
  },

  {
    n: 2,
    key: 'pleadings',
    title: 'Pleadings, Service & Appearance',
    short: 'Pleadings',
    tagline: 'The paper war: what each side must say, and what happens if they do not turn up.',
    groups: [
      {
        title: 'Issue and service of summons',
        blurb:
          'Service is the foundation of every ex parte order that follows. A decree built on defective service is vulnerable long after it is passed.',
        chips: [
          p('s. 27', 'Summons to defendants'),
          p('s. 28', 'Service in another State'),
          p('s. 29', 'Service of foreign summonses'),
          p('O. V', 'Issue and service of summons; substituted service')
        ]
      },
      {
        title: 'Rules of pleading & amendment',
        blurb:
          'Plead facts, not evidence and not law. Order VI Rule 17 then controls when that pleading can be changed — and after trial begins, the due-diligence proviso bites.',
        chips: [
          c('O. VI', `${O678}#order-vi-—-pleadings-generally-and-amendment`, 'Pleadings generally'),
          c('O. VI R. 17', `${O678}#order-vi-—-pleadings-generally-and-amendment`, 'Amendment, and the due-diligence proviso'),
          c('Model application', '/drafts/#_5-application-for-leave-to-amend-a-pleading', 'Leave to amend')
        ]
      },
      {
        title: 'The plaint and its rejection',
        blurb:
          'Rule 11 is decided on the plaint alone — the written statement is irrelevant to it. That single proposition wins and loses more applications than any other.',
        chips: [
          c('O. VII', `${O678}#order-vii-—-the-plaint-and-rejection-of-the-plaint`, 'The plaint'),
          c('O. VII R. 10', `${O678}#order-vii-—-the-plaint-and-rejection-of-the-plaint`, 'Return of plaint'),
          c('O. VII R. 11', `${O678}#order-vii-—-the-plaint-and-rejection-of-the-plaint`, 'Rejection of plaint'),
          c('Model application', '/drafts/#_4-application-for-rejection-of-plaint', 'Rejection of plaint')
        ]
      },
      {
        title: 'Written statement, set-off & counter-claim',
        blurb:
          'A denial must be specific; evasive denial is admission. A counter-claim is a cross-suit that survives the dismissal of the plaint.',
        chips: [
          c('O. VIII', `${O678}#order-viii-—-written-statement-set-off-and-counter-claim`, 'Written statement'),
          c('O. VIII R. 6', `${O678}#order-viii-—-written-statement-set-off-and-counter-claim`, 'Legal set-off'),
          c('O. VIII R. 6A', `${O678}#order-viii-—-written-statement-set-off-and-counter-claim`, 'Counter-claim'),
          c('Model WS', '/drafts/#_3-written-statement-with-counter-claim', 'With counter-claim')
        ]
      },
      {
        title: 'Appearance and the ex parte consequence',
        blurb:
          'Non-appearance has asymmetric costs. An ex parte decree opens two doors — set aside under Order IX Rule 13, or appeal under section 96(2) — and the choice is strategic.',
        chips: [
          p('O. IX', 'Appearance and consequence of non-appearance'),
          c('O. IX R. 13', `${S96}#sections-96-97-and-99-with-order-xli-—-the-first-appeal`, 'Setting aside an ex parte decree — treated under the first appeal'),
          c('s. 96(2)', `${S96}#sections-96-97-and-99-with-order-xli-—-the-first-appeal`, 'Appeal from an ex parte decree')
        ]
      }
    ]
  },

  {
    n: 3,
    key: 'interim',
    title: 'Interlocutory & Interim Battles',
    short: 'Interim',
    tagline: 'Most civil litigation is decided here, long before trial.',
    groups: [
      {
        title: 'Temporary injunctions',
        blurb:
          'Prima facie case, balance of convenience, irreparable injury — all three, conjunctively. The three golden principles are threshold conditions, not a weighing exercise.',
        chips: [
          p('s. 94(c)', 'Supplemental proceedings — power to grant injunction'),
          c('O. XXXIX RR. 1–2', `${O39}#rules-1-and-2-—-the-grant-of-a-temporary-injunction`, 'Grant of a temporary injunction'),
          c('O. XXXIX R. 3', `${O39}#rules-1-and-2-—-the-grant-of-a-temporary-injunction`, 'Ex parte injunction and the recording of reasons'),
          c('Model IA', '/drafts/#_2-application-for-temporary-injunction', 'Temporary injunction'),
          c('Model reply', '/drafts/#_10-reply-to-an-injunction-application', 'Resisting an injunction')
        ]
      },
      {
        title: 'Disobedience of an injunction',
        blurb:
          'Rule 2A is punitive and quasi-criminal: attachment of property and up to three months in civil prison. Wilful disobedience must be pleaded and proved to that standard.',
        chips: [
          c('O. XXXIX R. 2A', `${O39}#rule-2a-—-the-consequence-of-disobedience`, 'Consequence of disobedience'),
          c('Model application', '/drafts/#_8-application-for-breach-of-injunction', 'Breach of injunction')
        ]
      },
      {
        title: 'Attachment before judgment',
        blurb:
          'A drastic power, and the threshold is correspondingly high: proof of an intent to obstruct or delay execution, not mere apprehension of non-payment.',
        chips: [
          p('O. XXXVIII', 'Arrest and attachment before judgment'),
          p('s. 94(b)', 'Supplemental proceedings — attachment before judgment')
        ]
      },
      {
        title: 'Receivers and other interim orders',
        blurb:
          'Appointment of a receiver is the harshest interim remedy short of arrest — it dispossesses before adjudication and is justified only where the property is in real jeopardy.',
        chips: [
          c('O. XL', `${O39}#rules-6-to-10-—-the-other-interlocutory-orders`, 'Appointment of receivers'),
          c('O. XXXIX RR. 6–10', `${O39}#rules-6-to-10-—-the-other-interlocutory-orders`, 'Interim sale, detention, deposit')
        ]
      },
      {
        title: 'Discovery, inspection & interrogatories',
        blurb:
          'The under-used part of the Code. Discovery narrows the issues before trial and builds the admissions that make Order XII Rule 6 possible.',
        chips: [
          p('O. XI', 'Discovery and inspection'),
          p('O. XI R. 12', 'Application for discovery of documents')
        ]
      },
      {
        title: 'Caveat — pre-empting an ex parte order',
        blurb:
          'Filed by the person who expects to be sued. It buys the right to be heard before an interim order is made behind your back, and it lapses in ninety days.',
        chips: [c('s. 148A', `${S144}#section-148a-—-caveat`, 'Right to lodge a caveat'), c('Model caveat', '/drafts/#_7-caveat', 'Drafting toolkit')]
      }
    ]
  },

  {
    n: 4,
    key: 'trial',
    title: 'Case Management & Trial',
    short: 'Trial',
    tagline: 'From issues to evidence — the stage the Code most wants you to shorten.',
    groups: [
      {
        title: 'Admission and denial of documents',
        blurb:
          'Admissions are the cheapest victory in civil litigation. Rule 6 lets the court pass judgment on an admission at any stage, without waiting for the rest of the suit.',
        chips: [
          p('O. XII', 'Admissions'),
          p('O. XII R. 6', 'Judgment on admissions')
        ]
      },
      {
        title: 'Framing of issues',
        blurb:
          'Issues arise where a material proposition is affirmed by one side and denied by the other. A suit tried on wrongly framed issues is the classic ground for remand.',
        chips: [
          p('O. XIV', 'Settlement of issues'),
          p('O. XIV R. 2', 'Court to pronounce judgment on all issues')
        ]
      },
      {
        title: 'Summoning and attendance of witnesses',
        blurb:
          'The list of witnesses is time-bound. Miss the deadline and you are asking for an indulgence, not exercising a right.',
        chips: [
          p('O. XVI', 'Summoning and attendance of witnesses'),
          p('O. XVI R. 1', 'List of witnesses and summons')
        ]
      },
      {
        title: 'Adjournments',
        blurb:
          'Not more than three adjournments to a party during the hearing of the suit. The provision is honoured in the breach, but it is the hook for a costs order.',
        chips: [p('O. XVII', 'Adjournments'), p('s. 35B', 'Costs for causing delay')]
      },
      {
        title: 'Evidence, examination and cross',
        blurb:
          'Examination-in-chief on affidavit, cross-examination in court. The affidavit does not become evidence until the deponent is tendered for cross.',
        chips: [
          p('O. XVIII', 'Hearing of the suit and examination of witnesses'),
          p('O. XVIII R. 4', 'Examination-in-chief on affidavit')
        ]
      },
      {
        title: 'Local investigation by commission',
        blurb:
          'Where the dispute turns on physical facts — encroachment, measurement, standing crops — a commissioner records what no affidavit can.',
        chips: [
          p('O. XXVI', 'Commissions'),
          c('Model application', '/drafts/#_9-application-for-appointment-of-a-local-commissioner', 'Local commissioner')
        ]
      }
    ]
  },

  {
    n: 5,
    key: 'judgment',
    title: 'Judgment, Decree & Costs',
    short: 'Judgment',
    tagline: 'The adjudication, what it carries with it, and how it is undone.',
    groups: [
      {
        title: 'Pronouncement of judgment and decree',
        blurb:
          'Judgment is the statement of grounds; the decree is the formal adjudication that is executed and appealed. The distinction drives limitation for both.',
        chips: [
          p('s. 33', 'Judgment and decree'),
          p('O. XX', 'Judgment and decree — contents and drawing up'),
          p('O. XX R. 5', 'Court to state its decision on each issue')
        ]
      },
      {
        title: 'Interest',
        blurb:
          'Three periods, three sources: interest accrued before suit, pendente lite, and post-decree. Only the last two are in the court’s discretion under section 34.',
        chips: [p('s. 34', 'Interest — pendente lite and post-decree')]
      },
      {
        title: 'Costs',
        blurb:
          'Costs follow the event, and where they do not the court must record reasons. Sections 35A and 35B target false claims and delay respectively.',
        chips: [
          p('s. 35', 'Costs generally'),
          p('s. 35A', 'Compensatory costs for false or vexatious claims'),
          p('s. 35B', 'Costs for causing delay')
        ]
      },
      {
        title: 'Restitution',
        blurb:
          'When a decree is varied or reversed, the court places the parties where they would have been but for the decree. The duty is on the court, and no separate suit lies.',
        chips: [
          c('s. 144', `${S144}#section-144-—-application-for-restitution`, 'Application for restitution'),
          c('Model application', '/drafts/#_6-application-for-restitution', 'Restitution')
        ]
      },
      {
        title: 'Inherent powers',
        blurb:
          'A saving, not a source. Section 151 cannot be invoked where the Code provides a remedy, and never to do what the Code forbids.',
        chips: [c('s. 151', `${S144}#section-151-—-saving-of-inherent-powers-of-court`, 'Saving of inherent powers')]
      }
    ]
  },

  {
    n: 6,
    key: 'appeals',
    title: 'Appeals, Revision & Review',
    short: 'Appeals',
    tagline: 'Four different remedies against four different kinds of error. Choose wrongly and you lose time you cannot get back.',
    groups: [
      {
        title: 'First appeal',
        blurb:
          'A rehearing on facts and law. The first appellate court is the last court of fact, and Order XLI Rule 31 requires it to record its own findings on every point.',
        chips: [
          c('s. 96', `${S96}#sections-96-97-and-99-with-order-xli-—-the-first-appeal`, 'Appeal from original decree'),
          c('s. 97', `${S96}#sections-96-97-and-99-with-order-xli-—-the-first-appeal`, 'Preliminary decree not appealed'),
          c('s. 99', `${S96}#sections-96-97-and-99-with-order-xli-—-the-first-appeal`, 'No reversal for error not affecting merits'),
          c('O. XLI', `${S96}#sections-96-97-and-99-with-order-xli-—-the-first-appeal`, 'Procedure — RR. 22, 23, 27, 31, 33'),
          c('O. XLI R. 22', `${S96}#sections-96-97-and-99-with-order-xli-—-the-first-appeal`, 'Cross-objections'),
          c('O. XLI R. 27', `${S96}#sections-96-97-and-99-with-order-xli-—-the-first-appeal`, 'Additional evidence in appeal')
        ]
      },
      {
        title: 'Second appeal',
        blurb:
          'Jurisdiction opens only on a substantial question of law, and section 100(4) obliges the High Court to formulate it. An unformulated question is a jurisdictional defect.',
        chips: [
          c('s. 100', `${S96}#sections-100-100a-101-and-103-with-order-xlii-—-the-second-appeal`, 'Substantial question of law'),
          c('s. 100A', `${S96}#sections-100-100a-101-and-103-with-order-xlii-—-the-second-appeal`, 'No further appeal from a single judge'),
          c('s. 101', `${S96}#sections-100-100a-101-and-103-with-order-xlii-—-the-second-appeal`, 'No second appeal except on section 100'),
          c('s. 103', `${S96}#sections-100-100a-101-and-103-with-order-xlii-—-the-second-appeal`, 'Power to determine issues of fact'),
          c('O. XLII', `${S96}#sections-100-100a-101-and-103-with-order-xlii-—-the-second-appeal`, 'Procedure in second appeals')
        ]
      },
      {
        title: 'Appeals from orders',
        blurb:
          'Section 104 read with Order XLIII Rule 1 is an exhaustive list. If the order is not on it, there is no appeal — and section 105(2) may already have closed the point.',
        chips: [
          c('ss. 104–107', `${S96}#sections-104-to-107-with-order-xliii-—-appeals-from-orders-and-the-powers-of-the-appellate-court`, 'Appealable orders; appellate powers'),
          c('O. XLIII R. 1', `${S96}#sections-104-to-107-with-order-xliii-—-appeals-from-orders-and-the-powers-of-the-appellate-court`, 'The exhaustive list, clause by clause'),
          c('s. 105', `${S96}#sections-104-to-107-with-order-xliii-—-appeals-from-orders-and-the-powers-of-the-appellate-court`, 'Other orders — and the section 105(2) trap')
        ]
      },
      {
        title: 'Revision',
        blurb:
          'Post-1999 the failure-of-justice limb is gone and the proviso imposes a counterfactual finality test. Against a civil court’s judicial order the petition is now styled under Article 227.',
        chips: [
          c('s. 115', `${S96}#section-115-with-article-227-—-revision`, 'Jurisdictional error only'),
          c('Art. 227', `${S96}#section-115-with-article-227-—-revision`, 'Superintendence — after Radhey Shyam')
        ]
      },
      {
        title: 'Review',
        blurb:
          'Three grounds only, and the first carries a due-diligence requirement that defeats most applications. An error apparent on the face of the record is not a ground for rehearing.',
        chips: [
          c('s. 114', `${S96}#section-114-with-order-xlvii-—-review`, 'Review'),
          c('O. XLVII', `${S96}#section-114-with-order-xlvii-—-review`, 'Procedure and the three grounds'),
          p('s. 152', 'Clerical or arithmetical slips — the better route')
        ]
      }
    ]
  },

  {
    n: 7,
    key: 'execution',
    title: 'Execution of Decrees',
    short: 'Execution',
    tagline: 'The stage where decrees go to die. Winning the suit is half the work.',
    groups: [
      {
        title: 'Which court executes',
        blurb:
          'The court that passed the decree, or the court to which it is transferred. Transfer under sections 39 and 42 defines the powers the transferee court actually has.',
        chips: [
          c('ss. 36–39, 42', `${S36}#sections-36-to-39-and-42-—-which-court-executes`, 'The executing court and transfer')
        ]
      },
      {
        title: 'Questions for the executing court',
        blurb:
          'All questions between the parties relating to execution, discharge or satisfaction are decided here — and nowhere else. The executing court cannot go behind the decree.',
        chips: [
          c('s. 47', `${S36}#section-47-—-the-executing-court-s-exclusive-jurisdiction`, 'Exclusive jurisdiction')
        ]
      },
      {
        title: 'Modes of execution',
        blurb:
          'Delivery, attachment and sale, arrest and detention, appointment of a receiver. Arrest requires the notice and the enquiry, and inability to pay is a complete answer.',
        chips: [
          c('s. 51', `${S36}#sections-51-to-59-—-the-modes-of-execution-and-arrest`, 'Powers of the court to enforce execution'),
          c('ss. 52–59', `${S36}#sections-51-to-59-—-the-modes-of-execution-and-arrest`, 'Arrest and detention in civil prison')
        ]
      },
      {
        title: 'Attachment, sale and exemptions',
        blurb:
          'Section 60 lists what cannot be touched. Section 64 avoids private transfers after attachment, and section 73 governs how the proceeds are shared.',
        chips: [
          c('ss. 60–64', `${S36}#sections-60-to-64-and-73-—-attachment-alienation-and-distribution`, 'Attachable property and exemptions'),
          c('s. 73', `${S36}#sections-60-to-64-and-73-—-attachment-alienation-and-distribution`, 'Rateable distribution'),
          p('O. XXI', 'Execution — attachment, proclamation and sale'),
          p('O. XXI R. 66', 'Proclamation of sale')
        ]
      },
      {
        title: 'Objections, claims and resistance',
        blurb:
          'The third party claiming the attached property, and the stranger resisting delivery of possession. Rules 97–101 make these adjudications decrees in their own right.',
        chips: [
          p('O. XXI R. 58', 'Adjudication of claims to attached property'),
          p('O. XXI RR. 97–101', 'Resistance to possession; adjudication'),
          c('s. 47', `${S36}#section-47-—-the-executing-court-s-exclusive-jurisdiction`, 'The gateway for objections between parties')
        ]
      }
    ]
  }
]

const active = ref(0)
const openGroup = ref(0)

const stage = computed(() => stages[active.value])
const group = computed(() => stage.value.groups[openGroup.value] ?? null)

const coverage = computed(() => {
  const all = stage.value.groups.flatMap((g) => g.chips)
  return { done: all.filter((x) => x.to).length, total: all.length }
})

function selectStage(i) {
  if (active.value === i) return
  active.value = i
  openGroup.value = 0
}

function selectGroup(i) {
  openGroup.value = openGroup.value === i ? -1 : i
}

/* Roving focus on the stage rail. */
function onRailKey(e) {
  const last = stages.length - 1
  let next = null
  if (e.key === 'ArrowRight') next = active.value === last ? 0 : active.value + 1
  else if (e.key === 'ArrowLeft') next = active.value === 0 ? last : active.value - 1
  else if (e.key === 'Home') next = 0
  else if (e.key === 'End') next = last
  if (next === null) return
  e.preventDefault()
  selectStage(next)
  const el = e.currentTarget.querySelectorAll('.csn-stage')[next]
  if (el) el.focus()
}

const href = (to) => (to ? withBase(to) : withBase('/roadmap'))
</script>

<template>
  <section class="csn" aria-label="Civil suit lifecycle navigator">
    <header class="csn-head">
      <h2 class="csn-title">The life of a civil suit</h2>
      <p class="csn-sub">
        Seven stages, from the notice before suit to the sale in execution. Pick a stage, then a
        step, to see the Sections and Orders that govern it.
      </p>
    </header>

    <!-- Level 1 ---------------------------------------------------------- -->
    <div
      class="csn-rail"
      role="tablist"
      aria-label="Stages of a civil suit"
      @keydown="onRailKey"
    >
      <button
        v-for="(s, i) in stages"
        :key="s.key"
        class="csn-stage"
        :class="{ 'is-active': i === active, 'is-past': i < active }"
        role="tab"
        :aria-selected="i === active"
        :tabindex="i === active ? 0 : -1"
        :style="{ '--i': i }"
        @click="selectStage(i)"
      >
        <span class="csn-num">{{ s.n }}</span>
        <span class="csn-stage-title">{{ s.short }}</span>
      </button>
    </div>

    <!-- Level 2 ---------------------------------------------------------- -->
    <Transition name="csn-panel" mode="out-in">
      <div class="csn-panel" :key="stage.key" role="tabpanel">
        <div class="csn-panel-head">
          <div>
            <p class="csn-eyebrow">Stage {{ stage.n }} of 7</p>
            <h3 class="csn-panel-title">{{ stage.title }}</h3>
            <p class="csn-tagline">{{ stage.tagline }}</p>
          </div>
          <p class="csn-coverage">
            <strong>{{ coverage.done }}</strong> of {{ coverage.total }} linked
          </p>
        </div>

        <ul class="csn-groups">
          <li
            v-for="(g, gi) in stage.groups"
            :key="g.title"
            class="csn-group"
            :class="{ 'is-open': gi === openGroup }"
            :style="{ '--i': gi }"
          >
            <button
              class="csn-group-btn"
              :aria-expanded="gi === openGroup"
              @click="selectGroup(gi)"
            >
              <span class="csn-caret" aria-hidden="true"></span>
              <span class="csn-group-title">{{ g.title }}</span>
              <span class="csn-count">{{ g.chips.length }}</span>
            </button>

            <!-- Level 3 -------------------------------------------------- -->
            <Transition name="csn-drawer">
              <div v-show="gi === openGroup" class="csn-drawer">
                <p class="csn-blurb">{{ g.blurb }}</p>
                <TransitionGroup tag="div" name="csn-chip" class="csn-chips">
                  <a
                    v-for="(chip, ci) in g.chips"
                    :key="chip.label"
                    class="csn-chip"
                    :class="{ 'is-planned': !chip.to }"
                    :href="href(chip.to)"
                    :title="
                      chip.to
                        ? chip.note
                        : `${chip.note} — not yet written up; opens the roadmap`
                    "
                    :style="{ '--i': ci }"
                  >
                    <span class="csn-chip-label">{{ chip.label }}</span>
                    <span v-if="!chip.to" class="csn-chip-flag" aria-hidden="true">soon</span>
                  </a>
                </TransitionGroup>
              </div>
            </Transition>
          </li>
        </ul>
      </div>
    </Transition>

    <p class="csn-foot">
      Chips marked <em>soon</em> are stages of the lifecycle this build does not yet cover — they
      open the <a :href="withBase('/roadmap')">roadmap</a>. Everything else links straight to the
      provision.
    </p>
  </section>
</template>

<style scoped>
.csn {
  margin: 56px 0 8px;
  border: 1px solid var(--cpc-rule, var(--vp-c-divider));
  border-radius: 12px;
  background: var(--vp-c-bg);
  padding: 26px 24px 20px;
}

.csn-head {
  margin-bottom: 20px;
}

.csn-title {
  margin: 0;
  border: 0;
  padding: 0;
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.csn-sub {
  margin: 6px 0 0;
  max-width: 62ch;
  color: var(--vp-c-text-2);
  font-size: 0.94rem;
  line-height: 1.6;
}

/* ---- Level 1: the stage rail -------------------------------------------- */

.csn-rail {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 4px 2px 12px;
  scrollbar-width: thin;
}

.csn-stage {
  position: relative;
  flex: 1 0 auto;
  min-width: 116px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  padding: 12px 13px;
  border: 1px solid var(--cpc-rule, var(--vp-c-divider));
  border-radius: 9px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease,
    transform 0.25s ease, box-shadow 0.25s ease;
}

.csn-stage:hover {
  transform: translateY(-2px);
  border-color: var(--cpc-oxblood, var(--vp-c-brand-1));
  color: var(--vp-c-text-1);
}

.csn-stage:focus-visible {
  outline: 2px solid var(--cpc-oxblood, var(--vp-c-brand-1));
  outline-offset: 2px;
}

.csn-stage.is-active {
  background: var(--vp-c-brand-soft);
  border-color: var(--cpc-oxblood, var(--vp-c-brand-1));
  color: var(--vp-c-text-1);
  box-shadow: inset 0 -3px 0 var(--cpc-oxblood, var(--vp-c-brand-1));
}

.csn-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid currentColor;
  font-size: 0.76rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}

.csn-stage.is-active .csn-num {
  background: var(--cpc-oxblood, var(--vp-c-brand-1));
  border-color: var(--cpc-oxblood, var(--vp-c-brand-1));
  color: var(--vp-c-bg);
}

.csn-stage.is-past .csn-num {
  border-color: var(--cpc-oxblood, var(--vp-c-brand-1));
  color: var(--cpc-oxblood, var(--vp-c-brand-1));
}

.csn-stage-title {
  font-size: 0.86rem;
  font-weight: 600;
  line-height: 1.3;
}

/* ---- Level 2: the stage panel ------------------------------------------- */

.csn-panel {
  border-top: 1px solid var(--cpc-rule, var(--vp-c-divider));
  padding-top: 18px;
}

.csn-panel-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
}

.csn-eyebrow {
  margin: 0;
  color: var(--cpc-oxblood, var(--vp-c-brand-1));
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.csn-panel-title {
  margin: 5px 0 0;
  border: 0;
  padding: 0;
  font-size: 1.16rem;
  font-weight: 700;
  line-height: 1.3;
}

.csn-tagline {
  margin: 5px 0 0;
  max-width: 66ch;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.55;
}

.csn-coverage {
  flex: 0 0 auto;
  margin: 0;
  padding: 4px 10px;
  border: 1px solid var(--cpc-rule, var(--vp-c-divider));
  border-radius: 999px;
  color: var(--vp-c-text-3);
  font-size: 0.72rem;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.csn-coverage strong {
  color: var(--cpc-oxblood, var(--vp-c-brand-1));
}

.csn-groups {
  margin: 0;
  padding: 0;
  list-style: none;
}

.csn-group {
  border-top: 1px solid var(--cpc-rule, var(--vp-c-divider));
}

.csn-group:first-child {
  border-top: 0;
}

.csn-group-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 11px 2px;
  border: 0;
  background: none;
  color: var(--vp-c-text-1);
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: color 0.2s ease;
}

.csn-group-btn:hover {
  color: var(--cpc-oxblood, var(--vp-c-brand-1));
}

.csn-group-btn:focus-visible {
  outline: 2px solid var(--cpc-oxblood, var(--vp-c-brand-1));
  outline-offset: 2px;
  border-radius: 4px;
}

.csn-caret {
  flex: 0 0 auto;
  width: 0;
  height: 0;
  border-left: 5px solid currentColor;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  opacity: 0.6;
  transition: transform 0.28s ease, opacity 0.2s ease;
}

.csn-group.is-open .csn-caret {
  transform: rotate(90deg);
  opacity: 1;
  color: var(--cpc-oxblood, var(--vp-c-brand-1));
}

.csn-group-title {
  flex: 1 1 auto;
  font-size: 0.95rem;
  font-weight: 600;
}

.csn-group.is-open .csn-group-title {
  color: var(--cpc-oxblood, var(--vp-c-brand-1));
}

.csn-count {
  flex: 0 0 auto;
  min-width: 20px;
  padding: 1px 6px;
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-3);
  font-size: 0.7rem;
  font-variant-numeric: tabular-nums;
  text-align: center;
}

/* ---- Level 3: the chips -------------------------------------------------- */

.csn-drawer {
  overflow: hidden;
  padding: 0 0 14px 15px;
}

.csn-blurb {
  margin: 0 0 11px;
  max-width: 70ch;
  color: var(--vp-c-text-2);
  font-size: 0.88rem;
  line-height: 1.62;
}

.csn-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.csn-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 11px;
  border: 1px solid var(--cpc-oxblood, var(--vp-c-brand-1));
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--cpc-oxblood, var(--vp-c-brand-1));
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.5;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.csn-chip:hover {
  background: var(--cpc-oxblood, var(--vp-c-brand-1));
  color: var(--vp-c-bg);
  transform: translateY(-1px);
}

.csn-chip:focus-visible {
  outline: 2px solid var(--cpc-oxblood, var(--vp-c-brand-1));
  outline-offset: 2px;
}

.csn-chip.is-planned {
  border-style: dashed;
  border-color: var(--vp-c-divider);
  color: var(--vp-c-text-3);
  font-weight: 500;
}

.csn-chip.is-planned:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-text-3);
  color: var(--vp-c-text-2);
}

.csn-chip-flag {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.75;
}

.csn-foot {
  margin: 14px 0 0;
  padding-top: 12px;
  border-top: 1px solid var(--cpc-rule, var(--vp-c-divider));
  color: var(--vp-c-text-3);
  font-size: 0.78rem;
  line-height: 1.55;
}

.csn-foot em {
  font-style: normal;
  font-weight: 700;
}

/* ---- Motion -------------------------------------------------------------- */

.csn-panel-enter-active,
.csn-panel-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}
.csn-panel-enter-from {
  opacity: 0;
  transform: translateX(14px);
}
.csn-panel-leave-to {
  opacity: 0;
  transform: translateX(-14px);
}

/* Slide-in of each step row, staggered down the list. */
.csn-panel-enter-active .csn-group {
  animation: csn-rise 0.34s ease both;
  animation-delay: calc(var(--i) * 45ms);
}

@keyframes csn-rise {
  from {
    opacity: 0;
    transform: translateY(9px);
  }
}

.csn-drawer-enter-active,
.csn-drawer-leave-active {
  transition: max-height 0.3s ease, opacity 0.24s ease;
  max-height: 460px;
}
.csn-drawer-enter-from,
.csn-drawer-leave-to {
  max-height: 0;
  opacity: 0;
}

.csn-chip-enter-active {
  transition: opacity 0.26s ease, transform 0.26s ease;
  transition-delay: calc(var(--i) * 28ms);
}
.csn-chip-enter-from {
  opacity: 0;
  transform: translateY(6px) scale(0.96);
}

@media (prefers-reduced-motion: reduce) {
  .csn *,
  .csn *::before,
  .csn *::after {
    animation-duration: 0.001ms !important;
    animation-delay: 0ms !important;
    transition-duration: 0.001ms !important;
    transition-delay: 0ms !important;
  }
}

/* ---- Narrow screens ------------------------------------------------------ */

@media (max-width: 640px) {
  .csn {
    padding: 20px 15px 16px;
    border-radius: 10px;
  }

  .csn-rail {
    gap: 6px;
  }

  .csn-stage {
    min-width: 104px;
    padding: 10px;
  }

  .csn-panel-head {
    flex-direction: column;
    gap: 8px;
  }

  .csn-drawer {
    padding-left: 0;
  }
}
</style>
