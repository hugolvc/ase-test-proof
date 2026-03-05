import React from 'react';

interface IndicatorCardProps {
    title: string;
    count: number;
    amount: number;
    colorVar: string;
}

export const IndicatorCard: React.FC<IndicatorCardProps> = ({ title, count, amount, colorVar }) => {
    return (
        <div className="flex flex-col p-4 app-card justify-center w-full h-full min-w-[140px]" style={{ borderTop: `4px solid ${colorVar}` }}>
            <span className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: colorVar }}>{title}</span>
            <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">{count}</span>
                <span className="text-sm opacity-80 font-medium">items</span>
            </div>
            <div className="text-lg font-bold mt-1">
                ${amount.toFixed(2)}
            </div>
        </div>
    );
};
