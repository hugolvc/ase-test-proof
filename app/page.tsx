import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold mb-8">Enterprise Expense Approval System</h1>
      <p className="mb-8 text-lg opacity-80">Select your role to continue:</p>
      <div className="flex gap-6">
        <Link
          href="/employee"
          className="app-card p-6 block hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Employee</h2>
          <p>Submit expenses for approval.</p>
        </Link>
        <Link
          href="/manager"
          className="app-card p-6 block hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-action)' }}>Manager</h2>
          <p>Review and approve expenses.</p>
        </Link>
        <Link
          href="/finance"
          className="app-card p-6 block hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-success)' }}>Finance</h2>
          <p>Audit and process payouts.</p>
        </Link>
      </div>
    </div>
  )
}
