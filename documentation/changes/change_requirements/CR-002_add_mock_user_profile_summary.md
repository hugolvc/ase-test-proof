# Change Requirement: Add Mock User Profile Summary

**Document ID:** CR-002
**Date:** 2026-03-04
**Priority:** Medium

## 1. Business Justification & Trigger
**Why are we doing this?**
Users need to clearly see which mock profile (role and name) is currently active or assumed when viewing different pages (Employee, Manager, Finance), to avoid confusion during testing and demonstration. This fulfills the requirement to "add a profile summary of mock user to each page".

## 2. Scope Boundaries
**In Scope:**
- Create a reusable UI component (`MockUserProfile` or similar) that displays a mock user's name, role, and a generic profile picture/avatar.
- Add this component directly to the main content area of the `/employee`, `/manager`, and `/finance` pages.
- Define basic mock profiles (name, role, avatar placeholder) for the three main routes (e.g., "Mock Employee", "Mock Manager", "Mock Finance").

**Out of Scope (Anti-Hallucination Guardrails):**
- Do NOT implement a real authentication or login system.
- Do NOT implement session management or cookies for retaining user state.
- Do NOT modify the database schema or add new columns to the `User` table for this feature.

## 3. Impact Assessment
**Affected Functional Requirements:**
- REQ-001 (Role-Based Access) - Visually reinforces the current active role.

**Affected Non-Functional Requirements:**
- NFR-UI-002 (Usability) - Improves system feedback by showing the current context.

**New Dependencies Required?**
- No. `next/navigation` is already provided by Next.js.

## 4. Success Criteria
A mock user profile summary with an avatar (e.g., a generic icon or initials) and text (e.g., "Mock Employee (EMPLOYEE)") is visible directly on each respective page (Employee, Manager, Finance), rather than in the global navigation bar.
