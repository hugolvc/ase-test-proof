import { createExpense } from '../../../lib/actions'
import { prisma } from '../../../lib/db'

export default async function EmployeePage() {
    const expenses = await prisma.expense.findMany({ where: { userId: 'user-123' }, orderBy: { date: 'desc' } })

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>Employee Dashboard</h1>

            <div className="flex gap-8">
                <div className="w-1/2 p-6 app-card">
                    <h2 className="text-2xl mb-4 font-semibold">Submit New Expense</h2>
                    <form action={createExpense} className="flex flex-col gap-4">
                        <input type="hidden" name="userId" value="user-123" />
                        <div>
                            <label className="block mb-1">Description</label>
                            <input type="text" name="description" required className="w-full p-3 app-input" />
                        </div>
                        <div>
                            <label className="block mb-1">Amount ($)</label>
                            <input type="number" step="0.01" name="amount" required className="w-full p-3 app-input" />
                        </div>
                        <div>
                            <label className="block mb-1">Date</label>
                            <input type="date" name="date" required className="w-full p-3 app-input" />
                        </div>
                        <button type="submit" className="app-button btn-action p-3 font-bold text-white mt-2">
                            Submit Request
                        </button>
                    </form>
                </div>

                <div className="w-1/2 p-6 app-card">
                    <h2 className="text-2xl mb-4 font-semibold">My Submissions</h2>
                    <ul className="flex flex-col gap-2">
                        {expenses.length === 0 ? <p className="opacity-60">No expenses submitted yet.</p> : null}
                        {expenses.map((e: any) => (
                            <li key={e.id} className="p-4 rounded flex justify-between items-center mb-3" style={{ border: 'var(--theme-border)' }}>
                                <div>
                                    <p className="font-semibold">{e.description}</p>
                                    <p className="text-sm opacity-80">{e.date.toLocaleDateString()}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="font-bold">${e.amount.toFixed(2)}</span>
                                    <span className="px-2 py-1 text-xs rounded text-white font-bold" style={{ backgroundColor: e.status === 'PENDING' ? 'var(--color-secondary)' : e.status === 'REJECTED' ? 'var(--color-error)' : e.status === 'APPROVED' ? 'var(--color-action)' : 'var(--color-success)' }}>
                                        {e.status}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
