import { expect, assert } from 'chai'
import { CBinaryTree, TTreeKey, TreeNode } from './index'


describe('Tree', () => {
    it('should be an object', () => {
        const tree = new CBinaryTree<string>()

        expect(tree).to.be.a('object')
        expect(tree).to.be.instanceOf(CBinaryTree)
    })

    it('tree.insert() should set root if root is null', () => {
        const tree = new CBinaryTree<string>()

        if (tree.Root === null) {
            tree.insert(22, "Some value")
        }

        expect(tree.Root).to.include({ Key: 22, Value: "Some value", Left: null, Right: null })
    })  

    it('tree.insert() should set new nodes to the right', () => {
        const tree = new CBinaryTree<string>()

        tree.insert(22, "Some value")
        tree.insert(44, "To the right")

        expect(tree.Root.Right).to.include({Key: 44, Value: "To the right", Left: null, Right: null })
    })  

    it('tree.insert() should set new nodes to the left', () => {
        const tree = new CBinaryTree<string>()

        tree.insert(22, "Some value")
        tree.insert(11, "To the left")

        expect(tree.Root.Left).to.include({Key: 11, Value: "To the left", Left: null, Right: null })
    })  

    it('tree.get() should return null if the value doesnt exist', () => {
        const tree = new CBinaryTree<string>()

        expect(tree.get(3)).to.be.null
    })  

    for (let i = 0; i < 21; i++) {
        it(`tree.get(${i}) should return "String ${i}" value if the key exist`, () => {
            const tree = new CBinaryTree<string>()

            tree.insert(i, `String ${i}`)
            expect(tree.get(i)).to.equals(`String ${i}`)
        })
    }

    it('tree.dump() should return the tree structure as string in the console' ,() => {
        const tree = new CBinaryTree<string>()

        const mockedTreeAsString = "Node1\n----Node2"
        const dumpTreeAsString = tree.dump()

        expect(mockedTreeAsString).to.equal(dumpTreeAsString)
    })

})

// describe('Data model ', () => {
//     it('should have title property and title property should be an object', () => {
//         expect(model.title).to.exist
//         expect(model.title).to.be.a('object')
//     })

//     it('title property should have content property which should be a string', () => {
//         expect(model.title.content).to.exist
//         expect(model.title.content).to.be.a('string')
//     })

//     it('should have citationInfo property', () => {
//         expect(model.citationInfo).to.exist
//     })
// })