import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
    it('renders the main title (FinanceTracker)', () => {
        render(<App />);

        const titleElement = screen.getByText((content, element) => {
            return element.tagName.toLowerCase() === 'span' && content.includes('Finance');
        });

        expect(titleElement).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(<App />);
        expect(screen.getByText(/Дашборд/i)).toBeInTheDocument();
    });
});