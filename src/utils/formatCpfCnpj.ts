export function cleanCpfCnpj(cpfCnpj: string): string {
  return cpfCnpj.replace(/\D/g, '');
}

export function formatCpfCnpj(cpfCnpj: string): string {
  const cleanedCpfCnpj = cpfCnpj.replace(/\D/g, ''); // Remove formatação

  if (cleanedCpfCnpj.length === 11) {
    return cleanedCpfCnpj.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4',
    );
  }

  return cleanedCpfCnpj.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    '$1.$2.$3/$4-$5',
  );
}
