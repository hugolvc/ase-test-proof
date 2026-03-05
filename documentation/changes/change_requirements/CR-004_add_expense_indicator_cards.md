# Change Requirement: Add Expense Indicator Cards

**Document ID:** CR-004
**Date:** 2026-03-04
**Priority:** Medium

## 1. Business Justification & Trigger
**Why are we doing this?**
Users need to see a high-level summary of all expense statuses (Pending, Approved, Rejected, Paid) at a glance when visiting their dashboard. Adding indicator cards alongside the user profile improves data visibility and provides immediate context on the total volume and monetary value of expenses in each state, without requiring the user to scroll through lists.

## 2. Scope Boundaries
**In Scope:**
- Create a reusable `IndicatorCard` (or similar) UI component to display a label (e.g., "Pending"), a count, and a total amount.
- Render a set of these cards at the top of the `/employee`, `/manager`, and `/finance` pages, structurally beside or on the same level as the `MockUserProfile`.
- Calculate the count and sum for each status (PENDING, APPROVED, REJECTED, PAID) based on the user's role and data context.
- Keep layout changes to existing elements to a bare minimum.

**Out of Scope (Anti-Hallucination Guardrails):**
- Do NOT add interactive filters or sorting to these cards (they are display-only).
- Do NOT implement charts or graphical visualizations.
- Do NOT change the database schema or add new queries that fetch data outside the current page's domain context (e.g., Employee only sees their own stats; Manager/Finance see global stats relevant to their queues).

## 3. Impact Assessment
**Affected Functional Requirements:**
- REQ-002 (Expense Submission)
- REQ-003 (Expense Approval)
- REQ-004 (Payout Processing)
- Enhances visibility of the states defined in these functional requirements.

**Affected Non-Functional Requirements:**
- NFR-UI-002 (Usability) - Increases dashboard information density in a structured manner.

**New Dependencies Required?**
- No.

## 4. Success Criteria
At the top of each dashboard page, alongside the `MockUserProfile`, a row or grid of indicator cards is visible. Each card displays the count and total monetary amount for one of the expense statuses (e.g., one card for "Pending", one for "Approved", etc.) relevant to the page's data context, with minimal disruption to the rest of the page layout.
