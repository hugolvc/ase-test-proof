import { approveExpense, rejectExpense } from '../../../lib/actions'
import { prisma } from '../../../lib/db'

export default async function ManagerPage() {
    const pending = await prisma.expense.findMany({ where: { status: 'PENDING' }, orderBy: { date: 'asc' } })

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-action)' }}>Manager Dashboard</h1>

            <div className="p-6 app-card">
                <h2 className="text-2xl mb-4 font-semibold">Pending Approvals</h2>
                <div className="flex flex-col gap-3">
                    {pending.length === 0 ? <p className="opacity-60">All caught up!</p> : null}
                    {pending.map((e: any) => (
                        <div key={e.id} className="p-5 rounded flex justify-between items-center mb-2" style={{ border: 'var(--theme-border)' }}>
                            <div>
                                <p className="font-semibold">{e.description}</p>
                                <p className="text-sm opacity-80">User: {e.userId} | {e.date.toLocaleDateString()}</p>
                                <p className="font-bold mt-1">${e.amount.toFixed(2)}</p>
                            </div>
                            <div className="flex gap-3">
                                <form action={approveExpense.bind(null, e.id)}>
                                    <button type="submit" className="app-button btn-success px-5 py-2 text-white font-bold">Approve</button>
                                </form>
                                <form action={rejectExpense.bind(null, e.id)}>
                                    <button type="submit" className="app-button btn-error px-5 py-2 text-white font-bold">Reject</button>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
