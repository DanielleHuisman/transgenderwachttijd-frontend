export type TreeItem<T> = T & {
    children?: (T & TreeItem<T>)[];
};

export type FlatTreeItem<T> = [TreeItem<T>, number];

export const flattenTree = <T>(items: TreeItem<T>[], depth: number = 0): FlatTreeItem<T>[] => {
    return items.flatMap((item) => {
        const result: FlatTreeItem<T> = [item, depth];

        return [result].concat(item.children ? flattenTree(item.children, depth + 1) : []);
    });
};
