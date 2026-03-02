# 📝 Master Prompt Iteration Log

**Purpose:** This document maintains the state and history of our attempts to generate the Capstone Test application using the Agentic Software Engineering (ASE) Master Prompt.

Since we are testing this prompt across multiple independent agent sessions (to simulate a fresh user experience), this log serves as the persistent memory.

## Instructions for the Next AI Agent Session
**If you are an AI reading this document at the start of a new conversation:**
1. We are iteratively testing a "Zero-Shot Master Prompt" designed to make an AI build an entire enterprise app from scratch.
2. Read the "Current Master Prompt" inside `README.md`.
3. Read the attempt logs below to understand what failed in previous sessions.
4. If instructed by the user, execute the prompt, review the generated application, and update this log with the result of your attempt.
5. If the attempt fails, document *why* it failed and propose an update to the Master Prompt to prevent that failure in the next session.

---

## 📅 Try Log

### 🟦 Attempt 0 (Baseline Generation)
*   **Date:** 2026-03-01
*   **Prompt Version:** Iteration 1 (See `README.md`)
*   **Target Application:** Enterprise Expense Approval System
*   **Technology Stack:** Next.js + SQLite/Prisma + Tailwind CSS
*   **Status:** Completed
*   **Notes:** This is the initial attempt. We are verifying if a single zero-shot prompt can successfully force the agent to read the framework documentation, generate the Functional Requirements (Registers), plan the Architecture (IP), and generate a working full-stack Next.js app in one go.
*   **Summary:** Successfully executed the Master Prompt. 
    - **What was built:** A Next.js App Router application with Prisma/SQLite simulating the Enterprise Expense Approval System. Generated `actors_register.md`, `use_cases_register.md`, and `IP-001.md`. Built the necessary Server Actions to serve as the Repository layer (Technology Domain) and strictly separated React Client Components for Employee, Manager, and Finance roles (Problem Domain).
    - **Issues/Ambiguities:** The Master Prompt instructed creating `actors_register.md` and `use_cases_register.md` in Step 2, but did not explicitly request the `functional_requirements_register.md`, although the description later implies derivation of functional requirements. Also, creating a Next.js app in the current non-empty directory using `create-next-app` naturally throws a conflict error; an autonomous AI needs to handle this via installing in a temp dir and moving files over unless using a lower-level setup.

### 🟩 Attempt 1 (Framework Override Testing)
*   **Date:** 2026-03-01
*   **Prompt Version:** Iteration 1 (See `README.md`)
*   **Target Application:** Enterprise Expense Approval System
*   **Technology Stack:** Next.js + SQLite/Prisma + Tailwind CSS
*   **Status:** Completed (with Framework Violations)
*   **Notes:** Testing how the AI handles the conflict between the Master Prompt and the Framework Zero-Shot prompts.
*   **Summary:** The application was built successfully and fulfilled all core functional and technical requirements. However, the final assessment revealed that the agent skipped the vast majority of the required framework initialization and documentation steps.
    - **Root Cause:** The agent determined that the directives within the Master Prompt (specifically, generating the application) took precedence over the framework's internal Zero-Shot prompts. The agent abandoned the framework's structured plan in favor of its own generated plan to accomplish the Master Prompt's end goal faster.
    - **Resolution:** Proposed a two-part fix. 1) Update the Master Prompt to explicitly instruct the agent to generate the software *by adhering to the framework*, rather than framing them as parallel tasks. 2) Patch the framework's Project Initialization Guide to mandate the creation of an "Execution Checklist." The agent must be explicitly constrained from skipping steps on this checklist or generating any application code until the checklist authorizes it.

### 🟨 Attempt 2 (Execution Checklist Enforcement)
*   **Date:** 2026-03-01
*   **Prompt Version:** Iteration 2 (See `README.md`)
*   **Target Application:** Enterprise Expense Approval System
*   **Technology Stack:** Next.js + SQLite/Prisma + Tailwind CSS
*   **Status:** Completed
*   **Notes:** This attempt tested the fix implemented after Attempt 1. The framework's Initialization Guide was updated to require the creation of an `execution_checklist.md`, which bounds the AI from generating code until all documentation is signed off.
*   **Summary:** Successfully generated the application in strict compliance with the ASE framework.
    - **What was built:** The full Enterprise Expense Approval MVP with Employee, Manager, and Finance dashboards. Built using Next.js App Router, Tailwind CSS, and Prisma SQLite Server Actions.
    - **Framework Compliance:** The addition of the "Execution Checklist" successfully forced the AI to pause and fully complete Phase 1 (Agent State, Project Overview, Tech Stack Register, Actors, Use Cases, Functional Requirements, CR-001, and IP-001) *before* installing Next.js and writing any code. The checklist served as an effective control mechanism, proving that AI scope creep and skipped steps can be managed via strict Markdown state tracking.
    - **Next.js Initialization Issues:** The strict requirement to build within the framework's single repository caused issues with `create-next-app` since the directory was no longer empty. Running `create-next-app` in a temporary folder (`ase-temp`) and moving the files back created unexpected path alias errors (because it created a `src/` directory despite `--src-dir false`) and styling issues (the move caused the loss of `postcss.config.mjs`, breaking Tailwind CSS).
    - **Resolution:** Moving the `app` folder out of `src`, updating `tsconfig.json` path aliases to `"./*"`, and recreating `postcss.config.mjs` resolved the Next.js/Tailwind issues, fully restoring the UI styling and allowing the build to succeed.

### 🟩 Attempt 3 (UI/UX Skin Multi-Theming)
*   **Date:** 2026-03-02
*   **Prompt Version:** Iteration 2 (with UI Design/Skin modification)
*   **Target Application:** Enterprise Expense Approval System
*   **Technology Stack:** Next.js + SQLite/Prisma + Tailwind CSS
*   **Status:** Completed
*   **Notes:** This attempt tested the framework's ability to incorporate specific UI themes ("aurora", "claymorphism", "glassmorphism", "material", "minimalistic", "neumorphism", "neo-brutalism", "retro_ascii", "standard", "windows_311").
*   **Summary:** Successfully generated the application complying with both the strict ASE documentation constraints and the 10 mandated UI skins.
    - **What was built:** The Enterprise Expense Approval MVP with a dynamic ThemeProvider and 10 complete CSS variable overrides built via Tailwind `@theme` directives. The UI dynamically adapts to skin selections seamlessly.
    - **Execution Checklist Integrity:** Phase 1 was correctly paused, evaluated via `execution_checklist.md`, and documented (Agent State, CR-001, IP-001) prior to Next.js installation, further proving the reliability of the checklist constraint.
    - **Next.js Initialization:** Leveraged the resolution from Attempt 2 by cleanly handling the `create-next-app` layout configuration (`mv src/app ./app`), completely bypassing previous path alias and postcss config errors.
    - **Agentic Feedback Fixes:** Based on the review of Attempt 3, the Master Prompt was further refined to be 100% framework-agnostic by removing explicit instructions to execute the Initialization Guide and Checklist (which are now handled innately by the framework's Zero-Shot prompts). Additionally, discrete Use Case documents (`UC-01` through `UC-05`) were fully generated with embedded UI mockups via Mermaid.js, correctly acting out the expected ASE requirement templates.
    - **Issues/Ambiguities:** None. The framework successfully digested a strict UI requirement and output highly customized Tailwind 4 CSS variables autonomously.
