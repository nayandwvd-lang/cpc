/**
 * Retrieval-practice questions, one set per chapter.
 *
 * Rules I set myself when writing these:
 *  - No definitional trivia. Every question is one a viva examiner or an
 *    opponent would actually ask, and most of them turn on a distinction
 *    rather than on a fact.
 *  - The answer must be a sentence a reader could say out loud in court, not
 *    a paragraph of hedging.
 *  - At least one question per set attacks the commonest misconception in
 *    that chapter, because unlearning is harder than learning.
 */

export const quizzes = {
  /* ---------------------------------------------------------------- */
  start: [
    {
      q: 'The Code has Sections and it has Orders. What is the practical difference between them?',
      a: 'Sections are the body of the Act and only Parliament can change them; Orders and Rules sit in the First Schedule and High Courts can alter them for their own State. That is why you must always check the local amendment before relying on a Rule, but rarely before relying on a Section.',
      cite: 'ss. 121–128',
      to: '/start'
    },
    {
      q: 'Decode "O. VII R. 11(d)" without looking.',
      a: 'Order VII, Rule 11, clause (d) of the First Schedule — the ground that the plaint appears from its own statements to be barred by law.',
      to: '/orders/order-6-7-8'
    },
    {
      q: 'A judge dismisses your application for an adjournment. Is that a decree?',
      a: 'No. A decree conclusively determines the rights of the parties on a matter in controversy; refusing an adjournment determines nothing. It is an order, and unless it is named in s. 104 or Order XLIII Rule 1 no appeal lies from it at all.',
      cite: 's. 2(2), s. 2(14)',
      to: '/start'
    },
    {
      q: 'What does the bench strength printed next to a case tell you?',
      a: 'How strongly it binds. A larger bench of the Supreme Court prevails over a smaller one, so a Constitution Bench decision cannot be answered by citing a two-judge bench that says the opposite.',
      cite: 'Article 141, Constitution of India'
    },
    {
      q: 'Your client tells you about a wrong that happened four years ago. What is the first thing you check, and why is it not the merits?',
      a: 'Limitation. Section 3 of the Limitation Act requires the court to dismiss a time-barred suit even if the defendant never raises the point, and for a suit — unlike an appeal or an application — delay cannot be condoned under s. 5.',
      cite: 'Limitation Act, 1963, ss. 3 and 5'
    },
    {
      q: 'Same person, three names: plaintiff, decree-holder, appellant. When does each apply?',
      a: 'Plaintiff while the suit is on foot; decree-holder once they have won and move to enforce; appellant if they are the one challenging the result. The label follows the stage, not the person — and a defendant who wins a counter-claim is a decree-holder too.'
    }
  ],

  /* ---------------------------------------------------------------- */
  'sec-9-14': [
    {
      q: 'A statute says "no civil court shall have jurisdiction". Is that the end of the argument?',
      a: 'No. Even where jurisdiction is excluded, the civil court retains power to examine whether the statutory authority acted without jurisdiction, failed to comply with fundamental principles of judicial procedure, or acted in disregard of the statute. That residue must be specifically pleaded.',
      cite: 'Dhulabhai v. State of M.P., AIR 1969 SC 78 (Constitution Bench)',
      to: '/sections/sec-9-to-14'
    },
    {
      q: 'Section 10 and section 11 both begin "No Court shall". What is the difference in what they forbid?',
      a: 'Section 10 forbids the trial of a suit while an earlier suit on the same matter is pending — the later suit is stayed and revives if the earlier one ends without deciding. Section 11 forbids trial altogether because the matter has already been finally decided. Stay versus extinguishment.',
      to: '/sections/sec-9-to-14'
    },
    {
      q: 'You had a defence available in the first suit and did not take it. Can you take it in the second?',
      a: 'No. Explanation IV to s. 11 treats a ground that might and ought to have been raised as if it had been raised and decided against you. That is constructive res judicata, and it is why a defence must be pleaded completely the first time.',
      to: '/sections/sec-9-to-14'
    },
    {
      q: 'Who bears the burden of showing that the civil court cannot hear the case?',
      a: 'The party asserting the bar. Ouster of civil jurisdiction is never presumed; it must be either explicitly expressed or clearly implied, and the plaintiff has an inherent right to bring a suit of a civil nature until the contrary is shown.',
      cite: 'Secretary of State v. Mask & Co., AIR 1940 PC 105; Ganga Bai v. Vijay Kumar, (1974) 2 SCC 393'
    },
    {
      q: 'A dispute turns entirely on which family is entitled under religious custom to perform a temple office. Civil suit or not?',
      a: 'Civil. Explanation I to s. 9 preserves jurisdiction where the right to property or to an office is contested, even though its proof requires the court to decide questions of religious rites. The test is the relief claimed, not the questions incidentally decided.'
    },
    {
      q: 'A foreign court gives judgment against your client. On what grounds can you resist it here?',
      a: 'Section 13 makes a foreign judgment conclusive except on six grounds — not pronounced by a court of competent jurisdiction, not on the merits, founded on an incorrect view of international law or a refusal to recognise Indian law where applicable, obtained in proceedings opposed to natural justice, obtained by fraud, or sustaining a claim founded on a breach of Indian law.',
      to: '/sections/sec-9-to-14'
    }
  ],

  /* ---------------------------------------------------------------- */
  'sec-15-25': [
    {
      q: 'Two courts both have territorial jurisdiction. Who chooses?',
      a: 'The plaintiff. Where part of the cause of action arose in one place and the defendant resides in another, both courts are competent under s. 20 and the plaintiff may institute in either.',
      to: '/sections/sec-15-to-25'
    },
    {
      q: 'The defendant argues at the appeal stage that the suit was filed in the wrong district. Will it work?',
      a: 'Almost never. Section 21 bars an objection to place of suing unless it was taken in the court of first instance at the earliest possible opportunity, and unless there has been a consequent failure of justice. Territorial and pecuniary defects are waivable; want of subject-matter jurisdiction is not.',
      to: '/sections/sec-15-to-25'
    },
    {
      q: 'Why does section 15 send you to the lowest court competent to try the suit?',
      a: 'To distribute work sensibly and stop higher courts being clogged with small claims. It is a rule of procedure, not of jurisdiction, so a decree from a higher court is not a nullity merely because a lower one could have tried it.'
    },
    {
      q: 'Your client fears the trial court in that district is hostile. What can you actually do?',
      a: 'Apply under s. 24 to the District Court or High Court for transfer, or under s. 25 to the Supreme Court where the transfer is from one State to another. The ground must be more than apprehension — you must show that justice is likely to fail.',
      to: '/sections/sec-15-to-25'
    },
    {
      q: 'A plaint is undervalued to bring it within a Munsif\'s court. What is the correct application?',
      a: 'Order VII Rule 11(b). But note the court must first fix a time to correct the valuation; rejection follows only on failure to correct within that time.',
      to: '/orders/order-6-7-8'
    },
    {
      q: 'Immovable property straddles the jurisdiction of two courts. Where do you sue?',
      a: 'Section 17 permits the suit in any court within whose jurisdiction any portion of the property is situate, provided that court is competent as to the value of the whole claim.'
    }
  ],

  /* ---------------------------------------------------------------- */
  'sec-36-74': [
    {
      q: 'The decree you are executing is plainly wrong in law. Can the executing court fix it?',
      a: 'No. The executing court cannot go behind the decree; it must take it as it stands and enforce it. The only exception is where the decree is a nullity for want of inherent jurisdiction, which can be raised whenever the decree is relied on.',
      to: '/sections/sec-36-to-74'
    },
    {
      q: 'The judgment-debtor says he has already paid. Does he file a suit?',
      a: 'No. Section 47 requires all questions between the parties relating to execution, discharge or satisfaction of the decree to be decided by the executing court, and expressly not by a separate suit.',
      to: '/sections/sec-36-to-74'
    },
    {
      q: 'Can a judgment-debtor be arrested simply because he has not paid?',
      a: 'No. The proviso to s. 51 requires the court to be satisfied that he has or has had the means to pay and refuses or neglects, or is about to abscond, or has dishonestly transferred property. Mere inability to pay is not contempt of the decree, and imprisoning for poverty alone is impermissible.',
      cite: 'Jolly George Verghese v. Bank of Cochin, (1980) 2 SCC 360'
    },
    {
      q: 'Name three things that cannot be attached however large the decree.',
      a: 'Section 60 exempts, among others, necessary wearing apparel, cooking vessels and beds; the tools of an artisan; and, for an agriculturist, implements of husbandry and such cattle and seed as are necessary to earn a livelihood.',
      to: '/sections/sec-36-to-74'
    },
    {
      q: 'Three decree-holders are chasing the same debtor and there is not enough to go round. Who gets paid?',
      a: 'Under s. 73 the assets are distributed rateably among those decree-holders who applied to the same court for execution against the same judgment-debtor before the assets were received. It is proportion, not first past the post — and secured creditors stand outside the scheme.',
      to: '/sections/sec-36-to-74'
    },
    {
      q: 'The judgment-debtor sells the attached land to a stranger. Is the sale good?',
      a: 'Section 64 makes a private transfer after attachment void as against all claims enforceable under the attachment — but only to that extent, and s. 64(2) saves a transfer made in pursuance of a registered contract entered into before the attachment.'
    }
  ],

  /* ---------------------------------------------------------------- */
  'sec-96-115': [
    {
      q: 'What is the single question that decides whether a second appeal is even competent?',
      a: 'Whether the case involves a substantial question of law. Section 100 requires the High Court to formulate it, and the appeal is heard only on that question. A quarrel with concurrent findings of fact is not a substantial question of law merely because another view was possible.',
      to: '/sections/sec-96-to-115'
    },
    {
      q: 'An order is not listed in s. 104 or Order XLIII Rule 1. What is left to you?',
      a: 'Revision under s. 115 if the court below exercised a jurisdiction it did not have, failed to exercise one it did, or acted illegally or with material irregularity — and only if the order, decided the other way, would have finally disposed of the proceeding. Otherwise, Article 227 of the Constitution.',
      to: '/sections/sec-96-to-115'
    },
    {
      q: 'You think the judge simply took the wrong view of the law. Review or appeal?',
      a: 'Appeal. Review under s. 114 lies for an error apparent on the face of the record, for new material that could not have been produced with due diligence, or for other sufficient reason. A merely erroneous view of law is corrected in appeal, not by asking the same judge to think again.',
      to: '/sections/sec-96-to-115'
    },
    {
      q: 'Can you appeal a decree passed with your consent?',
      a: 'No. Section 96(3) bars an appeal from a decree passed with the consent of the parties. The challenge, if any, is that there was no valid compromise at all, and it goes to the same court under Order XXIII Rule 3.',
      to: '/sections/sec-96-to-115'
    },
    {
      q: 'Does filing an appeal stop the decree being executed?',
      a: 'No. An appeal does not operate as a stay by itself. Stay must be applied for and granted separately, and the appellate court will usually impose terms such as deposit or security.'
    },
    {
      q: 'What is the first appellate court required to do that the second appellate court is not?',
      a: 'Re-examine the evidence and record its own findings of fact with reasons. A first appeal is a rehearing on fact and law; a first appellate judgment that does not engage with the evidence is liable to be set aside for that reason alone.',
      to: '/sections/sec-96-to-115'
    }
  ],

  /* ---------------------------------------------------------------- */
  'sec-144-148a-151': [
    {
      q: 'You obeyed a decree, and it has now been reversed on appeal. What is your remedy?',
      a: 'Restitution under s. 144, applied for to the court of first instance. The principle is that no party shall suffer by an act of the court, and the court must place you in the position you would have occupied but for the decree since varied.',
      to: '/sections/sec-144-148a-151'
    },
    {
      q: 'Why is a caveat filed before anything has happened?',
      a: 'Because s. 148A requires the court to serve notice of any application on the caveator, which prevents an order being made against you without your being heard. It lasts ninety days and is the standard defence against an anticipated ex parte injunction or stay.',
      to: '/sections/sec-144-148a-151'
    },
    {
      q: 'The Code gives no remedy for the situation you are in. Can s. 151 supply one?',
      a: 'Sometimes — but s. 151 only saves the inherent power to make orders necessary for the ends of justice or to prevent abuse of process. Where the Code provides a specific remedy, inherent power cannot be used to bypass it or to sidestep a bar of limitation.',
      to: '/sections/sec-144-148a-151'
    },
    {
      q: 'What is the limitation for a restitution application, and why is it that long?',
      a: 'Twelve years under Article 136, because an application under s. 144 is treated as an application for execution of a decree rather than as an ordinary application.'
    },
    {
      q: 'Is s. 151 a source of jurisdiction?',
      a: 'No. It is a saving of power the court already possesses, not a grant of new power. It cannot confer jurisdiction that s. 9 or any other provision denies.'
    }
  ],

  /* ---------------------------------------------------------------- */
  'order-1-2': [
    {
      q: 'What makes a party "necessary" as opposed to merely "proper"?',
      a: 'Two things together: there must be a right to relief against that person in respect of the matter, and the court must be unable to pass an effective decree in their absence. A proper party merely helps the court decide completely; their absence does not sink the suit.',
      to: '/orders/order-1-and-2'
    },
    {
      q: 'A necessary party was left out. Is the suit saved by Order I Rule 9?',
      a: 'No. Rule 9 saves a suit from misjoinder and non-joinder generally, but its proviso excepts the non-joinder of a necessary party, and no effective decree can be made without them.',
      to: '/orders/order-1-and-2'
    },
    {
      q: 'You sued for arrears of rent and later want to sue for possession on the same default. Can you?',
      a: 'No. Order II Rule 2 required you to include the whole of the claim arising from that cause of action. Relief omitted without the court\'s leave is relief lost. But the bar must be pleaded and proved by producing the earlier plaint — it is never presumed.',
      to: '/orders/order-1-and-2'
    },
    {
      q: 'A defendant is added three years into the suit. From what date does the suit run against him?',
      a: 'From the date of his impleadment. Order I Rule 10(5) deems the proceeding to have begun against a newly added defendant on that date, which can be fatal if limitation has by then expired.',
      to: '/orders/order-1-and-2'
    },
    {
      q: 'Can a stranger claiming independent title force his way into a suit for specific performance?',
      a: 'Ordinarily no. The plaintiff is dominus litis and the court will not compel him to fight someone against whom he claims no relief; a person setting up an independent title is generally neither a necessary nor a proper party to that contract dispute.',
      cite: 'Kasturi v. Iyyamperumal, (2005) 6 SCC 733'
    }
  ],

  /* ---------------------------------------------------------------- */
  'order-6-7-8': [
    {
      q: 'What is the difference between a material fact and evidence, and why does it matter?',
      a: 'A material fact is one you must prove to win; evidence is how you will prove it. Order VI Rule 2 requires the first and forbids the second. Pleading evidence bloats the plaint and, worse, ties you to a route of proof you may want to change.',
      to: '/orders/order-6-7-8'
    },
    {
      q: 'The trial has begun and you now want to amend. What must you show?',
      a: 'That in spite of due diligence you could not have raised the matter before the trial commenced. That is the proviso to Order VI Rule 17, and it is a threshold, not a factor to be weighed.',
      to: '/orders/order-6-7-8'
    },
    {
      q: 'When deciding an Order VII Rule 11 application, what does the court read?',
      a: 'The plaint and the documents filed with it — nothing else. The written statement, the defence and the merits are irrelevant. That is both the strength and the limit of the remedy.',
      to: '/orders/order-6-7-8'
    },
    {
      q: 'Rejection under Rule 11 or return under Rule 10 — which would you rather suffer, and why?',
      a: 'Return. The same plaint is re-presented in the proper court and s. 14 of the Limitation Act excludes the time spent in the wrong one. Rejection is a decree, appealable, and the court fee is generally not refunded — though Rule 13 does preserve the right to file a fresh plaint.',
      to: '/orders/order-6-7-8'
    },
    {
      q: 'Set-off or counter-claim: which one can be for an unascertained sum, and which survives withdrawal of the suit?',
      a: 'Legal set-off must be an ascertained sum; equitable set-off need not be but must arise from the same transaction; a counter-claim need be neither ascertained nor connected. A counter-claim is treated as a plaint and survives even if the plaintiff withdraws the suit.',
      to: '/orders/order-6-7-8'
    },
    {
      q: 'Your written statement says only "the contents of paragraph 7 are not admitted". What have you just done?',
      a: 'Risked conceding paragraph 7. Order VIII Rule 4 requires a denial to answer the point of substance, and Rule 5 treats what is not specifically denied as admitted — which can invite judgment on admissions under Order XII Rule 6.',
      to: '/orders/order-6-7-8'
    }
  ],

  /* ---------------------------------------------------------------- */
  'order-9-11': [
    {
      q: 'An ex parte decree has been passed against your client. What are the two grounds and the period?',
      a: 'Thirty days from the date of the decree, or from knowledge of it where summons was not duly served, to apply under Order IX Rule 13 on the ground that summons was not duly served, or that the defendant was prevented by sufficient cause from appearing.',
      to: '/orders/order-9-to-11'
    },
    {
      q: 'Is an ex parte decree a lesser decree?',
      a: 'No. It is a decree in the full sense — appealable and executable. "Ex parte" describes only the absence of one side, not any weakness in what was decided.',
      to: '/orders/order-9-to-11'
    },
    {
      q: 'What can interrogatories not be used for?',
      a: 'They may go to facts in issue but not to the evidence by which the other side will prove its case, and not to your opponent\'s case as such. They are for pinning a party to a version, not for a fishing expedition.',
      to: '/orders/order-9-to-11'
    },
    {
      q: 'Why does the court examine the parties under Order X before the trial?',
      a: 'To ascertain from each party whether he admits or denies the allegations of fact made by the other, so that admissions can be recorded and issues narrowed before evidence is led. It is the court\'s own instrument for cutting away the parts of the case that are not really in dispute.',
      to: '/orders/order-9-to-11'
    },
    {
      q: 'What is the test for ordering discovery?',
      a: 'Whether the discovery relates to a matter in question in the suit, and whether it is necessary either for disposing fairly of the suit or for saving costs. Necessity, not curiosity.'
    }
  ],

  /* ---------------------------------------------------------------- */
  'order-12-15': [
    {
      q: 'What quality must an admission have before judgment can be given on it?',
      a: 'It must be clear, unambiguous and unconditional. Where an admission is qualified or accompanied by a defence, Order XII Rule 6 is not the vehicle and the matter must go to trial.',
      to: '/orders/order-12-to-15'
    },
    {
      q: 'When may a court try an issue as a preliminary issue?',
      a: 'Only where it is an issue of law relating to the jurisdiction of the court or a bar to the suit created by a statute, and it can be decided on admitted facts. Trying a mixed question of law and fact as a preliminary issue is an error.',
      to: '/orders/order-12-to-15'
    },
    {
      q: 'What exactly is an "issue"?',
      a: 'A material proposition of fact or law affirmed by one party and denied by the other. Order XIV Rule 1 converts the pleadings into that finite list, and Order XX Rule 5 obliges the court to state its finding on each one separately, with reasons.',
      to: '/orders/order-12-to-15'
    },
    {
      q: 'A document not produced with the plaint is tendered at trial. What is the consequence?',
      a: 'Order VII Rule 14 and Order XIII require documents in a party\'s possession to be produced at the appropriate stage; documents not so produced cannot be received in evidence without the court\'s leave, and leave requires an explanation for the omission.',
      to: '/orders/order-12-to-15'
    },
    {
      q: 'Both sides agree on every fact and disagree only on the law. What can the court do at the first hearing?',
      a: 'Pronounce judgment at once under Order XV Rule 1, since no issue of fact arises. That is the whole purpose of Order XV — to stop a case that needs no trial from getting one.'
    }
  ],

  /* ---------------------------------------------------------------- */
  'order-16-20': [
    {
      q: 'A witness gives evidence damaging to your client and you ask him nothing about it. What have you conceded?',
      a: 'Effectively, the point. What is not put to a witness in cross-examination cannot ordinarily be argued afterwards, and the court is entitled to treat the unchallenged evidence as accepted.',
      to: '/orders/order-16-to-20'
    },
    {
      q: 'Examination-in-chief is now on affidavit. What does that change in practice?',
      a: 'It front-loads the case: the whole of your witness\'s evidence is committed to writing before the other side responds, so cross-examination becomes the only live event and any inconsistency in the affidavit is permanent.',
      to: '/orders/order-16-to-20'
    },
    {
      q: 'What must a judgment contain, beyond the result?',
      a: 'A concise statement of the case, the points for determination, the decision on each point, and the reasons for that decision. Order XX Rule 4(2). A judgment that announces conclusions without reasons is liable to be set aside.',
      to: '/orders/order-16-to-20'
    },
    {
      q: 'What is the difference between a preliminary and a final decree, and what is the trap?',
      a: 'A preliminary decree declares the rights — shares in a partition, the amount due on a mortgage — and the final decree works out the consequences. The trap is that a preliminary decree is separately appealable, and if you do not appeal it, its findings bind you at the final decree stage.',
      to: '/orders/order-16-to-20'
    },
    {
      q: 'Can the court grant possession now and decide mesne profits later?',
      a: 'Yes. Order XX Rule 12 expressly permits a decree for possession with a direction for an inquiry into mesne profits, so the plaintiff is not kept out of the property while the accounting is done.'
    },
    {
      q: 'A party keeps seeking adjournments. What does the Code allow you to say?',
      a: 'That Order XVII permits not more than three adjournments to a party during the hearing of the suit, that costs must be imposed, and that where a party is absent without cause the court may proceed to dispose of the suit.',
      to: '/orders/order-16-to-20'
    }
  ],

  /* ---------------------------------------------------------------- */
  'order-21': [
    {
      q: 'How long do you have to execute a decree, and can that be extended?',
      a: 'Twelve years from the date the decree becomes enforceable, under Article 136 of the Limitation Act. It cannot be extended — s. 5 does not apply, so no amount of sufficient cause will revive it.',
      to: '/orders/order-21'
    },
    {
      q: 'What is the difference between an objection under s. 47 and one under Order XXI Rule 58?',
      a: 'Section 47 is for the parties to the suit and their representatives, and covers execution, discharge and satisfaction. Rule 58 is for a stranger claiming that the attached property is his. Filing under the wrong one is a standard and expensive mistake.',
      to: '/orders/order-21'
    },
    {
      q: 'The auction purchaser has paid the deposit late, with everyone\'s consent. Is that all right?',
      a: 'No. The deposits under Order XXI Rules 84 to 86 are mandatory and cannot be extended, not even by consent of the parties or by the court. Default means the sale falls and the deposit may be forfeited.',
      cite: 'Manilal Mohanlal Shah, AIR 1954 SC 349',
      to: '/orders/order-21'
    },
    {
      q: 'How long to apply to set aside a court sale, and on what grounds?',
      a: 'Sixty days under Article 127. The grounds are deposit of the decretal amount under Rule 89, material irregularity or fraud in publishing or conducting the sale causing substantial injury under Rule 90, and want of saleable interest under Rule 91.',
      to: '/orders/order-21'
    },
    {
      q: 'A stranger in possession resists delivery. Does the decree-holder file a fresh suit?',
      a: 'No. Rules 97 to 106 are a self-contained code: the court adjudicates the resistance itself, Rule 101 gives it jurisdiction to decide all questions including title, and Rule 103 makes the resulting order a decree.',
      to: '/orders/order-21'
    },
    {
      q: 'Once a sale is confirmed, from what date does the purchaser\'s title run?',
      a: 'From the date of the sale itself, not the date of confirmation — s. 65 makes the title relate back. That matters whenever the judgment-debtor has dealt with the property in the interval.',
      to: '/orders/order-21'
    }
  ],

  /* ---------------------------------------------------------------- */
  'order-39': [
    {
      q: 'You have a strong prima facie case and the balance of convenience is with you, but damages would fully compensate. Do you get the injunction?',
      a: 'No. The three requirements are cumulative. If money is an adequate remedy the injury is not irreparable, and the application fails however strong the first two limbs are.',
      to: '/orders/order-39'
    },
    {
      q: 'What must the court do before granting an injunction without notice to the other side?',
      a: 'Record its reasons for the opinion that the object of granting the injunction would be defeated by delay, and require the applicant to serve the papers immediately. Rule 3A then requires the application to be finally disposed of within thirty days.',
      to: '/orders/order-39'
    },
    {
      q: 'The other side has disobeyed the injunction. What is the remedy inside the CPC?',
      a: 'Order XXXIX Rule 2A — attachment of property and detention in civil prison for up to three months. It is a remedy in the same court, and it does not require you to begin separate contempt proceedings.',
      to: '/orders/order-39'
    },
    {
      q: 'Does "prima facie case" mean you are likely to win?',
      a: 'No, and treating it as if it did is the commonest error in argument. It means a serious question to be tried and a probability of entitlement to relief — a threshold for protection pending trial, not a prediction of the result.',
      to: '/orders/order-39'
    },
    {
      q: 'Why do practitioners often prefer status quo to a detailed injunction?',
      a: 'Because it is easier to obtain and easier to enforce. Its weakness is ambiguity, which is why you should always ask the court to record the date and the precise state of affairs being frozen.'
    }
  ]
}
