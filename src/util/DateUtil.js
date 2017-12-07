import moment from 'moment';

class DateUtil {
  addDays = (date, days) => {
    date = new Date(date.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  now = () => {
    return moment().toDate();
  };

  nowDb = () => {
    return moment().format('YYYY-MM-DD HH:mm:ss');
  };

  getMoment = (date = null) => {
    if (date) {
      let m = moment(date, 'YYYY-MM-DD h:mm:ss');

      if (m.isValid()) {
        return m;
      }
      return null;
    }
    return moment();
  };

  getDate = date => {
    let m = this.getMoment(date);

    if (m != null) {
      return m.toDate();
    }
    return null;
  };

  addMonths = (date, months) => {
    let m = moment(date);

    m.month(m.month() + months);
    return m.toDate();
  };

  getDifferenceInDays = (date1, date2) => {
    return Math.ceil((date1 - date2) / 86400000); // millisecondsPerDay = 1000 * 60 * 60 * 24
  };

  getDifferenceInDaysWithoutHours = (date1, date2) => {
    return this.getDifferenceInDays(
      this.removeHours(date1),
      this.removeHours(date2)
    );
  };

  upToNow = date => {
    return this.findDuration(date, Date.now());
  };

  fromNow = date => {
    return this.findDuration(Date.now(), date);
  };

  upToNowWithoutHours = date => {
    return this.findDuration(date, this.removeHours(Date.now()));
  };

  fromNowWithoutHours = date => {
    return this.findDuration(this.removeHours(Date.now()), date);
  };

  removeHours = date => {
    if (date == null) {
      return null;
    }
    date = new Date(date.valueOf());
    date.setHours(0, 0, 0, 0, 0);
    return date;
  };

  createTimeObject = (label, value, index, weight = 2) => {
    return { label: label, value: value, index: index, weight: weight };
  };

  findDuration = (earlierDate, laterDate) => {
    var nTotalDiff = laterDate - earlierDate;
    var oDiff = {};

    oDiff.days = Math.floor(nTotalDiff / 1000 / 60 / 60 / 24);
    nTotalDiff -= oDiff.days * 1000 * 60 * 60 * 24;

    oDiff.hours = Math.floor(nTotalDiff / 1000 / 60 / 60);
    nTotalDiff -= oDiff.hours * 1000 * 60 * 60;

    oDiff.minutes = Math.floor(nTotalDiff / 1000 / 60);
    nTotalDiff -= oDiff.minutes * 1000 * 60;

    oDiff.seconds = Math.floor(nTotalDiff / 1000);

    oDiff.years = 0;
    oDiff.months = 0;
    if (oDiff.days > 364) {
      oDiff.years = Math.floor(oDiff.days / 365);
      oDiff.days = oDiff.days - oDiff.years * 365 - 1;
    }

    if (oDiff.days > 29) {
      oDiff.months = Math.floor(oDiff.days / 30);
      oDiff.days = oDiff.days - oDiff.months * 30 - 1;
    }

    let concatDiff = [];

    if (oDiff.years > 0) {
      if (oDiff.years === 1) {
        concatDiff.push(this.createTimeObject('um ano', 1, 1));
      } else {
        concatDiff.push(
          this.createTimeObject(oDiff.years + ' anos', oDiff.years, 1)
        );
      }
    }
    if (oDiff.months > 0) {
      if (oDiff.months > 10) {
        if (concatDiff.length > 0) {
          return 'menos de ' + (concatDiff[0].value + 1) + ' anos';
        }
        return 'menos de um ano';
      }
      if (oDiff.months === 1) {
        concatDiff.push(this.createTimeObject('um mês', 1, 2));
      } else {
        concatDiff.push(
          this.createTimeObject(oDiff.months + ' meses', oDiff.months, 2)
        );
      }
    }
    if (oDiff.days > 0 && concatDiff.length < 2) {
      if (oDiff.days > 25) {
        if (concatDiff.length > 0) {
          return 'menos ' + (concatDiff[0].value + 1) + ' meses';
        }
        return 'menos de um mês';
      }
      if (oDiff.days === 1) {
        concatDiff.push(this.createTimeObject('um dia', 1, 3));
      } else {
        concatDiff.push(
          this.createTimeObject(oDiff.days + ' dias', oDiff.days, 3, 5)
        );
      }
    }
    if (oDiff.hours > 0 && concatDiff.length < 2) {
      if (oDiff.hours > 20) {
        if (concatDiff.length > 0) {
          return 'menos de ' + (concatDiff[0].value + 1) + ' dias';
        }
        return 'menos de um dia';
      }
      if (oDiff.hours === 1) {
        concatDiff.push(this.createTimeObject('uma hora', 1, 4));
      } else {
        concatDiff.push(
          this.createTimeObject(oDiff.hours + ' horas', oDiff.hours, 4, 5)
        );
      }
    }
    if (oDiff.minutes > 0 && concatDiff.length < 2) {
      if (oDiff.minutes > 50) {
        if (concatDiff.length > 0) {
          return 'menos de ' + (concatDiff[0].value + 1) + ' horas';
        }
        return 'menos de uma hora';
      }
      if (oDiff.minutes === 1) {
        concatDiff.push(this.createTimeObject('um minuto', 1, 5));
      } else {
        concatDiff.push(
          this.createTimeObject(
            oDiff.minutes + ' minutos',
            oDiff.minutes,
            5,
            10
          )
        );
      }
    }

    if (concatDiff.length === 0) {
      return 'alguns segundos';
    }

    if (concatDiff.length > 1) {
      if (concatDiff[0].index !== concatDiff[1].index - 1) {
        return 'mais de ' + concatDiff[0].label;
      }
      if (concatDiff[1].value < concatDiff[1].weight) {
        return 'mais de ' + concatDiff[0].label;
      }
      return concatDiff[0].label + ' e ' + concatDiff[1].label;
    }
    return concatDiff[0].label;
  };
}

export default new DateUtil();
