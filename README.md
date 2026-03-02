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

Your task is to follow the ASE framework to build a complete, self-contained "Enterprise Expense Approval System" in this repository.

## ⚠️ ABSOLUTE CONSTRAINTS (DO NOT VIOLATE)
1. **Single-Repository Mandate:** You must build the entire application (Frontend, Backend, Database) within this single repository. Do NOT separate the frontend and backend into two projects.
2. **Technology Stack:** 
   - Framework: **Next.js (App Router)**
   - Database: **SQLite** via **Prisma ORM**
   - Styling: **Tailwind CSS**
3. **Run Command:** The entire application must be executable by a human reviewer using a single `npm run dev` command (after standard `npm install` and prisma generation).
4. **No Hallucinations:** You must derive the Actors, Use Cases, and Functional Requirements by first executing a Change Requirement (CR) and Implementation Plan (IP). Do not invent features not explicitly derived from your initial planning phase.

## 🔄 EXECUTION WORKFLOW
Before writing a single line of Next.js code, you MUST execute the following methodology:

**Step 1: Execute Framework Initialization**
Read the `agentic-software-engineering-framework/README.md` file. It contains the instructions on how to initialize a project using the ASE framework. You are strictly prohibited from generating any application code (Next.js, UI, etc.) until the framework's Initialization phase is 100% complete, an Execution Checklist is verified, and the environment is self-validated via the required methodology documentation.

**Step 2: Execute Code Generation**
Once the framework's initialization and implementation planning phases are correctly completed and documented in the repository via the checklist, you may initialize the Next.js project using `npx create-next-app@latest .` (ensure you bypass non-empty directory errors if necessary), set up Prisma for SQLite, and build the application according to your approved IP.
```
