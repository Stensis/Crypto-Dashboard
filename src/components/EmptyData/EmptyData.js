import Styles from "./EmptyData.module.css";

export function EmptyData() {
  return (
    <div className={Styles.emptyView}>
      😕 Sorry, no cryptocurrencies found.
    </div>
  );
}
