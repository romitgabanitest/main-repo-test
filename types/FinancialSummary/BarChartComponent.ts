export type ExpenseItem = {
  Category: string;
  Amount: string;
};

export type Expenses = {
  [year: number]: ExpenseItem[];
};

export type ExpensesLinkItem = {
  category: string;
  link: string;
};
export interface TooltipPayload {
  Category: string;
  Amount: number;
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: {
    payload: TooltipPayload;
  }[];
}

export interface Custom1 {
  active?: boolean;
}

export type ExpensesLink = ExpensesLinkItem[];
