const formatSalary = (salary: string): string => {
  return '€ ' + salary.replaceAll('k', ' 000').replace('-', '—');
};

export { formatSalary };
