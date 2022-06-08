import styles from './ui-phone-item.module.css';

/* eslint-disable-next-line */
export interface UiPhoneItemProps {}

export function UiPhoneItem(props: UiPhoneItemProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPhoneItem!</h1>
    </div>
  );
}

export default UiPhoneItem;
