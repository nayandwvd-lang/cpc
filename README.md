# CPC Master Practitioner & Academic Guide

A searchable, offline-ready reference to the **Code of Civil Procedure, 1908** — written for how the CPC is actually used: in preparation and in court, not read end to end.

### 📖 [Read it here → nayandwvd-lang.github.io/cpc](https://nayandwvd-lang.github.io/cpc/)

Free, no login, works offline once loaded.

---

## What makes it different

Most CPC material either reproduces the bare Act or paraphrases it. This does neither. Every provision is deconstructed into six layers:

| Layer | What it gives you |
|---|---|
| **1. Bare text & statutory mechanics** | The exact statutory language, then the mechanics — what is mandatory, what is merely directory, where the non-obstante clauses and jurisdictional bars sit |
| **2. Plain-English demystification** | Dense doctrine split into independently digestible sub-modules — s. 11 alone is broken into former suit, competence of court, "directly and substantially in issue", and all eight Explanations |
| **3. Courtroom illustrations** | Concrete disputes, showing how the provision works as a sword for the plaintiff and a shield for the defendant |
| **4. Procedural interlocking matrix** | How each section meshes with the Orders, the Limitation Act articles, court fees, and the interim applications that go with it |
| **5. Landmark & modern jurisprudence** | Supreme Court authorities with citation, bench strength, one-line facts, the *ratio decidendi*, and the exact proposition to plead |
| **6. The Advocate's Toolkit** | Drafting traps that get a plaint rejected under Order VII Rule 11, strategic timing, and model prayer checklists |

## Coverage

| Chapter | Provisions |
|---|---|
| Jurisdiction, res sub judice & res judicata | ss. 9–14 |
| Place of suing, objections & transfer | ss. 15–25 |
| Restitution, caveat & inherent powers | ss. 144, 148A, 151 |
| Execution — the executing court, s. 47, modes, attachment, rateable distribution | ss. 36–74 |
| Appeals, review & revision — first and second appeals, appeals from orders, review, revision | ss. 96–115 |
| Parties — joinder, misjoinder, splitting of claims | Orders I & II |
| Pleadings, amendment, rejection of plaint, set-off & counter-claim | Orders VI, VII & VIII |
| Appearance, *ex parte* decrees, examination of parties, s. 89 reference, discovery | Orders IX, X & XI |
| Admissions & judgment on admissions, documents, settlement of issues, first hearing | Orders XII, XIII, XIV & XV |
| Witnesses, adjournments, evidence on affidavit, affidavits, judgment & decree | Orders XVI–XX |
| Execution of decrees — application & process, arrest, attachment & claims, sale, resistance to possession | Order XXI (all 106 rules) |
| Temporary injunctions & disobedience | Order XXXIX |
| Courtroom Drafting Toolkit | 10 annotated model drafts + filing checklists |

**Next:** the commission and attachment Orders (XXVI, XXXVIII, XL), and the special-suit Orders.

## Running it locally

```bash
git clone https://github.com/nayandwvd-lang/cpc.git
cd cpc
npm install
npm run dev
```

Build a static copy — the `docs/.vitepress/dist` folder is self-contained and works from the filesystem:

```bash
npm run build
```

## Contributing

Corrections and additions are welcome, particularly:

- Provisions where a **State amendment** materially changes the position
- More recent Supreme Court authority superseding a case cited here
- Drafting notes that could be sharper in practice

Open an issue or a pull request.

---

> **A note on use.** This is a study and practice aid, not a substitute for the bare Act, the current State amendments, or professional judgment. Verify every citation and the current text of every provision before relying on it in court.

Built with [VitePress](https://vitepress.dev). Licensed MIT.

**Nayan Dwivedi** — [LinkedIn](https://www.linkedin.com/in/nayandwivedi/) · [nayandwivedi.in](https://www.nayandwivedi.in/)
