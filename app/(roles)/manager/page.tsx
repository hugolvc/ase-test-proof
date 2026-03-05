import { approveExpense, rejectExpense } from '../../../lib/actions'
import { prisma } from '../../../lib/db'
import { MockUserProfile } from '../../../components/MockUserProfile'
import { IndicatorCard } from '../../../components/IndicatorCard'

export default async function ManagerPage() {
    const allExpenses = await prisma.expense.findMany({ orderBy: { date: 'asc' } })
    const pending = allExpenses.filter(e => e.status === 'PENDING')

    const statuses = ['PENDING', 'APPROVED', 'REJECTED', 'PAID'] as const;
    const stats = statuses.reduce((acc, status) => {
        const filtered = allExpenses.filter(e => e.status === status);
        acc[status] = {
            count: filtered.length,
            amount: filtered.reduce((sum, e) => sum + e.amount, 0)
        };
        return acc;
    }, {} as Record<typeof statuses[number], { count: number, amount: number }>);

    const pendingCount = stats.PENDING.count;
    const pendingAmount = stats.PENDING.amount;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-action)' }}>Manager Dashboard</h1>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-shrink-0">
                    <MockUserProfile
                        name="Mock Manager"
                        role="MANAGER"
                        initials="MM"
                        pendingCount={pendingCount}
                        pendingAmount={pendingAmount}
                    />
                </div>
                <div className="flex-1 flex gap-4 overflow-x-auto pb-2">
                    <IndicatorCard title="Pending" count={stats.PENDING.count} amount={stats.PENDING.amount} colorVar="#808080" />
                    <IndicatorCard title="Approved" count={stats.APPROVED.count} amount={stats.APPROVED.amount} colorVar="#3b82f6" />
                    <IndicatorCard title="Rejected" count={stats.REJECTED.count} amount={stats.REJECTED.amount} colorVar="var(--color-error)" />
                    <IndicatorCard title="Paid" count={stats.PAID.count} amount={stats.PAID.amount} colorVar="var(--color-success)" />
                </div>
            </div>

            <div className="p-6 app-card">
                <h2 className="text-2xl mb-4 font-semibold">Pending Approvals</h2>
                <div className="flex flex-col gap-3">
                    {pending.length === 0 ? <p className="opacity-60">All caught up!</p> : null}
                    {pending.map((e) => (
                        <div key={e.id} className="p-5 rounded flex justify-between items-center mb-2" style={{ border: 'var(--theme-list-border, var(--theme-border))' }}>
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
