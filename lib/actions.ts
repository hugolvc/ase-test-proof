'use server'

import { prisma } from './db'
import { revalidatePath } from 'next/cache'

export async function createExpense(formData: FormData) {
    const amount = parseFloat(formData.get('amount') as string)
    const description = formData.get('description') as string
    const dateStr = formData.get('date') as string
    const userId = formData.get('userId') as string // Mocked

    if (!amount || !description || !dateStr || !userId) return

    // Ensure the mock user exists in the database to satisfy the foreign key constraint
    await prisma.user.upsert({
        where: { id: userId },
        update: {},
        create: {
            id: userId,
            name: 'Mock Employee',
            role: 'EMPLOYEE',
        },
    })

    await prisma.expense.create({
        data: {
            amount,
            description,
            date: new Date(dateStr),
            userId,
        }
    })
    revalidatePath('/employee')
}

export async function approveExpense(id: string) {
    await prisma.expense.update({
        where: { id },
        data: { status: 'APPROVED' }
    })
    revalidatePath('/manager')
    revalidatePath('/finance')
}

export async function rejectExpense(id: string) {
    await prisma.expense.update({
        where: { id },
        data: { status: 'REJECTED' }
    })
    revalidatePath('/manager')
}

export async function markPaid(id: string) {
    await prisma.expense.update({
        where: { id },
        data: { status: 'PAID' }
    })
    revalidatePath('/finance')
}
