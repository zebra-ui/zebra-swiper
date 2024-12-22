import {
  provide,
  reactive,
  getCurrentInstance,
  type VNode,
  type ComponentInternalInstance
} from 'vue'
import type {
  FlattenVNodes,
  FindVNodeIndex,
  SortChildren,
  UseChildren,
  InternalChild
} from '../../types/components/use-relation/use-children'

export const flattenVNodes: FlattenVNodes = (children) => {
  const result: VNode[] = []

  const traverse = (children: VNode[]) => {
    if (Array.isArray(children)) {
      children.forEach((child) => {
        if (child) {
          result.push(child)
          if (child.component?.subTree) {
            result.push(child.component.subTree)
            traverse(child.component.subTree.children as VNode[])
          }

          if (child.children) {
            traverse(child.children as VNode[])
          }
        }
      })
    }
  }
  traverse(children)

  return result
}

const findVNodeIndex: FindVNodeIndex = (vnodes, vnode) => {
  const index = vnodes.indexOf(vnode)
  if (index === -1) {
    return vnodes.findIndex(
      (item) =>
        vnode.key !== undefined &&
        vnode.key !== null &&
        item.type === vnode.type &&
        item.key === vnode.key
    )
  }
  return index
}

export const sortChildren: SortChildren = (
  parent,
  publicChildren,
  internalChildren
) => {
  // @ts-ignore
  const vnodes = flattenVNodes(parent.ctx.children as VNode[])

  internalChildren.sort(
    (a, b) => findVNodeIndex(vnodes, a.vnode) - findVNodeIndex(vnodes, b.vnode)
  )

  const orderedPublicChildren = internalChildren.map((item) => item.proxy)

  publicChildren.sort((a, b) => {
    const indexA = orderedPublicChildren.indexOf(a)
    const indexB = orderedPublicChildren.indexOf(b)
    return indexA - indexB
  })
}

export const useChildren: UseChildren = (key) => {
  const publicChildren = reactive<any[]>([])
  const internalChildren = reactive<InternalChild[]>([])
  const parent = getCurrentInstance()

  if (!parent) {
    throw new Error('useChildren must be called in setup')
  }

  const linkChildren = (value = {}) => {
    const link = (child: ComponentInternalInstance) => {
      if (child.proxy) {
        internalChildren.push(child as unknown as InternalChild)
        publicChildren.push(child.proxy)
        sortChildren(parent, publicChildren, internalChildren)
      }
    }

    const unlink = (child: ComponentInternalInstance) => {
      const index = internalChildren.indexOf(child as unknown as InternalChild)
      publicChildren.splice(index, 1)
      internalChildren.splice(index, 1)
    }

    provide(
      key,
      Object.assign(
        {
          link,
          unlink,
          children: publicChildren,
          internalChildren
        },
        value
      )
    )
  }

  return {
    children: publicChildren,
    linkChildren
  }
}
