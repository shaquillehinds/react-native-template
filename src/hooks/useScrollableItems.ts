import { useState } from 'react';
import { AxiosResponse } from 'axios';

interface ItemsFetchingFunctionProps {
  limit: number;
  skip: number;
}

export type ItemsFetchingFunction<ListItem> = (
  props: ItemsFetchingFunctionProps,
) => Promise<ListItem[]> | AxiosResponse<ListItem[]>;

interface UseScrollableItemsProps<ListItem, FetchingFunctionArgs> {
  limit?: number;
  itemsFetchingFunction: ItemsFetchingFunction<ListItem>;
  itemsFetchingFunctionArgs?: FetchingFunctionArgs;
}

export default function useScrollableItems<
  ListItem,
  FetchingFunctionArgs extends {},
>(props: UseScrollableItemsProps<ListItem, FetchingFunctionArgs>) {
  const limit = props.limit || 20;

  const [items, setItems] = useState<ListItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [allItemsFetched, setAllItemsFetched] = useState(false);
  const [refreshingItems, setRefreshingItems] = useState(false);

  const fetchItems = async (prop?: { refresh: boolean }) => {
    if (prop?.refresh) setAllItemsFetched(false);
    const skip = prop?.refresh ? 0 : items.length;
    const response = await props.itemsFetchingFunction({
      ...(props.itemsFetchingFunctionArgs || {}),
      limit,
      skip,
    });
    let list: ListItem[];
    if (response instanceof Array) list = response;
    else list = response.data;
    if (list.length < limit) setAllItemsFetched(true);
    if (prop?.refresh) setItems(list);
    else setItems(prev => [...prev, ...list]);
    setLoading(false);
  };
  const onRefreshItems = async () => {
    setLoading(true);
    await fetchItems({ refresh: true });
    setRefreshingItems(false);
  };

  const onLayout = () => {
    if (!loaded) {
      fetchItems();
      setLoaded(true);
    }
  };
  const onItemsEndReached = () => {
    // log('warn', 'all items fetched: ' + allItemsFetched);
    if (allItemsFetched) return;
    fetchItems();
  };

  const updateListItem = (
    id: string,
    key: keyof ListItem,
    updatedItem: ListItem,
  ) => {
    const updatedItems = items.map(item => {
      return item[key] === id ? updatedItem : item;
    });
    setItems(updatedItems);
  };
  return {
    items,
    setItems,
    onLayout,
    onItemsEndReached,
    onRefreshItems,
    refreshingItems,
    loading,
    updateListItem,
    fetchItems,
    setLoading,
  };
}
