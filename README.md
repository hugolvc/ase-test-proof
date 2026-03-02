# Agentic Software Engineering (ASE) – Test Proof Repository

This repository serves as the **Capstone Test Proof** for the [Agentic Software Engineering (ASE) Framework](https://github.com/hugolvc/agentic-software-engineering-framework). 

Its primary purpose is to provide tangible, open-source evidence that the ASE methodology works in practice. It contains software generated entirely by autonomous AI agents that have been strictly governed by the rules, constraints, architectural paradigms, and Markdown templates defined within the ASE framework. 

By inspecting this repository, developers and engineering leaders can see firsthand how AI hallucination (scope creep) and code entropy are systematically controlled at an enterprise scale to produce reliable software.

**Creation Details:**
All code and components in this repository were created using the Antigravity IDE powered by the Gemini 3 Pro High model, executing under the strict governance of the ASE methodology using the following prompt:

---

```text
ZERO-SHOT MASTER DIRECTIVE: Enterprise Expense Approval System
You are an autonomous, expert AI Software Engineer operating under the Agentic Software Engineering (ASE) framework.

Your task is to build a complete, self-contained "Enterprise Expense Approval System" in this repository.

ABSOLUTE CONSTRAINTS (DO NOT VIOLATE)
1. Single-Repository Mandate: You must build the entire application (Frontend, Backend, Database) within this single repository. Do NOT separate the frontend and backend into two projects.
2. Technology Stack: 
   - Framework: Next.js (App Router)
   - Database: SQLite via Prisma ORM
   - Styling: Tailwind CSS
3. Run Command: The entire application must be executable by a human reviewer using a single 'npm run dev' command (after standard 'npm install' and prisma generation).
4. No Hallucinations: You must derive the Actors, Use Cases, and Functional Requirements by first executing a Change Requirement (CR) and Implementation Plan (IP). Do not invent features not explicitly derived from your initial planning phase.

EXECUTION WORKFLOW
Before writing a single line of Next.js code, you MUST execute the following methodology:

Step 1: Ingest the Framework Context
Read the 'agentic-software-engineering-framework/README.md' file. It contains the instructions on how to initialize a project using the ASE framework.

Step 2: Generate the Registers
Generate the 'actors_register.md' and 'use_cases_register.md' based strictly on the templates found in 'agentic-software-engineering-framework/02_functional_requirements_handling_and_usage/'. The target application is an "Enterprise Expense Approval System" where an employee submits an expense, a manager approves it, and finance finalizes it.

Step 3: Generate the Architectural Implementation Plan
Create an 'IP-001.md' documenting your Next.js directory structure. You must explicitly describe how you will separate React Client Components (UI) from Server Actions (Backend/Database logic) to minimize Code Entropy as described in the framework.

Step 4: Execute Code Generation
Initialize the Next.js project using 'npx create-next-app@latest .' (ensure you force it into the current directory), set up Prisma for SQLite, and build the application according to your approved IP.
```

## 🧪 Post-Generation Instructions (For the Human User)

Once the AI agent announces that it has finished generating the codebase based on the Master Prompt above, you should execute the following to verify the output:

1. **Verify the Registers are present:** Check the root directory for `actors_register.md`, `use_cases_register.md`, and `IP-001.md`.
2. **Setup the Database:** 
   ```bash
   npx prisma generate
   npx prisma db push
   ```
3. **Run the Application:**
   ```bash
   npm run dev
   ```
4. **Log the Result / Iterate:** If the application fails, throws an error, or the AI hallucinates, **do not manually fix the code**. Instead, start a new chat session with the AI, inform it of the failure, and have it update the Master Prompt and the `prompt_iteration_log.md` file.

---
**Note to AI Agents entering a new session:** If you are reading this repo to start a fresh test, you MUST first read `prompt_iteration_log.md` before executing anything to understand the history of our attempts.