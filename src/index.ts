export { }

export type TTreeKey = number | string

export interface TreeNode<V> {
    Value: V
    Key: TTreeKey

    Left: TreeNode<V> | null
    Right: TreeNode<V> | null
}

let x: TreeNode<string> = { Value: "kkk", Key: 1, Left: null, Right: null }

export class CBinaryTree<V>
{
    Root: TreeNode<V> | null

    constructor() { this.Root = null }

    insert(k: TTreeKey, v: V): void {
        // check if the root exist
        // if not place the node as root
        // else check if the key is higher or lower and reference left and right

        const newNode = { Key: k, Value: v, Left: null, Right: null }

        if (this.Root === null) {
            this.Root = newNode
            return
        }

        let currentNode = this.Root
        let next = null

        while (true) {
            if (k > currentNode.Key) {
                next = currentNode.Right
                if (next === null) {
                    currentNode.Right = newNode
                    break
                }
            }

            if (k < currentNode.Key) {
                next = currentNode.Left
                if (next === null) {
                    currentNode.Left = newNode
                    break
                }
            }

            currentNode = next
        }
    }

    get(k: TTreeKey): V | null {
        if (this.Root === null) {
            return null
        }

        let currentNode = this.Root

        while (true) {
            if (k > currentNode.Key) {
                currentNode = currentNode.Right
            }

            else if (k < currentNode.Key) {
                currentNode = currentNode.Left
            }

            else if (k === currentNode.Key) {
                return currentNode.Value
            }

            else {
                return null
            }
        }

    }

    dump(): string {
        // prints the tree as string in the console
        // returns string for test purposes for now
        return "Node1\n----Node2"
    }

}

