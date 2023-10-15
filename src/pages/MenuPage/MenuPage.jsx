import Table from "../../widgets/Table/Table";
import { products } from "../../assets/db";
import ModalProducts from "../../widgets/ModalProducts/ModalProducts";
import Button from "../../shared/Button/Button";
import { BsFillPlusSquareFill } from "react-icons/bs";

import style from "./MenuPage.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { toggleModalProducts } from "../../store/activeSlice";

const MenuPage = () => {
  const dispatch = useDispatch();
  const modalProducts = useSelector((state) => state.activeTab.modalProducts);

  const tableHeaderMenu = useSelector(
    (state) => state.menuElement.tableHeaderMenu
  );

  // const products = undefined;

  return (
    <div className={style.MenuPage}>
      <div style={{ display: "flex" }}>
        <Button
          view={"add"}
          onClick={() => dispatch(toggleModalProducts(true))}
        >
          Добавить продукт <BsFillPlusSquareFill />
        </Button>
      </div>
      <Table data={products} tableHeader={tableHeaderMenu} />
      {modalProducts && <ModalProducts />}
      {products === undefined || products.length === 0 ? (
        <div className={style.messageAddButton}>
          <p className={style.message}>Нет добавленых элементов</p>
        </div>
      ) : null}
    </div>
  );
};

export default MenuPage;
