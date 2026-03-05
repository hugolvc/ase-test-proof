# Implementation Plan: Profile Pending Stats

**Document ID:** IP-003
**Related Request:** CR-003
**Status:** APPROVED

## 1. Description & Scope
**What is being built/changed:**
The existing `MockUserProfile.tsx` presentational component will be updated to accept `pendingCount` (number) and `pendingAmount` (number) as optional props. We will update the server-rendered pages (`employee`, `manager`, `finance`) to compute these values by aggregating the `amount` property from the arrays of expenses they already fetch, and pass them into the component.

**In Scope:**
- `components/MockUserProfile.tsx` (MODIFY)
- `app/(roles)/employee/page.tsx` (MODIFY)
- `app/(roles)/manager/page.tsx` (MODIFY)
- `app/(roles)/finance/page.tsx` (MODIFY)

**Out of Scope:**
- Charting or graphical data visualization libraries.
- Changing database indexing or Prisma models.

## 2. Code Entropy & Domain Analysis
**Domain Classification:** Technology Domain (UI Component Layer & Server Action mapping)
*Justification:* We are mutating interface props and performing basic server-side array aggregations using native `reduce()` methods without altering the core functional pipelines or state logic.

**Target Entropy (Files Modified):** 4
*Calculation Breakdown:*
- File 1: `components/MockUserProfile.tsx` (Reason: Adding UI elements to render the stats if provided)
- File 2: `app/(roles)/employee/page.tsx` (Reason: Filtering for `PENDING` expenses and aggregating sum)
- File 3: `app/(roles)/manager/page.tsx` (Reason: Aggregating sum of already-fetched `pending` expenses)
- File 4: `app/(roles)/finance/page.tsx` (Reason: Aggregating sum of already-fetched `approved` expenses)

**Future Entropy Protection:**
By keeping the aggregation inside the specific Server Components (`page.tsx`), the `MockUserProfile` remains a pure presentational component decoupled from any business logic, which limits its future entropy scope.

## 3. GoF Pattern Selection
**Selected Pattern:** None
**Justification:** Simple pure function data aggregation (Array.reduce) and prop passing does not require complex structural patterns.

## 4. UI/UX & Metadata Constraints (If Applicable)
**Theme Adjustments:**
N/A - The stats will use existing `opacity-80` text classes and standard font weighting to match the existing component style. 

## 5. Security Threat Model (OWASP)
**Risk Category:** None
**Mitigation Strategy:** Statistics are derived mathematically on the server-side from pre-authorized data arrays before being serialized and passed to the client component. No user input or dynamic database lookups are exposed.

## 6. Non-Functional Requirements (NFR) Validation
**Affected NFRs:**
- NFR-PERF-01: Aggregating small arrays is a lightweight `O(n)` RAM operation that occurs synchronously on the server and will not violate the fast initial load metric.

## 6. Execution Steps
- [ ] Step 1: Modify `components/MockUserProfile.tsx` interface to accept `pendingCount?: number` and `pendingAmount?: number` and render them conditionally below the name/role.
- [ ] Step 2: Modify `app/(roles)/employee/page.tsx` to filter `expenses` where status is `PENDING`, count them, sum their `amount`, and pass them to the user profile.
- [ ] Step 3: Modify `app/(roles)/manager/page.tsx` to count `pending.length` and sum `pending[i].amount`, passing them to the user profile.
- [ ] Step 4: Modify `app/(roles)/finance/page.tsx` to count `approved.length` and sum `approved[i].amount`, passing them to the user profile.

## 7. Verification Plan
- **Terminal Commands:** `npm run dev` and `npm run lint`.
- **Visual Proof:** Open `http://localhost:3000/employee` and verify a new row of text says something like "X pending items ($Y.YY)". Verify similar on Manager and Finance pages matching their respective table counts.
