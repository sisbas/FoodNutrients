import { generateHtml } from '@server/services/pdf';
import { describe, it, expect } from 'vitest';

describe('pdf html', () => {
  it('matches snapshot', () => {
    const html = generateHtml({
      title: 'Sample',
      rows: [{ label: 'Protein', per100: 5, value: 10, percent: 20 }]
    });
    expect(html).toMatchSnapshot();
  });
});
