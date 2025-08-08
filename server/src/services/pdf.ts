interface Row { label: string; per100: number; value: number; percent: number; }

export function generateHtml(data: { title: string; rows: Row[] }) {
  const rows = data.rows.map(r =>
    `<tr><td>${r.label}</td><td>${r.per100}</td><td>${r.value}</td><td>${r.percent.toFixed(0)}%</td></tr>`
  ).join("");
  return `<!DOCTYPE html><html><head><meta charset="utf-8"/><title>${data.title}</title></head><body><h1>${data.title}</h1><table>${rows}</table></body></html>`;
}
