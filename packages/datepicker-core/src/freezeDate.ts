function getDateMethods(): string[] {
  const datePrototype = Object.getPrototypeOf(new Date());
  const propertyNames = Object.getOwnPropertyNames(datePrototype);

  const methods = propertyNames.filter((propertyName) => {
    const property = datePrototype[propertyName];
    return typeof property === 'function';
  });

  return methods;
}

function getDateSetters(): string[] {
  const methods = getDateMethods();
  const setters = methods.filter((method) => method.startsWith('set'));

  return setters;
}

const DATE_SETTERS = [...getDateSetters()] as const;

const handler: ProxyHandler<Date> = {
  get(target, prop: keyof Date, receiver) {
    if (typeof prop === 'string' && DATE_SETTERS.includes(prop)) {
      return function () {
        throw new Error(`Cannot set property ${prop} of frozen Date object`);
      };
    }
    const value = Reflect.get(target, prop, receiver);
    if (typeof value === 'function') {
      return value.bind(target);
    }
    return value;
  },
};

export const freezeDate = (date: Date) => new Proxy(date, handler);

// export const DEFAULT_MIN_DATE = new FrozenDate(DEFAULT_MIN_YEAR, 0, 1);
// export const DEFAULT_MAX_DATE = new FrozenDate(DEFAULT_MAX_YEAR, 11, 31);

// export class FrozenDate extends Date {
//     constructor();
//     constructor(value: number | string);
//     constructor(
//       year: number,
//       monthIndex: number,
//       date?: number,
//       hours?: number,
//       minutes?: number,
//       seconds?: number,
//       ms?: number
//     );
//     constructor(...args: any[]) {
//       super(...args);
//       this._disableSetters();
//     }

//     // 모든 setter 메서드를 자동으로 비활성화하여 에러를 발생시키도록 함
//     private _disableSetters(): void {
//       const propertyNames = Object.getOwnPropertyNames(Date.prototype);

//       propertyNames.forEach((propertyName) => {
//         if (
//           typeof (Date.prototype as any)[propertyName] === 'function' &&
//           propertyName.startsWith('set')
//         ) {
//           Object.defineProperty(this, propertyName, {
//             value: () => {
//               throw new Error(`Cannot modify date: ${propertyName} is disabled.`);
//             },
//           });
//         }
//       });
//     }
//   }
