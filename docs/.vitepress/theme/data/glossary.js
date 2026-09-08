/**
 * The glossary is the spine of the beginner layer.
 *
 * One entry, three audiences:
 *   short  — one sentence, no jargon. This is what a tooltip shows, so it has
 *            to survive being read in two seconds by someone who has never
 *            opened the Code. No term of art may appear here undefined.
 *   long   — the paragraph a reader gets on /glossary when the one-liner was
 *            not enough. Here it is fair to name related concepts, because
 *            they are one click away.
 *   see    — where in the guide the concept is actually worked out.
 *   also   — sibling terms worth reading in the same sitting.
 *
 * Ordering inside the file is thematic, not alphabetical, because that is how
 * the entries were written and checked against each other. The /glossary page
 * sorts them itself.
 */

export const glossary = {
  /* ---------------------------------------------------------------- */
  /* The frame: what the Code is and how it is cited                   */
  /* ---------------------------------------------------------------- */

  cpc: {
    term: 'CPC / the Code',
    short:
      'The Code of Civil Procedure, 1908 — the rulebook for how a civil case is run from filing to recovery of money.',
    long: 'The CPC does not tell you who wins. It tells you how the fight is conducted: which court, what you must file, when the other side must answer, how evidence is taken, how a judgment is enforced and how it is appealed. Substantive law (contract, property, tort) decides the right; the CPC decides the route to enforcing it.',
    see: '/start#what-the-cpc-is',
    also: ['section', 'order', 'rule']
  },

  section: {
    term: 'Section',
    short:
      'A numbered provision in the main body of the Code. Only Parliament can change one.',
    long: 'Sections run from 1 to 158 and carry the skeleton — jurisdiction, res judicata, execution, appeals, inherent powers. Because amending a Section needs Parliament, Sections state principle and leave the mechanics to the Orders. Cited as "s. 9" or "Section 9".',
    see: '/start#two-halves',
    also: ['order', 'rule', 'first-schedule']
  },

  order: {
    term: 'Order (First Schedule)',
    short:
      'A numbered chapter of procedural machinery in the Schedule at the back of the Code — Order I, Order VII, Order XXI and so on.',
    long: 'Orders are numbered in Roman numerals (I to LI) and each is divided into Rules. They contain the working detail: how a plaint is drawn, what gets it rejected, how an injunction is asked for, how a decree is executed. Critically, High Courts can amend Orders and Rules for their own State under ss. 122–128, which is why you must always check the local amendment before relying on a Rule.',
    see: '/start#two-halves',
    also: ['rule', 'section', 'first-schedule']
  },

  rule: {
    term: 'Rule',
    short: 'A numbered sub-provision inside an Order. "Order VII Rule 11" is Rule 11 of Order VII.',
    long: 'Rules are where the operative commands live. A Rule may itself have sub-rules — Order VII Rule 11(d) is clause (d) of Rule 11 of Order VII, the ground that a plaint is barred by law.',
    see: '/start#reading-a-citation',
    also: ['order']
  },

  'first-schedule': {
    term: 'First Schedule',
    short: 'The part of the Code, printed after the Sections, that contains all the Orders and Rules.',
    long: 'When someone says "the Schedule", they mean this. The distinction matters because s. 122 lets High Courts annul, alter or add to the Rules in the First Schedule, but not to the Sections.',
    see: '/start#two-halves',
    also: ['order', 'section']
  },

  'order-vs-decree': {
    term: 'Order (of a court)',
    short:
      'Any formal decision of a court that is not a decree — confusingly, the same English word as an Order of the First Schedule.',
    long: 'Section 2(14) defines an "order" as the formal expression of any decision of a civil court which is not a decree. Refusing an injunction is an order; finally deciding who owns the land is a decree. Context tells you which sense is meant: "Order XXXIX" is a chapter of the Schedule, "the order dated 4 March" is a judicial decision.',
    see: '/start#decree-order-judgment',
    also: ['decree', 'judgment']
  },

  air: {
    term: 'AIR',
    short: 'All India Reporter — a law report series. "AIR 1969 SC 78" means page 78 of the 1969 Supreme Court volume.',
    long: 'The oldest widely used Indian series. The format is AIR, year, court abbreviation, page: AIR 1969 SC 78 is a Supreme Court decision reported at page 78 of the 1969 volume. AIR 1940 PC 105 is a Privy Council decision.',
    see: '/start#reading-a-citation',
    also: ['scc']
  },

  scc: {
    term: 'SCC',
    short:
      'Supreme Court Cases — the standard modern report. "(2021) 6 SCC 418" is volume 6 of 2021, page 418.',
    long: 'Round brackets around the year mean the year is not needed to find the volume — you need the volume number too. Square brackets (rare in India, common in England) mean the year is essential. SCC is the citation a court expects for post-1969 Supreme Court authority.',
    see: '/start#reading-a-citation',
    also: ['air']
  },

  'bench-strength': {
    term: 'Bench strength',
    short:
      'How many judges decided the case. A larger bench binds a smaller one, so the number tells you how strong the authority is.',
    long: 'Under Article 141 of the Constitution, Supreme Court law binds all courts. Within the Supreme Court, a Constitution Bench (five or more) binds a three-judge bench, which binds a two-judge bench. When two decisions conflict, the larger bench prevails; where both are equal, the earlier and the more considered generally prevails. That is why every case in this guide states its strength.',
    see: '/start#why-bench-strength',
    also: ['ratio', 'obiter']
  },

  ratio: {
    term: 'Ratio decidendi',
    short: 'The rule of law a case actually decided — the part that binds later courts.',
    long: 'Literally "the reason for deciding". It is the legal proposition necessary to the result on the facts. Everything else the judges say is persuasive only. When you cite a case, you must be able to state its ratio in one sentence; this guide gives you that sentence for every authority.',
    also: ['obiter', 'bench-strength', 'precedent']
  },

  obiter: {
    term: 'Obiter dicta',
    short: 'Remarks in a judgment that were not necessary to the decision. Persuasive, not binding.',
    long: 'Literally "things said by the way". Supreme Court obiter carries great weight in practice and is routinely followed, but an opponent can legitimately say "that was obiter" and a court may decline to apply it.',
    also: ['ratio']
  },

  precedent: {
    term: 'Precedent',
    short: 'A decided case used as authority for the rule it laid down.',
    long: 'Indian courts follow stare decisis: a decision of a higher court binds every court below it in the same hierarchy. A High Court decision binds courts in that State only; a Supreme Court decision binds everyone.',
    also: ['ratio', 'bench-strength']
  },

  /* ---------------------------------------------------------------- */
  /* The cast                                                          */
  /* ---------------------------------------------------------------- */

  plaintiff: {
    term: 'Plaintiff',
    short: 'The person who starts a civil suit by filing a plaint.',
    long: 'In appeals the same person is called the appellant or respondent depending on who appealed; in execution, if they won, they become the decree-holder. The label follows the stage, not the person.',
    see: '/start#the-cast',
    also: ['defendant', 'decree-holder']
  },

  defendant: {
    term: 'Defendant',
    short: 'The person sued — the one who must answer the plaint.',
    long: 'A defendant answers by filing a written statement, and may strike back in the same suit by pleading a set-off or filing a counter-claim.',
    see: '/start#the-cast',
    also: ['plaintiff', 'written-statement', 'counter-claim']
  },

  'decree-holder': {
    term: 'Decree-holder',
    short: 'The person in whose favour a decree was passed, once they move to enforce it.',
    long: 'Defined in s. 2(3). The moment a suit ends in a decree and the winner files an execution application, the vocabulary changes: plaintiff becomes decree-holder, defendant becomes judgment-debtor. Note that a decree-holder need not have been the plaintiff — a defendant who wins a counter-claim is also a decree-holder.',
    see: '/orders/order-21',
    also: ['judgment-debtor', 'execution', 'decree']
  },

  'judgment-debtor': {
    term: 'Judgment-debtor',
    short: 'The person against whom a decree is to be enforced.',
    long: 'Defined in s. 2(10). The judgment-debtor may be arrested, may have property attached and sold, or may have a receiver appointed — but only within the limits the Code sets, notably the protections in ss. 56, 58 and 60.',
    see: '/orders/order-21',
    also: ['decree-holder', 'execution', 'attachment']
  },

  pleader: {
    term: 'Pleader',
    short: 'Any person entitled to appear and plead for another in court — in practice, the advocate.',
    long: 'Section 2(15). The Code uses "pleader" rather than "advocate" because it predates the Advocates Act, 1961. Several Rules impose duties directly on the pleader, notably Order XXII Rule 10A (duty to inform the court of a party\'s death).',
    also: ['vakalatnama']
  },

  vakalatnama: {
    term: 'Vakalatnama',
    short: 'The document by which a party authorises an advocate to appear for them.',
    long: 'It must be filed before the advocate can act. Without it on record, an appearance is irregular and steps taken can be challenged.',
    also: ['pleader']
  },

  'legal-representative': {
    term: 'Legal representative',
    short: 'The person who in law represents the estate of someone who has died.',
    long: 'Section 2(11) defines it widely: anyone who intermeddles with the estate also qualifies. It matters because when a party dies the suit does not automatically end — it continues against the legal representative, provided they are brought on record in time.',
    also: ['abatement']
  },

  /* ---------------------------------------------------------------- */
  /* The documents                                                     */
  /* ---------------------------------------------------------------- */

  suit: {
    term: 'Suit',
    short: 'A civil case started by presenting a plaint — the ordinary way of asking a civil court for relief.',
    long: 'The Code does not define "suit", but it means a proceeding begun by plaint, as distinct from an appeal, a revision, or an application. Section 26 and Order IV Rule 1 require every suit to be instituted by presenting a plaint in duplicate.',
    also: ['plaint', 'cause-of-action']
  },

  plaint: {
    term: 'Plaint',
    short:
      'The document that starts a suit. It states who you are, who you are suing, what happened, and what you want the court to do.',
    long: 'Order VII Rule 1 lists its compulsory contents; Rule 11 lists the six grounds on which it will be thrown out at the threshold. A plaint has three working parts — the description of parties, the narration of the cause of action with the facts showing jurisdiction and limitation, and the prayer.',
    see: '/orders/order-6-7-8',
    also: ['written-statement', 'prayer', 'cause-of-action', 'rejection-of-plaint']
  },

  'written-statement': {
    term: 'Written statement',
    short: "The defendant's written reply to the plaint.",
    long: 'Order VIII Rule 1 requires it within thirty days of service, extendable up to ninety days for recorded reasons — and in commercial suits governed by the Commercial Courts Act, 2015 the outer limit of 120 days is absolute. It must deal with each allegation specifically: Order VIII Rules 3 to 5 mean that anything not specifically denied is taken as admitted.',
    see: '/orders/order-6-7-8',
    also: ['plaint', 'set-off', 'counter-claim', 'evasive-denial']
  },

  pleadings: {
    term: 'Pleadings',
    short: 'The plaint and the written statement — the documents that define what the fight is about.',
    long: 'Order VI Rule 2 states the golden rule: pleadings state material facts, not the evidence by which they will be proved, and not law. Everything downstream — issues, evidence, and the reliefs the court can grant — is bounded by what the pleadings say. A court cannot grant relief on a case not pleaded.',
    see: '/orders/order-6-7-8',
    also: ['material-facts', 'amendment', 'issues']
  },

  'material-facts': {
    term: 'Material facts',
    short: 'The facts you must prove to win — as opposed to the evidence you will use to prove them.',
    long: 'If a fact, taken away, would cause your claim to collapse, it is material and must be pleaded. Dates, the exact words of a fraudulent representation, and particulars of misrepresentation, breach of trust or undue influence must all be pleaded specifically under Order VI Rule 4.',
    see: '/orders/order-6-7-8',
    also: ['pleadings']
  },

  prayer: {
    term: 'Prayer (relief clause)',
    short: 'The list at the end of a plaint or application saying exactly what you want the court to order.',
    long: 'Order VII Rule 7 requires relief to be stated specifically. A court will not ordinarily grant what was not asked for, and a badly drawn prayer is one of the commonest reasons a party wins on the facts and loses on the order. This guide gives model prayers for each provision.',
    see: '/drafts/',
    also: ['plaint']
  },

  affidavit: {
    term: 'Affidavit',
    short: 'A written statement of facts sworn or affirmed to be true, used instead of oral testimony.',
    long: 'Order XIX governs affidavits. They must be confined to facts the deponent can prove of their own knowledge, except on interlocutory applications where belief may be stated with the grounds for it. A false affidavit exposes the deponent to prosecution for perjury.',
    see: '/orders/order-16-to-20',
    also: ['verification']
  },

  verification: {
    term: 'Verification',
    short:
      'The signed statement at the foot of a pleading confirming which paragraphs are true to knowledge and which to information and belief.',
    long: 'Order VI Rule 15 requires it, and Rule 15(4) requires a supporting affidavit with the plaint. A defective or blanket verification is a standard ground of attack, and paragraphs verified only on "information and belief" carry little evidentiary weight.',
    see: '/orders/order-6-7-8',
    also: ['pleadings', 'affidavit']
  },

  /* ---------------------------------------------------------------- */
  /* The outcomes                                                      */
  /* ---------------------------------------------------------------- */

  judgment: {
    term: 'Judgment',
    short: "The judge's written statement of reasons — why one side won.",
    long: 'Section 2(9). Order XX Rule 4(2) requires a judgment of a court other than a Court of Small Causes to contain a concise statement of the case, the points for determination, the decision on each point, and the reasons for that decision. The judgment carries the reasoning; the decree carries the operative command.',
    see: '/orders/order-16-to-20',
    also: ['decree', 'order-vs-decree']
  },

  decree: {
    term: 'Decree',
    short:
      "The formal, operative order flowing from a judgment that conclusively determines the parties' rights — the thing you actually execute and usually the thing you appeal.",
    long: 'Section 2(2). Three requirements: an adjudication, in a suit, conclusively determining the rights of the parties on some or all of the matters in controversy. It expressly includes the rejection of a plaint and a s. 47 determination, and expressly excludes an order of dismissal for default and an appealable order. Getting this classification right decides your remedy: a decree is appealed under s. 96, an order only if it appears in s. 104 or Order XLIII Rule 1.',
    see: '/start#decree-order-judgment',
    also: ['judgment', 'order-vs-decree', 'preliminary-decree', 'execution']
  },

  'preliminary-decree': {
    term: 'Preliminary decree',
    short:
      'A decree that decides the rights but leaves work to be done before the case can be wound up — common in partition and mortgage suits.',
    long: 'It declares shares or takes accounts; the final decree then works out the consequences, such as allotting specific plots or ordering sale. A preliminary decree is separately appealable, and failure to appeal it means its findings bind you at the final decree stage.',
    see: '/orders/order-16-to-20',
    also: ['decree', 'final-decree']
  },

  'final-decree': {
    term: 'Final decree',
    short: 'The decree that completely disposes of the suit, leaving nothing further for the court to decide.',
    long: 'In a partition suit the final decree allots the metes and bounds; in a mortgage suit it orders sale and determines the balance. Only a final decree is fully executable in respect of what it awards.',
    also: ['preliminary-decree', 'decree']
  },

  'ex-parte': {
    term: 'Ex parte',
    short: 'A decision made with only one side present, because the other did not appear.',
    long: 'Order IX Rule 6 lets the court proceed ex parte where the defendant is served but absent. Order IX Rule 13 lets the defendant apply to set the ex parte decree aside within thirty days, on showing that summons was not duly served or that they were prevented by sufficient cause. "Ex parte" describes the absence, not the merits — an ex parte decree is a real decree and is executable.',
    see: '/orders/order-9-to-11',
    also: ['decree', 'sufficient-cause', 'summons']
  },

  costs: {
    term: 'Costs',
    short: "A money award to reimburse a party's expense of litigating.",
    long: 'Section 35 makes costs discretionary and provides they follow the event unless the court orders otherwise. Section 35A allows compensatory costs for false or vexatious claims, and s. 35B costs for causing delay.',
    also: ['decree']
  },

  'mesne-profits': {
    term: 'Mesne profits',
    short:
      'Compensation for the period someone wrongfully stayed on your property — what you lost, or what they should have earned, plus interest.',
    long: 'Section 2(12). It is what the person in wrongful possession actually received or might with ordinary diligence have received, plus interest, but excluding profits from their own improvements. It is claimed with possession, and Order XX Rule 12 lets the court decree possession now and direct an inquiry into mesne profits later.',
    also: ['possession', 'decree']
  },

  /* ---------------------------------------------------------------- */
  /* Jurisdiction and the gateway                                      */
  /* ---------------------------------------------------------------- */

  jurisdiction: {
    term: 'Jurisdiction',
    short: "A court's legal power to hear a particular case.",
    long: 'It has three independent dimensions, and a court needs all three: subject-matter (is this a civil suit at all, s. 9), pecuniary (is the claim within this court\'s money limit, s. 15), and territorial (did the cause of action arise here, or does the defendant live here, ss. 16 to 20). A decree passed with no subject-matter jurisdiction is a nullity; defects of place or money value are waivable under s. 21.',
    see: '/sections/sec-9-to-14',
    also: ['pecuniary-jurisdiction', 'territorial-jurisdiction', 'cause-of-action', 'ouster-clause']
  },

  'pecuniary-jurisdiction': {
    term: 'Pecuniary jurisdiction',
    short: 'The money ceiling on what a particular court may try.',
    long: 'Section 15 requires every suit to be instituted in the court of the lowest grade competent to try it. The value is fixed by the plaintiff\'s own valuation in the plaint, which is why over- or under-valuation is a standard line of attack under Order VII Rule 11(b).',
    see: '/sections/sec-15-to-25',
    also: ['jurisdiction', 'valuation', 'court-fee']
  },

  'territorial-jurisdiction': {
    term: 'Territorial jurisdiction',
    short: 'Which place\'s court may hear the case.',
    long: 'Sections 16 to 18 deal with immovable property, s. 19 with wrongs to person or movables, and s. 20 is the residuary rule: where the defendant resides or carries on business, or where the cause of action wholly or in part arose. Where two courts both qualify, the plaintiff chooses.',
    see: '/sections/sec-15-to-25',
    also: ['jurisdiction', 'cause-of-action']
  },

  'cause-of-action': {
    term: 'Cause of action',
    short: 'The bundle of facts you must prove to get the relief you are asking for.',
    long: 'It is not the wrong and not the relief — it is every fact which, if traversed, you would have to prove. It fixes limitation (when did it accrue), territorial jurisdiction (where did it arise), and the frame of the suit (Order II Rule 2 forces you to include the whole of it or lose the rest).',
    see: '/orders/order-1-and-2',
    also: ['limitation', 'territorial-jurisdiction', 'order-2-rule-2']
  },

  'ouster-clause': {
    term: 'Ouster clause',
    short: 'A provision in another statute saying the civil court may not hear a certain kind of dispute.',
    long: 'Exclusion of the civil court is never presumed; it must be express or necessarily implied. Even where jurisdiction is excluded, the civil court retains a residual power to examine whether the statutory tribunal acted without jurisdiction or in disregard of fundamental principles of judicial procedure — the Dhulabhai residue.',
    see: '/sections/sec-9-to-14',
    also: ['jurisdiction']
  },

  'res-sub-judice': {
    term: 'Res sub judice',
    short:
      'Literally "a matter under judgment" — the rule in s. 10 that a court must not try a suit whose subject is already being tried in an earlier suit between the same parties.',
    long: 'The bar is on trial, not on institution: the later suit is stayed, not dismissed, and revives if the earlier one is disposed of without deciding the matter. It requires the same matter directly and substantially in issue, the same parties or their representatives, and a competent earlier court.',
    see: '/sections/sec-9-to-14',
    also: ['res-judicata', 'directly-and-substantially']
  },

  'res-judicata': {
    term: 'Res judicata',
    short:
      'Literally "a matter already judged" — the rule in s. 11 that you cannot relitigate what has already been finally decided between the same parties.',
    long: 'It requires a former suit, the same matter directly and substantially in issue, the same parties or those claiming under them, a court competent to try the later suit, and a decision heard and finally decided. Its eight Explanations extend it to matters that ought to have been raised (constructive res judicata), to representative suits, and to execution proceedings.',
    see: '/sections/sec-9-to-14',
    also: ['res-sub-judice', 'constructive-res-judicata', 'directly-and-substantially']
  },

  'constructive-res-judicata': {
    term: 'Constructive res judicata',
    short:
      'A ground you could and should have raised in the earlier case is treated as if it had been raised and decided against you.',
    long: 'Explanation IV to s. 11. It is what stops a losing party coming back with a fresh argument that was always available. This is the harshest rule in the chapter and the reason a defence must be pleaded completely the first time.',
    see: '/sections/sec-9-to-14',
    also: ['res-judicata']
  },

  'directly-and-substantially': {
    term: 'Directly and substantially in issue',
    short: 'A matter the case actually turned on, as opposed to something decided incidentally along the way.',
    long: 'Only matters directly and substantially in issue attract ss. 10 and 11. A matter collaterally or incidentally in issue does not, which is why a finding made only as a step in reasoning generally does not bind in a later suit.',
    see: '/sections/sec-9-to-14',
    also: ['res-judicata']
  },

  /* ---------------------------------------------------------------- */
  /* Getting a case moving                                             */
  /* ---------------------------------------------------------------- */

  summons: {
    term: 'Summons',
    short: 'The court\'s formal notice to the defendant that a suit has been filed and they must appear.',
    long: 'Order V governs issue and service. Proper service is the foundation of everything that follows: if summons was not duly served, an ex parte decree must be set aside under Order IX Rule 13, and no amount of subsequent regularity cures the defect.',
    also: ['ex-parte', 'substituted-service']
  },

  'substituted-service': {
    term: 'Substituted service',
    short:
      'Service by an alternative method — affixing at the last known residence, or publishing in a newspaper — where ordinary service fails.',
    long: 'Order V Rule 20. It requires the court to be satisfied that the defendant is keeping out of the way or cannot be served in the ordinary way. Once properly ordered and effected, it is as good as personal service.',
    also: ['summons']
  },

  'court-fee': {
    term: 'Court fee',
    short: 'The stamp duty payable to the State on a plaint, appeal or application, based on what you claim.',
    long: 'Governed by the Court Fees Act, 1870 and State amendments, read with the Suits Valuation Act, 1887. Insufficient stamping is a ground for rejection of the plaint under Order VII Rule 11(c), but the court must first give time to make it good.',
    also: ['valuation', 'rejection-of-plaint']
  },

  valuation: {
    term: 'Valuation',
    short: 'The money figure a plaintiff puts on the suit — it fixes both the court fee and which court can hear it.',
    long: 'Valuation for court fee and valuation for jurisdiction are conceptually distinct and occasionally different figures. Deliberate undervaluation to reach a lower court, or overvaluation to reach a higher one, is attacked under Order VII Rule 11(b).',
    also: ['court-fee', 'pecuniary-jurisdiction']
  },

  limitation: {
    term: 'Limitation',
    short: 'The deadline for filing. Miss it and the court must dismiss, even if nobody raises the point.',
    long: 'Governed by the Limitation Act, 1963. Section 3 makes dismissal mandatory once the period expires. The Schedule is divided into numbered Articles, each fixing a period and the date from which it runs — Article 136 gives twelve years to execute a decree, Article 127 sixty days to set aside a court sale. Section 5 allows delay to be condoned for sufficient cause in appeals and applications, but never for a suit.',
    see: '/start#limitation-basics',
    also: ['article', 'sufficient-cause', 'condonation']
  },

  article: {
    term: 'Article (Limitation Act)',
    short: 'A numbered row in the Schedule to the Limitation Act fixing a deadline for one kind of proceeding.',
    long: 'Do not confuse it with an Article of the Constitution or a Rule of the CPC. "Article 136" means the entry in the Limitation Act Schedule giving twelve years from when the decree becomes enforceable.',
    also: ['limitation']
  },

  condonation: {
    term: 'Condonation of delay',
    short: 'The court excusing a late filing because you had a good reason.',
    long: 'Section 5 of the Limitation Act. It applies to appeals and applications, not suits, and requires an application supported by an affidavit explaining every day of the delay. Certain periods — notably the deposits under Order XXI Rules 84 to 86 — cannot be extended at all.',
    also: ['limitation', 'sufficient-cause']
  },

  'sufficient-cause': {
    term: 'Sufficient cause',
    short: 'A reason the court accepts as genuine and beyond your control.',
    long: 'The standard phrase in Order IX Rule 13, s. 5 of the Limitation Act, and Order XXII Rule 9. Courts read it liberally where the party has not been negligent and the other side can be compensated in costs, and strictly where the delay is deliberate or the explanation is vague.',
    also: ['condonation', 'ex-parte']
  },

  /* ---------------------------------------------------------------- */
  /* Parties and the shape of the case                                 */
  /* ---------------------------------------------------------------- */

  joinder: {
    term: 'Joinder',
    short: 'Putting more than one plaintiff, defendant, or claim into a single suit.',
    long: 'Order I Rules 1 and 3 permit joinder of parties where the right to relief arises from the same act or transaction and a common question of law or fact would arise. Order II Rule 3 permits joinder of causes of action. The purpose is to avoid multiplicity of proceedings.',
    see: '/orders/order-1-and-2',
    also: ['misjoinder', 'non-joinder', 'necessary-party']
  },

  misjoinder: {
    term: 'Misjoinder',
    short: 'Wrongly including a party or a claim that should not have been in this suit.',
    long: 'Order I Rule 9 provides that no suit shall be defeated by misjoinder or non-joinder, and the court shall deal with the matter as regards the parties actually before it — but this is subject to the proviso protecting necessary parties.',
    see: '/orders/order-1-and-2',
    also: ['joinder', 'non-joinder']
  },

  'non-joinder': {
    term: 'Non-joinder',
    short: 'Leaving out someone who should have been a party.',
    long: 'Non-joinder of a proper party is curable and does not defeat the suit. Non-joinder of a necessary party is fatal, because no effective decree can be made in their absence.',
    see: '/orders/order-1-and-2',
    also: ['necessary-party', 'proper-party', 'misjoinder']
  },

  'necessary-party': {
    term: 'Necessary party',
    short: 'Someone without whom no effective order can be made at all.',
    long: 'The two-part test: there must be a right to relief against that person in respect of the matter, and the court must be unable to pass an effective decree in their absence. A co-owner in a partition suit is necessary; a stranger claiming independent title generally is not.',
    see: '/orders/order-1-and-2',
    also: ['proper-party', 'non-joinder', 'impleadment']
  },

  'proper-party': {
    term: 'Proper party',
    short: 'Someone whose presence helps the court decide completely, but whose absence does not sink the case.',
    long: 'The court may add a proper party under Order I Rule 10(2) to enable it to effectually and completely adjudicate. Their omission is an irregularity, not a fatal defect.',
    see: '/orders/order-1-and-2',
    also: ['necessary-party', 'impleadment']
  },

  impleadment: {
    term: 'Impleadment',
    short: 'Adding a new person as a party to a pending case.',
    long: 'Done under Order I Rule 10(2), on application or by the court of its own motion. Under Rule 10(5), as against a newly added defendant the suit is deemed to have begun on the date of impleadment — which can be fatal for limitation.',
    see: '/orders/order-1-and-2',
    also: ['necessary-party', 'proper-party', 'limitation']
  },

  'order-2-rule-2': {
    term: 'Order II Rule 2 bar',
    short:
      'You must claim everything arising from one cause of action in one suit. What you leave out, you lose forever.',
    long: 'The Rule requires the plaint to include the whole of the claim. Omit part of it, and you cannot afterwards sue for the omitted part unless you obtained the court\'s leave. The defence must be pleaded and proved by producing the earlier plaint — the bar is not presumed.',
    see: '/orders/order-1-and-2',
    also: ['cause-of-action', 'res-judicata', 'splitting']
  },

  splitting: {
    term: 'Splitting a claim',
    short: 'Breaking one cause of action into several suits — which the Code forbids.',
    long: 'The vice Order II Rule 2 exists to prevent. Splitting relief (suing for arrears now and possession later on the same default) is the classic trap.',
    also: ['order-2-rule-2']
  },

  amendment: {
    term: 'Amendment of pleadings',
    short: 'Changing your plaint or written statement after it has been filed.',
    long: 'Order VI Rule 17 allows it at any stage on just terms where necessary to determine the real question in controversy. The 2002 proviso bars amendment after the trial has commenced unless the court concludes that in spite of due diligence the party could not have raised the matter before. An amendment that withdraws an admission or takes away an accrued right of limitation is refused.',
    see: '/orders/order-6-7-8',
    also: ['pleadings', 'due-diligence']
  },

  'due-diligence': {
    term: 'Due diligence',
    short: 'Having taken reasonable steps to find out the facts in time.',
    long: 'The threshold in the proviso to Order VI Rule 17 and in Order XI. The party must show not merely that the material is new to them, but that reasonable enquiry earlier would not have produced it.',
    also: ['amendment']
  },

  /* ---------------------------------------------------------------- */
  /* Threshold attacks                                                 */
  /* ---------------------------------------------------------------- */

  'rejection-of-plaint': {
    term: 'Rejection of plaint',
    short: 'Killing the suit at the doorstep, on the face of the plaint alone, under Order VII Rule 11.',
    long: 'Six grounds: no cause of action disclosed, undervaluation, insufficient stamp, barred by law, not filed in duplicate, and non-compliance with Order VII Rule 9. The court reads only the plaint and its documents — the written statement and the defendant\'s version are irrelevant. Rejection is a decree under s. 2(2) and is therefore appealable, but Rule 13 preserves the right to file a fresh plaint on the same cause of action.',
    see: '/orders/order-6-7-8',
    also: ['plaint', 'return-of-plaint', 'decree']
  },

  'return-of-plaint': {
    term: 'Return of plaint',
    short: 'Handing the plaint back so it can be filed in the right court — not a dismissal.',
    long: 'Order VII Rule 10. Used where the court lacks jurisdiction over the place or the value, rather than where the claim is barred. The practical difference from rejection is large: the same plaint is re-presented, and s. 14 of the Limitation Act excludes the time spent in the wrong court.',
    see: '/orders/order-6-7-8',
    also: ['rejection-of-plaint', 'jurisdiction']
  },

  'preliminary-issue': {
    term: 'Preliminary issue',
    short: 'A single question — usually of law — decided first, because it may end the case.',
    long: 'Order XIV Rule 2 permits it only where the issue is one of law relating to jurisdiction or a statutory bar, and can be decided on admitted facts. The general rule is that the court must pronounce judgment on all issues; trying a mixed question of law and fact as a preliminary issue is an error.',
    see: '/orders/order-12-to-15',
    also: ['issues']
  },

  issues: {
    term: 'Issues',
    short: 'The specific disputed questions the court frames and then answers, one by one, in the judgment.',
    long: 'Order XIV Rule 1: an issue arises when a material proposition is affirmed by one party and denied by the other. Framing issues converts a mass of pleading into a finite list of questions, and it fixes the burden of proof on each. Order XX Rule 5 requires the court to state its finding on each issue separately with reasons.',
    see: '/orders/order-12-to-15',
    also: ['pleadings', 'burden-of-proof', 'preliminary-issue']
  },

  /* ---------------------------------------------------------------- */
  /* Defences and counter-attacks                                      */
  /* ---------------------------------------------------------------- */

  'set-off': {
    term: 'Set-off',
    short: 'A defendant saying "you owe me too" — cancelling the claim against a debt in the same suit.',
    long: 'Order VIII Rule 6 gives legal set-off: an ascertained sum of money, legally recoverable, within pecuniary jurisdiction, in the same character. Equitable set-off is judge-made and permits an unascertained cross-claim arising out of the same transaction. Legal set-off requires court fee; it is treated as a cross-suit, so the court decides both claims.',
    see: '/orders/order-6-7-8',
    also: ['counter-claim', 'written-statement']
  },

  'counter-claim': {
    term: 'Counter-claim',
    short: 'A defendant suing back inside the same case, on any claim they have against the plaintiff.',
    long: 'Order VIII Rules 6A to 6G. It need not arise from the same transaction, but the cause of action must accrue before the defence is delivered. It is treated as a plaint and bears its own court fee; if the main suit is withdrawn, the counter-claim survives and proceeds independently.',
    see: '/orders/order-6-7-8',
    also: ['set-off', 'written-statement']
  },

  'evasive-denial': {
    term: 'Evasive denial',
    short: 'Answering an allegation vaguely instead of meeting it — which the Code treats as an admission.',
    long: 'Order VIII Rule 4 requires a defendant who denies an allegation of fact to answer the point of substance. Saying "the defendant does not admit" without dealing with the specific averment risks the fact being taken as admitted under Rule 5, and can attract judgment on admissions under Order XII Rule 6.',
    see: '/orders/order-6-7-8',
    also: ['written-statement', 'admission']
  },

  admission: {
    term: 'Admission',
    short: 'A concession by a party that a fact is true, removing the need to prove it.',
    long: 'Order XII deals with admissions in pleadings, in answer to notice, and otherwise. Rule 6 allows the court to give judgment straight away on a clear, unambiguous and unconditional admission, without waiting for the rest of the case. An admission in a pleading is far harder to escape than one in evidence.',
    see: '/orders/order-12-to-15',
    also: ['evasive-denial', 'burden-of-proof']
  },

  /* ---------------------------------------------------------------- */
  /* Evidence gathering                                                */
  /* ---------------------------------------------------------------- */

  discovery: {
    term: 'Discovery',
    short: 'Compelling the other side to disclose documents or answer questions before trial.',
    long: 'Order XI. Discovery of documents forces production of what is in a party\'s possession or power; interrogatories force written answers on oath to questions about facts in issue. Both need the court\'s leave, and the test is whether the material relates to a matter in question and is necessary either for disposing fairly of the suit or for saving costs.',
    see: '/orders/order-9-to-11',
    also: ['interrogatories', 'inspection']
  },

  interrogatories: {
    term: 'Interrogatories',
    short: 'Written questions one party may be ordered to answer on oath before the trial.',
    long: 'They may go to facts, not to evidence, and not to the opponent\'s case. Well-drawn interrogatories pin an opponent to a version before they see your evidence; that is their strategic value.',
    see: '/orders/order-9-to-11',
    also: ['discovery']
  },

  inspection: {
    term: 'Inspection',
    short: 'Actually looking at, and copying, documents the other side has disclosed.',
    long: 'The step after discovery. A party may be ordered to produce documents referred to in their pleadings or affidavits for inspection, subject to claims of privilege.',
    also: ['discovery', 'privilege']
  },

  privilege: {
    term: 'Privilege',
    short: 'A recognised right to withhold a document or answer despite its relevance.',
    long: 'The main heads are legal professional communications and State privilege for unpublished official records. A claim of privilege is made on affidavit and the court may inspect the document to rule on the claim.',
    also: ['discovery', 'inspection']
  },

  'burden-of-proof': {
    term: 'Burden of proof',
    short: 'Whose job it is to prove a fact — the side that loses if nothing is proved either way.',
    long: 'The initial burden is fixed when issues are framed and lies on the party asserting the affirmative. It is distinct from the onus, which shifts during the trial as evidence comes in.',
    also: ['issues', 'admission']
  },

  'examination-in-chief': {
    term: 'Examination-in-chief',
    short: "A witness's own evidence, led by the party calling them.",
    long: 'Order XVIII Rule 4 now requires it to be given on affidavit in most suits, which front-loads the case and makes cross-examination the real battleground.',
    see: '/orders/order-16-to-20',
    also: ['cross-examination', 'affidavit']
  },

  'cross-examination': {
    term: 'Cross-examination',
    short: "Questioning the other side's witness to test or destroy their evidence.",
    long: 'The central rule of practice: what you do not put to a witness in cross-examination, you generally cannot argue afterwards. Failure to cross-examine on a point is treated as acceptance of it.',
    see: '/orders/order-16-to-20',
    also: ['examination-in-chief']
  },

  commission: {
    term: 'Commission',
    short: 'The court deputing someone to do a job it cannot do in the courtroom — measure land, examine a distant witness, take accounts.',
    long: 'Section 75 and Order XXVI. The commissioner\'s report becomes evidence in the suit. A commission is not a substitute for a party proving its own case, and a court will refuse one sought merely to collect evidence the applicant should have gathered.',
    also: ['evidence']
  },

  evidence: {
    term: 'Evidence',
    short: 'The material — testimony and documents — by which facts in issue are proved.',
    long: 'The CPC governs how evidence is taken; what is admissible is governed by the law of evidence, now the Bharatiya Sakshya Adhiniyam, 2023, which replaced the Indian Evidence Act, 1872.',
    see: '/orders/order-16-to-20',
    also: ['examination-in-chief', 'affidavit']
  },

  /* ---------------------------------------------------------------- */
  /* Interim relief                                                    */
  /* ---------------------------------------------------------------- */

  interlocutory: {
    term: 'Interlocutory',
    short: 'Anything happening in the middle of a case, before the final decision.',
    long: 'Interlocutory applications — commonly called IAs — are how the middle of a suit is actually fought: injunctions, attachment before judgment, receivers, amendment, impleadment, adjournment.',
    also: ['injunction', 'ia']
  },

  ia: {
    term: 'IA (interlocutory application)',
    short: 'A numbered application filed inside a pending case asking for something short of final relief.',
    long: 'Each IA is separately numbered, separately heard and separately disposed of. This guide tells you, for every provision, which IA is the vehicle.',
    also: ['interlocutory']
  },

  injunction: {
    term: 'Injunction',
    short: 'A court order telling someone to stop doing something, or to do something.',
    long: 'A temporary injunction under Order XXXIX Rules 1 and 2 lasts until the suit is decided; a permanent injunction is granted by the decree itself under the Specific Relief Act, 1963. A mandatory injunction commands positive action and is granted sparingly.',
    see: '/orders/order-39',
    also: ['prima-facie', 'balance-of-convenience', 'irreparable-injury', 'status-quo']
  },

  'prima-facie': {
    term: 'Prima facie case',
    short: 'A case that looks serious enough on the face of it to deserve protection until trial — not a case already proved.',
    long: 'The first of the three requirements for a temporary injunction. It means a serious question to be tried and a probability of entitlement to relief, not a likelihood of success on the final merits.',
    see: '/orders/order-39',
    also: ['injunction', 'balance-of-convenience', 'irreparable-injury']
  },

  'balance-of-convenience': {
    term: 'Balance of convenience',
    short: 'Weighing who suffers more — the applicant if the order is refused, or the opponent if it is granted.',
    long: 'The second of the three requirements. The court asks which course carries the lower risk of injustice if it turns out to be wrong at trial.',
    see: '/orders/order-39',
    also: ['injunction', 'prima-facie']
  },

  'irreparable-injury': {
    term: 'Irreparable injury',
    short: 'Harm that money cannot properly put right.',
    long: 'The third requirement. If damages would be an adequate remedy, an injunction is refused. Loss of a unique property, destruction of goodwill and breach of confidence are the standard examples of injury that is irreparable.',
    see: '/orders/order-39',
    also: ['injunction']
  },

  'status-quo': {
    term: 'Status quo',
    short: 'An order freezing the position as it stands, so nobody changes the facts on the ground.',
    long: 'Courts often prefer it to a detailed injunction because it is simpler to enforce. Its weakness is ambiguity — always ask the court to record the date and the precise state of affairs being frozen.',
    also: ['injunction']
  },

  'ex-parte-injunction': {
    term: 'Ex parte injunction',
    short: 'An injunction granted before the other side has been heard, because of urgency.',
    long: 'The proviso to Order XXXIX Rule 3 requires the court to record reasons for its opinion that the object of granting the injunction would be defeated by delay, and requires the applicant to serve the papers immediately. Rule 3A then requires the application to be finally disposed of within thirty days.',
    see: '/orders/order-39',
    also: ['injunction', 'ex-parte']
  },

  caveat: {
    term: 'Caveat',
    short: 'A notice you file warning the court not to pass any order against you without hearing you first.',
    long: 'Section 148A. Once lodged, the court must serve notice of the application on the caveator. It lasts ninety days. It is the standard defensive move where you expect the other side to seek an ex parte injunction or stay.',
    see: '/sections/sec-144-148a-151',
    also: ['ex-parte-injunction']
  },

  receiver: {
    term: 'Receiver',
    short: 'A neutral person the court appoints to hold and manage disputed property while the case runs.',
    long: 'Order XL. The receiver is an officer of the court, not the agent of either party. Appointment is a harsh remedy, described as the court taking the property into its own hands, and requires more than a mere dispute over title.',
    also: ['interlocutory', 'attachment']
  },

  'attachment-before-judgment': {
    term: 'Attachment before judgment',
    short: 'Freezing the defendant\'s property early, because they are about to dispose of it to defeat the decree.',
    long: 'Order XXXVIII Rules 5 to 13. It requires proof of intent to obstruct or delay execution — mere apprehension of non-payment is not enough. The court first calls on the defendant to furnish security.',
    also: ['attachment', 'receiver']
  },

  /* ---------------------------------------------------------------- */
  /* Execution                                                         */
  /* ---------------------------------------------------------------- */

  execution: {
    term: 'Execution',
    short: 'Actually getting what the decree gave you — the process of enforcement.',
    long: 'Sections 36 to 74 and Order XXI. Winning a decree is only half the job; execution is where money is recovered, possession is delivered and injunctions are enforced. The limitation is twelve years from when the decree becomes enforceable, under Article 136, and it cannot be extended.',
    see: '/orders/order-21',
    also: ['decree-holder', 'judgment-debtor', 'attachment', 'executing-court']
  },

  'executing-court': {
    term: 'Executing court',
    short: 'The court that enforces the decree — either the court that passed it, or one it is transferred to.',
    long: 'Section 38. Its fundamental limit is that it cannot go behind the decree: it must take the decree as it stands, however wrong, and simply enforce it. Its only escape is where the decree is a nullity for want of inherent jurisdiction.',
    see: '/sections/sec-36-to-74',
    also: ['execution', 'section-47']
  },

  'section-47': {
    term: 'Section 47 objection',
    short:
      'The single channel for every dispute between the parties about whether and how a decree should be executed — no separate suit is allowed.',
    long: 'All questions relating to execution, discharge or satisfaction of the decree between the parties to the suit must be decided by the executing court, and not by a separate suit. This makes it both a shield for the judgment-debtor and a trap, because objections that could have been taken cannot be raised later.',
    see: '/sections/sec-36-to-74',
    also: ['executing-court', 'execution']
  },

  attachment: {
    term: 'Attachment',
    short: 'The court seizing property in law so it cannot be sold away, pending sale in execution.',
    long: 'Attachment does not transfer title; it prevents the judgment-debtor from defeating the decree. Section 64 makes a private transfer after attachment void against claims enforceable under the attachment, subject to the exception for a contract entered into before the attachment. Section 60 exempts a long list of property, including tools of an artisan and necessary wearing apparel.',
    see: '/orders/order-21',
    also: ['execution', 'garnishee', 'rateable-distribution']
  },

  garnishee: {
    term: 'Garnishee',
    short: 'Someone who owes money to the judgment-debtor, ordered to pay it to the decree-holder instead.',
    long: 'Order XXI Rules 46A to 46I. The typical garnishee is a bank holding the judgment-debtor\'s account. The court issues notice, and if the debt is not disputed, orders payment over.',
    see: '/orders/order-21',
    also: ['attachment', 'execution']
  },

  'rateable-distribution': {
    term: 'Rateable distribution',
    short:
      'Where several decree-holders are chasing the same debtor, sharing the sale proceeds proportionately instead of first-come-first-served.',
    long: 'Section 73. It applies where more than one decree-holder has applied to the same court for execution against the same judgment-debtor before the assets are received. Secured creditors stand outside the scheme.',
    see: '/sections/sec-36-to-74',
    also: ['execution', 'attachment']
  },

  'sale-certificate': {
    term: 'Sale certificate',
    short: 'The document the court issues to the auction purchaser after a court sale is confirmed.',
    long: 'Order XXI Rule 94. It is evidence of title, and under s. 65 the purchaser\'s title relates back to the date of the sale, not the date of confirmation — which matters when the judgment-debtor has dealt with the property in between.',
    see: '/orders/order-21',
    also: ['execution', 'attachment']
  },

  possession: {
    term: 'Possession',
    short: 'Physical control of property — and, in execution, the thing actually handed over.',
    long: 'Order XXI distinguishes delivery of actual physical possession, where the decree is against a person bound by it, from symbolic possession, where the property is in the occupation of a tenant not bound by the decree.',
    also: ['mesne-profits', 'execution']
  },

  /* ---------------------------------------------------------------- */
  /* Challenging a decision                                            */
  /* ---------------------------------------------------------------- */

  appeal: {
    term: 'Appeal',
    short: 'Asking a higher court to reconsider a decision — on facts as well as law, in a first appeal.',
    long: 'A right of appeal is a creature of statute; it does not exist unless a provision confers it. A first appeal under s. 96 is a full rehearing on facts and law. A second appeal under s. 100 lies only on a substantial question of law, which must be formulated by the High Court.',
    see: '/sections/sec-96-to-115',
    also: ['first-appeal', 'second-appeal', 'revision', 'review']
  },

  'first-appeal': {
    term: 'First appeal',
    short: 'The appeal from an original decree, where the appellate court can re-examine the evidence itself.',
    long: 'Section 96 with Order XLI. The appellate court is a court of both fact and law and must record its own reasons on the evidence; a first appellate judgment that does not deal with the evidence is liable to be set aside.',
    see: '/sections/sec-96-to-115',
    also: ['appeal', 'second-appeal']
  },

  'second-appeal': {
    term: 'Second appeal',
    short: 'The appeal to a High Court from an appellate decree — allowed only on a substantial question of law.',
    long: 'Section 100 as amended in 1976. The High Court must formulate the substantial question of law, and the appeal is heard only on that question. Concurrent findings of fact are not reopened merely because another view is possible.',
    see: '/sections/sec-96-to-115',
    also: ['appeal', 'substantial-question']
  },

  'substantial-question': {
    term: 'Substantial question of law',
    short:
      'A legal question that is genuinely debatable and decisive — not a settled point, and not a quarrel with the facts.',
    long: 'The gateway to a second appeal. It must be a question of law that is of general importance or directly and substantially affects the rights of the parties, and it must arise on the record.',
    see: '/sections/sec-96-to-115',
    also: ['second-appeal']
  },

  review: {
    term: 'Review',
    short: 'Asking the very same court to reconsider its own decision, on narrow grounds.',
    long: 'Section 114 with Order XLVII. The grounds are discovery of new and important matter that could not have been produced with due diligence, an error apparent on the face of the record, or any other sufficient reason. It is not an appeal in disguise: a wrong view of law is corrected in appeal, not in review.',
    see: '/sections/sec-96-to-115',
    also: ['appeal', 'revision']
  },

  revision: {
    term: 'Revision',
    short:
      "The High Court's supervisory power to correct a subordinate court that acted beyond, or refused to exercise, its jurisdiction.",
    long: 'Section 115. It is confined to jurisdictional error — exercise of jurisdiction not vested, failure to exercise jurisdiction vested, or acting illegally or with material irregularity in exercising it. Since 1999 it is available only where the order, if made in favour of the applicant, would have finally disposed of the proceeding.',
    see: '/sections/sec-96-to-115',
    also: ['appeal', 'review']
  },

  remand: {
    term: 'Remand',
    short: 'The appellate court sending the case back to the trial court to be heard again.',
    long: 'Order XLI Rules 23, 23A and 25. It is a serious step that costs the parties years, and appellate courts are told to decide the appeal themselves wherever the record permits.',
    also: ['first-appeal']
  },

  restitution: {
    term: 'Restitution',
    short:
      'Putting a party back where they were when a decree they had complied with is later reversed on appeal.',
    long: 'Section 144. The principle is that no party should suffer by an act of the court. The application is made to the court of first instance, and the limitation is twelve years under Article 136 because the application is treated as one for execution.',
    see: '/sections/sec-144-148a-151',
    also: ['appeal', 'execution']
  },

  'inherent-powers': {
    term: 'Inherent powers',
    short:
      'The residual power in s. 151 to make any order necessary for justice or to prevent abuse of the court\'s process.',
    long: 'It supplements the Code, it does not override it. Where the Code provides a specific remedy, s. 151 cannot be used to bypass it or to get round a limitation bar. It is a saving of existing power, not a grant of new power.',
    see: '/sections/sec-144-148a-151',
    also: ['restitution', 'caveat']
  },

  /* ---------------------------------------------------------------- */
  /* Life events and endings                                           */
  /* ---------------------------------------------------------------- */

  abatement: {
    term: 'Abatement',
    short: 'A suit dying because a party died and nobody brought their legal representative on record in time.',
    long: 'Order XXII. Ninety days to apply to substitute the legal representative, and sixty days more to set aside the abatement on sufficient cause. The suit does not abate at all where the right to sue survives against the remaining parties, or where the cause of action is purely personal and dies with the party.',
    also: ['legal-representative', 'sufficient-cause']
  },

  withdrawal: {
    term: 'Withdrawal of suit',
    short: 'A plaintiff abandoning the case — with or without permission to sue again.',
    long: 'Order XXIII Rule 1. Withdrawal without leave bars a fresh suit on the same subject matter forever. Leave to withdraw with liberty to file afresh is granted only for a formal defect or other sufficient grounds, and it does not extend limitation.',
    also: ['compromise']
  },

  compromise: {
    term: 'Compromise decree',
    short: 'A decree recording a settlement the parties reached themselves.',
    long: 'Order XXIII Rule 3. Since 1976 the agreement must be in writing and signed by the parties. Rule 3A bars a separate suit to set aside a compromise decree on the ground that the compromise was not lawful — the challenge must be made to the same court.',
    also: ['withdrawal']
  },

  'pendente-lite': {
    term: 'Pendente lite',
    short: 'Something happening while the case is pending — most often a transfer of the disputed property.',
    long: 'Section 52 of the Transfer of Property Act, 1882 makes a transfer during litigation subject to the result: the transferee takes the property with the decree hanging over it. In execution, Order XXI Rule 102 denies such a transferee the protection of the resistance provisions.',
    also: ['execution', 'possession']
  },

  'non-obstante': {
    term: 'Non-obstante clause',
    short:
      'A provision beginning "notwithstanding anything contained in…" — it overrides whatever it names.',
    long: 'It is the drafter\'s way of giving one provision priority over others. When you meet one, the first question is always: what exactly does it override, and what does it leave untouched?',
    also: ['condition-precedent']
  },

  'condition-precedent': {
    term: 'Condition precedent',
    short: 'Something that must exist or be done before a power can be used at all.',
    long: 'If the condition is not satisfied, the resulting order is without jurisdiction, not merely wrong. Recording reasons before granting an ex parte injunction, and giving notice under Order XXI Rule 22, are classic conditions precedent.',
    also: ['non-obstante', 'mandatory']
  },

  mandatory: {
    term: 'Mandatory vs directory',
    short:
      '"Shall" usually means the court has no choice; "may" usually means it has a discretion — but the real test is the consequence of breach.',
    long: 'A provision is mandatory if non-compliance invalidates what follows, and directory if it does not. The word used is a strong indicator but not conclusive: courts read "shall" as directory where the provision is procedural and no prejudice is caused, and read "may" as compulsory where a duty is coupled with a power.',
    also: ['condition-precedent']
  },

  'suo-motu': {
    term: 'Suo motu',
    short: 'The court acting on its own, without anyone applying.',
    long: 'Several powers are exercisable suo motu — adding a party under Order I Rule 10(2), striking out pleadings under Order VI Rule 16, transferring a suit under s. 24.',
    also: ['inherent-powers']
  },

  'de-novo': {
    term: 'De novo',
    short: 'Starting again from the beginning, as if the earlier hearing had not happened.',
    long: 'A trial de novo is ordered where the earlier proceedings were fundamentally vitiated. It is different from a remand for a limited purpose, where only the identified gap is filled.',
    also: ['remand']
  },

  'locus-standi': {
    term: 'Locus standi',
    short: 'The right to be heard — whether this particular person is entitled to bring or contest the case.',
    long: 'A stranger with no interest in the subject matter cannot maintain a suit or object in execution. The commonest use in the CPC is resisting an application by someone who is neither a party nor claiming under one.',
    also: ['necessary-party']
  },

  'coram-non-judice': {
    term: 'Coram non judice',
    short: 'Before a judge with no power to hear it — so the decision is a nullity.',
    long: 'A decree passed without inherent jurisdiction over the subject matter is void and may be challenged whenever it is relied on, including in execution. Contrast defects of place or pecuniary value, which s. 21 makes waivable.',
    also: ['jurisdiction', 'executing-court']
  }
}

/** Sorted list for the /glossary page. */
export const glossaryList = Object.entries(glossary)
  .map(([id, v]) => ({ id, ...v }))
  .sort((a, b) => a.term.localeCompare(b.term, 'en'))

/** Terms grouped by the stage of a case at which a reader first meets them. */
export const glossaryClusters = [
  {
    title: 'Before you can read anything else',
    blurb: 'The vocabulary the rest of the guide assumes. Learn these six and nothing on the site is opaque.',
    ids: ['cpc', 'section', 'order', 'rule', 'decree', 'order-vs-decree']
  },
  {
    title: 'Reading a citation',
    blurb: 'How to decode the references that appear in every paragraph.',
    ids: ['air', 'scc', 'bench-strength', 'ratio', 'obiter', 'article']
  },
  {
    title: 'The people',
    blurb: 'The same human being changes name as the case moves through its stages.',
    ids: ['plaintiff', 'defendant', 'decree-holder', 'judgment-debtor', 'pleader', 'legal-representative']
  },
  {
    title: 'The paperwork',
    blurb: 'What actually gets filed, and what each document is for.',
    ids: ['plaint', 'written-statement', 'pleadings', 'material-facts', 'prayer', 'verification', 'affidavit']
  },
  {
    title: 'Can this court hear it?',
    blurb: 'The three jurisdictional questions and the two bars against relitigating.',
    ids: [
      'jurisdiction',
      'pecuniary-jurisdiction',
      'territorial-jurisdiction',
      'cause-of-action',
      'res-sub-judice',
      'res-judicata',
      'constructive-res-judicata'
    ]
  },
  {
    title: 'Attacks at the threshold',
    blurb: 'How a case is killed, or redirected, before it is ever tried.',
    ids: ['rejection-of-plaint', 'return-of-plaint', 'preliminary-issue', 'limitation', 'condonation']
  },
  {
    title: 'The middle of the case',
    blurb: 'Interim orders, evidence gathering, and the shaping of the dispute.',
    ids: ['issues', 'discovery', 'interrogatories', 'admission', 'injunction', 'ia', 'caveat', 'receiver']
  },
  {
    title: 'After judgment',
    blurb: 'Getting what you won, and challenging what you lost.',
    ids: ['execution', 'attachment', 'section-47', 'appeal', 'second-appeal', 'review', 'revision', 'restitution']
  }
]
