import styles from './react-datepicker.module.css';

/* eslint-disable-next-line */
export interface ReactDatepickerProps {}

export function ReactDatepicker(props: ReactDatepickerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactDatepicker!</h1>
    </div>
  );
}

export default ReactDatepicker;
