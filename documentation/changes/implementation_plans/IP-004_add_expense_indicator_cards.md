# Implementation Plan: Expense Indicator Cards

**Document ID:** IP-004
**Related Request:** CR-004
**Status:** APPROVED

## 1. Description & Scope
**What is being built/changed:**
A new `IndicatorCard.tsx` client or server presentational component will be created. The `/employee`, `/manager`, and `/finance` pages will be updated to fetch necessary data, compute the count and sum for each relevant status (PENDING, APPROVED, REJECTED, PAID), and render a row of these cards next to the `MockUserProfile` component using a CSS Flexbox wrapper. 

**In Scope:**
- `components/IndicatorCard.tsx` (NEW)
- `app/(roles)/employee/page.tsx` (MODIFY)
- `app/(roles)/manager/page.tsx` (MODIFY)
- `app/(roles)/finance/page.tsx` (MODIFY)

**Out of Scope:**
- No changes to the `MockUserProfile` component itself.
- No new Prisma models or API routes.

## 2. Code Entropy & Domain Analysis
**Domain Classification:** Technology Domain (UI Component Layer)
*Justification:* We are adding pure UI components and aggregating existing database query results before rendering.

**Target Entropy (Files Modified):** 4
*Calculation Breakdown:*
- File 1: `components/IndicatorCard.tsx` (Reason: Adding the reusable UI wrapper for the stats)
- File 2: `app/(roles)/employee/page.tsx` (Reason: Aggregating all 4 states for the employee's own expenses and wrapping the top section in a flex layout)
- File 3: `app/(roles)/manager/page.tsx` (Reason: Adjusting Prisma query to optionally fetch all system expenses to calculate global Manager metrics, and rendering the cards in a flex layout)
- File 4: `app/(roles)/finance/page.tsx` (Reason: Adjusting Prisma query to optionally fetch all system expenses to calculate global Finance metrics, and rendering the cards in a flex layout)

*Note on Data:* Currently, Manager and Finance only query `PENDING` and `APPROVED` respectively. To show the other states, we will expand their Server Component Prisma queries to fetch all expenses (or perform a `groupBy`) to calculate the requested indicators.

**Future Entropy Protection:**
The `IndicatorCard` is a dumb component. Formatting changes to how indicators look will be confined to this single file, preventing widespread UI drift.

## 3. GoF Pattern Selection
**Selected Pattern:** None
**Justification:** Simple component composition and server-side array aggregation.

## 4. UI/UX & Metadata Constraints (If Applicable)
**Theme Adjustments:**
Indicator cards will utilize existing CSS variables (e.g., `var(--theme-border)`, `var(--theme-bg)`) to naturally inherit the user's selected theme (Aurora, Retro ASCII, etc.) without requiring new CSS tokens. 

We will use a flex container to place the `MockUserProfile` and the `IndicatorCards` side-by-side: `className="flex flex-col md:flex-row gap-6 mb-6"`.

## 5. Security Threat Model (OWASP)
**Risk Category:** IDOR (Insecure Direct Object Reference) consideration.
**Mitigation Strategy:** The Employee page will strictly filter aggregates using `where: { userId: 'user-123' }` ensuring they cannot see global sums. Manager and Finance aggregates are intentionally global for this mock MVP.

## 6. Non-Functional Requirements (NFR) Validation
**Affected NFRs:**
- Server query performance might be slightly impacted by fetching all expenses instead of just pending ones on Manager/Finance pages.
**Compliance Strategy:** Prisma's engine handles basic finds efficiently, and we will do the aggregation in memory (since data sets are mocked and small). For production, we would use native SQL `GROUP BY` aggregations.

## 6. Execution Steps
- [ ] Step 1: Create `components/IndicatorCard.tsx` that accepts `title`, `count`, `amount`, and `colorVar` (e.g., `var(--color-success)`).
- [ ] Step 2: Modify `employee/page.tsx` to compute stats from its existing `expenses` array, wrap the `MockUserProfile` in a flex div, and render the cards.
- [ ] Step 3: Modify `manager/page.tsx` to query *all* expenses (or group by) to compute global stats, wrap the profile, and render the cards.
- [ ] Step 4: Modify `finance/page.tsx` to similarly query and compute stats, wrap the profile, and render the cards.

## 7. Verification Plan
- **Terminal Commands:** `npm run dev` and `npm run lint`.
- **Visual Proof:** Open `http://localhost:3000/employee` and verify the indicator cards appear to the right or below the Mock User Profile, correctly summing the lists below. Test across all three dashboards.
