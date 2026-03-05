# Change Requirement: Add Pending Stats to Mock User Profile

**Document ID:** CR-003
**Date:** 2026-03-04
**Priority:** Medium

## 1. Business Justification & Trigger
**Why are we doing this?**
Users need to quickly understand the size of their actionable backlog. By expanding the Mock User Profile to show the total number of submissions pending their action, as well as the total monetary amount of those submissions, they can prioritize their work effectively at a glance.

## 2. Scope Boundaries
**In Scope:**
- Update the `MockUserProfile` component to visually display two new metrics: "Items Pending" and "Total Amount".
- Update `/employee` dashboard to calculate and pass the count/sum of expenses that are currently in `PENDING` state awaiting manager approval.
- Update `/manager` dashboard to calculate and pass the count/sum of all `PENDING` expenses awaiting manager review.
- Update `/finance` dashboard to calculate and pass the count/sum of all `APPROVED` expenses awaiting payout.

**Out of Scope (Anti-Hallucination Guardrails):**
- Do NOT implement a historical graph or chart.
- Do NOT add new database queries; simply aggregate the data that is already being loaded for the lists on these pages.
- Do NOT add new roles or alter the expense submission flow.

## 3. Impact Assessment
**Affected Functional Requirements:**
- REQ-001 (Role-Based Access) - Enhances the context specific to each role's dashboard.

**Affected Non-Functional Requirements:**
- NFR-UI-002 (Usability) - Improves system feedback and data visibility.

**New Dependencies Required?**
- No new dependencies.

## 4. Success Criteria
A user visiting any dashboard (/employee, /manager, /finance) sees their mock profile name, role, avatar, and immediately below or beside it, a count of their pending actionable items and the total sum of the monetary value for those items.
