import React from 'react';

interface MockUserProfileProps {
    name: string;
    role: string;
    initials: string;
    pendingCount?: number;
    pendingAmount?: number;
}

export const MockUserProfile: React.FC<MockUserProfileProps> = ({ name, role, initials, pendingCount, pendingAmount }) => {
    return (
        <div className="flex items-center gap-4 p-4 h-full app-card min-w-fit">
            <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg"
                style={{ backgroundColor: 'var(--color-primary)' }}
            >
                {initials}
            </div>
            <div className="flex flex-col">
                <h3 className="font-bold text-lg leading-tight">{name}</h3>
                <p className="text-sm opacity-80 mb-1" style={{ color: 'var(--color-action)' }}>{role}</p>
                {(pendingCount !== undefined && pendingAmount !== undefined) && (
                    <div className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)', border: 'var(--theme-border)' }}>
                        <span className="opacity-80">Pending:</span> {pendingCount} item{pendingCount !== 1 ? 's' : ''} (${pendingAmount.toFixed(2)})
                    </div>
                )}
            </div>
        </div>
    );
};
