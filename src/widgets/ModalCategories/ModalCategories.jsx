import { useForm } from "react-hook-form";

import style from "./ModalCategories.module.scss";
import Button from "../../shared/Button/Button";
import { useDispatch } from "react-redux";
import { toggleModalCategories, triggerRender } from "../../store/activeSlice";
import { addedCategory } from "../../store/categorySlice";

const ModalCategories = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    dispatch(addedCategory(data));
    dispatch(triggerRender());
    dispatch(toggleModalCategories(false));
  };

  return (
    <div
      className={style.ModalCategories}
      onClick={() => dispatch(toggleModalCategories(false))}
    >
      <div className={style.container} onClick={(e) => e.stopPropagation()}>
        <h1 className={style.modalTitle}>Добавить категорию</h1>
        <form className={style.modalForm} onSubmit={handleSubmit(onSubmit)}>
          <label className={style.modalLabel}>
            <p>Наименование</p>
            <input
              type="text"
              className={style.modalInput}
              {...register("name_rus", {
                maxLength: { value: 20, message: "Не более 20 символов" },
              })}
            />
            {errors.name_rus && (
              <p className={style.errorMsg}>{errors.name_rus.message}</p>
            )}
          </label>
          <Button view="add" type={"submit"}>
            Добавить
          </Button>
          <Button
            view="delete"
            onClick={() => dispatch(toggleModalCategories(false))}
          >
            Закрыть
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ModalCategories;
