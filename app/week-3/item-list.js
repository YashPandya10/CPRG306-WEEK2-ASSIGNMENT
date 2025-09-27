import Item from "./item";
import { items } from "./items";

export default function ItemList() {
  return (
    <ul className="space-y-3 mt-4">
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}
