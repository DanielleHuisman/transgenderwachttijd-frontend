export type TreeItem<T> = T & {
    children: (T & TreeItem<T>)[];
};

export type FlatTreeItem<T> = TreeItem<T> & {
    depth: number;
};

export const flattenTree = <T>(items: TreeItem<T>[], depth: number = 0): FlatTreeItem<T>[] => {
    return items.flatMap((item) => [{...item, depth}].concat(item.children ? flattenTree(item.children, depth + 1) : []));
};
