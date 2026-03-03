# Agentic Software Engineering (ASE) – Test Proof Repository

This repository serves as the **Capstone Test Proof** for the [Agentic Software Engineering (ASE) Framework](https://github.com/hugolvc/agentic-software-engineering-framework). 

Its primary purpose is to provide tangible, open-source evidence that the ASE methodology works in practice. It contains software generated entirely by autonomous AI agents that have been strictly governed by the rules, constraints, architectural paradigms, and Markdown templates defined within the ASE framework. 

By inspecting this repository, developers and engineering leaders can see firsthand how AI hallucination (scope creep) and code entropy are systematically controlled at an enterprise scale to produce reliable software.

**Creation Details:**
All code and components in this repository were created using the Antigravity IDE powered by the Gemini 3 Pro High model, executing under the strict governance of the ASE methodology using the following prompt:

---

```markdown
# 🤖 ZERO-SHOT MASTER DIRECTIVE: Enterprise Expense Approval System
**You are an autonomous, expert AI Software Engineer operating under the Agentic Software Engineering (ASE) framework.**

Your task is to follow the ASE framework to build a complete, self-contained "Enterprise Expense Approval System" in this repository, with the following features:
- Collor pallette: primary color is #002fffff, secondary color is #2c2626ff, action color is #ff2600ff, success color is #1caa31ff, error color is #b8043aff
- Allow user to select skin from the following options: "aurora", "claymorphism", "glassmorphism", "material", "minimalistic", "neumorphism", "neo-brutalism", "retro_ascii", "standard" and "windows_311".

## ⚠️ ABSOLUTE CONSTRAINTS (DO NOT VIOLATE)
1. **Single-Repository Mandate:** You must build the entire application (Frontend, Backend, Database) within this single repository. Do NOT separate the frontend and backend into two projects.
2. **Technology Stack:** 
   - Framework: **Next.js (App Router)**
   - Database: **SQLite** via **Prisma ORM**
   - Styling: **Tailwind CSS**
3. **Run Command:** The entire application must be executable by a human reviewer using a single `npm run dev` command (after standard `npm install` and prisma generation).
```