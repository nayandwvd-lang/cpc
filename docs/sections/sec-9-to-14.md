---
title: "Sections 9–14 — Jurisdiction, Res Sub Judice & Res Judicata"
outline: 2
---

# Sections 9 to 14 — Jurisdiction of Civil Courts, Res Sub Judice and Res Judicata

These six sections form the gateway of the Code. Section 9 opens the door to the civil court; Sections 10, 11 and 12 progressively close it against duplicative litigation; and Sections 13 and 14 govern the reception of foreign judgments. Master this cluster and you control the two questions every civil judge asks first: *can I hear this?* and *has this already been decided?*

| Section | One-line function |
|---|---|
| **9** | Civil courts have jurisdiction over all suits of a civil nature unless cognizance is expressly or impliedly barred. |
| **10** | *Res sub judice* — a court must not **try** a suit whose matter is directly and substantially in issue in a previously instituted suit between the same parties. |
| **11** | *Res judicata* — a court must not **try** a suit or issue already heard and finally decided between the same parties by a competent court. |
| **12** | Where rules bar a further suit on a cause of action, that bar operates in every court governed by the Code. |
| **13** | A foreign judgment is conclusive except on six enumerated grounds. |
| **14** | A certified copy of a foreign judgment raises a presumption of competent jurisdiction, rebuttable by proof of want of jurisdiction. |

::: info The architecture in one breath
Section 9 is **enabling** and is read expansively. Sections 10 and 11 are **prohibitory** and open with the identical words "No Court shall". Section 10 addresses a *pending* suit and merely stays the trial; Section 11 addresses a *decided* suit and extinguishes the right to adjudicate at all. That difference — stay versus extinguishment — drives every strategic choice in this chapter.
:::

## Section 9 — Courts to try all civil suits unless barred

### The dispute this solves

::: oneminute Before we name the section, here is the problem
Deepa has run a tea stall on a strip of municipal land for eleven years. The municipality cancels her licence overnight and sends men to remove the stall. She goes to a lawyer and says: *make them stop.*

The lawyer's very first thought is not whether the cancellation was fair. It is a colder question: **is a civil court even allowed to hear this?**

Because for a whole range of disputes — tenancy, land revenue, service matters, tax, consumer complaints — Parliament has taken the dispute *away* from ordinary civil courts and handed it to a tribunal, a controller or a commission. File in the wrong place and you do not lose on the merits; you never reach the merits. Your plaint is thrown out, years later, having decided nothing.

**Section 9 is the door.** It says civil courts must hear every dispute of a civil nature — *unless* some statute has barred them. This section tells you which side of that door your case is on.
:::

### The Act, decompiled

> **9. Courts to try all civil suits unless barred.** — The Courts [[!shall]] (subject to the provisions herein contained) have jurisdiction to try all suits of a [[=civil nature]] excepting suits of which their cognizance is either **expressly** or **impliedly** barred.
>
> ***Explanation I.*** — A suit in which the right to property or to an office is contested is a suit of a civil nature, notwithstanding that such right [[?may]] depend entirely on the decision of questions as to religious rites or ceremonies.
>
> ***Explanation II.*** — For the purposes of this section, it is immaterial whether or not any fees are attached to the office referred to in Explanation I or whether or not such office is attached to a particular place.

Read one clause at a time, because the section is built out of four moving parts and only the last one ever gets litigated.

| The words | What they are doing |
|---|---|
| **"The Courts shall … have jurisdiction"** | A duty, not a discretion. A civil judge cannot decline a civil suit because it is small, stale, or unattractive. |
| **"(subject to the provisions herein contained)"** | A cross-reference. Section 9 opens the door; ss. 11, 15–20 and O. VII R. 11 can still close it. |
| **"all suits of a civil nature"** | The subject-matter test. "Civil" is nowhere defined — Explanation I supplies its colour. |
| **"excepting … expressly or impliedly barred"** | The only escape hatch, and the whole battleground. Two species of bar, and **the burden lies on whoever asserts one.** |

::: proviso Ouster of jurisdiction is never presumed
This is the single most useful principle in the section, and it is a *default rule*: the law starts from the assumption that the civil court **can** hear the case, and the person saying otherwise must prove it.

To succeed they must point to either —

**(a)** an express statutory provision excluding jurisdiction in terms; or
**(b)** a statute that creates a right **and** provides a self-contained machinery and remedy for enforcing it, from which exclusion is *necessarily* implied.

A vague appeal to "the scheme of the Act" is not enough. Neither is the mere existence of a tribunal that *could* have heard the matter.
:::

**What Explanation I does structurally.** It is an *inclusive deeming clause*, not a limitation. It forecloses the argument that a dispute becomes non-civil merely because its determination turns on religious questions. The touchstone is the **relief claimed**, not the questions incidentally decided. A suit to establish the right to perform *puja* and receive offerings is civil; a suit purely to declare that a particular ritual is doctrinally correct is not.

**What Explanation II does structurally.** It removes two spurious disqualifications from the concept of "office" in Explanation I — the absence of emoluments, and the absence of attachment to a place. A hereditary but unpaid, itinerant religious office is still an "office" for s. 9.

### How the section actually runs

<MicroTree
  input="A plaint is presented, and the defendant says the civil court cannot hear it"
  :gates="[
    {
      q: 'Is the principal relief claimed a civil right — property, office, money, status?',
      note: 'Look at the prayer clause, not at the questions the court will incidentally have to decide along the way.',
      no: 'Section 9 does not apply. A suit about pure ritual or doctrine, with no civil consequence, is outside the civil court'
    },
    {
      q: 'Does some statute expressly bar the civil court from this dispute?',
      note: 'Express bars are construed strictly — the bar extends only as far as the statute actually reaches.',
      no: 'Go to gate 3. Absence of an express bar is not the end; an implied bar may still exist'
    },
    {
      q: 'If not express — does a statute create a NEW right and in the same breath provide its own tribunal and remedy?',
      note: 'Where a statute creates a right and provides the remedy, that remedy is exclusive. A right that already existed at common law is not enough.',
      no: 'No implied bar either. The civil court hears the suit'
    },
    {
      q: 'Does the bar actually cover the RELIEF this plaintiff has claimed?',
      note: 'A Rent Controller may evict, but may not declare title. The tribunal must be competent to give the specific relief sought.',
      no: 'The bar misses. The civil court retains jurisdiction over the relief claimed'
    }
  ]"
  result="decline jurisdiction — the plaint is barred by law and liable to rejection under O. VII R. 11(d)"
  caveat="even a validly barred dispute leaves a residue with the civil court: it may still examine whether the tribunal acted without jurisdiction, breached fundamental principles of judicial procedure, or disregarded the statute. That residue must be specifically pleaded." />

### In plain English

**Sub-module A — "Suit of a civil nature".** A suit is of a civil nature if the *principal question* in it concerns the determination of a civil right — a right to property, to an office, to money, to status, to reputation. Contrast: suits concerning purely religious dogma, caste questions with no civil consequence, or matters of pure ritual.

**Sub-module B — The two bars.**

- **Express bar.** A statute says so in terms: "no civil court shall have jurisdiction to entertain…". Examples abound in tenancy, land revenue, industrial and consumer legislation. Even here, the bar is construed *strictly* and only extends to what the statute actually covers.
- **Implied bar.** No express words, but the statute creates a new right unknown to the common law *and* prescribes a particular tribunal and procedure for enforcing it. The rule is the familiar one: where a statute creates a right and in the same breath provides a remedy, that remedy is exclusive.

**Sub-module C — The residuary jurisdiction that survives every bar.** Even where jurisdiction is excluded, the civil court retains a narrow but vital competence to examine whether the statutory tribunal has:

1. acted in excess of, or without, jurisdiction;
2. failed to comply with the **fundamental principles of judicial procedure**; or
3. acted in disregard of the provisions of the statute itself.

This is the practitioner's escape route from an apparently fatal ouster clause, and it must be **specifically pleaded**.

**Sub-module D — Right versus remedy.** S.9 concerns the *forum*, not the *merits*. A plaintiff whose claim is hopeless still has the right to have it adjudicated by a civil court. Conversely, a plaintiff with an unanswerable claim has no right to choose a civil court where the legislature has assigned the dispute elsewhere.

::: tip Practitioner Takeaway
Plead affirmatively: *"The suit is one of a civil nature within the meaning of Section 9 of the Code of Civil Procedure, 1908. The cognizance of this Hon'ble Court is neither expressly nor impliedly barred by any statute for the time being in force."* A plaint that is silent on this invites an application under Order VII Rule 11(d).
:::

### Test your instinct

::::instinct The shop that may or may not be a tenancy

**The facts.** Anita sues Bharat in the civil court for possession of a shop. Her case is that Bharat is a **rank trespasser** who occupied the unit without any right whatsoever, and never paid a rupee of rent.

Bharat files an application under Order VII Rule 11(d). He says the State Rent Act vests *exclusive* jurisdiction over eviction in the Rent Controller, that he is a tenant, and that the civil court's jurisdiction is therefore expressly barred. He annexes two rent receipts.

**The question.** The Rent Act's ouster clause is admittedly valid and admittedly covers eviction of tenants. Must the civil judge return the plaint?

:::ruling
**No — and the reason is the most useful move in this entire section.**

Whether Bharat is a *tenant* is not the answer to the jurisdictional question. It is a **jurisdictional fact**: a fact on which the existence of jurisdiction itself depends. The Rent Act bars the civil court from evicting *tenants*. It says nothing about trespassers. So the bar only bites if Bharat is a tenant — which is precisely what the suit disputes.

A court cannot assume the fact that decides its own competence, and it certainly cannot decide it on two receipts annexed to an application. If it could, any defendant could oust the civil court by simply asserting the status that triggers the bar.

So the civil court **decides the jurisdictional fact itself.** If it finds a tenancy, the plaint goes; if it finds trespass, the suit proceeds to trial.

Two further points a good opponent will raise:

- An O. VII R. 11 application is decided on the **plaint alone**. Bharat's rent receipts are defence evidence and are simply not looked at at that stage. This is fatal to his application on its own footing.
- Bharat's better route was a preliminary issue on jurisdiction under Order XIV Rule 2 — where evidence *can* be led — not Rule 11.

**What you say in court:** *"The bar pleaded is conditional upon a jurisdictional fact — the existence of a tenancy — which is itself the matter in issue in this suit. A defendant cannot oust the jurisdiction of this Hon'ble Court by asserting the very fact the plaint denies."*
:::

::::

::::instinct The temple office

**The facts.** Chetan claims he is the hereditary *archaka* of a village temple and is entitled to the *thattukazhi* — a customary share of the offerings. The temple Board removes him and appoints another. Chetan sues in the civil court for a declaration of his right to the office and to the emoluments.

The Board's defence: the dispute turns entirely on which family is entitled under religious custom, and on the correctness of certain rituals. That is religion, not law. Section 9 does not reach it.

**The question.** Does the civil court have jurisdiction?

:::ruling
**Yes.** Explanation I was enacted for exactly this argument.

Separate two things that the Board is deliberately running together:

- **The relief claimed** — a right to an *office* and to *emoluments*. That is a civil right, as plainly as a claim to a field or a debt.
- **The questions incidentally decided** — which family holds the hereditary right under custom, what the rituals require.

Explanation I says the second does not contaminate the first. A suit contesting a right to property or to an office remains a suit of a civil nature *"notwithstanding that such right may depend entirely on the decision of questions as to religious rites or ceremonies."* Note the width of that phrase — **entirely**. Even if every single question the judge must answer is religious, jurisdiction survives, so long as the *right claimed* is civil.

Explanation II then closes the two obvious escape routes: it does not matter that the office carries no fees, and it does not matter that it is not attached to a particular place.

**Where the Board would have won.** If Chetan had sued merely for a declaration that a particular form of worship is doctrinally correct, claiming no office and no emolument, there would be no civil right in issue and no jurisdiction. The line is the *relief*, every time.

**What you say in court:** *"The right asserted is to an office and to the emoluments attached to it. Explanation I to Section 9 expressly preserves the civil nature of such a suit notwithstanding that it may depend entirely upon questions of religious rites."*
:::

::::

### Practitioner HUD

**The winning ratio — the one proposition to cite.**

> Even where a statute excludes the jurisdiction of the civil court, the exclusion is not complete: the civil court retains jurisdiction to examine whether the statutory authority acted **without jurisdiction**, in **breach of the fundamental principles of judicial procedure**, or in **disregard of the statute** itself.
> — *Dhulabhai v. State of M.P.*, AIR 1969 SC 78 (Constitution Bench)

**Sword and shield.**

| | How it is used |
|---|---|
| **Sword (Plaintiff)** | S. 9 is the plaintiff's charter. Invoke it to resist an ouster plea, to insist the burden lies on the defendant, and to argue that the special forum's competence does not extend to the *particular* relief claimed — a Rent Controller may evict, but may not declare title. |
| **Shield (Defendant)** | Deploy s. 9 in reverse: as the foundation of an O. VII R. 11(d) application, or as a preliminary issue under O. XIV R. 2, contending the plaint is "barred by law". |

**Limitation clock.** Section 9 carries no limitation period of its own — it is a gateway, not a cause of action. But the objection has its own timing rules: a plea of **inherent** lack of jurisdiction over subject-matter can be raised at *any* stage, including in execution and in appeal, and is not cured by consent or waiver. Contrast s. 21, where objections to the *place* of suing are lost unless taken at the earliest opportunity in the court of first instance.

**Drafting pitfalls.**

::: warning Do not plead the ouster as a bare conclusion
An application saying only "the civil court has no jurisdiction" will fail. You must identify the **statute**, the **section**, the **tribunal** it creates, and demonstrate that the **relief actually claimed in the plaint** falls within that tribunal's competence.

Two further traps on the same point:

- **Wrong vehicle.** O. VII R. 11 is decided on the plaint alone. If your bar depends on facts the plaint denies, you need a preliminary issue under O. XIV R. 2, where evidence can be led.
- **Overshooting.** Establishing that a tribunal can grant *some* of the relief claimed does not oust the civil court as to the rest. Match the bar to the prayer clause, relief by relief.
:::

::: story The service dispute — where the line actually falls
Deepa is employed by a statutory corporation and is terminated. Whether she can sue in the civil court turns on a single distinction that decides hundreds of these cases:

- If her grievance is breach of a **statutory** rule or regulation governing her service, the civil court's jurisdiction is ordinarily excluded in favour of the statutory machinery. The right she asserts was created by the statute, so the statute's remedy is exclusive.
- If her grievance is breach of a purely **contractual** term not sourced in statute, the civil court retains jurisdiction. A contractual right pre-existed the statute; nothing has been taken away.

The drafting consequence is immediate. If Deepa's counsel pleads the case as a breach of the service regulations, she is arguing herself out of court. If the same facts are pleaded as breach of the contract of employment, she is not. **The forum often follows the way you characterise the right, not just the facts.**
:::

#### Interlocking matrix — what this connects to

| Linked provision | How it interlocks with Section 9 |
|---|---|
| **O.VII R.11(d)** | Plaint "barred by law" — the primary vehicle for an express or implied bar. Decided on the **plaint alone**; the written statement is irrelevant. |
| **O.VII R.10** | Where the bar is one of *place of suing* rather than competence, the remedy is **return** of the plaint, not rejection. |
| **O.XIV R.2(2)(a)** | Jurisdiction may be tried as a **preliminary issue** where it is a pure question of law on admitted facts. |
| **S.11** | A finding on jurisdiction in an earlier suit may bind — but an *erroneous* decision on a question of law relating to jurisdiction does not operate as res judicata. |
| **S.21** | Distinguishes **inherent** want of jurisdiction (a nullity, raisable at any stage) from territorial/pecuniary irregularity (waivable). |
| **S.151** | Inherent power cannot confer jurisdiction that S.9 denies. |
| **Court fees** | Where a plaint is *rejected* under O.VII R.11, court fee is generally not refunded; where it is *returned* under O.VII R.10, the same plaint may be presented to the proper court. This is a material strategic difference. |

**Limitation.** S.9 raises no limitation question of its own, but note **Section 14 of the Limitation Act, 1963**: time spent bona fide prosecuting a civil proceeding in a court which, from defect of jurisdiction or other cause of a like nature, is unable to entertain it, is **excluded** in computing limitation for a fresh proceeding in the proper forum. Always claim this exclusion expressly when re-filing.

**Applications typically filed.**

- Application under O.VII R.11(d) for rejection of plaint (defendant).
- Application under O.XIV R.2 to try the jurisdictional issue as a preliminary issue.
- Application under O.VII R.10 for return of plaint.
- Reply affidavit by the plaintiff invoking the residuary jurisdiction to examine non-compliance with fundamental principles of judicial procedure.

#### The authorities

**Dhulabhai v. State of Madhya Pradesh, AIR 1969 SC 78** — *Constitution Bench (Hidayatullah, C.J.).*
*Facts (one line):* Dealers sought refund of sales tax levied under a provision later held ultra vires, and the State pleaded the bar in the taxing statute.
**Ratio Decidendi:** The Court laid down the governing propositions on exclusion of civil court jurisdiction. In substance: (i) where a statute gives finality to orders of a special tribunal, the civil court's jurisdiction is excluded if there is adequate remedy to do what the civil court would normally do — but even then the civil court may examine non-compliance with the provisions of the Act or with fundamental principles of judicial procedure; (ii) where there is an express bar, the adequacy of the statutory remedy is relevant but not decisive; (iii) a provision declared unconstitutional cannot be enforced, and a refund claim may lie in a civil suit; (iv) exclusion is not readily inferred.
::: tip Practitioner Takeaway
*"Even upon the assumption that the jurisdiction of this Hon'ble Court is excluded, the exclusion does not extend to an examination of whether the statutory authority has complied with the provisions of the Act and with the fundamental principles of judicial procedure — Dhulabhai."*
:::

**Secretary of State v. Mask & Co., AIR 1940 PC 105** — *Privy Council.*
*Facts:* Customs authorities levied additional duty; the assessee sued in the civil court despite a statutory finality clause.
**Ratio Decidendi:** Exclusion of the civil court's jurisdiction is not to be readily inferred; such exclusion must be either explicitly expressed or clearly implied. Even where jurisdiction is excluded, the civil court has jurisdiction to examine cases where the provisions of the Act have not been complied with, or the statutory tribunal has not acted in conformity with the fundamental principles of judicial procedure.
::: tip Practitioner Takeaway
The foundational sentence for every reply to an ouster plea: *exclusion must be explicitly expressed or clearly implied.*
:::

**Ganga Bai v. Vijay Kumar, (1974) 2 SCC 393** — *Three-Judge Bench.*
*Facts:* A dispute over the right to file a suit as against the right of appeal.
**Ratio Decidendi:** There is an inherent right in every person to bring a suit of a civil nature, and unless the suit is barred by statute one may, at one's peril, bring a suit of one's choice. It is no answer to say that no such suit will lie. The right of appeal, by contrast, is a creature of statute.
::: tip Practitioner Takeaway
*"The right to institute a suit of a civil nature is inherent; the bar must be shown, not assumed — Ganga Bai."*
:::

**Rajasthan State Road Transport Corporation v. Bal Mukund Bairwa (2), (2009) 4 SCC 299** — *Three-Judge Bench.*
*Facts:* A workman of a statutory corporation sued in the civil court challenging termination.
**Ratio Decidendi:** A distinction must be drawn between a claim founded on breach of a **statutory** rule or regulation governing conditions of service (where the statutory forum is ordinarily exclusive) and a claim founded on breach of **contract** or on violation of the principles of natural justice (where the civil court's jurisdiction may survive). The question of jurisdiction must be determined on the averments in the plaint.
::: tip Practitioner Takeaway
Frame the plaint on breach of contract and violation of natural justice, not on breach of statutory regulation, if you wish to remain in the civil court.
:::

**Most Rev. P.M.A. Metropolitan v. Moran Mar Marthoma, 1995 Supp (4) SCC 286** — *Three-Judge Bench.*
*Facts:* Long-running dispute over control of a church and its properties.
**Ratio Decidendi:** The expression "suits of a civil nature" is of wide import. The section is couched in the widest possible terms; the word "civil" relates to private rights and remedies of a citizen as distinguished from criminal, political, etc. The expansive language must not be whittled down.

::: info Verify before citing
The bench strength of *Dhulabhai* is recorded here as a Constitution Bench presided over by Hidayatullah, C.J.; confirm the exact composition and the numbering of the propositions from the authorised report before relying on them in argument. Reporter citations for *Ganga Bai*, *Bal Mukund Bairwa (2)* and *P.M.A. Metropolitan* should be checked against SCC Online or the official reports, and the current status of each judgment verified, before filing.
:::

#### Strategy and drafting

**Traps that cause rejection under Order VII Rule 11.**

1. **Omitting the jurisdiction paragraph.** Every plaint needs a dedicated paragraph asserting that the suit is of a civil nature and that cognizance is not barred. Its absence is an invitation.
2. **Pleading the statutory right you are trying to escape.** If you plead breach of a statutory regulation and then argue the civil court has jurisdiction, you have pleaded yourself out of court. Choose the juridical basis of the claim deliberately.
3. **Claiming a relief only the special tribunal can grant.** If the plaint prays for eviction under a Rent Act, no amount of drafting saves it. Reframe the relief, or accept the forum.
4. **Ignoring the notice provisions.** Where the defendant is the Government or a public officer, S.80 notice is a separate and independent bar; a plaint bad under S.80 is rejected regardless of S.9.

**Strategic timing.**

- An **inherent** want of jurisdiction (subject-matter) can be raised at **any stage**, including in appeal, in execution, and collaterally. It is never waived.
- A defendant who wishes to knock out the suit at the threshold should move under **O.VII R.11(d) before filing the written statement**, so that the court is confined to the plaint.
- A plaintiff resisting the application should insist that the court look only at the plaint averments and that disputed jurisdictional facts require evidence — which defeats a Rule 11 application.
- If the ouster succeeds, immediately invoke **S.14 of the Limitation Act** when approaching the correct forum, and plead the dates of institution and return with particularity.

**Model plea checklist — plaintiff's jurisdiction paragraph.**

- [ ] The suit is one of a civil nature within S.9 CPC.
- [ ] The principal relief claimed is the enforcement of a civil right, namely _______.
- [ ] No statute expressly bars the cognizance of this Hon'ble Court.
- [ ] No statute creates the right sued upon together with an exclusive remedy such that a bar arises by necessary implication.
- [ ] In the alternative and without prejudice, the impugned action is in breach of the provisions of the said Act and of the fundamental principles of judicial procedure, and is therefore examinable by this Hon'ble Court notwithstanding any ouster.
- [ ] The suit is within pecuniary and territorial jurisdiction (Ss. 15–20), and is valued and stamped accordingly.

**Model plea checklist — defendant's ouster application.**

- [ ] Identify the statute and the specific ouster provision, quoted verbatim.
- [ ] Identify the tribunal created and its competence.
- [ ] Demonstrate, relief by relief, that each prayer in the plaint falls within that tribunal's competence.
- [ ] Establish that the statutory remedy is adequate.
- [ ] Confine the argument to the averments in the plaint; do not rely on the written statement.

## Section 10 — Stay of suit (*res sub judice*)

### The dispute this solves

::: oneminute Two courts, one quarrel
Anita and Bharat are already fighting in the Pune court about whether her lease is valid. Three weeks later, Bharat files a *second* suit — in the same building, before a different judge — asking for a declaration that the very same lease was obtained by fraud.

Two judges are now being asked the same question about the same document between the same two people. Three things can go wrong, and all of them are bad:

- The two judges may reach **opposite conclusions**, so the lease is simultaneously valid and void.
- Anita has to fight the same battle **twice**, at double the cost, with the same evidence and the same witnesses.
- Whoever loses the first case simply carries on in the second, so nothing is ever finally settled.

**Section 10 stops this.** When the same matter is already being litigated between the same parties in a competent court, the later suit's trial is put on hold until the earlier one is done. The Latin tag is *res sub judice* — "a matter under judgment".

One word does almost all the work in this section, and it is **trial**. Section 10 does not stop the later suit being *filed*, and it does not stop the judge granting an urgent injunction in it. It stops the *trial*. Hold on to that and the rest of the section follows.
:::

### The Act, decompiled

> **10. Stay of suit.** — No Court [[!shall]] proceed with the **trial** of any suit in which the matter in issue is also [[=directly and substantially]] in issue in a **previously instituted** suit between the same parties, or between parties under whom they or any of them claim litigating under the **same title** where such suit is **pending** in the same or any other Court in India having jurisdiction to grant the relief claimed, or in any Court beyond the limits of India established or continued by the Central Government and having like jurisdiction, or before the Supreme Court.
>
> ***Explanation.*** — The pendency of a suit in a foreign Court does not preclude the Courts in India from trying a suit founded on the same cause of action.

| The words | What they are doing |
|---|---|
| **"No Court shall proceed"** | Mandatory *and* prohibitory. Once the conditions are met the stay is not a favour — the court has no option. |
| **"with the trial"** | The limiting word, and the most important one in the section. The bar attaches to the **trial** — not to institution, not to interlocutory orders. |
| **"previously instituted"** | Priority is fixed by the date of **institution**, not by the date of service or of appearance. The suit filed first wins, even if served second. |
| **"directly and substantially in issue"** | Not mere overlap. The matter must be the substantial subject of controversy in *both*. |
| **"same parties … under the same title"** | Privity suffices, but identity of **capacity** is essential. |
| **"jurisdiction to grant the relief claimed"** | The earlier court must be competent to grant the relief claimed in the **later** suit — not merely competent generally. |

::: proviso The Explanation is a carve-out, not an extension
Foreign *lis pendens* is **no bar**. An Indian court may try a suit on the same cause of action even though a suit between the same parties is pending in a foreign court.

Do not confuse this with Section 13. Section 10 is about a foreign suit still *running* — irrelevant. Section 13 is about a foreign court that has already *decided* — highly relevant, and conclusive except on six grounds.
:::

::: danger The misconception that costs cases
Section 10 does **not** oust jurisdiction, and a decree passed in contravention of it is **not a nullity**.

It is a mere irregularity, and the objection **can be waived**. An advocate who lets the trial proceed and raises Section 10 for the first time in appeal will find the point has evaporated entirely.

Contrast Section 11, which goes to the court's very competence to adjudicate and can be raised at any stage. The two sections look like cousins and behave like strangers.
:::

### How the section actually runs

<MicroTree
  input="A suit is filed, and the defendant says an earlier suit about the same thing is already pending"
  :gates="[
    {
      q: 'Are there two suits, one instituted BEFORE the other?',
      note: 'Priority runs from the date of institution — not service, not appearance.',
      no: 'Section 10 has nothing to bite on'
    },
    {
      q: 'Is the matter in issue directly and substantially in issue in BOTH?',
      note: 'Compare the whole subject-matter in controversy, not isolated issues. Practical test: would a decision in the earlier suit operate as res judicata in the later one?',
      no: 'No stay under s. 10 — but consider consolidation, or a discretionary stay under s. 151'
    },
    {
      q: 'Same parties, or parties claiming under them — and litigating in the SAME CAPACITY?',
      note: 'Suing personally in one suit and as karta, trustee or administrator in the other is NOT the same title.',
      no: 'No stay under s. 10. The identity requirement fails'
    },
    {
      q: 'Is the earlier suit still PENDING in a court in India, a Central Government court abroad, or the Supreme Court?',
      note: 'A foreign court does not count — see the Explanation. And a decided suit is s. 11 territory, not s. 10.',
      no: 'No stay. If the earlier suit is decided rather than pending, you are arguing res judicata under s. 11'
    },
    {
      q: 'Is that earlier court competent to grant the relief claimed in the LATER suit?',
      note: 'Competence is measured against the relief sought in the subsequent suit, not the earlier one.',
      no: 'No stay. The earlier court cannot give what the later suit asks for'
    }
  ]"
  result="stay the TRIAL of the later suit — the stay is automatic, not discretionary"
  caveat="the later suit is not dismissed and is not struck off. The plaint may still be registered, summons issued, the written statement taken on record, interim injunctions and attachment before judgment granted, and the suits consolidated. Only the trial halts." />

### In plain English

**Sub-module A — What the section is for.** Its object is threefold: to prevent courts of concurrent jurisdiction from simultaneously trying parallel suits; to avoid conflicting decrees; and to protect the defendant from the vexation of being twice harassed on the same matter. It is a rule of procedure and comity, not of jurisdiction.

**Sub-module B — "Trial" is a term of art here.** The prohibition bites only on the trial. Accordingly the subsequent court may still:

- receive and register the plaint;
- issue summons and take the written statement on record;
- pass **interlocutory orders**, including temporary injunctions under O.XXXIX and attachment before judgment under O.XXXVIII;
- consolidate the suits;
- decide an application for leave to defend in a summary suit under Order XXXVII.

**Sub-module C — "Directly and substantially in issue".** The comparison is between the **whole subject-matter in controversy**, not between isolated issues. If some issues are common but the substantial controversies differ, S.10 does not apply. A useful practical test: *would a decision in the earlier suit operate as res judicata in the later one?* If yes, S.10 almost certainly applies; if no, it almost certainly does not.

**Sub-module D — "Litigating under the same title".** Same title means same capacity. A person suing in his personal capacity in Suit 1 and as a *karta* or trustee or administrator in Suit 2 is not litigating under the same title, and S.10 does not apply.

**Sub-module E — Section 10 versus consolidation versus Section 151.** Where the strict conditions of S.10 are not met but two suits substantially overlap, the court is not helpless. It may:

- **consolidate** the suits and try them together with common evidence; or
- stay the later suit in exercise of its **inherent power under S.151**, which is discretionary and not confined by the five conditions.

This is the most useful practical point in the whole section: when S.10 fails on a technicality, plead S.151 in the alternative.

**Sub-module F — Section 10 contrasted with Section 11.**

| | **Section 10** | **Section 11** |
|---|---|---|
| State of earlier proceeding | **Pending** | **Decided** |
| Effect | Stay of trial | Absolute bar on trying the suit or issue |
| Nature | Procedural; waivable; decree not a nullity | Fundamental; goes to the court's competence to adjudicate |
| Applies to | Suits only | Suits, issues and (via Explanation VII) execution proceedings |
| When raisable | Before the trial court proceeds; effectively lost thereafter | At any stage, including for the first time in appeal |
| Foreign proceedings | Foreign *lis pendens* is no bar (Explanation) | Foreign *judgments* governed by S.13 |

### Test your instinct

::::instinct The two suits that are the same quarrel wearing different hats

**The facts.** Anita and Bharat signed an agreement under which Bharat would sell Anita a plot in Nagpur. Anita sues at Nagpur for specific performance — she wants the sale deed executed.

Three weeks later, Bharat files his own suit at Nagpur. His case is that Anita procured the very same agreement by fraud, that it is void, and that it should be cancelled.

Anita's counsel applies under Section 10 to stay Bharat's later suit.

**The question.** The two plaints ask for opposite things — one to enforce the agreement, one to destroy it. The prayers are not the same, the causes of action are pleaded differently, and the parties have swapped sides. Does Section 10 apply?

:::ruling
**Yes, and the swap of sides is a distraction.**

Run the five gates in order and it falls out cleanly:

1. **Two suits, one earlier.** Anita's is prior. Satisfied.
2. **Directly and substantially in issue in both.** This is the gate that matters, and this is where beginners go wrong by comparing *prayers*. The section compares the **matter in issue**, not the relief. Both courts have to decide one and the same thing: is this agreement a valid, enforceable contract? Anita cannot win without it; Bharat cannot win with it. Same substantial controversy. Satisfied.
3. **Same parties, same title.** Anita and Bharat in both, each in his and her personal capacity. That one is plaintiff here and defendant there is irrelevant — the section says "same parties", not "same alignment". Satisfied.
4. **Earlier suit pending in a qualifying court.** Both at Nagpur. Satisfied.
5. **Earlier court competent to grant the relief claimed in the later suit.** The Nagpur court trying the specific performance suit can equally declare the agreement void and cancel it — indeed it must decide that very question to dispose of Anita's suit. Satisfied.

All five gates pass, so the court has **no discretion**. The trial of Bharat's later suit is stayed.

**But notice what Bharat has not lost.** His suit is not dismissed. It sits on the file. And here is the strategic point most defendants miss: Bharat did not actually need a second suit at all. Everything he wants — a finding of fraud, cancellation — is available to him as a **defence plus a counter-claim under Order VIII Rule 6A** in Anita's suit. Filing separately bought him nothing and cost him the initiative.

**What you say in court:** *"The matter directly and substantially in issue in both suits is the validity and enforceability of one and the same agreement. The reversal of array is immaterial; Section 10 speaks of the same parties, not of the same alignment of parties."*
:::

::::

::::instinct The bank that wanted its stay to stop everything

**The facts.** Anita banks with a lender that has debited her loan account with charges she says were never agreed. She sues the bank at Pune for a declaration and for recasting of the account.

Two months later, the bank sues her at Mumbai under **Order XXXVII** — the summary-suit procedure — to recover the outstanding amount. Under Order XXXVII, Anita cannot defend at all unless the Mumbai court first grants her **leave to defend**; if leave is refused, the bank gets a decree almost immediately.

Anita applies under Section 10 to stay the Mumbai suit. Everyone accepts, for the purpose of this problem, that all five conditions of Section 10 are met.

**The question.** Anita's counsel argues the Mumbai court must down tools entirely and must not even take up the leave-to-defend application. Is that right?

:::ruling
**No — and this is the single most-tested proposition on Section 10.**

The section bars the court from proceeding with the **trial**. It does not bar the *suit*. The word was chosen, and the Supreme Court in *Indian Bank v. Maharashtra State Coop. Marketing Federation* held in terms that "trial" here is **not used in its widest sense**.

So the Mumbai court may still:

- register the plaint and issue summons;
- take the written statement on record;
- grant or refuse an injunction under Order XXXIX, or attachment before judgment under Order XXXVIII;
- consolidate the suits;
- and — the point in issue — **decide the application for leave to defend**, because dealing with that application is not proceeding with the trial.

**Why this is genuinely dangerous, not a technicality.** If the Mumbai court refuses leave to defend, the bank is entitled to judgment. Anita's Section 10 stay will have protected her from a trial she was never going to get in the first place, while the decree lands anyway. A stay under Section 10 is not a pause button on the litigation.

**What Anita's counsel should actually have done.** Fought the leave-to-defend application on its merits *first* — the Pune plaint is itself powerful material showing a triable issue — and pursued Section 10 in parallel, not instead. Better still, applied under **Section 22 or Section 25** to transfer the Mumbai suit to Pune so that one court decides everything.

**What you say in court:** *"Section 10 bars the trial alone. This Hon'ble Court retains full power to pass interlocutory orders and to decide the application for leave to defend — Indian Bank v. Maharashtra State Coop. Marketing Federation, (1998) 5 SCC 69."*
:::

::::

### Practitioner HUD

**The winning ratio — the one proposition to cite.**

> The word "trial" in Section 10 is **not** used in its widest sense. Section 10 bars only the *trial* of the subsequent suit — not its institution, not the passing of interlocutory orders, and not the decision of an application for leave to defend in a summary suit.
> — *Indian Bank v. Maharashtra State Cooperative Marketing Federation Ltd.*, (1998) 5 SCC 69

**Sword and shield.**

| | How it is used |
|---|---|
| **Sword (Plaintiff)** | Rarely offensive. Its value is to the plaintiff in the **earlier** suit, who uses it to stop the defendant from racing to a competing decree elsewhere and to force the whole quarrel back into the forum of first choice. |
| **Shield (Defendant)** | This is the defendant's provision. Faced with a second suit on the same controversy, apply under **S. 10 read with S. 151** at the earliest opportunity — before the written statement if possible, and always before issues are settled — annexing certified copies of both plaints. |

**Limitation clock.** Section 10 raises no independent limitation question: the later suit is already instituted, and limitation is judged as at institution. The consequence is worth stating positively — because the later suit is only **stayed and not dismissed**, the plaintiff's limitation position is frozen and preserved. That is exactly why a defendant should press S. 10 rather than manoeuvre the plaintiff into a withdrawal, which would let time run again.

But the section has its own clock of a different kind: the objection is **procedural and waivable**. Sit on it, let the trial conclude, and the decree stands — see *Pukhraj D. Jain* below. There is no fixed number of days; the deadline is the moment the trial court starts proceeding.

**Court fee.** A stay under S. 10 has no court-fee consequence — the plaint stays on file, fully stamped. Contrast withdrawal under O. XXIII, where fresh court fee is payable on any subsequent plaint.

**Drafting pitfalls.**

::: warning An application without the earlier plaint is worthless
The court's task under S. 10 is a **comparison**. It cannot compare what it has not seen. An application that does not annex a **certified copy of the plaint in the earlier suit** will be dismissed on that ground alone.

Annex, every time: both plaints, both sets of issues if settled, and a comparative table with columns for parties, capacity, cause of action, matter in issue, relief claimed and date of institution.

Three further traps on the same page:

- **Confusing overlap with identity.** Partial overlap of issues does not attract S. 10. File for **consolidation** instead — a failed S. 10 application hands your opponent a finding to quote back at you.
- **Ignoring capacity.** Same human beings is not the same title. Check both suits.
- **Forgetting the fifth gate.** The earlier court must be competent to grant the relief claimed in the **later** suit — not merely competent generally.
:::

::: story Where Section 10 quietly fails — two cases worth memorising
**Overlap is not identity.** Anita sues Bharat for a permanent injunction restraining interference with her possession of the shop. Later she sues him for arrears of rent for an earlier period. Possession is the controversy in the first; the rate and quantum of rent in the second. There are common questions — there always are between the same two people — but the substantial controversies are different. **S. 10 does not apply.** Apply for consolidation under S. 151, and if the suits are in different courts, for transfer under S. 24.

**Capacity is a wall.** Chetan sues Deepa in his personal capacity to recover a loan he made her. Later, as executor of his father's will, he sues her on a different debt owed to his father's estate. The names on the cause-title are identical. The **titles** are not: one is Chetan the individual, the other is Chetan the executor, who represents a different set of interests and answers to different beneficiaries. **S. 10 does not apply.**

The lesson in both: when S. 10 fails on a technicality, the court is not helpless and neither are you. Plead **S. 151** in the alternative for a discretionary stay, and **consolidation** as the fallback. A judge who cannot give you S. 10 will very often give you consolidation.
:::

#### Interlocking matrix — what this connects to

| Linked provision | How it interlocks with Section 10 |
|---|---|
| **S.151** | The residual power to stay where S.10's strict conditions fail. Always plead in the alternative. |
| **S.11** | S.10 prevents the very conflict that S.11 would otherwise have to resolve. When the earlier suit is decided, S.10 falls away and S.11 takes over. |
| **O.XXXIX R.1–2** | Interim injunctions **may** still be granted in the stayed suit — the stay bites only on trial. |
| **O.XXXVIII R.5** | Attachment before judgment likewise survives the stay. |
| **O.XXXVII** | Leave to defend may be decided notwithstanding a S.10 stay. |
| **O.XIV R.1–2** | The S.10 application should ordinarily be decided **before** settlement of issues. |
| **O.XXIII R.1** | Withdrawal of the later suit is often the cleaner strategic solution, but seek liberty under R.1(3) or the claim is lost. |
| **Ss. 22–25** | Where the two suits are in different courts, **transfer** and consolidation is frequently a better remedy than a stay. A S.25 transfer petition before the Supreme Court is the route where the suits are in different States. |
| **S.10 CPC vs S.8 Arbitration and Conciliation Act, 1996** | Where the earlier proceeding is an arbitration, S.10 has no application; the correct application is under S.8 of the 1996 Act. |

**Limitation.** Section 10 raises no independent limitation issue — the later suit is already instituted and limitation is judged as at institution. But note the practical consequence: because the later suit is only *stayed* and not dismissed, the plaintiff's limitation position is preserved. This is precisely why a defendant should prefer S.10 over inviting a withdrawal.

**Court fee.** A stay under S.10 has no court fee consequence. The plaint remains on file, fully stamped. Contrast withdrawal under O.XXIII, where fresh court fee will be payable on any subsequent plaint.

**Applications typically filed.**

- Application under S.10 read with S.151 for stay of trial (defendant), annexing certified copies of both plaints.
- Application under S.151 for **consolidation** of the two suits (either party) — often the outcome the court actually prefers.
- Transfer petition under S.24 (High Court/District Court) or S.25 (Supreme Court) to bring both suits before one court.

#### The authorities

**Indian Bank v. Maharashtra State Cooperative Marketing Federation Ltd., (1998) 5 SCC 69** — *Two-Judge Bench.*
*Facts:* A summary suit under Order XXXVII was sought to be stayed under S.10 on account of an earlier pending suit; the question was whether the court could decide the application for leave to defend.
**Ratio Decidendi:** The word "trial" in Section 10 is **not** used in its widest sense. Section 10 bars only the *trial* and not the institution of a suit or the passing of interlocutory orders. In a summary suit, dealing with an application for leave to defend is not "proceeding with the trial", and the bar of Section 10 does not operate at that stage.
::: tip Practitioner Takeaway
*"Section 10 bars the trial alone. This Hon'ble Court retains full power to pass interlocutory orders and to decide the application for leave to defend — Indian Bank v. Maharashtra State Coop. Marketing Federation."*
:::

**National Institute of Mental Health & Neuro Sciences v. C. Parameshwara, (2005) 2 SCC 256** — *Two-Judge Bench.*
*Facts:* Parallel proceedings; the applicability of S.10 was in question.
**Ratio Decidendi:** The object of Section 10 is to prevent courts of concurrent jurisdiction from simultaneously trying two parallel suits in respect of the same matter in issue, to avoid conflicting decisions, and to protect a defendant from multiplicity of proceedings. The section is mandatory once its conditions are satisfied, but those conditions must be **strictly** established; the matter in issue in both suits must be **entirely** the same.
::: tip Practitioner Takeaway
*"The matter in issue must be substantially the whole subject-matter in controversy in both suits; a partial overlap of issues will not attract Section 10."*
:::

**Pukhraj D. Jain v. G. Gopalakrishna, (2004) 7 SCC 251** — *Two-Judge Bench.*
*Facts:* A decree was challenged on the ground that it had been passed in breach of Section 10.
**Ratio Decidendi:** Section 10 does not create a bar on the **jurisdiction** of the court to try the subsequent suit; it merely lays down a rule of procedure. A decree passed in contravention of Section 10 is **not a nullity** and cannot be disregarded in execution or collateral proceedings. The objection is one that can be waived.
::: danger Fatal Error
This is the trap that ends careers in a given case. If you do not press your Section 10 application and allow the trial to conclude, the resulting decree stands. Move early, press for an order, and if refused, challenge it — do not sit on it.
:::

**Aspi Jal v. Khushroo Rustom Dadyburjor, (2013) 4 SCC 333** — *Two-Judge Bench.*
*Facts:* Successive eviction suits between the same landlord and tenant founded on different periods of default.
**Ratio Decidendi:** For Section 10 to apply, the "matter in issue" must be directly and substantially in issue in both suits — meaning the **entire subject-matter in controversy**, not merely one of several issues. Where the causes of action relate to distinct periods or distinct defaults, the matters in issue are not the same and Section 10 is not attracted.
::: tip Practitioner Takeaway
Use this authority both ways: to defeat an opponent's S.10 application by isolating the distinct controversies, and to caution your own client against relying on incidental overlap.
:::

::: info Verify before citing
The reporter citations above are given as commonly reported; confirm each against SCC Online or the official reports, and check the current status of *Pukhraj D. Jain* and *Aspi Jal*, before relying on them. Bench strengths stated as two-judge benches should be verified from the judgment itself.
:::

#### Strategy and drafting

**Traps and how they defeat you.**

1. **Raising Section 10 late.** The objection is procedural and waivable. Raise it **before issues are settled**, in writing, and obtain an order. Silence is consent.
2. **Failing to annex the earlier plaint.** Without a certified copy the court cannot make the comparison the section demands. The application will be dismissed on that ground alone.
3. **Confusing overlap with identity.** Do not file a Section 10 application on partial overlap; you will lose it and hand your opponent an adverse finding to cite later. File for **consolidation** instead.
4. **Ignoring capacity.** Check whether the parties litigate under the same title in both suits. A change of capacity destroys the application.
5. **Forgetting the earlier suit must be competent to grant the relief claimed in the later suit.** If the earlier court could not grant the relief now claimed, S.10 fails.
6. **Assuming the stay stops everything.** It does not. Your opponent can still obtain an injunction against your client in the stayed suit. Continue to defend interlocutory applications vigorously.

**Strategic timing and sequencing.**

- **Step 1.** On receipt of summons in the later suit, obtain certified copies of the plaint and proceedings in the earlier suit.
- **Step 2.** Prepare a comparative table: parties, capacity, cause of action, matter in issue, relief claimed, date of institution.
- **Step 3.** File the application under **S.10 read with S.151** *before* filing the written statement if possible, and in any event before settlement of issues.
- **Step 4.** Plead consolidation and transfer in the alternative, so that the court has a workable option even if strict S.10 fails.
- **Step 5.** If the application is dismissed, consider a revision under S.115 or a petition under Article 227 promptly — the point will not survive the decree.

**Model prayer checklist — application under Section 10 read with Section 151.**

- [ ] That this Hon'ble Court be pleased to **stay the trial** of the present suit being Suit No. ____ of ____ during the pendency of the previously instituted Suit No. ____ of ____ pending before ____;
- [ ] **In the alternative**, that this Hon'ble Court be pleased to **consolidate** the said suits and try them together on common evidence;
- [ ] **In the further alternative**, that this Hon'ble Court be pleased to stay the trial in exercise of its inherent powers under Section 151 of the Code;
- [ ] That pending the hearing and final disposal of this application, the trial of the present suit be stayed;
- [ ] For costs; and for such further and other reliefs as the nature and circumstances of the case may require.

**Supporting affidavit must depose to:**

- [ ] The date of institution of each suit (to establish priority).
- [ ] That the parties are the same or claim under the same persons, **and litigate under the same title**.
- [ ] That the matter directly and substantially in issue is the same, with a paragraph-by-paragraph comparison.
- [ ] That the earlier court has jurisdiction to grant the relief claimed in the later suit.
- [ ] That the earlier suit is **still pending** as on the date of the application.

## Section 11 — Res judicata

### The dispute this solves

::: oneminute A fight that was already finished
Anita sued Bharat over the boundary between their two plots. The suit ran for four years. Evidence was led, a surveyor was examined, and in 2019 the court held the boundary lies where Bharat says it lies. Anita did not appeal. The decree became final.

In 2024 Anita files a fresh suit against Bharat about the same strip of land. This time she frames it differently — she pleads adverse possession instead of title, and asks for an injunction instead of a declaration. New lawyer, new theory, new prayer clause. Same strip of land, same two neighbours.

**The problem in plain English:** if Anita is allowed to do this, Bharat's win means nothing. He can be dragged back to court on the same quarrel every time somebody thinks of a new legal argument. There would be no end to any dispute, and no such thing as a final judgment.

Section 11 is the rule that shuts that door. Its formal name is *res judicata* — "a matter already adjudged". It says: **once a court that was competent to decide something has heard it out and decided it between these parties, no court may try it again.**

Two things make this section harder than it looks, and both are worth knowing before you read a word of the text.

**First, it bars more than the claim you actually made.** Explanation IV extends the bar to anything you *might and ought to have* raised the first time and did not. Anita's adverse-possession plea was available to her in 2015. She did not run it. That is not a fresh start; that is a point she has already lost by not taking it.

**Second, "former" does not mean "filed first".** It means **decided first**. A suit filed after yours, but decided before yours, becomes the "former suit" — and bars yours.
:::

::: story Why the law is so severe about this
Three Latin maxims sit behind the section, and they are worth knowing because judges quote them and because each explains a different part of the machinery.

- **Nemo debet bis vexari pro una et eadem causa** — no one should be vexed twice for the same cause. This is the *private* justice reason: Bharat is entitled to peace.
- **Interest reipublicae ut sit finis litium** — it is in the interest of the State that there be an end to litigation. This is the *public* reason: court time is a finite resource, and a system that re-tries settled quarrels serves nobody.
- **Res judicata pro veritate accipitur** — a matter adjudged is taken as truth. This is the *evidentiary* reason, and the boldest of the three. The law does not ask whether the 2019 judgment was correct. It treats it as true. That is why a decision that is plainly wrong still binds, so long as it was final and not appealed.

Hold on to the third maxim. It explains the answer to almost every "but the first judge got it wrong" argument you will ever hear on this section.
:::

### The Act, decompiled

The operative sentence is a single 90-word clause. Read whole, it is impenetrable. Broken at its joints, it is a checklist. Here it is with the load-bearing words marked — [[!shall]] is a command the court has no choice about, and [[=terms of art]] are words with a technical meaning that is not their everyday one.

> **11. Res judicata.** —
>
> No Court [[!shall]] try **any suit or issue** …
>
> … in which the matter [[=directly and substantially in issue]] …
>
> … has been [[=directly and substantially in issue]] in a **former suit** …
>
> … between the **same parties**, or between parties under whom they or any of them claim, …
>
> … [[=litigating under the same title]], …
>
> … in a Court **competent to try such subsequent suit** or the suit in which such issue has been subsequently raised, …
>
> … and has been [[=heard and finally decided]] by such Court.

Every ellipsis above is an "and". There is no "or" anywhere in that sentence. Drop one link and the whole bar fails.

**Then eight Explanations, each fixing a hole a litigant would otherwise exploit.**

> ***Explanation I.*** — The expression "former suit" shall denote a suit which has been decided prior to the suit in question whether or not it was instituted prior thereto.
>
> ***Explanation II.*** — For the purposes of this section, the competence of a Court shall be determined irrespective of any provisions as to a right of appeal from the decision of such Court.
>
> ***Explanation III.*** — The matter above referred to must in the former suit have been alleged by one party and either denied or admitted, expressly or impliedly, by the other.
>
> ***Explanation IV.*** — Any matter which might and ought to have been made ground of defence or attack in such former suit shall be deemed to have been a matter directly and substantially in issue in such suit.
>
> ***Explanation V.*** — Any relief claimed in the plaint, which is not expressly granted by the decree, shall, for the purposes of this section, be deemed to have been refused.
>
> ***Explanation VI.*** — Where persons litigate bona fide in respect of a public right or of a private right claimed in common for themselves and others, all persons interested in such right shall, for the purposes of this section, be deemed to claim under the persons so litigating.
>
> ***Explanation VII.*** — The provisions of this section shall apply to a proceeding for the execution of a decree and references in this section to any suit, issue or former suit shall be construed as references, respectively, to a proceeding for the execution of the decree, question arising in such proceeding and a former proceeding for the execution of that decree.
>
> ***Explanation VIII.*** — An issue heard and finally decided by a Court of limited jurisdiction, competent to decide such issue, shall operate as res judicata in a subsequent suit, notwithstanding that such Court of limited jurisdiction was not competent to try such subsequent suit or the suit in which such issue has been subsequently raised.

**The eight Explanations at a glance.** Before the detail, a map. Each Explanation exists because somebody once found a way around the main sentence.

| | It says | The loophole it closes |
|---|---|---|
| **I** | "Former" = decided first, not filed first | Racing to file first, then stalling |
| **II** | Competence judged ignoring rights of appeal | "That court's decree was appealable, so it wasn't really competent" |
| **III** | The matter must have been alleged and denied or admitted | Treating something nobody ever raised as "decided" |
| **IV** | What **might and ought** to have been pleaded counts as decided | Holding back a good point to use in a second suit |
| **V** | Relief claimed but not granted is **deemed refused** | Suing again on a prayer the decree simply ignored |
| **VI** | Representative litigation binds all interested | Members of a class re-fighting a lost public-right case one by one |
| **VII** | The section applies to **execution** proceedings | Re-arguing the same objection at every stage of execution |
| **VIII** | A limited-jurisdiction court's decided issue binds | "That was only a small-causes court, so its finding is worthless" |

**The words, and what they are doing.**

| Operative expression | Character | Consequence |
|---|---|---|
| "**No Court shall try**" | **Mandatory, prohibitory** | Absolute. Unlike S.10, this is not a mere rule of procedure — it goes to the court's authority to adjudicate the matter at all. |
| "any suit **or issue**" | Dual operation | Res judicata operates **suit-wise** (barring the whole suit) and **issue-wise** (barring re-agitation of a decided issue in a suit that otherwise proceeds). |
| "the matter **directly and substantially** in issue" | Identity requirement | Excludes matters collaterally or incidentally in issue. |
| "in a **former suit**" | Defined by Explanation I | Priority is fixed by **date of decision**, not date of institution. |
| "between the **same parties** … or … parties under whom they … claim" | Identity of parties | Extends to privies — by blood, title or estate. |
| "**litigating under the same title**" | Identity of capacity | Same capacity in both proceedings. |
| "in a **Court competent to try such subsequent suit**" | Competence requirement | The *former* court must have been competent to try the *subsequent* suit — subject now to Explanation VIII. |
| "has been **heard and finally decided**" | Finality requirement | A decision on the merits, finally disposing of the matter. |

**The seven cumulative conditions.** Every one must be established, and the burden lies on the party pleading the bar:

1. The matter directly and substantially in issue in the subsequent suit must have been directly and substantially in issue in the former suit.
2. The former suit must have been between the **same parties** or parties under whom they or any of them claim.
3. The parties must have litigated under the **same title**.
4. The court that decided the former suit must have been **competent to try the subsequent suit** (subject to Explanation VIII).
5. The matter must have been **heard and finally decided**.
6. There must have been a decision **on the merits**.
7. The former decision must be **final** and subsisting (not set aside, and not superseded on appeal).

::: danger Fatal Error
Res judicata is a **plea in bar that must be specifically pleaded, particularised and proved**. It is not a point that can be sprung in argument. You must plead it in the written statement with the number and year of the former suit, the court, the parties, the issues, and the date of decision — and you must **produce the pleadings, issues, judgment and decree** of the former suit in evidence. A plea of res judicata without the former record on the file will fail, however meritorious.
:::

::: proviso There is no proviso — and that is the point
Section 11 has no proviso, no "unless", and no saving clause. Compare Section 9, which is built around an exception ("excepting suits of which their cognizance is expressly or impliedly barred"), or Section 10, whose Explanation carves foreign suits out.

Section 11 admits of no carve-out at all. Once the seven conditions are met, the bar is absolute, and the court has no discretion to relax it because the result seems harsh or because the first decision was wrong. The only escape routes lie **outside** the section: showing that one of the seven conditions is not in fact satisfied, or attacking the former decree itself as obtained by **fraud** (which is a nullity and binds nobody) or as passed by a court wholly **without jurisdiction** (*coram non judice*).

Those two exceptions are not in the text. They come from first principles, and they are the only two you will ever need.
:::

### How the section actually runs

Seven gates, all conjunctive. Any single failure and the later suit proceeds normally — there is no partial bar and no discretion.

<MicroTree
  input="A suit or an issue comes up, and one side says a court has already decided this very thing"
  :gates="[
    { q: 'Is there an earlier DECIDED proceeding — not merely an earlier filed one?', note: 'Explanation I: priority is fixed by the date of the decree, not the date of institution. A suit filed later but decided first is the former suit.', no: 'Nothing has been adjudged yet. Section 11 cannot apply. If the other proceeding is still pending, your provision is Section 10, not Section 11.' },
    { q: 'Was the matter directly and substantially in issue in BOTH — not merely collateral or incidental in one of them?', note: 'Explanation III requires it to have been alleged by one side and denied or admitted by the other. Explanation IV extends this to what might and ought to have been raised.', no: 'A finding given only collaterally or incidentally does not bind. Neither does an observation on a point nobody pleaded.' },
    { q: 'Same parties, or persons claiming under them?', note: 'Privies count — heirs, purchasers, assignees, transferees pendente lite. Explanation VI extends it to everyone interested in a bona fide representative or public-right suit.', no: 'A stranger to the former suit is not bound by it, and cannot be shut out by it.' },
    { q: 'Were they litigating under the same TITLE — the same capacity?', note: 'Personally in one suit and as karta, trustee, executor or partner in the other is not the same title.', no: 'A decree in one capacity does not bar a suit in another capacity. This is a genuine escape route, not a technicality.' },
    { q: 'Was the former court competent to try the SUBSEQUENT suit?', note: 'Explanation II: judged without reference to any right of appeal. Explanation VIII then relaxes this for issues decided by a competent court of limited jurisdiction.', no: 'Outside Explanation VIII, a court that could not have tried the present suit cannot bar it. Check the pecuniary limit of the former court against the valuation of the present suit.' },
    { q: 'Was the matter HEARD and FINALLY DECIDED — on the merits?', note: 'Dismissal for default, for non-prosecution, for want of court fee, or withdrawal without liberty are not decisions on the merits.', no: 'No merits decision, no res judicata. But watch Order XXIII Rule 1(4) and Order IX, which impose their own separate bars on a fresh suit.' },
    { q: 'Is that decision still subsisting — not set aside, reversed or superseded on appeal?', note: 'An appellate decree supersedes the trial decree; it is the appellate decision that binds.', no: 'A decree that has been set aside binds nobody. Verify the appellate history before you plead the bar.' }
  ]"
  result="no court may try that suit or that issue — the bar is absolute, and it is the court's duty to apply it even if neither side is enthusiastic about the point"
  caveat="Two things sit outside the seven gates and defeat the bar however well it is made out: a former decree obtained by fraud, and a former decree passed by a court wholly without jurisdiction. Both are nullities."
  resultKind="mandatory"
/>

::: warning The difference from Section 10, in one line
**Section 10** asks *is it still running?* and stays the trial. **Section 11** asks *is it over?* and bars the suit outright. Same two suits, different stage, wholly different consequence — and Explanation I is the hinge that swings a case from one to the other, sometimes without anybody noticing.
:::

### In plain English

Section 11 is not one rule but a bundle of them. Each moving part is unpacked separately below.

---

#### Sub-module A — "Former suit"

Explanation I supplies a counter-intuitive definition. "Former" means **decided earlier**, not **instituted earlier**. So a suit instituted in 2021 and decided in 2023 is a "former suit" in relation to a suit instituted in 2019 but still pending in 2024.

::: tip Practitioner Takeaway
Never assume chronology of filing decides the question. Check the **date of the decree**. A later-filed suit that races to judgment first becomes the "former suit" and bars the earlier one.
:::

**The interaction with Section 10.** This is why Ss. 10 and 11 are two halves of one machine. While both suits are pending, S.10 stays the later trial. If the court fails to stay, and the later suit is decided first, Explanation I converts the later suit into the "former suit" — and S.11 bars the earlier one. Failure to press a S.10 application can therefore destroy your client's own earlier suit.

---

#### Sub-module B — "Same parties" and "parties under whom they claim"

Three categories are covered:

1. **Identical parties.** A and B in both suits.
2. **Privies.** A person claiming *through* a party — by blood (heir), by title (purchaser, assignee, transferee *pendente lite*), or by estate (successor). A decree against a vendor binds his subsequent purchaser.
3. **Representative parties.** Where a party litigated in a representative character (O.I R.8), the decree binds all represented — reinforced by Explanation VI.

**Res judicata between co-defendants.** A finding may bind co-defendants *inter se* where four conditions are satisfied: (i) there was a conflict of interest between the co-defendants; (ii) it was necessary to decide that conflict in order to grant the relief the plaintiff claimed; (iii) the question between the co-defendants was finally decided; and (iv) the co-defendants were necessary or proper parties in the former suit.

**Res judicata between co-plaintiffs** operates on the analogous principle where their interests were adverse and the conflict had to be resolved.

---

#### Sub-module C — "Litigating under the same title"

"Title" here means **capacity**, not ownership. The same natural person may litigate in wholly different titles:

- personally, and as *karta* of a Hindu Undivided Family;
- personally, and as executor, administrator or trustee;
- as an individual, and as a partner suing for the firm;
- as owner, and as a mortgagee.

A decree in one capacity does not bar a suit in another. Conversely, a party cannot escape res judicata by a cosmetic change of description where the substantive capacity is unchanged.

---

#### Sub-module D — "Directly and substantially in issue" versus "collaterally or incidentally in issue"

This is the analytical heart of the section.

| | **Directly and substantially in issue** | **Collaterally or incidentally in issue** |
|---|---|---|
| Meaning | A matter in respect of which relief is claimed, or which is the substantial foundation of the controversy; the parties join issue on it and the court's decision on it is necessary to the result. | A matter of secondary importance, decided only as a step in reasoning, on which the result does not depend. |
| Effect | **Operates as res judicata.** | **Does not operate as res judicata.** |
| Test | Would the decree fall if this finding were reversed? | Can the decree stand irrespective of this finding? |

**The practical test.** Ask: *was the finding necessary to the decree?* A finding the court could have omitted without disturbing the result is incidental, however emphatically expressed.

**Two further limits of great practical value:**

- **Findings against a wholly successful party.** Where a defendant succeeds outright, adverse findings on individual issues do not operate as res judicata against him, because he had no occasion (and often no right) to appeal against a decree in his favour. A party cannot be bound by a finding he could not challenge.
- **Erroneous decisions on questions of law.** A decision on a pure question of law — particularly one relating to the **jurisdiction** of the court, or the applicability of a statute of general application — does not operate as res judicata so as to perpetuate the error in later proceedings. Res judicata attaches to the adjudication of *rights between parties*, not to the entrenchment of a legal misconception.

---

#### Sub-module E — "Competent to try such subsequent suit"

The former court must have been competent, **at the time it decided the former suit**, to try the subsequent suit — including as to pecuniary and subject-matter jurisdiction. A Court of Small Causes deciding a Rs. 40,000 claim is not, without more, competent to try a subsequent title suit valued at Rs. 40,00,000; ordinarily its decree would not bar the title suit.

**Explanation II** removes one irrelevant consideration: competence is judged **irrespective of any right of appeal**. That a decision was appealable to a higher forum, or not appealable at all, is immaterial to competence.

**Explanation VIII** then substantially relaxes the rule — see Sub-module M below.

---

#### Sub-module F — "Heard and finally decided"

The former matter must have been adjudicated **on the merits**. Consequently the following do **not** ordinarily attract S.11:

- dismissal for **default of appearance** (the remedy is O.IX R.9, a separate and narrower bar);
- dismissal for **non-prosecution**;
- dismissal as **withdrawn** without liberty (barred instead by O.XXIII R.1(4));
- dismissal on a **preliminary technical ground** such as misjoinder, defective notice under S.80, or want of territorial jurisdiction;
- an order returning the plaint under **O.VII R.10**;
- a **compromise decree** (it is an agreement recorded by the court, and operates by estoppel rather than res judicata, though it binds the parties).

**But note:** where an appeal against the former decree is dismissed on the ground of **limitation or default**, the decree of the trial court is confirmed and continues to operate as res judicata. Dismissal of the appeal does not erase the trial court's adjudication on the merits.

**Interlocutory orders and res judicata within the same suit.** An interlocutory order that finally decides a matter between the parties, and is not appealed against, binds the parties at later stages of the same proceeding. The principle of res judicata applies not merely between two suits but **between two stages of the same suit**, so as to prevent the same question being re-agitated indefinitely.

---

#### Sub-module G — Explanation I: "former suit" means earlier **decided**

Treated at Sub-module A. Its structural function is definitional: it displaces the ordinary temporal meaning of "former".

---

#### Sub-module H — Explanation II: competence judged without reference to appealability

Its structural function is **subtractive**: it removes the right of appeal from the competence enquiry. A decision of a court from which no appeal lies is not, for that reason, incompetent.

---

#### Sub-module I — Explanation III: the matter must have been alleged and denied or admitted

This Explanation supplies the **pleading test** for "directly and substantially in issue". A matter qualifies only if, in the former suit:

- it was **alleged** by one party; **and**
- it was **denied or admitted, expressly or impliedly**, by the other.

The consequence is important: a matter that appeared nowhere in the former pleadings cannot have been directly and substantially in issue. This is why the former **plaint and written statement** — not merely the judgment — must be produced.

---

#### Sub-module J — Explanation IV: constructive res judicata

This is the most powerful, and most frequently decisive, provision in the section.

> Any matter which **might and ought** to have been made ground of defence or attack in such former suit **shall be deemed** to have been a matter directly and substantially in issue in such suit.

**The two limbs are cumulative.** The matter must have been one which:

1. **might** have been raised — it was *available* to the party on the facts and the law as they then stood; **and**
2. **ought** to have been raised — it was *necessary or proper* to raise it, having regard to the nature of the controversy, so that a party acting with ordinary diligence would have advanced it.

"Might" alone is not enough; a party is not required to advance every conceivable point. "Ought" imports an obligation arising from the subject-matter of the former litigation.

**"Ground of defence or attack".** The Explanation is symmetrical: it binds the plaintiff who omitted an available *ground of attack* just as it binds the defendant who omitted an available *defence*.

**Deeming effect.** The omitted plea is treated **as if it had actually been raised and decided against the party who omitted it**. It is therefore fully barred, not merely disfavoured.

::: danger Fatal Error
Constructive res judicata is where most competent-looking cases die. A defendant who resists an eviction suit on the ground of no default, but omits to plead that the tenancy was never validly terminated, cannot raise the termination point in a later proceeding. It might and ought to have been raised. Draft the written statement as if you will never get a second chance — because Explanation IV ensures you will not.
:::

**Constructive res judicata contrasted with Order II Rule 2.**

| | **Explanation IV to S.11** | **Order II Rule 2** |
|---|---|---|
| Bars | Omitted **grounds** of attack or defence | Omitted **reliefs** and split **claims** arising from one cause of action |
| Operates on | Issues and pleas | Causes of action and reliefs |
| Cure | None — the plea is deemed decided | **Leave of the court** obtained before decision of the first suit |
| Applies to | Plaintiff and defendant alike | The plaintiff only |
| Proof needed | The former pleadings and judgment | The former **plaint** must be produced |

---

#### Sub-module K — Explanation V: reliefs not granted are deemed refused

> Any relief claimed in the plaint, which is not expressly granted by the decree, shall be **deemed to have been refused**.

A plaintiff who claims possession, mesne profits and a declaration, and obtains a decree silent as to mesne profits, is deemed to have been **refused** mesne profits. He cannot sue again for them; his remedy was to seek an amendment of the decree, a review, or an appeal.

::: warning Drafting Trap
Read every decree the moment it is drawn up, against every prayer in the plaint. If a prayer has been left out, move at once under Section 152 (clerical or arithmetical error), Order XLVII (review), or in appeal. Once the decree becomes final, Explanation V converts the court's silence into a refusal that binds forever.
:::

---

#### Sub-module L — Explanation VI: representative litigation and public rights

Where persons litigate **bona fide** in respect of (a) a **public right**, or (b) a **private right claimed in common** for themselves and others, all persons interested in that right are deemed to claim under the persons so litigating.

**Three requirements:** the right must be public or claimed in common; the litigation must be **bona fide**; and the represented persons must be interested in the same right.

**Consequence.** A decree in a representative suit under Order I Rule 8 — for example, concerning a village common, a public way, a temple, or a scheme suit under S.92 — binds the whole class, including those who never appeared. Conversely, if the earlier litigation was collusive or not bona fide, the bar does not operate, and a member of the class may plead collusion to escape it.

---

#### Sub-module M — Explanation VII: res judicata in execution

Explanation VII extends the whole section to **execution proceedings**, with the terms transposed:

| Term in S.11 | Reads, in execution, as |
|---|---|
| "suit" | a proceeding for the execution of a decree |
| "issue" | a question arising in such execution proceeding |
| "former suit" | a former proceeding for the execution of that decree |

**Consequence.** A judgment-debtor who raises an objection in the first execution petition and loses cannot raise the same objection in the second. Equally, an objection he *might and ought* to have raised in the first execution petition is constructively barred. This is the provision that prevents serial obstruction of execution — and it interlocks directly with **Section 47**, under which all questions relating to execution, discharge or satisfaction of the decree are to be determined by the executing court and not by a separate suit.

---

#### Sub-module N — Explanation VIII: courts of limited jurisdiction

> An issue heard and finally decided by a Court of **limited jurisdiction**, **competent to decide such issue**, shall operate as res judicata in a subsequent suit, **notwithstanding** that such Court of limited jurisdiction was **not competent to try** such subsequent suit.

This Explanation, inserted by the Amendment Act of 1976, works a significant change and must be read carefully.

**What it does.** It severs the competence requirement for **issue** res judicata from the competence requirement for **suit** res judicata. Formerly, a decree of a court of limited pecuniary jurisdiction could not bar a subsequent suit beyond its pecuniary limits at all. Now, if that court was **competent to decide the particular issue**, its decision on that issue binds in the later suit, even though it could never have tried the later suit itself.

**What it does not do.** It does not dispense with competence altogether. The limited court must have been competent **to decide the issue**. If the statute constituting it forbade it from deciding, say, questions of title, its observations on title bind nobody.

**The non-obstante clause** ("notwithstanding that such Court … was not competent to try such subsequent suit") is the operative machinery: it expressly overrides the main body's competence requirement, but only as to *issues*.

::: tip Practitioner Takeaway
*"By virtue of Explanation VIII to Section 11, the finding of the learned Court of Small Causes on the issue of ____, that Court being competent to decide that issue, operates as res judicata in the present suit notwithstanding that the said Court could not have tried this suit."*
:::

---

#### Sub-module O — Res judicata beyond Section 11

Section 11 is **not exhaustive** of the doctrine. The general principle — that there must be an end to litigation and that a party shall not be vexed twice — applies beyond the four corners of the section, including to:

- **writ proceedings** under Articles 32 and 226 (a petition dismissed on the merits bars a fresh petition on the same cause);
- proceedings before **tribunals and quasi-judicial authorities**;
- **arbitration** proceedings;
- successive stages of the **same** proceeding.

Where S.11 does not strictly apply, plead the **general principles of res judicata** and the doctrine of **finality**, and, where appropriate, **estoppel by record**.

---

### Test your instinct

::::instinct The brother who kept one field back

**The facts.** Chetan and his brother own four items of ancestral property. In 2014 Chetan files a partition suit — but he lists only three of the four items. The fourth, a paddy field, is admittedly ancestral, and Chetan admittedly knew about it in 2014. He simply did not mention it.

The 2014 suit runs its course. A preliminary decree divides the three items. Nobody appeals.

In 2021 Chetan files a fresh suit for partition of the fourth item.

**The question.** The paddy field was never in issue in the 2014 suit. No court has ever decided anything about it. Nobody alleged anything about it and nobody denied anything about it. On the plain words of the main sentence — "the matter directly and substantially in issue **has been** directly and substantially in issue in a former suit" — how can Section 11 possibly bar him?

:::ruling
**It bars him, and this is the most important thing Section 11 does.**

The main sentence would not catch Chetan. **Explanation IV** does, and it does so by a legal fiction:

> Any matter which **might and ought to have been** made ground of defence or attack in such former suit shall be **deemed to have been** a matter directly and substantially in issue in such suit.

Read those two phrases carefully, because each does separate work:

- **"Might"** — was the point *available* to him in 2014? Yes: the field existed, it was ancestral, he knew of it.
- **"Ought"** — was he *obliged* to raise it? Yes, and here the nature of the suit is decisive. A partition suit is by its nature a suit to divide **the whole joint estate**. You cannot partition a family's property in instalments, choosing your moment for each field. Every item was necessarily part of the attack he was obliged to mount.

Both limbs satisfied, the law *pretends* the paddy field was in issue in 2014, and having pretended it, treats it as decided. This is called **constructive res judicata** — constructive because nothing was actually constructed; the law builds the finding for you.

**Why "ought" is the real battleground.** Notice that "might" is easy and almost always satisfied — most points are available to most litigants. The fight in practice is over "ought". A defendant who omitted a *permissive* set-off is generally not barred, because he was never obliged to raise it. A plaintiff who omitted an item from a partition suit is barred, because he was. When you argue Explanation IV, argue **"ought"**, and argue it from the nature of the earlier suit.

**What this means when you are drafting.** Plead every ground you have, in the first round, even the ones you think are weak. Explanation IV does not reward strategic reserve; it punishes it. There is no "I'll save that for the appeal" and no "I'll bring a second suit on that".

**What you say in court:** *"The plaintiff's claim to the suit item might and ought to have been made a ground of attack in O.S. No. ____ of 2014, a partition suit being by its nature a suit to divide the entirety of the joint estate. By Explanation IV to Section 11 it is deemed to have been directly and substantially in issue therein, and is barred."*
:::

::::

::::instinct The defendant who won, and was told off on the way

**The facts.** Deepa is sued by Bharat for specific performance of an agreement to sell her house. She runs two defences: that the agreement is a forgery, and that in any event the suit is time-barred.

The court delivers judgment. On the forgery point it goes **against** Deepa — it records a finding that the agreement is genuine. But on limitation it goes **for** her, and the suit is dismissed as barred by time.

Deepa has won. She got exactly what she wanted: the suit dismissed. She does not appeal, because there is nothing for her to appeal against — you cannot appeal a decree in your own favour.

Three years later Bharat sues Deepa on a different footing arising from the same agreement. Deepa again pleads it is a forgery. Bharat says: too late. That was decided against you in the first suit, and you never appealed. Res judicata.

**The question.** The finding was made. It was against her. She did not challenge it. Is she bound?

:::ruling
**No. She is not bound, and the reason is a principle worth carrying everywhere.**

Res judicata attaches to what was **necessary to the decision** and to what a party had an **opportunity and a reason to challenge**. Deepa had neither problem and both protections:

1. **The finding was not necessary to the decree.** Once the court held the suit time-barred, the suit had to be dismissed regardless of whether the agreement was genuine. The forgery finding did not support the operative result; it sits beside it. A finding that does not support the decree is, in substance, collateral — and the main sentence of Section 11 excludes matters collaterally or incidentally in issue.

2. **She had no remedy against it.** An appeal lies against a **decree**, not against a reason. Deepa's decree was a dismissal — entirely in her favour. There was nothing she could have appealed. It would be a grotesque rule that bound a party by a finding she was given no means of contesting.

This is the doctrine of the **wholly successful party**. If you win, adverse findings along the way do not bind you in later litigation, because you were never in a position to have them corrected.

**The trap on the other side of this rule.** It cuts against you the moment you are only *partly* successful. If Deepa had won on some issues and lost on others, and the decree was partly against her, she **could** have appealed — and if she did not, the adverse findings would bind her. This is why partial victories are dangerous, and why cross-objections under Order XLI Rule 22 exist. A litigant who is happy with the bottom line but unhappy with a finding must file cross-objections or lose the point forever.

**What you say in court:** *"My client was wholly successful in the former suit and had no occasion, and indeed no right, to appeal. A finding recorded against a wholly successful party, which was not necessary to the decree, does not operate as res judicata."*
:::

::::

### Practitioner HUD

**The winning ratio — the one proposition to cite.**

> Res judicata is not a technical doctrine but one of **public policy**, founded on the need for finality. Its principles apply beyond the letter of Section 11 — to writ proceedings, to execution, and to successive stages of the same proceeding — and a plea of constructive res judicata under Explanation IV bars not only what was decided but what **might and ought to have been** raised.
> — the settled line from *Daryao v. State of U.P.*, AIR 1961 SC 1457 (Constitution Bench), through the constructive-res-judicata cases

**Sword and shield.**

| | How it is used |
|---|---|
| **Sword (Plaintiff)** | To shut out defences before trial: *"The defendant's plea of adverse possession stands concluded against him by the judgment and decree dated ____ in O.S. No. ____, and he is precluded from re-agitating it."* Also to shorten the trial by **issue** res judicata — securing a finding that particular issues need not be tried at all. |
| **Shield (Defendant)** | The classic use: plead the bar in the written statement with full particulars, then apply under **O. XIV R. 2** to have it tried as a preliminary issue. Reserve **O. VII R. 11(d)** for the rare case where the bar is apparent on the face of the plaint. |

**Limitation clock.** Section 11 has no period of its own — it is a permanent bar, and unlike Section 10 it is **not waivable**, because it goes to the court's authority to adjudicate at all. It can be raised at any stage, including for the first time in appeal, and the court is bound to give effect to it even if neither party is keen.

The clocks that matter are the ones that create the res judicata in the first place, and they are short:

| To avoid being bound, you needed | Provision | Time |
|---|---|---|
| Appeal against the decree | — | 30 days (District Court) / 90 days (High Court), Arts. 116–117 |
| Cross-objections against an adverse finding | O. XLI R. 22 | 1 month from service of notice of appeal |
| Review, where a relief was omitted from the decree | Art. 124 | 30 days from the decree |
| Setting aside an ex parte decree | Art. 123 | 30 days from the decree or from knowledge |
| Restoration after dismissal for default | Art. 122 | 30 days |

Miss those, and Section 11 does the rest. **The res judicata is created by your inaction on a 30-day clock, and it lasts forever.**

**Drafting pitfalls.**

::: warning Order VII Rule 11 is usually the wrong vehicle
Res judicata is very often **not** a proper ground for rejection of the plaint under Order VII Rule 11(d). Rule 11(d) requires the bar to appear from the **statement in the plaint alone**. Establishing res judicata almost always requires the court to look at the pleadings, issues, judgment and decree of the *former* suit — material outside the plaint. The correct route is a preliminary issue under **Order XIV Rule 2**.

Three further traps:

- **Pleading it as a conclusion.** "The suit is barred by res judicata" is not a plea. Give the number and year of the former suit, the court, the parties, the issues framed, the date of decision, and identify precisely which matter was decided.
- **Not producing the record.** The plea fails without certified copies of the former plaint, written statement, issues, judgment and decree on the file. However meritorious, an unproved plea of res judicata is no plea at all.
- **Forgetting Evidence Act Section 44.** Your opponent's answer to a good res judicata plea is that the former judgment was passed by an incompetent court, or obtained by **fraud or collusion**. Anticipate it; and if you are on the receiving end of the plea, this is your route out.
:::

::: story Five more situations, and the rule that decides each
- **The tenant's second defence.** Bharat defends an eviction suit solely on the ground that he never defaulted in rent, and loses. In execution he says the notice terminating the tenancy was invalid. **Barred** — Explanation IV bars the omitted defence, and Explanation VII carries the bar into execution.
- **The mesne profits nobody mentioned.** Anita sues for possession and **mesne profits**. The decree gives her possession and says nothing about mesne profits. She sues afresh for them. **Barred** — Explanation V deems a relief claimed but not granted to have been *refused*. Her remedy was review or appeal, within 30 days.
- **Change of capacity.** Chetan personally sues to recover a personal loan and loses. He then sues the same defendant **as trustee** of a temple trust to recover trust monies. **Not barred** — different title, and the trust's money was never his to lose.
- **The village pathway.** In 2009 three residents sued in a representative capacity under Order I Rule 8, with the court's permission and after notice, for a declaration that a pathway was public. The suit was dismissed on the merits. In 2023 a fourth resident who never appeared sues for the same declaration. **Barred** by Explanation VI — provided the earlier litigation was bona fide. His only escape is to plead and prove collusion.
- **The small court's big finding.** A Court of Small Causes, competent to decide the issue, finally holds in an eviction proceeding that Deepa is a tenant and not a licensee. She later files a title suit in the District Court, valued far beyond the Small Causes Court's limit. **The tenancy finding binds her** under Explanation VIII, even though the Small Causes Court could never have tried the title suit.

The last one carries a planning lesson that is easy to miss. A finding you allow to be made in a cheap, quick, limited forum will follow you into a high-value suit years later. **Fight the small case as if it were the big one, because for this purpose it is.**
:::

#### Interlocking matrix — what this connects to

| Linked provision | How it interlocks with Section 11 |
|---|---|
| **S.10** | The pending-suit counterpart. Failure to obtain a stay under S.10 can convert the later suit into the "former suit" under Explanation I and destroy the earlier one. |
| **S.12** | Where rules bar a further suit on a cause of action, S.12 makes the bar operative in every court under the Code. |
| **S.47** | All questions relating to execution, discharge or satisfaction of the decree go to the executing court. Read with Explanation VII, this closes the door on satellite suits. |
| **S.44A** | Execution of decrees of superior courts of reciprocating territories; the S.13 grounds remain available. |
| **O.II R.2** | Bars omitted **reliefs** and split claims; complements Explanation IV, which bars omitted **grounds**. |
| **O.VII R.11(d)** | Available only in the rare case where the bar is apparent on the plaint itself. |
| **O.XIV R.2(2)(b)** | The **correct** vehicle: res judicata tried as a preliminary issue where it is a question of law on admitted facts. |
| **O.IX R.9** | Dismissal for default bars a fresh suit on the same cause — a distinct and narrower bar than S.11. |
| **O.XXIII R.1(4)** | Withdrawal **without liberty** bars a fresh suit on the same subject-matter — again distinct from S.11. |
| **O.XXIII R.3** | Compromise decrees bind by estoppel; challenge lies before the same court under the proviso, not by fresh suit (R.3A). |
| **O.XLVII / S.114** | Review — the remedy where a relief has been omitted from the decree (see Explanation V). |
| **S.152** | Correction of clerical or arithmetical mistakes in a decree — the first port of call for an accidental omission. |
| **Evidence Act, 1872, Ss. 40–44** | The **evidentiary** gateway. S.40 makes the previous judgment relevant to bar a second suit; S.43 makes judgments otherwise irrelevant; **S.44 permits a party to show that the former judgment was delivered by a court not competent, or was obtained by fraud or collusion.** |

**Limitation Act, 1963 — points of contact.**

| Situation | Provision | Effect |
|---|---|---|
| Fresh suit after dismissal for default | Ordinary article applies; no exclusion | Time runs on; O.IX R.9 application is the real remedy, within 30 days (Art. 122). |
| Application under O.IX R.13 to set aside ex parte decree | **Article 123** | 30 days from the date of the decree or from knowledge of it. |
| Review | **Article 124** | 30 days from the date of the decree or order. |
| Time spent in a court without jurisdiction | **Section 14** | Excluded, if prosecuted with due diligence and in good faith. |
| Execution of a decree | **Article 136** | 12 years from when the decree becomes enforceable — the outer limit within which Explanation VII operates. |

**Court fee and valuation.** A suit barred by res judicata is not saved by paying higher court fee, and a suit is not rendered maintainable by undervaluing it to bring it within a limited court's jurisdiction. Conversely, note the **Explanation VIII** consequence: a party who litigates an issue in a cheap, limited forum may find that finding pursued into a high-value suit later. Choose the first forum with that in mind.

**Applications typically filed.**

- Written statement containing the plea of res judicata, with full particulars.
- Application under **O.XIV R.2** to try the res judicata issue as a preliminary issue.
- Application under **O.XIII R.1 / Evidence Act S.65** to bring the certified copies of the former pleadings, issues, judgment and decree on record.
- Application under **O.VII R.11(d)**, in the narrow case where the bar is apparent on the plaint.
- Reply pleading **Evidence Act S.44** — that the former judgment was passed by an incompetent court, or obtained by fraud or collusion.

#### The authorities

**Satyadhyan Ghosal v. Sm. Deorajin Debi, AIR 1960 SC 941** — *Three-Judge Bench.*
*Facts:* A question decided at an earlier stage of the same proceeding was sought to be re-agitated at a later stage.
**Ratio Decidendi:** The principle of res judicata is based on the need to give finality to judicial decisions. It applies also as between two stages of the **same** litigation: where an interlocutory order has decided a matter finally between the parties and has not been appealed against, neither party can re-agitate that matter at a later stage of the same proceeding. Res judicata applies to *matters decided*, and a decision at an earlier stage binds at a later stage.
::: tip Practitioner Takeaway
*"The question now sought to be raised stands concluded by the order dated ____ passed at an earlier stage of this very proceeding, which was not challenged and has become final — Satyadhyan Ghosal."*
:::

**Daryao v. State of Uttar Pradesh, AIR 1961 SC 1457** — *Constitution Bench (five Judges).*
*Facts:* Petitioners whose writ petitions under Article 226 had been dismissed by the High Court on the merits moved the Supreme Court under Article 32 on the same cause.
**Ratio Decidendi:** The general principle of res judicata is not a technical rule but one of public policy, and it applies to writ petitions. Where a writ petition under Article 226 is dismissed **on the merits** after contest, a subsequent petition under Article 32 on the same cause of action is barred. A dismissal *in limine*, or on the ground of laches or availability of an alternative remedy, without a decision on the merits, does not create the bar.
::: tip Practitioner Takeaway
Always establish *how* the earlier writ petition was dismissed. A one-line dismissal *in limine* is not res judicata; a reasoned dismissal on the merits is.
:::

**State of Uttar Pradesh v. Nawab Hussain, (1977) 2 SCC 806** — *Three-Judge Bench.*
*Facts:* A police officer challenged his dismissal by writ petition on one ground, lost, and then filed a civil suit raising a different ground (that he had been dismissed by an authority subordinate to that which appointed him) which had been available to him earlier.
**Ratio Decidendi:** The principle of **constructive res judicata** embodied in Explanation IV to Section 11 is a rule of public policy and applies to writ proceedings as well. A ground of attack that was available to the party and which he might and ought to have taken in the earlier proceeding cannot be taken in a subsequent suit; it is deemed to have been a matter directly and substantially in issue and decided against him.
::: danger Fatal Error
This is the case that converts a "spare argument kept in reserve" into a lost argument. Raise every available ground in the first proceeding.
:::

**Mathura Prasad Bajoo Jaiswal v. Dossibai N.B. Jeejeebhoy, (1970) 1 SCC 613** — *Three-Judge Bench.*
*Facts:* An earlier decision had proceeded on an erroneous view of the law as to the applicability of a statute to open land, going to the court's jurisdiction.
**Ratio Decidendi:** A question of law relating to the **jurisdiction** of the court, or a decision on a question of law on which the right of the parties does not depend, does not operate as res judicata. Where the earlier decision is on a pure question of law unrelated to the facts giving rise to the right, and is erroneous, it will not preclude a correct decision in a later proceeding. Res judicata attaches to the decision of a *matter in issue between the parties*, not to an erroneous proposition of general law.
::: tip Practitioner Takeaway
*"The earlier finding is on a pure question of law going to jurisdiction; being erroneous, it cannot operate as res judicata so as to perpetuate the error — Mathura Prasad Bajoo Jaiswal."*
:::

**Sheodan Singh v. Daryao Kunwar, AIR 1966 SC 1332** — *Bench of Judges of the Supreme Court (verify composition).*
*Facts:* Cross-suits were decided; appeals against some were dismissed on preliminary grounds including limitation and default.
**Ratio Decidendi:** Where an appeal against a decree is dismissed on a preliminary ground such as limitation or default, the decree of the trial court is thereby **confirmed**, and the trial court's decision must be treated as having been "heard and finally decided" so as to operate as res judicata. The dismissal of the appeal does not deprive the trial court's adjudication of finality.
::: tip Practitioner Takeaway
Do not assume that because an appeal was dismissed without a merits hearing, the trial decree lost its binding force. It did not.
:::

**Sulochana Amma v. Narayanan Nair, (1994) 2 SCC 14** — *Two-Judge Bench.*
*Facts:* A decree of a court of limited pecuniary jurisdiction was pleaded as res judicata in a subsequent suit beyond that court's pecuniary competence.
**Ratio Decidendi:** Explanation VIII to Section 11 is intended to remove the anomaly that decisions of courts of limited jurisdiction had no binding effect in later suits beyond their competence. An issue heard and finally decided by a court of limited jurisdiction **competent to decide that issue** operates as res judicata in a subsequent suit, notwithstanding that such court was not competent to try the subsequent suit. The Explanation must be read harmoniously with the main section.
::: tip Practitioner Takeaway
The authority for deploying a Small Causes or Rent Court finding in a High Court title suit.
:::

**V. Rajeshwari v. T.C. Saravanabava, (2004) 1 SCC 551** — *Two-Judge Bench.*
*Facts:* A plea of res judicata was raised without adequate pleading and without the record of the former suit.
**Ratio Decidendi:** The plea of res judicata must be **specifically pleaded with all necessary particulars**; a bare or general plea is insufficient. Further, the party raising it must place on record the **pleadings, issues and judgment** of the former suit. In the absence of such material the plea cannot be entertained, and it is not open to a party to raise it for the first time in appeal on an inadequate record.
::: danger Fatal Error
This is the single most common way a good res judicata plea is lost. Plead the particulars. File the certified copies. Prove them.
:::

**Alka Gupta v. Narender Kumar Gupta, (2010) 10 SCC 141** — *Two-Judge Bench.*
*Facts:* A suit was dismissed on the ground of res judicata and Order II Rule 2 without any issue having been framed on those questions and without the parties being heard on them.
**Ratio Decidendi:** A suit cannot be dismissed on the ground of res judicata (or Order II Rule 2) where no such plea was raised, no issue framed, and no opportunity given. Res judicata is a mixed question requiring pleading, issue and proof; a court cannot decide it *suo motu* on an inadequate record, and doing so violates the principles of natural justice.

**Srihari Hanumandas Totala v. Hemant Vithal Kamat, (2021) 9 SCC 99** — *Two-Judge Bench.*
*Facts:* A defendant sought rejection of the plaint under Order VII Rule 11(d) on the ground of res judicata.
**Ratio Decidendi:** A plea of res judicata **cannot** ordinarily be the basis for rejection of a plaint under Order VII Rule 11(d). Rule 11(d) is confined to a bar appearing from the **statement in the plaint** itself; res judicata requires examination of the pleadings, issues and decision in the previous suit, which is material extraneous to the plaint. Res judicata is a mixed question of law and fact and must be decided on evidence.
::: tip Practitioner Takeaway
Resisting an Order VII Rule 11 application founded on res judicata? This is your first and often your last authority.
:::

**Canara Bank v. N.G. Subbaraya Setty, (2018) 16 SCC 228** — *Two-Judge Bench.*
*Facts:* The binding effect of an earlier decision was in question where the earlier decision proceeded contrary to a statutory prohibition.
**Ratio Decidendi:** The Court restated the exceptions to res judicata, including that a decision rendered contrary to an express statutory prohibition, or on a pure question of law where the earlier decision is a nullity or is founded on an erroneous view of a statute of general application, does not operate as res judicata so as to bind the parties in subsequent proceedings.

::: info Verify before citing
Bench strengths and reporter citations above are stated as commonly reported. **Verify each before filing**, in particular the composition in *Sheodan Singh v. Daryao Kunwar* (recorded here as requiring confirmation) and *Satyadhyan Ghosal*. Confirm also that none of these decisions has been distinguished, explained or overruled by a later or larger Bench, and check *Canara Bank v. N.G. Subbaraya Setty* against the authorised report for the precise formulation of the exceptions.
:::

#### Strategy and drafting

**The five traps that destroy a res judicata plea.**

1. **Pleading it generally.** "The suit is barred by res judicata" is not a plea. It is a slogan. Give the suit number, the year, the court, the parties, the issues framed, the findings, the date of judgment and the date of decree.
2. **Not producing the former record.** You must file certified copies of the **plaint, written statement, issues, judgment and decree**. Explanation III makes the former *pleadings* indispensable, because you must show the matter was alleged and denied or admitted.
3. **Choosing Order VII Rule 11 instead of Order XIV Rule 2.** Rule 11(d) looks only at the plaint. Unless the plaint itself discloses the bar, you will lose. Use a preliminary issue.
4. **Not checking finality.** Confirm the former decree has not been set aside, and that no appeal is pending. A decree under appeal is not final for this purpose in the relevant sense; deal with this expressly.
5. **Overlooking capacity and competence.** Check the *title* in which the parties litigated, and whether the former court was competent to try the present suit. If it was not, fall back on **Explanation VIII** for issue res judicata.

**The plaintiff's counter-attack: how to escape the bar.** Plead, where the facts permit:

- The matter was **collaterally or incidentally** in issue, not directly and substantially.
- The former decision was **not on the merits** (default, non-prosecution, withdrawal, return of plaint, technical dismissal).
- The parties litigated under a **different title**.
- The former court was **not competent** to try the present suit, and Explanation VIII does not save the issue because that court was not competent to decide it either.
- The finding was against a **wholly successful party** who could not have appealed against it.
- The finding is on an **erroneous pure question of law**, particularly as to jurisdiction (*Mathura Prasad*).
- The former judgment was obtained by **fraud or collusion**, or delivered by an incompetent court — **Section 44 of the Evidence Act, 1872** (and see Section 44 read with the fraud jurisprudence under S.44 and the principle that fraud vitiates all judicial acts).
- There has been a **change in the cause of action** or a fresh, recurring cause (for instance a fresh period of default, or a fresh act of trespass).

**Strategic timing.**

- **Res judicata may be raised at any stage**, including for the first time in appeal, provided the necessary material is on record — but do not rely on that indulgence. *V. Rajeshwari* shows the court will refuse it on an inadequate record.
- Raise it **in the written statement**, and immediately apply under O.XIV R.2 for a preliminary issue. A successful preliminary issue saves years.
- Where you act for the plaintiff in the **earlier** suit, prosecute it diligently; Explanation I means a rival later suit that reaches decree first will bar yours.
- Where a relief has been omitted from a decree in your client's favour, act within **30 days** (Limitation Act Art. 124 for review), or seek correction under S.152 — before Explanation V hardens the omission into a refusal.

**Model plea — defendant's written statement (res judicata).**

> *"The suit is barred by the principle of res judicata under Section 11 of the Code of Civil Procedure, 1908. The matter directly and substantially in issue in the present suit, namely the title of the plaintiff to the suit property described in Schedule 'A', was directly and substantially in issue in O.S. No. ____ of ____ on the file of the Court of ____, between the same parties litigating under the same title, being Issue No. ____ therein, which was heard and finally decided against the present plaintiff by judgment and decree dated ____. The said court was competent to try the present suit. The said judgment and decree have attained finality, no appeal having been preferred / the appeal being A.S. No. ____ of ____ having been dismissed on ____. Certified copies of the plaint, written statement, issues, judgment and decree in the said suit are filed herewith and marked Exhibits ____ to ____.*
>
> *Without prejudice to the above, the plaintiff's present plea that ____ might and ought to have been made a ground of attack in the said former suit and is accordingly barred by constructive res judicata under Explanation IV to Section 11."*

**Model prayer checklist — application under Order XIV Rule 2.**

- [ ] That this Hon'ble Court be pleased to frame the issue of res judicata as a **preliminary issue**;
- [ ] That this Hon'ble Court be pleased to take on record the certified copies of the pleadings, issues, judgment and decree in O.S. No. ____ of ____;
- [ ] That upon deciding the said preliminary issue in the affirmative, the suit be **dismissed** with costs;
- [ ] That the trial on the remaining issues be deferred pending decision of the preliminary issue;
- [ ] For costs and such further reliefs as the nature and circumstances of the case may require.

## Section 12 — Bar to further suit

### The dispute this solves

::: oneminute The plaintiff who simply stopped turning up
Chetan lent money to a man in Ernakulam and sued him there to get it back. Then Chetan lost interest. He missed a hearing, then another, and the court dismissed his suit under Order IX Rule 8 — not because he was wrong, but because he was **absent**. Nobody decided anything about the loan. No judge ever looked at the promissory note.

Two years later Chetan starts again, this time in Bengaluru, on the same promissory note against the same man.

**The problem in plain English:** the defendant wants to say "you already had your go". But he has a difficulty. Section 11 — res judicata — needs a matter *heard and finally decided*, and nothing here was decided at all. The Ernakulam dismissal was pure default. So on the face of it, res judicata gives the defendant nothing.

The rules in the First Schedule do close this door. **Order IX Rule 9** says that a plaintiff whose suit is dismissed for his own default cannot bring a fresh suit on the same cause of action. But that rule was made in an Ernakulam proceeding — and Chetan is now in Bengaluru, before a different court in a different State that has never heard of him.

Section 12 is the one sentence that makes the Ernakulam bar follow Chetan to Bengaluru, and to every other court in India governed by the Code.
:::

::: info The shape of this section is unusual — read this first
Section 12 **creates no bar of its own**. Not one. It is a section with no content, and that is deliberate.

Think of the First Schedule rules as local ordinances and Section 12 as the sentence that makes them national. Order IX Rule 9, Order XXIII Rule 1(4), Order XXII Rule 9, Order II Rule 2 — each of these *creates* a preclusion. Section 12 *transmits* it, converting a bar that might be argued to bind only the court that imposed it into one that binds every court to which the Code applies.

The practical consequence is a drafting rule you should never break: **never cite Section 12 alone.** It decides nothing on its own. Cite it as a pair — *"barred by Order IX Rule 9 read with Section 12"*. A plea that says only "barred under Section 12" tells the judge nothing about which bar you mean.
:::

### The Act, decompiled

One sentence, four working parts.

> **12. Bar to further suit.** —
>
> Where a plaintiff is **precluded by rules** from instituting a further suit in respect of any **particular [[=cause of action]]**, …
>
> … he [[!shall]] not be entitled to institute a suit in respect of such cause of action …
>
> … in **any Court to which this Code applies**.

Two phrases carry the whole section:

- **"Precluded by rules"** — "rules" here is not loose drafting. It means the Rules in the **First Schedule** to the Code. This is the borrowing clause: the section takes its bars from elsewhere.
- **"In any Court to which this Code applies"** — this is the section's actual work. Without it, a plaintiff could treat a bar as a local inconvenience and simply file somewhere else.

**The words, and what they are doing.**

| Operative expression | Character | Consequence |
|---|---|---|
| "Where a plaintiff is **precluded by rules**" | Referential trigger | "Rules" means the rules in the **First Schedule** to the Code. The section has no independent content; it borrows its bars from the Orders. |
| "in respect of **any particular cause of action**" | Scope limiter | The bar is cause-of-action specific, not party specific and not property specific. |
| "he **shall not be entitled**" | **Mandatory prohibition** | No discretion. |
| "in **any Court to which this Code applies**" | **Territorial and institutional extension** | The operative work of the section: it universalises a bar that would otherwise bind only in the court that imposed it. |

**What the section actually does.** Standing alone, a preclusion created by a Rule (say, Order IX Rule 9) might be argued to bind only the court that made the order. Section 12 forecloses that argument. It converts a rule-based preclusion into a **Code-wide** bar operating in every court governed by the Code. It is a provision of *transmission*, not of *creation*.

**The rules that feed Section 12.**

| Rule | Preclusion created |
|---|---|
| **O.II R.2** | Omission to sue for the whole claim, or for one of several reliefs, without leave. |
| **O.IX R.9(1)** | Dismissal of a suit for the plaintiff's default of appearance — no fresh suit on the same cause of action. |
| **O.XXII R.9(1)** | Abatement or dismissal on death of a party — no fresh suit on the same cause of action. |
| **O.XXIII R.1(4)** | Withdrawal or abandonment **without liberty** to file afresh. |
| **O.XXIII R.3A** | No suit to set aside a compromise decree on the ground that the compromise was not lawful. |

### How the section actually runs

Section 12 has only two gates, because it does almost nothing by itself. The real work is done at the first gate, and that gate is answered by looking at a Rule, not at this section.

<MicroTree
  input="A plaintiff files a suit, and the defendant says an earlier suit by the same plaintiff has already come to an end"
  :gates="[
    { q: 'Did that earlier suit end in a way that a First Schedule Rule turns into a preclusion?', note: 'The five feeders: O. IX R. 9 (dismissed for the plaintiff\'s default), O. XXIII R. 1(4) (withdrawn without liberty), O. XXII R. 9 (abated), O. II R. 2 (relief omitted without leave), O. XXIII R. 3A (suit to set aside a compromise decree).', no: 'Section 12 has nothing to transmit. If the earlier suit was decided on the merits, your provision is Section 11 instead; if it is still pending, Section 10.' },
    { q: 'Is the present suit on the SAME cause of action?', note: 'Cause of action, not the same parties and not the same property. Arrears for a later period, or a fresh default, is a fresh cause of action.', no: 'The bar does not reach the new claim. A default dismissal of a suit for the 2019 arrears does not touch a suit for the 2022 arrears.' }
  ]"
  result="the plaintiff shall not be entitled to institute the suit — in this court or in ANY court to which the Code applies"
  caveat="But every one of the feeder rules has its own escape hatch, and each is on a short clock: restoration under O. IX R. 9 within 30 days, setting aside abatement under O. XXII R. 9(2) within 60 days, and — for withdrawal — liberty under O. XXIII R. 1(3), which must be asked for at the moment of withdrawal and can never be obtained afterwards."
  resultKind="mandatory"
/>

### In plain English

**Sub-module A — Section 12 is a conduit, not a source.** Read alone it decides nothing. Always cite it **with** the Order and Rule that creates the preclusion: *"barred by Order IX Rule 9 read with Section 12"*.

**Sub-module B — Distinguish these bars from Section 11.** All of them bar a second suit, but on different juridical bases:

| Bar | Requires a decision on the merits? | Cure available? |
|---|---|---|
| **S.11** res judicata | **Yes** — heard and finally decided | None, save fraud/collusion or incompetence (Evidence Act S.44) |
| **O.IX R.9** | **No** — the dismissal is for default | Application under O.IX R.9 to set aside the dismissal, within 30 days (Limitation Act Art. 122) |
| **O.XXIII R.1(4)** | **No** — the suit is withdrawn | Only by obtaining **liberty** under R.1(3) *at the time of withdrawal* |
| **O.XXII R.9** | **No** — abatement | Application to set aside abatement under O.XXII R.9(2), within 60 days (Art. 121) |
| **O.II R.2** | **No** — omission | **Leave of the court** obtained before the first suit is decided |

**Sub-module C — "Same cause of action" is the pivot.** Each of these bars is confined to the *same cause of action*. A plaintiff whose suit for the 2019 arrears is dismissed for default is not barred from suing for the 2022 arrears — that is a fresh, recurring cause of action.

### Test your instinct

::::instinct Six words that cost a client his case

**The facts.** Anita's counsel is running a suit for specific performance of an agreement to sell. Trial is about to begin, and he realises the plaint is badly drawn — the description of the property is wrong, and a necessary party has been left out. Rather than patch it with amendments, he decides to start clean.

He mentions the matter and says: *"My client does not wish to press this suit. It may be dismissed as withdrawn."*

The judge, entirely reasonably, passes an order: **"Suit dismissed as withdrawn."**

Two months later Anita files a fresh, properly drafted suit for specific performance of the same agreement.

**The question.** Nothing was decided. Nobody heard any evidence. Anita withdrew voluntarily, which is the least abusive thing a litigant can do. Can she really be shut out?

:::ruling
**Yes. Her claim is dead, permanently, in every court in India.**

**Order XXIII Rule 1(3)** allows a court to permit withdrawal **with liberty to institute a fresh suit**, where there is a formal defect or other sufficient ground. **Order XXIII Rule 1(4)** then says what happens if you do not get that permission: the plaintiff *"shall be precluded from instituting any fresh suit in respect of such subject-matter"*. Section 12 carries that preclusion into every court under the Code.

Counsel had a perfect Rule 1(3) case. A wrongly described property and a missing party is exactly the "formal defect" the rule contemplates. He would have got liberty for the asking. He did not ask.

**The point that catches people out.** Liberty cannot be obtained afterwards. It is not an oversight to be cured by an application next week; it is a **condition of the withdrawal itself**. Once the suit is gone, the court is *functus officio* over it — there is no live proceeding in which to grant permission, and no court can grant it retrospectively.

**The six words that were missing:** *"...with liberty to file afresh"*.

**The discipline this demands.** When withdrawing anything — a suit, a claim, or part of a claim — put the liberty in the **application**, and then check the **order sheet** before you leave the courtroom. An oral assurance from the bench is not liberty. What binds is what is recorded.

**What you say in court:** *"The plaintiff seeks leave to withdraw the suit with liberty to institute a fresh suit on the same cause of action under Order XXIII Rule 1(3) of the Code, the plaint suffering from a formal defect in the description of the suit property and in the array of parties."*
:::

::::

::::instinct The arrears that came back

**The facts.** Bharat is a landlord. In 2019 he sues his tenant for arrears of rent for the years 2017 and 2018. The suit is dismissed under Order IX Rule 8 because Bharat, who was abroad, failed to appear. He never applies to restore it.

In 2023 Bharat sues the same tenant again. This time the claim is for arrears for 2021 and 2022.

The tenant pleads Order IX Rule 9 read with Section 12: Bharat's earlier suit was dismissed for default, so he is barred from suing again.

**The question.** Same landlord, same tenant, same tenancy, same kind of claim, and Bharat's own default killed the first suit. Is the second suit barred?

:::ruling
**No — and the reason is the limit written into every bar that Section 12 transmits.**

Read the words: *"in respect of any **particular cause of action**"*. Not the same parties. Not the same property. Not the same tenancy. The **same cause of action**.

Rent is a **recurring** obligation. Each period's rent falls due separately, and each failure to pay it is a separate breach giving rise to a separate cause of action. The 2017–2018 arrears and the 2021–2022 arrears are two different debts that happen to arise from one relationship.

So Bharat's default in the first suit destroyed his claim to the 2017–2018 arrears — permanently, in every court. It did nothing at all to the 2021–2022 arrears, which had not even accrued when the first suit was filed.

**Where this cuts the other way — and it is the more common trap.** Suppose Bharat's 2019 suit had claimed *only* the arrears, when he could also have claimed **possession** on the ground of default, arising from the same facts at the same time. Then **Order II Rule 2** bites: a plaintiff must sue for the whole of his claim and all reliefs arising from one cause of action, and a relief omitted without the court's leave is lost. Bharat's later possession suit would be barred — not by Order IX Rule 9, but by Order II Rule 2 read with Section 12.

**The two questions to ask, in this order:**

1. *Is this the same cause of action?* If genuinely not — a later period, a fresh default, a new breach — no bar applies, whatever the defendant pleads.
2. *If it is the same cause of action, did I claim everything I could have?* Because Order II Rule 2 will not give me a second chance at a relief I could have asked for the first time.

**What you say in court:** *"The bar operates only in respect of the particular cause of action that was before the former court. Rent being a recurring liability, the arrears now sued for accrued after the institution of the former suit and constitute a distinct and independent cause of action."*
:::

::::

### Practitioner HUD

**The winning ratio — the one proposition to cite.**

> A technical bar of this kind must be **established strictly** by the party pleading it. A defendant relying on Order II Rule 2 must produce in evidence the **plaint in the earlier suit**; without it the court cannot determine what the cause of action there was, or whether the reliefs now claimed arose out of it.
> — *Gurbux Singh v. Bhooralal*, AIR 1964 SC 1810

That requirement travels to every bar routed through Section 12. **Prove the earlier record, or lose the plea.**

**Sword and shield.**

| | How it is used |
|---|---|
| **Sword (Plaintiff)** | Essentially none — Section 12 operates *against* plaintiffs. The plaintiff's engagement with it is defensive and preventive: get liberty when withdrawing, restore promptly when dismissed for default, and claim every available relief the first time. |
| **Shield (Defendant)** | A clean, decisive plea, and easier to make out than res judicata because it requires **no adjudication on the merits** — only the fact and manner of the earlier termination. It is the complete answer to the plaintiff who says "but nothing was ever decided". |

**Limitation clock.** Section 12 has no period of its own. But it sits on top of five feeder rules, and each of those is governed by a short and unforgiving article. These are the dates that decide whether the bar becomes permanent:

| To escape the bar you must | Provision | Article | Period |
|---|---|---|---|
| Restore a suit dismissed for your default | O. IX R. 9 | **Art. 122** | **30 days** from the dismissal |
| Set aside an ex parte decree against you | O. IX R. 13 | **Art. 123** | **30 days** from the decree, or from knowledge if summons was not duly served |
| Bring legal representatives on record | O. XXII R. 3/4 | **Art. 120** | **90 days** from the death |
| Set aside an abatement | O. XXII R. 9(2) | **Art. 121** | **60 days** from the abatement |
| Obtain liberty to sue afresh | O. XXIII R. 1(3) | — | **At the moment of withdrawal.** There is no article, because there is no later application. |

::: danger The 30-day clock that becomes permanent
A dismissal for default that is not challenged within **30 days** converts, by Order IX Rule 9 read with Section 12, into a permanent bar on that cause of action in **every court in India**. There is no merits hearing at any point in that sequence. A client can lose a perfectly good claim without a single word being said about it.

Diarise the date on the day of dismissal, not on the day you get around to reading the order.
:::

**Court fee.** Where a suit dismissed for default is **restored** under Order IX Rule 9, no fresh court fee is payable — the original plaint revives with its stamp intact. Where the plaintiff instead files a fresh suit, fresh court fee is payable **and** the suit is barred. The economics and the law point the same way: apply for restoration.

**Drafting pitfalls.**

::: warning Never plead Section 12 on its own
It creates no bar, so a plea of "barred under Section 12" is a plea of nothing. Always name the feeder rule.

- **Plead the pair.** *"The suit is barred by Order IX Rule 9 read with Section 12 of the Code."*
- **Prove the earlier record.** Certified copies of the earlier plaint and of the order terminating that suit. *Gurbux Singh* is fatal to a plea made from the bar table.
- **Check the cause of action before you plead the bar.** A bar pleaded against a genuinely fresh cause of action fails and hands your opponent a finding to use later.
- **On the plaintiff's side, watch the order sheet.** "Dismissed as withdrawn" and "dismissed as withdrawn with liberty to file afresh" are two months and one lifetime apart.
:::

#### Interlocking matrix — what this connects to

| Linked provision | Interlock |
|---|---|
| **O.IX R.8 & R.9** | Dismissal for default; the R.9 application is the only cure. |
| **O.IX R.13** | Setting aside an **ex parte decree** (the defendant's counterpart). |
| **O.XXII R.3, 4, 9** | Abatement and its setting aside. |
| **O.XXIII R.1(3) & (4)** | Withdrawal with and without liberty — the decisive fork in the road. |
| **O.XXIII R.3A** | No separate suit to set aside a compromise decree; the remedy is before the same court. |
| **O.II R.2(3)** | Leave to sue later for an omitted relief. |
| **S.11** | The merits-based bar; Section 12 covers the non-merits terminations. |
| **O.VII R.11(d)** | The plaint may be rejected where the earlier termination is admitted on the face of the plaint. |

**Limitation Act, 1963.**

| Application | Article | Period |
|---|---|---|
| To set aside dismissal for default (O.IX R.9) | **Art. 122** | 30 days from the date of dismissal |
| To set aside an ex parte decree (O.IX R.13) | **Art. 123** | 30 days from the date of the decree, or from knowledge where summons was not duly served |
| To set aside abatement (O.XXII R.9) | **Art. 121** | 60 days from the date of abatement |
| To bring legal representatives on record | **Art. 120** | 90 days from the death |

::: danger Fatal Error
These are short periods, and they are unforgiving. A dismissal for default that is not challenged within 30 days converts, by operation of Order IX Rule 9 read with Section 12, into a permanent bar on the cause of action in every court in India. Diarise the date on the day of dismissal.
:::

**Court fee.** Where a suit is dismissed for default and restored under O.IX R.9, no fresh court fee is payable — the original plaint revives. Where the plaintiff instead files a fresh suit, fresh court fee is payable *and* the suit is barred. The economics and the law point the same way: apply for restoration.

#### The authorities

Section 12 is rarely litigated on its own, because it carries no independent content; the authority is found under the feeding rules. The propositions below are settled and should be cited **through** the relevant Order and Rule.

**On Order XXIII Rule 1 — withdrawal without liberty.**
**Ratio (settled principle):** Where a plaintiff withdraws or abandons a suit or part of a claim without the permission of the court to institute a fresh suit, he is precluded from instituting any fresh suit in respect of that subject-matter. Permission must be sought and granted **at the time of withdrawal**; it cannot be applied for afterwards, and the court cannot grant it retrospectively once the suit is gone.
::: tip Practitioner Takeaway
*"Liberty is not a formality to be added later. It is a condition of withdrawal."* When withdrawing, always record in the application and obtain in the order: *"with liberty to file a fresh suit on the same cause of action under Order XXIII Rule 1(3)."*
:::

**On Order IX Rule 9 — dismissal for default.**
**Ratio (settled principle):** Order IX Rule 9(1) bars a fresh suit on the same cause of action, but it does **not** bar the plaintiff from applying under Rule 9 to set aside the dismissal on showing sufficient cause for non-appearance. The bar operates on a **fresh suit**, not on restoration of the old one.

**On Order II Rule 2 — the burden of proof.**
**Gurbux Singh v. Bhooralal, AIR 1964 SC 1810** — *Three-Judge Bench (verify composition).*
*Facts:* A defendant pleaded the bar of Order II Rule 2 without producing the plaint in the earlier suit.
**Ratio Decidendi:** In order to establish a plea under Order II Rule 2, the defendant must **produce in evidence the plaint in the earlier suit**. Without it the court cannot determine what the cause of action in the earlier suit was, and whether the reliefs now claimed arose from it. The plea being a technical bar, it must be established strictly.
::: tip Practitioner Takeaway
Applies equally to every bar routed through Section 12: **prove the earlier record, or lose the plea.**
:::

::: info Verify before citing
*Gurbux Singh v. Bhooralal* is stated here with its commonly reported citation; confirm the bench strength and citation from the authorised report. The propositions attributed to Order IX Rule 9 and Order XXIII Rule 1 above are longstanding and uncontroversial, but locate a current Supreme Court or jurisdictional High Court authority for each before relying on them in argument.
:::

#### Strategy and drafting

**Traps.**

1. **Withdrawing without liberty.** The single most avoidable catastrophe in civil practice. If there is any prospect of re-filing, the application must ask for liberty under Order XXIII Rule 1(3) **in terms**, and the order must record it.
2. **Letting the 30 days run after a default dismissal.** File the Order IX Rule 9 application, with an affidavit of sufficient cause, immediately.
3. **Filing a fresh suit instead of applying for restoration.** It costs more, and it is barred.
4. **Pleading Section 12 without its feeding Rule.** The plea must identify the Rule that creates the preclusion.
5. **Failing to prove the earlier termination.** Certified copies of the earlier plaint and the order of dismissal/withdrawal/abatement are indispensable.

**Strategic sequencing on receiving a dismissal for default.**

- **Day 0.** Obtain a certified copy of the order.
- **Within 30 days.** File the application under Order IX Rule 9 with an affidavit deposing to sufficient cause with particularity — illness, non-service of notice of the date, counsel's engagement elsewhere, all supported by material.
- **In the alternative.** If delay has already occurred, file the Rule 9 application **with** an application under Section 5 of the Limitation Act for condonation, explaining every day of the delay.
- **Never.** Simply re-file the suit.

**Model prayer checklist — application to withdraw with liberty (Order XXIII Rule 1(3)).**

- [ ] That this Hon'ble Court be pleased to permit the plaintiff to **withdraw** the present suit;
- [ ] That this Hon'ble Court be pleased to grant the plaintiff **liberty to institute a fresh suit** in respect of the same subject-matter, on the ground of a formal defect, namely ____ / on the ground that there are sufficient grounds for permitting the plaintiff to institute a fresh suit, namely ____;
- [ ] That the plaintiff be permitted to withdraw subject to such costs as this Hon'ble Court may direct;
- [ ] For such further and other reliefs as the nature and circumstances of the case may require.

::: warning Drafting Trap
Order XXIII Rule 1(3) permits liberty only on **two** grounds: a **formal defect**, or **other sufficient grounds**. Plead one of them explicitly and with facts. An application that simply asks for liberty, without disclosing the ground, invites an order permitting withdrawal *simpliciter* — which is the very disaster you are trying to avoid.
:::

## Section 13 — When foreign judgment not conclusive

### The dispute this solves

::: oneminute A judgment from somewhere else
Deepa lives in Pune. A company in Singapore says she owes it money, sues her in a Singapore court, and wins. Deepa has never set foot in Singapore. She never appeared in the case. The first she hears of it is when the company's Indian lawyer arrives in Pune with a certified copy of the Singapore judgment and asks an Indian court to give effect to it.

**The problem in plain English:** Indian courts have no general power to review what a Singapore court did — Singapore is a sovereign country and its judges are not subordinate to ours. But it would be equally intolerable for India to enforce, without question, any piece of paper any court anywhere has issued against an Indian.

Section 13 draws the line, and it draws it in a very particular place.

**The default is that the foreign judgment wins.** The section opens by saying a foreign judgment *"shall be conclusive"*. That is a mandatory presumption in favour of the foreigner. Deepa does not begin with an even contest; she begins losing.

**But there are six escape hatches, and only six.** The word "except" is followed by clauses (a) to (f), and that list is **exhaustive**. There is no general power to refuse enforcement because the result seems unfair, no residual "public policy" discretion, and no appeal on the merits.

So the Indian court never asks *"was the Singapore court right?"*. It asks only *"is one of these six doors open?"* — and it is Deepa's job to prove that it is.
:::

::: info The distinction that trips up everybody
Two words get used interchangeably and mean completely different things.

**Conclusive** means the judgment settles the question — Deepa cannot re-argue the debt. But conclusiveness by itself does not get anybody any money. To collect, the Singapore company must file a **fresh suit in India on the foreign judgment**, in which the judgment is conclusive proof of the debt, subject to the six exceptions.

**Enforceable** means the judgment can be executed directly, without any suit at all — the decree-holder simply files an execution petition in an Indian District Court and the machinery of Order XXI takes over. That shortcut lives in **Section 44A**, and it is open only to decrees of *superior courts of reciprocating territories* notified by the Central Government.

The point to fix now, because it is constantly got wrong: **Section 44A is a faster route, not a stronger one.** Section 44A(3) expressly preserves the six exceptions. A judgment-debtor facing a Section 44A execution can raise every single Section 13 ground in that execution.
:::

### The Act, decompiled

The section has a **rule** and a **list of exceptions**, and the grammar matters: everything before "except" is the presumption; everything after it is the escape.

> **13. When foreign judgment not conclusive.** —
>
> A foreign judgment [[!shall]] be **conclusive** as to any matter thereby [[=directly adjudicated upon]] …
>
> … between the **same parties** or between parties under whom they or any of them claim [[=litigating under the same title]] …
>
> … **except** —
>
> **(a)** where it has not been pronounced by a **Court of competent jurisdiction**;
> **(b)** where it has not been given **on the merits** of the case;
> **(c)** where it appears **on the face of the proceedings** to be founded on an incorrect view of international law or a refusal to recognise the law of India in cases in which such law is applicable;
> **(d)** where the proceedings in which the judgment was obtained are **opposed to natural justice**;
> **(e)** where it has been obtained by **fraud**;
> **(f)** where it sustains a claim founded on a **breach of any law in force in India**.

**What "foreign" means here.** Section 2 supplies the definitions, and they are narrower than the ordinary word. A "**foreign Court**" is a court **situate outside India** *and* **not established or continued by the authority of the Central Government**. A "**foreign judgment**" is the judgment of such a court. Both limbs matter — a court set up abroad by the Central Government is not a foreign court for this purpose.

**The words, and what they are doing.**

| Operative expression | Character | Consequence |
|---|---|---|
| "**shall be conclusive**" | **Mandatory presumption of conclusiveness** | The starting position favours the foreign judgment. The burden is on the party resisting it. |
| "as to any matter thereby **directly adjudicated upon**" | Scope limiter | Only matters directly adjudicated; incidental findings are not conclusive. This mirrors "directly and substantially in issue" in S.11. |
| "between the **same parties** … litigating under the **same title**" | Identity requirement | Same requirements as S.11. |
| "**except**" followed by (a)–(f) | **Six exhaustive exceptions** | These are the **only** grounds. There is no residual discretion and no general "public policy" exception outside them. |

**Character of the six exceptions.** They are **exhaustive**, and each is a **condition subsequent** which the objector must plead and prove. A foreign judgment is not re-examined on the merits; the Indian court does not sit in appeal over it. It examines only whether one of the six gateways is open.

::: proviso There is no seventh exception — and no "public policy" catch-all
Practitioners reach instinctively for a general public-policy objection, because arbitration law has one (Section 48 of the Arbitration and Conciliation Act, 1996) and because it feels like there ought to be one. Section 13 does not have one.

If the objection you want to make cannot be fitted into one of clauses (a) to (f), it is not available. In practice this is less limiting than it sounds — clause (f), "a claim founded on a breach of any law in force in India", absorbs most genuine public-policy complaints, and clause (d), natural justice, absorbs most genuine procedural ones. But you must **name the clause**. An objection pleaded as "contrary to public policy" and left there will be rejected as pleading nothing.
:::

### How the section actually runs

This section runs differently from the others in this chapter, and it is worth seeing why. Sections 10, 11 and 12 are **bars**: pass every gate and the suit is stopped. Section 13 is a **presumption**: pass every gate and the foreign judgment is *believed*. The gates below are the threshold questions. The six exceptions are not gates at all — they are the objector's counter-attack, and they come afterwards.

<MicroTree
  input="A judgment of a court outside India is relied on in an Indian court, either in a fresh suit on the judgment or in a Section 44A execution"
  :gates="[
    { q: 'Is it a FOREIGN judgment as the Code defines it?', note: 'Section 2: a court situate outside India AND not established or continued by the authority of the Central Government.', no: 'Section 13 does not apply at all. If it is an Indian court\'s judgment, the governing provision is Section 11.' },
    { q: 'Was the matter DIRECTLY adjudicated upon by that court?', note: 'The same idea as \'directly and substantially in issue\' in Section 11 — findings given incidentally or collaterally are not covered.', no: 'That finding is not conclusive. Conclusiveness attaches matter by matter, not judgment by judgment.' },
    { q: 'Are these the same parties, or persons claiming under them, litigating under the same title?', note: 'Identical to the Section 11 requirement, privies included.', no: 'A stranger to the foreign proceeding is not bound by it.' }
  ]"
  result="the foreign judgment is CONCLUSIVE as to those matters — the Indian court will not reopen them, and will not sit in appeal on whether the foreign court was right"
  caveat="Unless the objector pleads and PROVES one of the six exceptions, and only these six: (a) no competent jurisdiction, judged by Indian private international law and not by what the foreign court thought of itself; (b) not given on the merits; (c) an incorrect view of international law, or a refusal to apply Indian law where Indian law governed — and it must appear on the face of the proceedings; (d) proceedings opposed to natural justice; (e) obtained by fraud; (f) sustains a claim founded on a breach of a law in force in India. The burden is entirely on the objector."
  resultKind="mandatory"
/>

::: warning Which side of the table are you on?
The presumption decides who has to do the work, and that is usually the whole case.

- **Decree-holder:** produce a certified copy of the foreign judgment and stop. Section 14 raises a **presumption** that the foreign court had jurisdiction. Then say: the judgment is conclusive; the burden is on the other side.
- **Judgment-debtor:** you must plead a specific clause, with particulars, and lead evidence to prove it. Vague resistance loses. "It was unfair" is not a plea; "there was no due service, and the affidavit of service filed in the Singapore proceeding was false — clauses (d) and (e)" is.
:::

### In plain English

**Sub-module A — Clause (a): competent jurisdiction.** Competence is judged by **Indian private international law**, not merely by the foreign court's own view of its jurisdiction. A foreign court is ordinarily competent over a defendant who:

- was **resident** in that country when the action commenced; or
- was a **subject or citizen** of that country; or
- **voluntarily appeared** and submitted to the jurisdiction; or
- **contractually agreed** to submit to that forum; or
- **selected the forum** as plaintiff and is then sued there in the same matter.

Mere service of summons on a defendant temporarily present, or a defendant who never submitted, does not confer competence. A decree against a non-submitting, non-resident defendant is a nullity in India.

**Sub-module B — Clause (b): on the merits.** A judgment is "on the merits" only where the court **applied its mind to the truth or falsity of the plaintiff's case** and adjudicated upon it. Consequently:

- a decree passed **ex parte without any evidence being led** is generally **not** on the merits;
- a decree passed **by way of penalty** for default in filing a defence, or as a sanction for non-compliance with a procedural order, is **not** on the merits;
- a decree passed ex parte **after the plaintiff led evidence which the court considered** may well be on the merits.

The test is substantive, not formal: was there an adjudication, or merely a default?

**Sub-module C — Clause (c): incorrect view of international law or refusal to recognise Indian law.** Two distinct grounds fused in one clause, and both must appear **on the face of the proceedings**:

1. the judgment is founded on an incorrect view of **international law** (including private international law); or
2. the court **refused to recognise the law of India** in a case where Indian law was applicable — for instance, a foreign court dissolving a Hindu marriage on a ground not available under the Hindu Marriage Act, 1955, which is the law under which the parties married.

**Sub-module D — Clause (d): natural justice.** This clause is about **procedure**, not merits. It is directed to whether the defendant had:

- **due notice** of the proceedings; and
- a **fair opportunity** to present his case; before
- an **impartial** tribunal.

It is not an invitation to argue that the foreign court reached the wrong conclusion. A judgment that is substantively wrong but procedurally fair survives clause (d).

**Sub-module E — Clause (e): fraud.** Fraud vitiates the most solemn judgment. The fraud contemplated is fraud on the court or fraud as to the **jurisdictional facts** — for example, falsely representing residence or domicile to found jurisdiction, or suppressing service. The classic principle is that a judgment obtained by fraud is a nullity and may be challenged **collaterally**, and that no court will allow itself to be used as an instrument of fraud.

::: tip Practitioner Takeaway
Fraud as to **jurisdiction** is the strongest of all attacks on a foreign judgment, because it merges clauses (a) and (e). Plead both together: *"the said court had no jurisdiction, such jurisdiction as it purported to assume having been founded upon the plaintiff's false representation as to his residence."*
:::

**Sub-module F — Clause (f): claim founded on a breach of Indian law.** The Indian court will not lend its aid to enforce a foreign judgment which sustains a claim that would be unlawful in India — for example, a decree enforcing a wagering contract, a claim in respect of a transaction prohibited by Indian exchange control or other mandatory law, or a claim contrary to a statute of India that governs the transaction.

**Sub-module G — Conclusiveness versus enforceability: the two distinct routes.** This distinction is constantly confused and is worth stating flatly.

| | **Section 13 (with S.14)** | **Section 44A** |
|---|---|---|
| Function | Makes a foreign judgment **conclusive** as a matter of evidence and as a plea | Makes certain foreign decrees **directly executable** |
| Applies to | Judgments of **any** foreign court | Decrees of **superior courts of reciprocating territories** notified by the Central Government |
| How relief is obtained | By filing a **fresh suit in India on the foreign judgment**, in which the foreign judgment is conclusive subject to the six exceptions | By filing an **execution petition** in a District Court, as if the decree were of that court |
| Are the S.13 exceptions available? | Yes | **Yes** — S.44A(3) expressly preserves them |
| Nature of decree covered | Any | Excludes decrees for taxes, fines, penalties and sums payable in respect of other charges of a like nature |

The essential point: **Section 44A is a mode of execution, not an exception to Section 13.** Even in a S.44A execution, the judgment-debtor may raise every one of the six grounds.

### Test your instinct

::::instinct The divorce that arrived from abroad

**The facts.** Anita and Chetan married in Pune under the **Hindu Marriage Act, 1955**. Some years later Chetan moved abroad for work and acquired residence in a country whose matrimonial law permits divorce on the ground of **irretrievable breakdown of marriage** — a ground that does not exist under the 1955 Act.

Chetan petitions for divorce there. Anita is in Pune. She is served by post, does not go abroad, does not appear, and does not authorise anyone to appear for her. The foreign court, hearing only Chetan, grants a decree of divorce.

Chetan returns to India and relies on the decree. Anita's maintenance petition, he says, is misconceived: they are no longer married, and the foreign judgment is conclusive under Section 13.

**The question.** The foreign court plainly had jurisdiction over Chetan, who lived there. The decree is a genuine decree of a real court. Is Anita bound?

:::ruling
**No. This decree fails on four of the six clauses, and it is worth seeing each because they stack.**

**Clause (a) — no competent jurisdiction.** Competence here is judged by **Indian private international law**, not by what the foreign court thought of its own reach. In matrimonial matters, the forum is competent only where it is the forum under the law under which the parties **married**, or where the respondent voluntarily and effectively submitted. Anita never lived there, never appeared, and never agreed to that forum. Chetan's residence gives the foreign court power over Chetan; it does not give it power over Anita's marriage.

**Clause (b) — not on the merits.** A decree passed on one side's uncontested say-so, with no evidence weighed, is not an adjudication. The test is whether the court **applied its mind to the truth or falsity of the case** — not whether it went through a hearing.

**Clause (c) — refusal to recognise Indian law.** This is the clause with real bite here. The parties married under the Hindu Marriage Act; that Act is the law governing the dissolution of their marriage. A foreign court that dissolves it on a ground **unavailable under that Act** has, on the face of the proceedings, declined to apply the law that governed. The mischief is precise: Chetan has manufactured a ground of divorce by changing his address.

**Clause (d) — natural justice.** Anita had no realistic opportunity to be heard. Formal service that requires a woman in Pune to litigate abroad, in a forum she never chose, on a ground her own matrimonial law does not recognise, is notice in name only.

**The single sentence that ties it together.** A foreign matrimonial judgment is recognised in India only if it is passed by a forum **to whose jurisdiction the parties are subject under the matrimonial law by which they are governed**, and on a **ground available under that law**. Everything else is a decree with no effect here.

**What you say in court:** *"The parties were married under the Hindu Marriage Act, 1955. The foreign court neither had jurisdiction under the law governing the marriage nor applied that law, having granted dissolution on a ground unknown to it, and the respondent neither appeared nor submitted. The judgment falls within clauses (a), (b), (c) and (d) of Section 13 and is not conclusive."*
:::

::::

::::instinct The shortcut that was supposed to end the argument

**The facts.** A company holds a money decree of a superior court in a **reciprocating territory** — one that the Central Government has notified under Section 44A. That is the good scenario for a decree-holder: no fresh suit needed, just an execution petition in an Indian District Court, and the decree is executed as if the District Court had passed it.

The company files its execution petition. Bharat, the judgment-debtor, files objections under Section 47 saying he was never served in the foreign proceeding, that the affidavit of service filed there was false, and that no evidence was ever led.

The decree-holder's answer is procedural, and it sounds strong: **Section 44A is a self-contained code of execution.** The decree is deemed to be a decree of the District Court. An executing court cannot go behind a decree. If Bharat had objections to the merits of the foreign judgment, his remedy was to appeal in the foreign country, not to re-open it in a District Court in India.

**The question.** Is Section 44A a way around Section 13?

:::ruling
**No, and the Code says so in terms.**

**Section 44A(3)** expressly provides that execution shall be refused where it appears to the court that the decree falls within any of the exceptions specified in clauses (a) to (f) of Section 13. The six defences are preserved in full, inside the execution.

The general rule that an executing court cannot go behind the decree applies to **Indian** decrees, where the judgment-debtor had a court of appeal available to him within the same system. It has no application to a foreign decree, which no Indian court has ever examined.

So the correct way to see Section 44A is this: it changes the **procedure**, not the **substance**. It saves the decree-holder from having to file a suit and prove his case afresh. It does not upgrade the quality of the foreign judgment or strip the judgment-debtor of anything.

| | Suit on the foreign judgment (Ss. 13–14) | Execution under S. 44A |
|---|---|---|
| Available for | Judgments of **any** foreign court | Decrees of **superior courts of reciprocating territories** only |
| What you file | A **plaint** | An **execution petition** |
| Excluded subject-matter | — | Taxes, fines, penalties, and sums of a like nature |
| The six Section 13 defences | Available | **Equally available**, by S. 44A(3) |

**Where Bharat must raise them.** In the execution itself, by objections under **Section 47**, supported by an affidavit and by evidence. He does not need a separate suit, and filing one would be wrong.

**What you say in court:** *"Section 44A(3) preserves the exceptions in clauses (a) to (f) of Section 13. This Hon'ble Court is not merely permitted but obliged to refuse execution if the decree is shown to fall within any of them, and the ordinary rule that an executing court may not go behind the decree has no application to a decree no Indian court has ever examined."*
:::

::::

### Practitioner HUD

**The winning ratio — the one proposition to cite.**

> A foreign judgment is conclusive only if it satisfies Section 13. In matrimonial matters, the jurisdiction assumed by the foreign court and the ground on which relief is granted must both be **in accordance with the matrimonial law under which the parties are married**. A decree granted on a ground unavailable under that law, against a spouse who did not voluntarily and effectively submit to that forum, is not conclusive in India.
> — the settled rule from *Y. Narasimha Rao v. Y. Venkata Lakshmi*, (1991) 3 SCC 451

**Sword and shield.**

| | How it is used |
|---|---|
| **Sword (decree-holder)** | Lead with the presumption. Produce the certified copy, invoke **Section 14** for the presumption of jurisdiction, and put the burden squarely on the other side. If the decree qualifies, go straight to **Section 44A** and skip the suit entirely. |
| **Shield (judgment-debtor)** | Never resist generally. Name the clause, plead the particulars, and lead the evidence. Raise it in the **written statement** if a suit has been filed on the judgment, or by **Section 47 objections** if a Section 44A execution has been launched. |

**Limitation clock.**

| Step | Article | Period |
|---|---|---|
| **Fresh suit in India on a foreign judgment** | **Article 101**, Limitation Act, 1963 | **3 years** from the date of the foreign judgment |
| **Execution of a decree under S. 44A** | **Article 136** | 12 years from when the decree becomes enforceable |
| Objections under S. 47 in execution | — | At the earliest opportunity in the execution; do not let the sale conclude |

::: danger Three years, and it runs from the foreign judgment
Article 101 is the trap in this section. Time runs from the **date of the foreign judgment**, not from the date the decree-holder discovers assets in India, and not from any demand. A decree-holder who spends four years trying to enforce abroad before turning to India has lost the suit route altogether.

If Section 44A is available, it is not merely faster — under Article 136 it buys **twelve years** instead of three. Check the reciprocating-territory notification early, not late.
:::

**Court fee.** A suit on a foreign judgment is an ordinary money suit and bears **ad valorem** court fee on the decretal amount. A Section 44A execution bears only the process fees of execution. On a large decree the difference is substantial, and it points the same way as the limitation position.

**Drafting pitfalls.**

::: warning Plead the clause, not the grievance
The commonest and most fatal error is to resist a foreign judgment in general terms. The Indian court is not being asked whether the foreign judgment was right; it is being asked whether a specific door is open.

- **Name the clause and give particulars.** Not "the proceedings were unfair" but "the plaintiff filed an affidavit of service dated ____ falsely deposing to personal service on the defendant at ____, at which address the defendant has never resided — clauses (d) and (e)."
- **Pair (a) with (e) where you can.** Fraud as to the **jurisdictional facts** is the strongest attack available, because it collapses two clauses into one: *"the said court had no jurisdiction, such jurisdiction as it purported to assume having been founded upon the plaintiff's false representation as to his residence."*
- **Clause (c) must appear on the face of the proceedings.** You cannot lead fresh evidence to show the foreign court took a wrong view of international law. Work from the foreign judgment and record alone.
- **Do not import "public policy".** There is no such exception in Section 13. Route the objection through clause (f) — breach of a law in force in India — and identify the Indian statute.
- **Decree-holder's own trap:** get a properly certified and, where required, **apostilled or legalised** copy of the foreign judgment, with a certified translation if it is not in English. A perfectly good decree fails on proof more often than on Section 13.
:::

#### Interlocking matrix — what this connects to

| Linked provision | Interlock |
|---|---|
| **S.2(5) & 2(6)** | Definitions of "foreign Court" and "foreign judgment". |
| **S.14** | Presumption of competent jurisdiction on production of a certified copy. |
| **S.44A** | Direct execution of decrees of superior courts of **reciprocating territories**; sub-section (3) preserves the S.13 defences. |
| **S.47** | In a S.44A execution, objections go to the executing court under S.47, not by separate suit. |
| **O.XXI R.22** | **Notice to show cause** before execution — the judgment-debtor's opportunity to raise S.13 grounds. |
| **O.XXI R.11** | Contents of the execution application. |
| **S.11 / Explanation VII** | Once an objection is decided in one execution proceeding, it cannot be re-agitated in another. |
| **S.10, Explanation** | Foreign *lis pendens* is no bar to an Indian suit — the counterpart rule at the pendency stage. |
| **Evidence Act, 1872, Ss. 41, 43, 44** | Relevance of foreign judgments; **S.44 permits proof that the judgment was delivered by an incompetent court or obtained by fraud or collusion**. |
| **Evidence Act, S.86** | Presumption as to certified copies of foreign judicial records. |
| **Certified copies** | A certified copy is essential; see S.14 and O.XXI R.11. |

**Limitation Act, 1963.**

| Proceeding | Article | Period |
|---|---|---|
| Suit upon a **foreign judgment** | **Article 101** | **Three years** from the date of the judgment |
| Execution of a decree under **S.44A** | **Article 136** | 12 years from when the decree becomes enforceable |

::: danger Fatal Error
**Three years.** A suit on a foreign judgment under Article 101 must be filed within three years of the date of the judgment. Decree-holders routinely lose enforceable foreign judgments by treating them as if the twelve-year execution period applied. If the decree does **not** qualify under S.44A, the clock is three years, and it starts on the date of the foreign judgment.
:::

**Court fee.** A suit on a foreign judgment is a suit for money and is valued and stamped on the decretal amount under the applicable Court Fees Act. A S.44A execution attracts execution process fees only — a very substantial saving, and another reason to check reciprocating-territory status first.

**Applications typically filed.**

- Execution petition under **S.44A read with O.XXI R.11**, annexing a certified copy of the decree and the certificate from the superior court stating the extent of satisfaction or adjustment (required by S.44A(2)).
- Objections by the judgment-debtor under **S.47 read with S.13**, raising the applicable exceptions.
- In the alternative, a **suit on the foreign judgment**, where S.44A is unavailable.
- Application for **anti-suit injunction** in an appropriate case, restraining a party from prosecuting proceedings in a foreign forum.

#### The authorities

**Satya v. Teja Singh, (1975) 1 SCC 120** — *Two-Judge Bench.*
*Facts:* The husband obtained a divorce decree from a Nevada court on the basis of a residence he had acquired only colourably, the wife never having submitted to that jurisdiction.
**Ratio Decidendi:** The competence of a foreign court for the purposes of Section 13(a) is to be determined by the rules of **Indian private international law**, not by the foreign court's own assumption of jurisdiction. A decree obtained by making a false representation as to domicile or residence, in order to found jurisdiction, is obtained by fraud within Section 13(e) and is a nullity. The court will not recognise a decree procured by such means.
::: tip Practitioner Takeaway
*"Jurisdiction assumed on a colourable residence is no jurisdiction; and a representation of residence made to found such jurisdiction is fraud within Section 13(e) — Satya v. Teja Singh."*
:::

**Y. Narasimha Rao v. Y. Venkata Lakshmi, (1991) 3 SCC 451** — *Two-Judge Bench.*
*Facts:* Parties married in India under the Hindu Marriage Act, 1955; the husband obtained a decree of dissolution from a court in Missouri, USA, on a ground not available under the 1955 Act, the wife not having submitted to that jurisdiction.
**Ratio Decidendi:** The Court laid down the rule for matrimonial matters: the **jurisdiction assumed by the foreign court** as well as the **grounds on which relief is granted** must be in accordance with the **matrimonial law under which the parties are married**, except (i) where the jurisdiction is invoked by the respondent and relief is granted on a ground available under that matrimonial law; (ii) where the respondent voluntarily and effectively submits to the jurisdiction of the forum and contests the claim on a ground available under that law; or (iii) where the respondent consents to the grant of the relief. A decree not satisfying this rule falls foul of Section 13.
::: tip Practitioner Takeaway
The controlling authority in every foreign-divorce recognition dispute. Quote the rule and then apply the three exceptions one by one.
:::

**International Woollen Mills v. Standard Wool (U.K.) Ltd., (2001) 5 SCC 265** — *Two-Judge Bench.*
*Facts:* An English court entered judgment in default of defence without taking evidence; execution was sought in India.
**Ratio Decidendi:** A judgment is "given on the merits" within Section 13(b) only where the court has applied its mind to the truth or otherwise of the plaintiff's case. A decree passed merely by way of penalty for default, without consideration of the plaintiff's evidence, is **not** a judgment on the merits and is not conclusive. Whether a judgment is on the merits must be determined from the judgment and the proceedings themselves.
::: tip Practitioner Takeaway
Obtain and translate the **complete foreign record**, not merely the decree. The proceedings show whether evidence was considered.
:::

**Moloji Nar Singh Rao v. Shankar Saran, AIR 1962 SC 1737** — *Constitution Bench (verify composition).*
*Facts:* A decree of a court of a former Indian State was sought to be executed; the defendant had not submitted to that jurisdiction.
**Ratio Decidendi:** A foreign judgment against a defendant who was not a subject of, not resident in, and did not submit to the jurisdiction of the foreign court is not binding, and cannot be executed in India. Mere possession of property within the foreign jurisdiction does not confer personal jurisdiction over the defendant.

**Alcon Electronics Pvt. Ltd. v. Celem S.A. of F.O.S. 34320 Roujan, France, (2017) 2 SCC 253** — *Two-Judge Bench.*
*Facts:* An order of the English High Court was relied upon in Indian proceedings; the question was whether it was a "judgment" conclusive under Section 13.
**Ratio Decidendi:** An order of a foreign court determining a substantive question between the parties after hearing may constitute a judgment "on the merits" for the purposes of Section 13, and the party resisting conclusiveness bears the burden of bringing the case within one of the exceptions in clauses (a) to (f). The Indian court does not sit in appeal over the foreign judgment.

::: info Verify before citing
Bench strength in *Moloji Nar Singh Rao* is recorded here as requiring confirmation. Verify all reporter citations against the authorised reports, and check whether the **reciprocating territory** notification under Section 44A currently covers the country in question — that list is amended from time to time by the Central Government and is the first thing to check in any foreign-decree matter. Also confirm the current status of *Y. Narasimha Rao* and whether any later Bench has explained its three exceptions.
:::

#### Strategy and drafting

**The decree-holder's checklist (enforcing a foreign judgment in India).**

- [ ] **Step 1.** Is the country a **reciprocating territory**, and is the court a **superior court** notified under S.44A? Check the current notification. If yes, execute under S.44A — do not file a suit.
- [ ] **Step 2.** If no, compute limitation under **Article 101** — three years from the date of the judgment — and file the suit on the foreign judgment at once.
- [ ] **Step 3.** Obtain a **certified copy** of the decree, and (for S.44A) the certificate from the superior court stating the extent to which the decree has been satisfied or adjusted, as required by S.44A(2).
- [ ] **Step 4.** Obtain the **complete record** of the foreign proceedings — pleadings, affidavits of service, evidence, and the reasons — so that you can demonstrate the judgment was on the merits, after notice, before a competent court.
- [ ] **Step 5.** Ensure certified translations where the record is not in English, with proper authentication.
- [ ] **Step 6.** Check the decree is not for **taxes, fines or penalties**, which are excluded from S.44A.
- [ ] **Step 7.** Anticipate each of the six exceptions in the execution petition or plaint, and plead facts negativing them.

**The judgment-debtor's checklist (resisting a foreign judgment).**

- [ ] Was the defendant **resident, a subject, or a submitting party**? If none, plead clause (a) — want of competence.
- [ ] Was the decree **ex parte and without evidence**? Plead clause (b) — not on the merits, and annex the foreign record to prove it.
- [ ] Did the foreign court apply a **law other than Indian law** where Indian law governed — especially in matrimonial matters? Plead clause (c) with *Y. Narasimha Rao*.
- [ ] Was there **due notice and a fair hearing**? Plead clause (d) with particulars of non-service.
- [ ] Was jurisdiction founded on a **false representation**? Plead clauses (a) and (e) together.
- [ ] Does the claim offend a **mandatory Indian law**? Plead clause (f).
- [ ] Raise all of these **in the S.47 objections at the first opportunity** — Explanation VII to S.11 will bar you from raising them in a later execution.

::: warning Drafting Trap
Do not plead the six exceptions as a scatter of alternatives without facts. Each is a distinct plea requiring distinct particulars. A composite averment that "the judgment is not conclusive under Section 13" will be rejected. Take each clause, plead the primary facts, and identify the document that proves it.
:::

::: danger Fatal Error
Raising Section 13 objections late in a Section 44A execution. Objections must be taken when notice is issued under **Order XXI Rule 22**. A judgment-debtor who allows the execution to proceed and raises the objection in a second execution petition will be met with Explanation VII to Section 11 and Section 47, and will be shut out.
:::

**Model plea — judgment-debtor's objection under Section 47 read with Section 13.**

> *"The decree dated ____ passed by the ____ Court at ____ is not conclusive as against this objector by reason of Section 13 of the Code of Civil Procedure, 1908, in that: (a) the said Court was not a Court of competent jurisdiction, this objector having at no time been resident in or a citizen of the said country, having never voluntarily appeared before or submitted to the jurisdiction of the said Court, and there being no contract whereby he submitted to such jurisdiction; (b) the said decree was not given on the merits, the same having been passed in default of defence and without any evidence being led or considered, as appears from the certified copy of the proceedings filed herewith and marked Annexure ____; (d) the proceedings were opposed to natural justice inasmuch as no summons or notice was served upon this objector, the purported affidavit of service dated ____ being false; and (e) the said decree was obtained by fraud, the decree-holder having falsely represented to the said Court that this objector was resident at ____."*

## Section 14 — Presumption as to foreign judgments

### The dispute this solves

::: oneminute An impossible thing to prove
Section 13 has just told us that a foreign judgment is not conclusive if it was **not pronounced by a court of competent jurisdiction**. Fine. But somebody has to establish whether it was, and that turns out to be a genuinely difficult practical problem.

Suppose Anita holds a judgment of a court in Dubai and wants an Indian court to act on it. If she has to *prove* that the Dubai court was competent, what exactly does she file? The Dubai statute establishing that court — in Arabic, with a certified translation. Expert evidence of UAE law on the court's jurisdiction. Evidence of where the defendant was living at the time. All of it, before anybody has even looked at the merits.

That would make every foreign judgment practically worthless. The cost of proving competence would routinely exceed the decree.

**Section 14 solves it with a presumption.** Anita produces a certified copy. That is all. From that moment the court **must presume** the foreign court was competent, and it is the other side's job to prove it was not.

But read the section carefully, because it is far narrower than people assume — and this is where both sides lose cases:

- It presumes **competence only**. Not that the judgment was on the merits. Not that the defendant was served. Not that there was no fraud. Every one of those still has to be fought on evidence.
- It presumes competence **as Indian law understands competence** — not as the foreign court understood its own reach.
- It presumes nothing at all if there is **no certified copy**, or if the contrary **appears on the record**.

In one line: Section 14 shifts one burden, on one issue, on one condition.
:::

::: info Where this sits in the machinery
Section 13 lists six ways to defeat a foreign judgment. Section 14 disposes of a preliminary skirmish about the first of them.

| | |
|---|---|
| **S. 13** | The six exceptions. Who can attack a foreign judgment, and on what grounds. |
| **S. 14** | Who has to prove the first exception, clause (a). Answer: the objector. |
| **S. 44A** | How to execute certain foreign decrees without a fresh suit — with all six exceptions preserved. |
| **Evidence Act, s. 86** | The court may presume the genuineness of a certified copy of a foreign judicial record. |
| **Evidence Act, s. 44** | The machinery by which a party actually *shows* incompetence, fraud or collusion. |

Read Sections 13, 14 and 44A together. They are one scheme, split across three places in the Code.
:::

### The Act, decompiled

A single sentence containing a presumption, a condition, a limit and an escape.

> **14. Presumption as to foreign judgments.** —
>
> The Court [[!shall presume]], upon the **production** of any document **purporting to be** a certified copy of a foreign judgment, …
>
> … that such judgment was pronounced by a Court of **competent jurisdiction**, …
>
> … **unless the contrary appears on the record**; …
>
> … but such presumption **may be displaced by proving want of jurisdiction**.

Four working parts, and each is a place where a case is won or lost:

| The phrase | What it does |
|---|---|
| **"shall presume"** | Not "may". The court has no choice; it must start from competence. |
| **"upon the production"** | A condition precedent. No certified copy on the file, no presumption at all. |
| **"unless the contrary appears on the record"** | A free escape for the objector — if the record itself gives him away, the presumption never even arises, and he need lead no evidence. |
| **"may be displaced by proving want of jurisdiction"** | The paid escape — where the record is silent, the objector must lead evidence. |

::: warning "Shall presume" has a precise meaning — learn it here
The law of evidence recognises three strengths of presumption, and the difference decides who does the work:

| Formula | Effect |
|---|---|
| **"May presume"** | The court *may* treat the fact as proved. Discretionary. |
| **"Shall presume"** | The court **must** treat the fact as proved **unless and until it is disproved**. Mandatory but rebuttable. |
| **"Conclusive proof"** | The court must treat it as proved and will **not allow evidence to disprove it**. Irrebuttable. |

Section 14 uses the middle one. So a judge who says "I am not satisfied the Dubai court had jurisdiction" without any evidence from the objector has erred — he was obliged to presume it. And an objector who merely *denies* jurisdiction has done nothing at all, because a denial is not disproof.
:::

**The words, and what they are doing.**

| Operative expression | Character | Consequence |
|---|---|---|
| "The Court **shall presume**" | **Mandatory rebuttable presumption** | The court has no discretion to refuse the presumption; it must draw it. Compare "may presume" elsewhere in the law of evidence. |
| "upon the **production**" | **Condition precedent** | The presumption arises only on production. No certified copy, no presumption. |
| "any document **purporting to be** a certified copy" | Low threshold | The document need only *purport* to be a certified copy. Its authenticity is presumed at this stage. |
| "that such judgment was pronounced by a Court of **competent jurisdiction**" | Scope of the presumption | The presumption extends **only to competence** — not to the merits, not to service, not to the absence of fraud. |
| "**unless the contrary appears on the record**" | Internal limit | If the record itself discloses incompetence, the presumption never arises. |
| "but such presumption **may be displaced by proving want of jurisdiction**" | **Rebuttal clause** | The presumption is rebuttable, and the burden of rebuttal lies on the objector. |

**Precise scope.** Section 14 does two things and no more:

1. It creates a **mandatory but rebuttable presumption of competence** (that is, it presumes away clause (a) of Section 13 at the threshold); and
2. It places the **burden of proving want of jurisdiction** squarely on the party challenging the foreign judgment.

It creates **no** presumption that the judgment was on the merits, that natural justice was observed, or that it was free of fraud. Those remain live and must be met on the evidence.

### How the section actually runs

<MicroTree
  input="A party produces a foreign judgment and asks an Indian court to act on it"
  :gates="[
    { q: 'Has a document PURPORTING to be a certified copy actually been produced?', note: 'The threshold is low — the document need only purport to be certified, and its authenticity is presumed at this stage under Evidence Act s. 86. But it must be on the file.', no: 'Section 14 is not engaged at all. A photocopy, an uncertified print or an email attachment gives you nothing, and the party relying on the judgment must prove competence affirmatively — which is usually the end of the matter.' },
    { q: 'Is the record silent as to competence — or does the CONTRARY appear on its face?', note: 'If the judgment itself recites that the defendant resides in India, never appeared, and was served only by publication, the record has answered the question.', no: 'The presumption never arises. The objector need lead no evidence at all. Always run this argument first: it is free.' }
  ]"
  result="the court MUST presume the foreign court was competent — the party relying on the judgment need prove nothing more on that issue"
  caveat="The presumption is of COMPETENCE ONLY, and only as Indian private international law understands competence. Nothing is presumed about the merits, about service, about natural justice or about fraud — Section 13(b) to (f) remain wide open, and the decree-holder must be ready to meet them on evidence. And the presumption is rebuttable: the objector may still displace it by PROVING want of jurisdiction. A bare denial is not proof."
  resultKind="mandatory"
/>

::: proviso Competence means competence by *Indian* rules
This is the point on which the section is most often misread, and it is worth stating on its own.

The presumption is that the foreign court was competent **as understood by Indian private international law**. It does not import the foreign country's own long-arm statute. So a foreign law permitting service on a wholly unconnected defendant does not make that court competent for Indian purposes — and once the presumption is rebutted on Indian principles, it cannot be restored by pointing to the foreign statute.

By Indian rules, a foreign court is ordinarily competent over a defendant who:

- was **resident** in that country when the action commenced; or
- was a **subject or citizen** of that country; or
- **voluntarily appeared** and submitted to its jurisdiction; or
- **contractually agreed** to submit to that forum; or
- chose that forum as **plaintiff**, and is then sued there in the same matter.

Mere temporary presence when summons was served is not enough. Neither is the existence of assets. A decree against a non-resident, non-national, non-submitting defendant is a nullity in India however impeccable it is at home.
:::

### In plain English

**Sub-module A — The burden of proof, allocated.** Section 14 is, in practical terms, a burden-shifting provision. Without it, a party suing on a foreign judgment would have to prove affirmatively that the foreign court was competent — often an impossible task requiring expert evidence of foreign law. Section 14 relieves him of that burden on production of a certified copy.

**Sub-module B — "Shall presume" in the scheme of the Evidence Act.** Under the law of evidence, "**shall presume**" obliges the court to regard the fact as proved **unless and until it is disproved**. It is stronger than "may presume" (discretionary) and weaker than "conclusive proof" (irrebuttable). Section 14 therefore sits in the middle tier: the court must start from competence, but the objector may dislodge it with evidence.

**Sub-module C — The two escape routes for the objector.**

1. **"Unless the contrary appears on the record."** If the foreign judgment or record itself shows, on its face, that the defendant was not resident, not a subject and did not appear, the presumption **never arises**. This costs the objector nothing and should always be the first argument.
2. **"May be displaced by proving want of jurisdiction."** Where the record is silent or ambiguous, the objector must **lead evidence** — of the defendant's residence and nationality, of the absence of submission, of the absence of any jurisdiction agreement, and, where necessary, expert evidence of the foreign law.

**Sub-module D — Competence is judged by Indian conflict rules.** Critically, the presumption is of competence **as understood by Indian private international law**. It does not import the foreign court's own long-arm rules. A foreign statute permitting service on a wholly unconnected defendant does not make that court "competent" for Indian purposes; the presumption, once rebutted on Indian principles, cannot be restored by pointing to the foreign statute.

**Sub-module E — Section 14 read with the Evidence Act.** Two further provisions matter:

- **Section 86, Evidence Act, 1872** — the court may presume the genuineness and accuracy of a certified copy of a foreign judicial record, if it is certified in the manner commonly in use in that country for the certification of copies of judicial records.
- **Section 44, Evidence Act, 1872** — a party may show that a judgment relied upon was **delivered by a court not competent to deliver it**, or was **obtained by fraud or collusion**. This is the evidentiary machinery that gives effect to the rebuttal permitted by Section 14 and to clauses (a) and (e) of Section 13.

::: tip Practitioner Takeaway
Plead the trio together: *"Section 14 of the Code raises no presumption beyond competence; and that presumption stands rebutted by the evidence of ____, as this Hon'ble Court is entitled to hold under Section 44 of the Indian Evidence Act, 1872."*
:::

### Test your instinct

::::instinct The objection that consisted of the word "no"

**The facts.** A decree-holder files a certified copy of a money judgment of a foreign court against Bharat and asks for it to be acted on in India. The certified copy says nothing one way or the other about where Bharat lived or whether he appeared. It simply records the claim and the decree.

Bharat files objections. In substance they say: *"The said Court had no jurisdiction over the objector. The objector denies that the said Court was competent. The judgment is not conclusive under Section 13(a) of the Code."*

He files no documents and leads no evidence, on the footing that jurisdiction is for the decree-holder to establish — after all, it is the decree-holder who is asking the Indian court for something.

**The question.** Bharat's proposition sounds like ordinary first principles: he who asserts must prove. Is he right?

:::ruling
**No, and his objections are worth nothing as they stand.**

Section 14 has reversed the burden, and it has done so deliberately, precisely because proving foreign competence from scratch is close to impossible. On production of the certified copy the court **shall presume** competence. That is a mandatory presumption, and a presumption is displaced only by **disproof** — not by denial, however emphatic.

Bharat has confused **pleading** an exception with **proving** it. Section 13's six exceptions are conditions subsequent: the objector must plead each with particulars *and* establish it on evidence.

**What Bharat should have filed.** Primary facts, each supported by a document:

- Where he actually resided when the foreign action commenced — passport with entry and exit stamps, tenancy agreement, employer's letter, income-tax returns, utility bills, Aadhaar.
- Of what country he was a national — passport.
- That he never entered appearance in the foreign proceeding, personally or through counsel — the foreign cause-title and order sheet.
- That there was no jurisdiction or forum-selection clause in any contract between the parties — the contract itself.
- Where necessary, **expert evidence of the foreign law**.

And in his written objections, the pleading that ties it together, invoking **Section 44 of the Evidence Act, 1872**, which is what actually permits a party to show that a judgment was delivered by an incompetent court or obtained by fraud or collusion.

**The free argument Bharat overlooked.** Before spending any of that effort, he should have read the certified copy itself. If the foreign judgment recites, as such judgments frequently do, that the defendant "is a resident of Chennai, India, and has not appeared, service having been effected by publication only", then the **contrary appears on the record** and the presumption never arises at all. It costs nothing to check, and it wins without evidence. Always look there first.

**What you say in court:** *"Section 14 raises no presumption beyond competence, and that presumption stands rebutted by the objector's evidence of continuous residence in India, of Indian nationality, and of non-appearance, as this Hon'ble Court is entitled to hold under Section 44 of the Indian Evidence Act, 1872."*
:::

::::

::::instinct The decree-holder who proved too little and assumed too much

**The facts.** Deepa's company holds a foreign judgment against an Indian company, obtained after the Indian company failed to file a defence abroad. The foreign court entered judgment by default, purely as a consequence of that failure. No evidence was taken and no witness was heard.

The Indian company was, at the relevant time, genuinely carrying on business in the foreign country through a registered branch. Its competence objection is hopeless and it knows it.

Deepa's counsel files the certified copy in the Indian proceeding and argues: Section 14 raises the presumption of competence; the objector cannot displace it; therefore the judgment is conclusive under Section 13 and the Indian court must act on it.

**The question.** Competence really is made out. Does Deepa win?

:::ruling
**No. She has won one issue out of six and behaved as if she had won all of them.**

Section 14 presumes **competent jurisdiction** and nothing else. Its words are exact: *"that such judgment was pronounced by a Court of competent jurisdiction"*. That is clause (a) of Section 13, and clause (a) alone.

Nothing is presumed about clauses (b) to (f):

| Section 13 clause | Presumed by s. 14? |
|---|---|
| **(a)** competent jurisdiction | **Yes** |
| (b) on the merits | No |
| (c) correct view of international law / Indian law applied | No |
| (d) natural justice | No |
| (e) absence of fraud | No |
| (f) no breach of a law in force in India | No |

And clause (b) is exactly where this judgment dies. A decree entered **as a penalty for default in filing a defence**, with no evidence taken and no consideration of the truth or falsity of the claim, is **not given on the merits**. The test is substantive, not formal: did the court apply its mind to whether the plaintiff's case was true, or did it merely record a default?

Note the distinction that decides these cases. An **ex parte** decree is not automatically outside the merits. If the plaintiff led evidence in the defendant's absence and the court weighed it, the decree can be on the merits. It is the *absence of adjudication*, not the *absence of the defendant*, that defeats it.

**What Deepa should have done.** Anticipated clause (b) from the outset and brought the foreign record — the evidence filed there, any affidavit of proof, and any reasoning in the judgment showing the court considered the claim. If the foreign judgment is a bare default entry with no reasons, the honest advice to her was to consider whether a **fresh suit on the original cause of action** in India was the better route, subject to limitation.

**What you say in court:** *"Section 14 raises a presumption as to competence alone. The decree relied upon was passed by way of penalty for default in filing a defence, without any evidence being led or considered, and was therefore not given on the merits within clause (b) of Section 13."*
:::

::::

### Practitioner HUD

**The winning ratio — the one proposition to cite.**

> The presumption under Section 14 extends **only to the competence of the foreign court**, and is mandatory but rebuttable. It raises no presumption that the judgment was given on the merits, that natural justice was observed, or that it was free from fraud. Competence is judged by the rules of **Indian private international law**, not by the foreign court's view of its own jurisdiction.

Pair it, in every such case, with **Section 44 of the Evidence Act, 1872** — the provision that actually permits a party to show that a judgment was delivered by a court not competent to deliver it, or was obtained by fraud or collusion.

**Sword and shield.**

| | How it is used |
|---|---|
| **Sword (decree-holder)** | Your opening move, and it is a strong one. Produce the certified copy, invoke the **mandatory** presumption, and put the objector to proof. Resist firmly any attempt to make you prove foreign law affirmatively at the threshold — that is precisely what Section 14 exists to prevent. Then prepare separately for clauses (b) to (f), which the presumption does not touch. |
| **Shield (judgment-debtor)** | Attack in strict order, because the early questions are free: **(i)** Is it a certified copy at all — is the condition precedent even satisfied? **(ii)** Does the contrary appear **on the record**, so that no presumption arises and you need lead nothing? **(iii)** Only if it arises, rebut it with documentary evidence of non-residence, non-nationality and non-submission. **(iv)** In parallel, run clauses (b) to (f), where the burden was never shifted against you at all. |

**Limitation clock.** Section 14 is evidentiary and carries no period of its own. The clocks that govern the proceeding it sits inside are the Section 13 clocks:

| Step | Article | Period |
|---|---|---|
| Fresh suit in India on a foreign judgment | **Art. 101** | **3 years** from the date of the foreign judgment |
| Execution under S. 44A | **Art. 136** | 12 years from when the decree becomes enforceable |

**Court fee.** None attaches to the presumption itself. But note the practical economy Section 14 delivers: it removes the need to prove foreign law at the threshold, which in a contested matter can cost more than the decree is worth.

**Drafting pitfalls.**

::: warning A denial is not disproof
This is the single sentence to take away from Section 14, and it cuts both ways.

**For the judgment-debtor:**

- **Never plead a bare denial.** "The said Court had no jurisdiction" is not an answer to a mandatory presumption. Plead the **primary facts** — residence, nationality, non-appearance, absence of any jurisdiction clause — and attach a document to each.
- **Read the certified copy before you draft.** If the contrary appears on the record, you win without evidence. This argument is free and is routinely missed.
- **Do not spend your whole case on clause (a).** It is the only clause where the burden is against you. Clauses (b) to (f) are unencumbered, and clause (b) — not on the merits — defeats more foreign judgments than any other.

**For the decree-holder:**

- **Get the certification right.** The presumption is conditional on production of a document *purporting* to be a certified copy. Certified in the manner commonly in use in that country, apostilled or legalised where required, with a certified translation if it is not in English. Foreign judgments fail on proof far more often than on Section 13.
- **Do not mistake one presumption for six.** Bring the foreign record showing that evidence was led and considered, before your opponent points out that you have not.
:::

#### Interlocking matrix — what this connects to

| Linked provision | Interlock |
|---|---|
| **S.13(a)** | Section 14 presumes away clause (a) at the threshold and shifts the burden of rebutting it. |
| **S.13(b)–(f)** | **No presumption arises** as to these. Merits, natural justice, fraud and illegality remain fully open and the decree-holder should be ready to meet them. |
| **S.44A(2)** | The certificate from the superior court as to satisfaction or adjustment must accompany the decree; it is distinct from the certified copy that triggers S.14. |
| **S.47** | The forum for the judgment-debtor's objections in a S.44A execution. |
| **O.XXI R.11(2)** | Contents of the execution application; a **certified copy of the decree** is required. |
| **O.XXI R.22** | Notice to show cause — the stage at which the S.14 presumption is invoked and met. |
| **O.XIII R.1** | Production of documents; the certified copy must be tendered and exhibited. |
| **Evidence Act S.86** | Presumption as to genuineness of certified copies of foreign judicial records. |
| **Evidence Act S.44** | Proof that the judgment was delivered by an incompetent court, or obtained by fraud or collusion. |
| **Evidence Act S.45 / S.84** | Proof of **foreign law** — a question of *fact* in India, ordinarily proved by expert evidence. |

**Limitation.** Section 14 raises no independent limitation question. It operates within a suit on the foreign judgment (**Article 101** — three years) or a S.44A execution (**Article 136** — twelve years).

**Court fee.** None specific to S.14. Note only that certified copies must be obtained, apostilled or legalised as required, and translated where necessary — costs to be provided for at the outset.

**Applications typically filed.**

- Application under **O.XIII R.1** to tender and exhibit the certified copy of the foreign judgment and decree.
- Objections under **S.47 read with Ss. 13 and 14**, pleading the primary facts rebutting competence.
- Application to lead **expert evidence of foreign law** where the content of the foreign court's jurisdictional rules is genuinely in issue.
- Application for **issue of commission** to record evidence abroad, in a suitable case, under Order XXVI.

#### The authorities

Section 14 is almost invariably argued together with Section 13(a), and the authorities on competence are the authorities on Section 14.

**Satya v. Teja Singh, (1975) 1 SCC 120** — *Two-Judge Bench.*
*Facts:* As above — a Nevada divorce founded on a colourable residence.
**Ratio Decidendi:** The presumption of competence under Section 14 is rebuttable, and is rebutted where it is shown that the foreign court assumed jurisdiction on a basis not recognised by Indian private international law. Competence for Indian purposes is determined by Indian conflict of laws rules; a foreign court's own assumption of jurisdiction is not decisive, and a jurisdiction founded on a false or colourable representation of residence is no jurisdiction at all.
::: tip Practitioner Takeaway
*"The presumption under Section 14 extends only to competence, and competence is to be tested by the rules of Indian private international law — not by the foreign forum's own view of its reach."*
:::

**Y. Narasimha Rao v. Y. Venkata Lakshmi, (1991) 3 SCC 451** — *Two-Judge Bench.*
**Ratio Decidendi (as it bears on Section 14):** In matrimonial matters the jurisdiction of the foreign court and the grounds of relief must accord with the matrimonial law under which the parties married, subject to the three stated exceptions. Where they do not, the presumption of competence is displaced and the decree is not conclusive.

**Moloji Nar Singh Rao v. Shankar Saran, AIR 1962 SC 1737** — *Constitution Bench (verify composition).*
**Ratio Decidendi (as it bears on Section 14):** Where the defendant was neither a subject of nor resident within the foreign jurisdiction, and did not submit to it, no presumption of competence can avail the decree-holder; the decree is not binding and cannot be executed in India.

**International Woollen Mills v. Standard Wool (U.K.) Ltd., (2001) 5 SCC 265** — *Two-Judge Bench.*
**Ratio Decidendi (as it bears on Section 14):** The presumption under Section 14 is confined to **competence**. It does not extend to the question whether the judgment was given **on the merits** under Section 13(b), which must be determined by examining the foreign judgment and proceedings themselves.
::: tip Practitioner Takeaway
The decisive limiting authority. When your opponent argues that Section 14 presumes the whole judgment good, this is the answer.
:::

::: info Verify before citing
Confirm the bench strength in *Moloji Nar Singh Rao* and verify every reporter citation against the authorised reports before filing. Section 14 generates little standalone authority, so the practitioner should also research the position in the relevant High Court, and should confirm the current reciprocating-territory notification under Section 44A, which changes from time to time.
:::

#### Strategy and drafting

**Traps.**

1. **Producing an uncertified copy.** The presumption is conditional on production of a document *purporting to be a certified copy*. A photocopy, a downloaded PDF, or an advocate's copy will not do. Obtain a properly certified copy, apostilled or legalised as the case requires.
2. **Assuming Section 14 protects the whole judgment.** It presumes competence only. Prepare independently to meet clauses (b) to (f) of Section 13.
3. **Merely denying jurisdiction.** The burden is on the objector. Plead facts and file documents.
4. **Failing to prove foreign law.** Foreign law is a question of **fact** in India. If your case depends on the content of the foreign court's jurisdictional rules, you must prove it — ordinarily by expert affidavit, and be ready for cross-examination.
5. **Overlooking the "contrary appears on the record" limb.** Read the certified copy closely. Recitals as to the defendant's address, mode of service and non-appearance are frequently fatal to the decree-holder and cost the objector nothing to deploy.

**Strategic sequencing — judgment-debtor.**

- **Step 1.** Obtain the complete certified foreign record, not merely the decree.
- **Step 2.** Read it for admissions: address of the defendant, mode of service, whether evidence was recorded, whether reasons were given.
- **Step 3.** If the record discloses want of competence, argue **no presumption arises** — this is a pure question of law requiring no evidence.
- **Step 4.** If it does not, file objections with an affidavit annexing passport, residence and tax records, and any correspondence showing absence of submission.
- **Step 5.** Raise **all** Section 13 grounds at the **first** opportunity, on notice under Order XXI Rule 22, or Explanation VII to Section 11 will bar them later.

**Model prayer checklist — objections under Section 47 read with Sections 13 and 14.**

- [ ] That this Hon'ble Court be pleased to hold that the presumption under Section 14 of the Code does not arise, the contrary appearing on the face of the record of the foreign court;
- [ ] **In the alternative**, that the said presumption stands displaced by proof of want of jurisdiction;
- [ ] That this Hon'ble Court be pleased to hold that the foreign judgment dated ____ is not conclusive under Section 13(a), (b), (d) and (e) of the Code;
- [ ] That the execution petition being E.P. No. ____ of ____ be **dismissed**;
- [ ] That pending the hearing and final disposal of these objections, all further proceedings in the said execution petition, including attachment and sale, be **stayed**;
- [ ] For costs and such further reliefs as the nature and circumstances of the case may require.

---

## Chapter consolidation — the five bars compared

| | **S.9** | **S.10** | **S.11** | **S.12 (+ Rules)** | **S.13** |
|---|---|---|---|---|---|
| **Question asked** | May this court hear a civil dispute at all? | Is the same matter already pending? | Has the same matter already been decided? | Has a Rule already precluded a further suit? | Is this foreign judgment conclusive? |
| **Nature** | Enabling | Prohibitory, procedural | Prohibitory, fundamental | Transmissive | Evidentiary |
| **Requires decision on merits?** | N/A | No — earlier suit merely pending | **Yes** | **No** | Yes (clause (b)) |
| **Waivable?** | Subject-matter bar: never | **Yes** | No, but must be pleaded and proved | No | No, but must be pleaded |
| **Raisable at any stage?** | Yes, if inherent | Practically no | Yes, on adequate record | Yes | Yes, but not in a later execution |
| **Decree in breach is** | A nullity (if inherent) | **Valid** | Liable to be set aside | Liable to be set aside | Unenforceable in India |
| **Primary vehicle** | O.VII R.11(d) | Application under S.10 + S.151 | O.XIV R.2 preliminary issue | O.VII R.11(d) / written statement | S.47 objections / written statement |

::: tip The single most useful habit
Before drafting any plaint, ask the five questions in order: *Is it civil and unbarred (S.9)? Is anything similar pending (S.10)? Has anything similar been decided (S.11, and Explanation IV in particular)? Has any Rule precluded a further suit (S.12)? Is any foreign judgment in play (S.13, S.14)?* A plaint that has survived all five is a plaint that will survive Order VII Rule 11.
:::





