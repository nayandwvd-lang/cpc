/**
 * Decision trees and sequences.
 *
 * Every one of these was prose somewhere in the guide. Prose is the wrong
 * medium for a branch: a reader who already knows the answer can follow
 * "if it is a decree then s. 96, unless it is one of the orders listed in
 * s. 104 or Order XLIII Rule 1, in which case…" — a reader who does not,
 * cannot. So the branches get drawn.
 *
 * Links point at page level, not at heading fragments, so that a future
 * re-heading of a chapter can never leave a diagram pointing at nothing.
 *
 * Node shapes:
 *   { kind: 'step', num?, label, note?, to? }
 *   { kind: 'ask',  label, note?, branches: [{ answer, label, note?, to?, tone }] }
 *   tone: 'go' (this is your route) | 'stop' (you are out) | 'warn' | 'next'
 */

export const flows = {
  /* ------------------------------------------------------------------ */
  'life-of-a-suit': {
    kicker: 'The whole thing, once',
    title: 'What actually happens, from the first day to the money in your hand',
    intro:
      'Twelve stages. Almost every provision in the Code belongs to exactly one of them. If you can place a provision on this list, you already half understand it.',
    nodes: [
      {
        kind: 'step',
        label: 'Something goes wrong, and a right is infringed',
        note: 'This is the cause of action. The clock under the Limitation Act starts here, not on the day you decide to sue.'
      },
      {
        kind: 'step',
        label: 'You work out which court can hear it',
        note: 'Three separate questions: is it civil at all, is the value within this court\'s limit, and is this the right place?',
        to: '/sections/sec-9-to-14'
      },
      {
        kind: 'step',
        label: 'You file a plaint and pay court fee',
        note: 'The plaint states who, what happened, why this court, why in time, and what you want.',
        to: '/orders/order-6-7-8'
      },
      {
        kind: 'step',
        label: 'The defendant is served with summons',
        note: 'Everything downstream depends on this being done properly.'
      },
      {
        kind: 'step',
        label: 'Interim protection, if you cannot wait',
        note: 'Injunction, attachment before judgment, receiver — filed alongside or immediately after the plaint.',
        to: '/orders/order-39'
      },
      {
        kind: 'step',
        label: 'The defendant files a written statement',
        note: 'Thirty days, extendable to ninety. Anything not specifically denied is treated as admitted.',
        to: '/orders/order-6-7-8'
      },
      {
        kind: 'step',
        label: 'Documents are disclosed and admitted or denied',
        note: 'Discovery, interrogatories, inspection, and the first hearing.',
        to: '/orders/order-9-to-11'
      },
      {
        kind: 'step',
        label: 'The court frames issues',
        note: 'The dispute is reduced to a numbered list of questions. Nothing outside that list gets decided.',
        to: '/orders/order-12-to-15'
      },
      {
        kind: 'step',
        label: 'Evidence — affidavits, then cross-examination',
        note: 'What you do not put to a witness in cross-examination, you generally cannot argue afterwards.',
        to: '/orders/order-16-to-20'
      },
      {
        kind: 'step',
        label: 'Arguments, then judgment and decree',
        note: 'The judgment carries the reasons; the decree carries the operative command you can enforce.',
        to: '/orders/order-16-to-20'
      },
      {
        kind: 'step',
        label: 'The loser appeals, or seeks review or revision',
        note: 'Which of the three depends entirely on what kind of decision it was.',
        to: '/sections/sec-96-to-115'
      },
      {
        kind: 'step',
        label: 'The winner executes the decree',
        note: 'Attachment, sale, arrest, delivery of possession. Twelve years to do it, and not a day more.',
        to: '/orders/order-21'
      }
    ],
    foot: 'Stages 5, 11 and 12 are optional; the rest happen in every contested suit.'
  },

  /* ------------------------------------------------------------------ */
  'decree-or-order': {
    kicker: 'The distinction everything hangs on',
    title: 'Is this decision a decree, an order, or just a judgment?',
    intro:
      'Get this wrong and you file the wrong challenge in the wrong court and lose on limitation while you find out. Ask the questions in this order.',
    nodes: [
      {
        kind: 'ask',
        label: 'Did it come out of a suit — something begun by a plaint?',
        note: 'Not an execution proceeding, not a writ, not an application under some other Act.',
        branches: [
          { answer: 'No', label: 'It cannot be a decree', note: 'It is an order. Look for a specific right of appeal in the governing statute.', tone: 'stop' },
          { answer: 'Yes', label: 'Keep going', tone: 'next' }
        ]
      },
      {
        kind: 'ask',
        label: 'Does it conclusively determine the rights of the parties on some matter in controversy?',
        note: '"Conclusively" is the operative word. An order refusing an adjournment determines nothing.',
        branches: [
          { answer: 'No', label: 'It is an order', note: 'Appealable only if s. 104 or Order XLIII Rule 1 names it. Otherwise your only route is revision.', tone: 'warn', to: '/sections/sec-96-to-115' },
          { answer: 'Yes', label: 'Keep going', tone: 'next' }
        ]
      },
      {
        kind: 'ask',
        label: 'Is it one of the things the Code expressly includes or excludes?',
        note: 'Included: rejection of a plaint, a determination under s. 47. Excluded: an order of dismissal for default, and any adjudication from which an appeal lies as an appeal from an order.',
        branches: [
          { answer: 'Expressly excluded', label: 'It is an order', tone: 'warn' },
          { answer: 'Otherwise', label: 'It is a decree', note: 'Appeal under s. 96, and execute under Order XXI.', tone: 'go', to: '/sections/sec-96-to-115' }
        ]
      },
      {
        kind: 'step',
        label: 'And the judgment?',
        note: 'The judgment is the reasoning that produced the decree. You appeal the decree, not the judgment — but you read the judgment to find your grounds.'
      }
    ],
    foot: 'A decree may be preliminary or final, and both are separately appealable. Failing to appeal a preliminary decree means its findings bind you at the final decree stage.'
  },

  /* ------------------------------------------------------------------ */
  'can-this-court-hear-it': {
    kicker: 'Before you draft a single line',
    title: 'Can this court hear my case at all?',
    intro:
      'Five gates, and you must pass every one. A failure at gate 1 makes any decree a nullity; failures at gates 2 and 3 are curable and can even be waived.',
    nodes: [
      {
        kind: 'ask',
        label: 'Is the dispute of a civil nature?',
        note: 'A right to property, money, office, status or reputation — as opposed to pure religious doctrine or a question with no civil consequence.',
        branches: [
          { answer: 'No', label: 'No civil suit lies', tone: 'stop' },
          { answer: 'Yes', label: 'Gate 2', tone: 'next' }
        ]
      },
      {
        kind: 'ask',
        label: 'Has some other statute taken this away from the civil court?',
        note: 'Expressly, by an ouster clause; or impliedly, where a statute creates a right and gives its own tribunal and remedy.',
        branches: [
          { answer: 'Yes', label: 'Go to that tribunal', note: 'But the civil court keeps a residual power to see whether the tribunal acted without jurisdiction or ignored fundamental principles of judicial procedure.', tone: 'warn', to: '/sections/sec-9-to-14' },
          { answer: 'No', label: 'Gate 3', tone: 'next' }
        ]
      },
      {
        kind: 'ask',
        label: 'Is the value within this court\'s money limit?',
        note: 'Section 15 sends you to the lowest grade of court competent to try it, on your own valuation.',
        branches: [
          { answer: 'No', label: 'Wrong court', note: 'The plaint is returned under Order VII Rule 10 to be filed in the right one; it is not rejected.', tone: 'warn', to: '/sections/sec-15-to-25' },
          { answer: 'Yes', label: 'Gate 4', tone: 'next' }
        ]
      },
      {
        kind: 'ask',
        label: 'Is this the right place?',
        note: 'Where the property is (ss. 16–18), where the wrong happened (s. 19), or where the defendant lives or the cause of action arose (s. 20).',
        branches: [
          { answer: 'No', label: 'Wrong place', note: 'Objection must be taken at the earliest opportunity or it is waived under s. 21.', tone: 'warn', to: '/sections/sec-15-to-25' },
          { answer: 'Yes', label: 'Gate 5', tone: 'next' }
        ]
      },
      {
        kind: 'ask',
        label: 'Has this already been decided, or is it already being tried?',
        note: 'Section 11 bars what has been finally decided; section 10 stays the trial of what is already pending elsewhere.',
        branches: [
          { answer: 'Already decided', label: 'Barred by res judicata', tone: 'stop', to: '/sections/sec-9-to-14' },
          { answer: 'Already pending', label: 'Trial will be stayed', note: 'Stayed, not dismissed — it revives if the earlier suit ends without deciding the matter.', tone: 'warn', to: '/sections/sec-9-to-14' },
          { answer: 'Neither', label: 'File the plaint', tone: 'go', to: '/orders/order-6-7-8' }
        ]
      }
    ],
    foot: 'A sixth gate sits alongside all of these and is not waivable: limitation. If the period in the Limitation Act has run, s. 3 requires dismissal even if nobody raises it.'
  },

  /* ------------------------------------------------------------------ */
  'plaint-survives': {
    kicker: 'The doorstep test',
    title: 'Will my plaint survive Order VII Rule 11?',
    intro:
      'The court looks only at the plaint and the documents filed with it. The written statement, the defence, and whatever the defendant says happened are all irrelevant at this stage.',
    nodes: [
      {
        kind: 'ask',
        label: 'Read as a whole, does the plaint disclose a cause of action?',
        note: 'Every fact you would have to prove to win must appear somewhere in it.',
        branches: [
          { answer: 'No', label: 'Rejected — Rule 11(a)', tone: 'stop' },
          { answer: 'Yes', label: 'Next ground', tone: 'next' }
        ]
      },
      {
        kind: 'ask',
        label: 'Is the relief correctly valued?',
        branches: [
          { answer: 'No', label: 'Time to correct — Rule 11(b)', note: 'The court fixes a time. Rejection follows only on failure to correct within it.', tone: 'warn' },
          { answer: 'Yes', label: 'Next ground', tone: 'next' }
        ]
      },
      {
        kind: 'ask',
        label: 'Is it sufficiently stamped?',
        branches: [
          { answer: 'No', label: 'Time to supply — Rule 11(c)', note: 'Same pattern: opportunity first, rejection only on default.', tone: 'warn' },
          { answer: 'Yes', label: 'Next ground', tone: 'next' }
        ]
      },
      {
        kind: 'ask',
        label: 'Does the plaint appear from its own statements to be barred by any law?',
        note: 'Limitation on the face of it, res judicata, Order II Rule 2, a statutory ouster, want of the notice a statute requires.',
        branches: [
          { answer: 'Yes', label: 'Rejected — Rule 11(d)', note: 'Rejection is a decree, so it is appealable; but Rule 13 lets you present a fresh plaint on the same cause of action.', tone: 'stop' },
          { answer: 'No', label: 'It survives', tone: 'go' }
        ]
      }
    ],
    foot: 'A plaint cannot be rejected in part. Either the whole plaint goes or none of it does — which is itself an argument worth making when only one relief is arguably barred.'
  },

  /* ------------------------------------------------------------------ */
  'injunction-test': {
    kicker: 'Three gates, not one',
    title: 'Will I get a temporary injunction?',
    intro:
      'The three requirements are cumulative. Satisfying two out of three gets you nothing, and the commonest reason applications fail is that the third is never addressed in the affidavit at all.',
    nodes: [
      {
        kind: 'ask',
        label: 'Prima facie case — is there a serious question to be tried?',
        note: 'Not that you will win. That the case is arguable enough to deserve protection until it is decided.',
        branches: [
          { answer: 'No', label: 'Refused', tone: 'stop' },
          { answer: 'Yes', label: 'Gate 2', tone: 'next' }
        ]
      },
      {
        kind: 'ask',
        label: 'Balance of convenience — who suffers more if the court gets it wrong?',
        note: 'Compare the harm to you from refusal against the harm to the other side from a wrongly granted order.',
        branches: [
          { answer: 'Against you', label: 'Refused', tone: 'stop' },
          { answer: 'In your favour', label: 'Gate 3', tone: 'next' }
        ]
      },
      {
        kind: 'ask',
        label: 'Irreparable injury — can money put it right?',
        note: 'If damages would be an adequate remedy, no injunction. Unique property, goodwill and confidence are the classic cases where they are not.',
        branches: [
          { answer: 'Money is enough', label: 'Refused', note: 'Consider instead security, or attachment before judgment.', tone: 'stop' },
          { answer: 'Money is not enough', label: 'Injunction granted', note: 'Usually on terms — an undertaking as to damages, or security.', tone: 'go', to: '/orders/order-39' }
        ]
      },
      {
        kind: 'step',
        label: 'Asking for it without notice to the other side?',
        note: 'Then the court must record reasons why delay would defeat the object, you must serve the papers at once, and the application must be disposed of within thirty days.',
        to: '/orders/order-39'
      }
    ],
    foot: 'Expecting the other side to seek an ex parte order against you? Lodge a caveat under s. 148A and the court must hear you first.'
  },

  /* ------------------------------------------------------------------ */
  'challenge-route': {
    kicker: 'Choosing your weapon',
    title: 'I lost. What can I actually file?',
    intro:
      'Four routes, and they are not interchangeable. Filing the wrong one usually means discovering the mistake after the right one has become time-barred.',
    nodes: [
      {
        kind: 'ask',
        label: 'Is the decision a decree?',
        branches: [
          { answer: 'Yes, from the trial court', label: 'First appeal under s. 96', note: 'A full rehearing on facts and law. Thirty days to a District Court, ninety to a High Court.', tone: 'go', to: '/sections/sec-96-to-115' },
          { answer: 'Yes, from a first appellate court', label: 'Second appeal under s. 100', note: 'Only on a substantial question of law, which the High Court must formulate.', tone: 'go', to: '/sections/sec-96-to-115' },
          { answer: 'No', label: 'Keep going', tone: 'next' }
        ]
      },
      {
        kind: 'ask',
        label: 'Is the order named in s. 104 or Order XLIII Rule 1?',
        note: 'That list is exhaustive. Refusal of an injunction is there; refusal of an adjournment is not.',
        branches: [
          { answer: 'Yes', label: 'Appeal from order', note: 'Thirty days. No second appeal lies from an order made in such an appeal.', tone: 'go', to: '/sections/sec-96-to-115' },
          { answer: 'No', label: 'Keep going', tone: 'next' }
        ]
      },
      {
        kind: 'ask',
        label: 'Is there an error apparent on the face of the record, or genuinely new material?',
        note: 'New material must be something you could not have produced earlier despite due diligence.',
        branches: [
          { answer: 'Yes', label: 'Review under s. 114 and Order XLVII', note: 'To the same judge who decided it. Thirty days. Not a second chance to argue the law.', tone: 'go', to: '/sections/sec-96-to-115' },
          { answer: 'No', label: 'Keep going', tone: 'next' }
        ]
      },
      {
        kind: 'ask',
        label: 'Did the court below act beyond its jurisdiction, or refuse to exercise it?',
        note: 'Jurisdictional error only. A merely wrong decision, however wrong, is not revisable.',
        branches: [
          { answer: 'Yes', label: 'Revision under s. 115', note: 'And only if the order, decided the other way, would have finally disposed of the proceeding.', tone: 'go', to: '/sections/sec-96-to-115' },
          { answer: 'No', label: 'Nothing under the Code', note: 'What remains is Article 227 of the Constitution before the High Court — supervisory, discretionary, and no substitute for an appeal.', tone: 'stop' }
        ]
      }
    ],
    foot: 'Whichever route you pick, filing it does not by itself stop the decree being executed. Stay must be applied for separately and expressly.'
  },

  /* ------------------------------------------------------------------ */
  'execution-route': {
    kicker: 'You won. Now collect.',
    title: 'How do I actually enforce this decree?',
    intro:
      'You have twelve years from the date the decree becomes enforceable, and that period cannot be extended for any reason. Start by asking what the decree gave you.',
    nodes: [
      {
        kind: 'ask',
        label: 'What does the decree award?',
        branches: [
          { answer: 'Money', label: 'Attach and sell, or garnishee, or arrest', note: 'Arrest needs proof of means plus refusal to pay — not mere inability.', tone: 'go', to: '/orders/order-21' },
          { answer: 'Possession of property', label: 'Warrant for delivery of possession', tone: 'go', to: '/orders/order-21' },
          { answer: 'An injunction or specific act', label: 'Detention, or attachment of property', tone: 'go', to: '/orders/order-21' }
        ]
      },
      {
        kind: 'ask',
        label: 'Which court do you file in?',
        note: 'The court that passed the decree, or a court it has been transferred to.',
        branches: [
          { answer: 'Property is elsewhere', label: 'Ask for transfer of the decree', tone: 'next', to: '/sections/sec-36-to-74' },
          { answer: 'Same jurisdiction', label: 'File the execution application', tone: 'go', to: '/orders/order-21' }
        ]
      },
      {
        kind: 'step',
        label: 'Notice to the judgment-debtor where the Code requires it',
        note: 'Order XXI Rule 22. Where it is required and not given, everything that follows is liable to be set aside.',
        to: '/orders/order-21'
      },
      {
        kind: 'step',
        label: 'Attachment, then proclamation, then sale',
        note: 'Each step has its own timetable and its own grounds of challenge. The deposits after a sale cannot be extended even by consent.',
        to: '/orders/order-21'
      },
      {
        kind: 'step',
        label: 'Confirmation of sale, sale certificate, delivery',
        note: 'Sixty days to apply to set the sale aside; after confirmation the purchaser\'s title relates back to the date of the sale itself.',
        to: '/orders/order-21'
      }
    ],
    foot: 'The judgment-debtor\'s objections all go to the executing court under s. 47 — a separate suit is not permitted. A stranger claiming the property objects under Order XXI Rule 58 instead.'
  },

  /* ------------------------------------------------------------------ */
  'served-what-now': {
    kicker: 'You are the defendant',
    title: 'The summons has arrived. What do you do, in what order?',
    intro:
      'The first thirty days decide most of what is still available to you later. Almost every defence in the Code is lost by silence rather than by argument.',
    nodes: [
      {
        kind: 'step',
        label: 'Diarise the date of service',
        note: 'Thirty days to file the written statement, extendable to ninety for recorded reasons. In a commercial suit, 120 days is an absolute wall.'
      },
      {
        kind: 'step',
        label: 'Read the plaint for a threshold kill',
        note: 'No cause of action, undervalued, insufficiently stamped, or barred on its own face — that is an Order VII Rule 11 application.',
        to: '/orders/order-6-7-8'
      },
      {
        kind: 'step',
        label: 'Check whether the court can hear it at all',
        note: 'Civil nature, value, place, and whether the same matter is already decided or already pending.',
        to: '/sections/sec-9-to-14'
      },
      {
        kind: 'step',
        label: 'Draft the written statement paragraph against paragraph',
        note: 'Deal with the substance of every allegation. An evasive denial is treated as an admission, and an admission can end the case under Order XII Rule 6.',
        to: '/orders/order-6-7-8'
      },
      {
        kind: 'step',
        label: 'Decide whether to strike back in the same suit',
        note: 'Set-off for an ascertained sum; counter-claim for anything else that accrued before your defence is delivered.',
        to: '/orders/order-6-7-8'
      },
      {
        kind: 'step',
        label: 'If an injunction has been granted without hearing you',
        note: 'Apply under Order XXXIX Rule 4 to vary or vacate it, and hold the applicant to the thirty-day rule in Rule 3A.',
        to: '/orders/order-39'
      },
      {
        kind: 'step',
        label: 'If a decree was already passed in your absence',
        note: 'Thirty days from knowledge to apply under Order IX Rule 13, showing that summons was not duly served or that you were prevented by sufficient cause.',
        to: '/orders/order-9-to-11'
      }
    ],
    foot: 'Never let the written statement date pass in the hope of arguing the point later. The right to file it can be forfeited, and courts will not restore it lightly.'
  }
}
