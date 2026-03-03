import { markPaid } from '../../../lib/actions'
import { prisma } from '../../../lib/db'

export default async function FinancePage() {
    const approved = await prisma.expense.findMany({ where: { status: 'APPROVED' }, orderBy: { date: 'asc' } })

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-success)' }}>Finance Dashboard</h1>

            <div className="p-6 app-card">
                <h2 className="text-2xl mb-4 font-semibold">Pending Payouts</h2>
                <div className="flex flex-col gap-3">
                    {approved.length === 0 ? <p className="opacity-60">No pending payouts.</p> : null}
                    {approved.map((e: any) => (
                        <div key={e.id} className="p-5 rounded flex justify-between items-center mb-2" style={{ border: 'var(--theme-border)' }}>
                            <div>
                                <p className="font-semibold">{e.description}</p>
                                <p className="text-sm opacity-80">User: {e.userId} | {e.date.toLocaleDateString()}</p>
                                <p className="font-bold mt-1 text-lg">${e.amount.toFixed(2)}</p>
                            </div>
                            <div className="flex gap-2">
                                <form action={markPaid.bind(null, e.id)}>
                                    <button type="submit" className="app-button btn-action px-6 py-3 text-white font-bold">Process Payout</button>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
