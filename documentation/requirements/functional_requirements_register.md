# Functional Requirements Register

| ID | Requirement Description | Traceability (Use Case) |
|---|---|---|
| REQ-001 | The system must allow users to log in as Employee, Manager, or Finance Admin (Simulated Auth is acceptable for MVP). | UC-001, UC-002, UC-003 |
| REQ-002 | Employees must be able to create an expense report detailing amount, date, and description. | UC-001 |
| REQ-003 | Managers must see a list of pending expenses and have buttons to approve or reject. | UC-002 |
| REQ-004 | Finance Admins must see a list of approved expenses and mark them as paid. | UC-003 |
| REQ-005 | The system must provide a theme selector allowing users to dynamically switch between 10 predefined skins (`aurora`, `claymorphism`, `glassmorphism`, `material`, `minimalistic`, `neumorphism`, `neo-brutalism`, `retro_ascii`, `standard`, `windows_311`). | UC-004 |
| REQ-006 | The application UI must strictly adhere to the functional color palette: primary (`#002fffff`), secondary (`#2c2626ff`), action (`#ff2600ff`), success (`#1caa31ff`), error (`#b8043aff`). | UC-001, UC-002, UC-003, UC-004 |
