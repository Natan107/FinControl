export default function InputMoeda({
  value,
  onChange,
  className = "",
}) {
  const formatarMoeda = (valor) => {
    const numero = valor.replace(/\D/g, "");

    return (Number(numero) / 100).toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    );
  };

  const handleChange = (e) => {
    onChange(formatarMoeda(e.target.value));
  };

  return (
    <input
      type="text"
      className={`form-control ${className}`}
      placeholder="R$ 0,00"
      value={value}
      onChange={handleChange}
    />
  );
}