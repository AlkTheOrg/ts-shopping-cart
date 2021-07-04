import { FC, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { ItemData } from "../data";
import { RootState } from "../redux/constants/type";
import Item from "./Item";
import * as Actions from "../redux/actions/index";

interface Props {
  items: ItemData[];
}

const ItemList: FC<Props> = ({ items }) => {
  useEffect(() => {
    dispatch(Actions.addToCart(items[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useDispatch();
  const addToCart = (item: ItemData) => dispatch(Actions.addToCart(item));
  const increase = (item: ItemData) => dispatch(Actions.increaseInList(item));
  const decrease = (item: ItemData) => dispatch(Actions.decreaseInList(item));
  return (
    <ul className="items-list">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Item
              {...item}
              addToCart={() => addToCart(item)}
              increase={() => increase(item)}
              decrease={() => decrease(item)}
            />
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state: RootState) => ({
  items: filterItemsBySearchTerm(state.items, state.searchFilter),
});

const filterItemsBySearchTerm = (items: ItemData[], term: string) =>
  items.filter((item) =>
    item.title.toLowerCase().includes(term.trim().toLowerCase())
  );

export default connect(mapStateToProps)(ItemList);
