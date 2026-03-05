# Implementation Plan: Mock User Profile Summary

**Document ID:** IP-002
**Related Request:** CR-002
**Status:** APPROVED

## 1. Description & Scope
**What is being built/changed:**
A new `MockUserProfile.tsx` presentational component will be created to display a given mock user's name, role, and a generic profile picture (e.g., SVG icon or initials avatar). This component will be added directly to the page content of `/employee`, `/manager`, and `/finance`.

**In Scope:**
- `components/MockUserProfile.tsx` (NEW)
- `app/(roles)/employee/page.tsx` (MODIFY)
- `app/(roles)/manager/page.tsx` (MODIFY)
- `app/(roles)/finance/page.tsx` (MODIFY)

**Out of Scope:**
- Real authentication flows.
- Modifying Prisma schemas or database queries related to user management.

## 2. Code Entropy & Domain Analysis
**Domain Classification:** Technology Domain (UI Component Layer)
*Justification:* It's purely a visual representation of the current application state derived from the URL route, without altering core business rules or domain models.

**Target Entropy (Files Modified):** 4
*Calculation Breakdown:*
- File 1: `components/MockUserProfile.tsx` (Reason: Adding new reusable component to show profile and avatar)
- File 2: `app/(roles)/employee/page.tsx` (Reason: Rendering component for employee)
- File 3: `app/(roles)/manager/page.tsx` (Reason: Rendering component for manager)
- File 4: `app/(roles)/finance/page.tsx` (Reason: Rendering component for finance)

**Future Entropy Protection:**
By creating a reusable `MockUserProfile` component that accepts `name`, `role`, and `initials` (or `avatarUrl`) as props, we isolate the UI rendering logic. Changes to the visual layout of the profile summary will only require updating this single component.
## 3. GoF Pattern Selection
**Selected Pattern:** None
**Justification:** The logic is a simple React UI string mapping based on the current pathname, which is too trivial to warrant a complex structural or behavioral design pattern.

## 4. UI/UX & Metadata Constraints (If Applicable)
**Theme Adjustments:**
N/A - Using existing theme tokens (e.g., standard Tailwind text classes and existing CSS variables).

**Navigation Flow:**
No new navigation added. Placed in the existing global nav.

## 5. Security Threat Model (OWASP)
**Risk Category:** None
**Mitigation Strategy:** The feature strictly displays hardcoded mock strings based on the route. It does not accept user input or perform sensitive operations, so there is no injection or authentication risk.

## 6. Non-Functional Requirements (NFR) Validation
**Affected NFRs:**
- NFR-UI-01: Must maintain fast initial load.
**Compliance Strategy:**
The component is small and relies solely on the lightweight `next/navigation` hook.

## 6. Execution Steps
- [ ] Step 1: Create `components/MockUserProfile.tsx` that accepts `name`, `role`, and `initials` props and renders the UI including a styled avatar circle.
- [ ] Step 2: Modify `app/(roles)/employee/page.tsx` to import and render `<MockUserProfile name="Mock Employee" role="EMPLOYEE" initials="ME" />`.
- [ ] Step 3: Modify `app/(roles)/manager/page.tsx` to import and render `<MockUserProfile name="Mock Manager" role="MANAGER" initials="MM" />`.
- [ ] Step 4: Modify `app/(roles)/finance/page.tsx` to import and render `<MockUserProfile name="Mock Finance" role="FINANCE" initials="MF" />`.

## 7. Verification Plan
- **Terminal Commands:** `npm run dev` to start the application.
- **Visual Proof:** Open `http://localhost:3000/employee` and verify the avatar and "Mock Employee (EMPLOYEE)" text is visible. Navigate to `/manager` and verify the manager profile and avatar is visible on that specific page.
