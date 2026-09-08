---
title: Start here — CPC from absolute zero
description: A zero-knowledge on-ramp to the Code of Civil Procedure, 1908. What a civil case is, how the Code is built, how to read a citation, and what actually happens between the first day and the money in your hand.
---

# Start here

<ChapterMeta
  time="35"
  level="Foundation"
  stage="Before everything else"
  :outcomes="[
    'Say what a civil case is, and what makes it civil rather than criminal',
    'Explain why the Code has both Sections and Orders, and who can change each',
    'Read a reference like O. VII R. 11(d) or (2021) 6 SCC 418 without hesitating',
    'Tell a judgment from a decree from an order, and say why the difference decides your appeal',
    'Describe the twelve stages of a suit in sequence, from plaint to satisfaction'
  ]" />

::: oneminute What this page is for
Every other page in this guide assumes you already know what a plaint is, what it means to say a court "has no jurisdiction", and why anyone would care whether a decision is called a decree or an order.

This page assumes none of that. It is written for someone who has never opened a law book. Read it once, slowly, and every other chapter becomes readable. Skip it, and the rest of the guide will feel like a foreign language with familiar-looking words.

You do not need to memorise anything here. You need to finish it.
:::

<KeyTerms
  :open="true"
  :ids="[
    'cpc', 'section', 'order', 'rule', 'first-schedule',
    'suit', 'plaint', 'written-statement', 'plaintiff', 'defendant',
    'judgment', 'decree', 'jurisdiction', 'cause-of-action', 'limitation',
    'execution', 'appeal', 'air', 'scc', 'bench-strength'
  ]" />

## 1. What is a civil case, actually?

Strip away the vocabulary and a civil case is one thing: **a person asking the State to force another person to do something, or to stop doing something, or to pay.**

That is the whole idea. Everything the Code contains is machinery built around that single request.

Two features distinguish it from a criminal case, and beginners lose weeks by not fixing them early:

| | Civil | Criminal |
|---|---|---|
| **Who starts it** | The wronged person, at their own cost and their own choice | The State, through the police and the prosecutor |
| **What is at stake** | Money, property, or an obligation — your rights against another private person | Liberty and punishment — the accused's rights against the State |
| **What the court gives** | A <Term id="decree">decree</Term>: pay ₹8 lakh, hand over possession, do not build the wall | A conviction and sentence, or an acquittal |
| **Standard of proof** | Preponderance of probabilities — more likely than not | Beyond reasonable doubt |
| **If nobody comes forward** | Nothing happens. The wrong simply stands | The State may proceed anyway |

That last row matters more than it looks. Civil procedure is **adversarial and party-driven**. The court will not investigate for you, will not gather your evidence, and will not rescue a badly drafted case. A very large part of what this guide teaches is how not to lose a good claim through bad procedure.

::: story Anita's shop — the fact pattern this guide keeps returning to
Anita runs a stationery shop in a rented ground-floor unit in Pune. Bharat owns the building. In March, Bharat's builders begin extending the first floor; the work blocks Anita's shopfront, and her sales collapse. Anita has a written lease with four years left to run. Bharat says the lease permits "reasonable structural work" and refuses to stop.

Anita wants three things: the construction stopped **now**, her lease declared valid for the remaining four years, and compensation for the months of lost business.

Notice that those three wants are already three different legal creatures — an injunction, a declaration, and damages — and each carries its own rules on what she must plead, what she must pay in court fee, and how long she has to ask. That is why procedure exists. We will follow Anita, Bharat, and later Chetan and Deepa, all the way through this guide.

**These are invented people.** Nothing about them is a reported case, and you must never cite them. Real authorities in this guide always carry a citation — *Dhulabhai v. State of M.P.*, AIR 1969 SC 78 — and a bench strength.
:::

## 2. Substantive law tells you what your right is. Procedure tells you how to get it.

Anita's *right* not to have her shopfront blocked comes from her lease and from the law of contract and property. That is **substantive law** — it defines rights and wrongs.

The Code of Civil Procedure contains almost no substantive law at all. It answers a completely different set of questions:

- Which court do I go to? *(jurisdiction)*
- What document do I file, and what must it contain? *(the plaint)*
- How does the other side get told? *(summons)*
- What if they ignore it? *(ex parte proceedings)*
- Can I get emergency relief before the case is decided? *(temporary injunction)*
- How do the facts get proved? *(issues, evidence, examination)*
- What does the court's decision look like, and how do I turn a piece of paper into actual money? *(decree and execution)*
- What if the judge got it wrong? *(appeal, review, revision)*

::: tip The single most useful sentence for a beginner
A perfect substantive right, asserted through defective procedure, loses. The Code is not paperwork wrapped around the real case — for long stretches of a litigation, the Code **is** the case.
:::

## 3. How the Code is built — and why it has two halves

This is the structural fact that confuses every newcomer, so it is worth thirty seconds of care.

The Code of Civil Procedure, 1908 has **two distinct parts**, and a reference to it can point to either:

<div class="cpc-split">

**The body of the Act — Sections**
Numbered 1 to 158, written as "Section 9", "s. 11", "s. 96". These contain the fundamental principles: which suits a court may hear, what a decree is, the right of appeal, the power to execute.
**Only Parliament can amend a Section.**

**The First Schedule — Orders and Rules**
Numbered in Roman numerals — "Order VII", "O. VI R. 17". These contain the detailed working procedure: what a plaint must state, how a written statement must deny, how a summons is served.
**High Courts can amend these for their own State** under ss. 121–128.

</div>

Two practical consequences follow, and both come up constantly:

1. **When you rely on a Rule, check your High Court's amendments first.** Order VIII Rule 1 does not read the same in every State. When you rely on a Section, you can usually rely on the all-India text.
2. **Sections and Orders are designed to be read together, not separately.** Section 26 says a suit is instituted by presenting a plaint; Order VII tells you what that plaint must contain. Section 94 says the court may grant a temporary injunction; Order XXXIX tells you when and how. A Section without its Order is half an answer — which is why every chapter of this guide has a *Procedural Interlocking Matrix* section doing exactly this pairing for you.

### Decoding a reference

You will see references written in a compressed form everywhere in this guide and in every judgment. It is a code, and it takes one minute to learn:

| What you see | How to say it | What it means |
|---|---|---|
| `s. 9` | Section 9 | Section 9 of the body of the Act |
| `s. 2(2)` | Section 2, sub-section 2 | The definition clause numbered (2) inside Section 2 |
| `O. VII` | Order 7 | Order VII of the First Schedule |
| `O. VII R. 11` | Order 7, Rule 11 | Rule 11 within that Order |
| `O. VII R. 11(d)` | Order 7, Rule 11, clause (d) | The fourth ground listed in that Rule |
| `O. VI R. 17` | Order 6, Rule 17 | The amendment-of-pleadings rule |
| `Art. 58` | Article 58 | An Article of the **Limitation Act, 1963** — not the Constitution, when it appears next to a limitation period |

Roman numerals are only ever used for Orders. If you see a Roman numeral, you are in the First Schedule.

### Decoding a citation

Every case in this guide is given with a citation and a bench strength. Both carry information you need.

> *Dhulabhai v. State of M.P.*, **AIR 1969 SC 78** (Constitution Bench)

| Part | Meaning |
|---|---|
| *Dhulabhai v. State of M.P.* | The parties. The first name is the one who brought this particular proceeding |
| **AIR** | All India Reporter — a law report series |
| **1969** | Year of the volume |
| **SC** | Supreme Court. You will also see `SCC` (Supreme Court Cases), `Bom`, `Del`, `Mad` for High Courts |
| **78** | The page number where the report begins |
| (Constitution Bench) | **Bench strength** — how many judges decided it |

Modern Supreme Court citations look slightly different: **(2021) 6 SCC 418** means Supreme Court Cases, volume 6 of 2021, page 418. The year in round brackets is part of the address; the year in square brackets, where you see it, means the year is essential to locating the volume.

::: info Why bench strength is printed next to every case here
Under Article 141 of the Constitution, Supreme Court decisions bind all courts in India. But they also bind **each other**, by size. A five-judge Constitution Bench prevails over a three-judge bench, which prevails over two.

So if your opponent cites a two-judge decision and you have a Constitution Bench saying the opposite, you do not have a conflict — you have a winner. This is why the guide never gives you a case name alone. Knowing the proposition is half the work; knowing how hard it hits is the other half.
:::

## 4. Judgment, decree, order — the distinction that decides your appeal

Ordinary English treats these as synonyms. The Code does not, and getting them wrong is how a right of appeal gets lost.

| | What it is | Where defined |
|---|---|---|
| **Judgment** | The *reasoning*. The judge's statement of the grounds for the decision — the findings and the why | s. 2(9) |
| **Decree** | The *operative result*, drawn up formally afterwards. It conclusively determines the rights of the parties on a matter in controversy in the suit | s. 2(2) |
| **Order** | Any other formal expression of a decision that is **not** a decree — typically decisions on applications made along the way | s. 2(14) |

Three tests must all be satisfied before a decision is a decree:

1. There must be an **adjudication** — a judicial determination, not an administrative or ministerial act.
2. It must be **in a suit**.
3. It must **conclusively determine the rights of the parties** with regard to all or any of the matters in controversy.

::: story Which is which, in Anita's case
Over the life of Anita's suit the court will produce all three:

- The judge refuses Bharat's request for a two-week adjournment. Nothing about anyone's rights has been determined. → an **order**, and a routine one at that.
- The judge grants Anita a temporary injunction stopping construction until the suit is decided. This is a real decision affecting real interests — but it decides nothing conclusively; it is expressly interim. → an **order**. (An appealable one: it is listed in Order XLIII Rule 1.)
- Three years later the judge delivers a reasoned decision holding the lease valid and awarding Anita ₹6 lakh. The reasons are the **judgment**; the formal document that says *"the suit is decreed; the defendant shall pay ₹6,00,000 with interest at 6% from the date of suit"* is the **decree**.

It is the decree Anita executes. It is the decree Bharat appeals under s. 96.
:::

::: warning The practical trap
**Every decree is appealable unless a provision says otherwise. Almost no order is appealable unless a provision says it is.**

Appeals from orders lie only where s. 104 or Order XLIII Rule 1 lists them. If a decision is an order and it is not on that list, there is no appeal — and you are pushed into revision under s. 115 or a writ, both of which are far narrower.

So when a decision goes against you, the first question is never "was the judge wrong?" It is **"what kind of decision was that?"**
:::

<Flow id="decree-or-order" />

## 5. What actually happens, start to finish

Here is the whole thing in sequence. Do not try to absorb the detail — read it for the shape, and come back to it whenever you lose your bearings in a later chapter.

<Flow id="life-of-a-suit" />

Two observations about that sequence that beginners rarely have pointed out to them:

**The case is often decided long before trial.** Whether the temporary injunction is granted at stage 5 frequently determines the commercial reality for both sides, regardless of who wins in year four. This is why Order XXXIX gets disproportionate attention from practitioners.

**Winning is not the end.** A decree is a piece of paper. Turning it into money or possession is a separate proceeding — **execution** — that can take as long as the suit did. Sections 36 to 74 and Order XXI govern it, and Order XXI is the longest Order in the Code for a reason.

## 6. Three questions you ask before anything else

Before drafting a word, three gates must be cleared. Every one of them is capable of destroying a good case on its own, and all three are checked before the merits are ever reached.

### Gate 1 — Is this a *civil* dispute at all?

Section 9 gives civil courts jurisdiction over all suits of a civil nature **except** those expressly or impliedly barred. A dispute about a religious office's rituals, or one that a statute has assigned exclusively to a tribunal, may be outside the door entirely.

→ Worked through in [Sections 9–14](/sections/sec-9-to-14)

### Gate 2 — Is it *this* court?

Three separate filters, and you must pass all three:

- **Pecuniary** — is the value of the claim within this court's ceiling? (s. 15)
- **Territorial** — is this the place where the defendant lives or works, or where the cause of action arose, or where the immovable property is? (ss. 16–20)
- **Subject-matter** — is this class of dispute reserved to a special forum, like a Rent Controller or a Consumer Commission?

→ Worked through in [Sections 15–25](/sections/sec-15-to-25)

### Gate 3 — Is it in time?

The Limitation Act, 1963 prescribes a period for every kind of suit. Section 3 of that Act requires the court to dismiss a time-barred suit **even if the defendant never raises the point**. And for a *suit*, unlike an appeal or an application, delay generally cannot be condoned under s. 5.

This is the coldest rule in Indian civil litigation, and it is checked first, not last.

→ Limitation is flagged in the *Procedural Interlocking Matrix* of every chapter

<Flow id="can-this-court-hear-it" />

## 7. The people, and why the same person keeps changing name

One human being can carry four different labels in one dispute, depending only on the stage. This trips up readers constantly, so learn it as a sequence rather than as a list:

| Stage | Anita is the… | Bharat is the… |
|---|---|---|
| She files the plaint | **Plaintiff** | **Defendant** |
| He applies to vacate the injunction | Respondent (to that application) | Applicant |
| She wins and the decree is drawn up | **Decree-holder** | **Judgment-debtor** |
| He challenges the decree in the High Court | **Respondent** | **Appellant** |

The label describes the *role in the current proceeding*, not the person. When a judgment says "the appellant", read it as "whoever brought this appeal" and check who that was — in a second appeal it is frequently the original defendant, and misreading this reverses the entire case in your head.

## 8. How to use the rest of this guide

Every chapter on a Section or an Order follows the same six-part structure. It repeats deliberately: once you learn the shape, you can navigate any provision by muscle memory.

1. **Verbatim Bare Act Text & Statutory Mechanics** — the exact statutory words, then a breakdown of which words are commands ("shall") and which are permissions ("may"), which clauses override other law, and which conditions must be satisfied before the provision even applies.
2. **Plain-English Conceptual Demystification** — the same thing without the statutory language, broken into sub-modules.
3. **Courtroom & Practical Illustrations** — concrete disputes, and how the provision works as a *sword* for the plaintiff and a *shield* for the defendant.
4. **Procedural Interlocking Matrix** — the Sections, Orders, limitation articles, court-fee triggers, and interim applications that connect to this provision.
5. **Landmark & Modern Jurisprudence** — the Supreme Court authorities, each with citation, bench strength, one-line facts, the *ratio decidendi*, and a practitioner takeaway you can say aloud in court.
6. **The Advocate's Toolkit** — the drafting traps, the strategic timing, and the model checklists.

::: tip A reading strategy that works
**First pass:** read only part 2 (Plain English) and part 3 (Illustrations) of a chapter. Ignore the bare Act entirely.
**Second pass:** now read part 1. The statutory language will be far less opaque because you already know what it is trying to say.
**Third pass, when you have a real matter:** parts 4, 5 and 6 are reference material. Do not read them cover to cover; raid them.

Every chapter opens with a **"Words on this page"** panel — open it before you start. And every technical word in the guide is defined in the [Glossary](/glossary), which you can also reach by hovering any <Term id="decree">dotted-underlined term</Term>.
:::

## Check yourself

<SelfTest id="start" />

::: info Where to go next
If you followed all of the above, go to **[Sections 9–14](/sections/sec-9-to-14)**. It is the natural first chapter: it answers whether a civil court can hear your dispute at all, and it introduces *res judicata*, the doctrine that does more work in Indian litigation than any other single idea in the Code.

If any of section 3 or section 4 above felt shaky, reread those two before moving on. They are load-bearing.

If you would rather look up one specific provision, use **[Find a provision](/find)** or press <kbd>/</kbd> to search.
:::

<style scoped>
.cpc-split {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin: 20px 0;
}

.cpc-split > p {
  margin: 0;
  padding: 16px 18px;
  border: 1px solid var(--vp-c-divider);
  border-top: 3px solid var(--vp-c-brand-1);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  font-size: 0.92rem;
  line-height: 1.7;
}

.cpc-split > p strong:first-child {
  display: block;
  margin-bottom: 6px;
  font-size: 1rem;
  color: var(--vp-c-brand-1);
}
</style>
