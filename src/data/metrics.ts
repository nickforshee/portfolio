export interface Metric {
  value: string;
  label: string;
}

export const metrics: Metric[] = [
  {
    value: "40+",
    label: "Enterprise customers",
  },
  {
    value: "60,000+",
    label: "Users supported",
  },
  {
    value: "10x+",
    label: "Efficiency gains",
  },
];
