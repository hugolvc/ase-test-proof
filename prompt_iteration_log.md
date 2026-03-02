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
*   **Status:** Pending Execution
*   **Notes:** None.
