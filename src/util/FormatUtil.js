const dateInstanace = new Intl.DateTimeFormat();
const numberInstance = new Intl.NumberFormat('pt-BR');
const currencyInstance = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0, minimumFractionDigits: 0});
const percentInstance = new Intl.NumberFormat('pt-BR', { style: 'percent' });

class FormatUtil {
  date = value => {
    return dateInstanace.format(value);
  }

  number = value => {
    return numberInstance.format(value);
  }

  currency = value => {
    return currencyInstance.format(value);
  }

  percent = value => {
    return percentInstance.format(value);
  }
}

export default new FormatUtil();
