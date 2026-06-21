export {}
declare global {
  const $: typeof import('clsx').clsx
  const Author: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/consts').Author
  const Homepage: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/consts').Homepage
  const Interval: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/consts').Interval
  const Source: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/sources').Source
  const SourceResponse: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/utils/data').SourceResponse
  const TTL: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/consts').TTL
  const Timer: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/utils/index').Timer
  const Version: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/consts').Version
  const atom: typeof import('jotai').atom
  const atomWithStorage: typeof import('jotai/utils').atomWithStorage
  const cacheSources: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/utils/data').cacheSources
  const columns: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/metadata').columns
  const currentColumnIDAtom: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/atoms/index').currentColumnIDAtom
  const currentSourcesAtom: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/atoms/index').currentSourcesAtom
  const delay: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/utils').delay
  const fixedColumnIds: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/metadata').fixedColumnIds
  const focusSourcesAtom: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/atoms/index').focusSourcesAtom
  const goToTopAtom: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/atoms/index').goToTopAtom
  const hiddenColumns: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/metadata').hiddenColumns
  const isPageReload: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/hooks/useOnReload').isPageReload
  const isiOS: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/utils/index').isiOS
  const metadata: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/metadata').metadata
  const myFetch: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/utils/index').myFetch
  const preprocessMetadata: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/atoms/primitiveMetadataAtom').preprocessMetadata
  const primitiveMetadataAtom: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/atoms/primitiveMetadataAtom').primitiveMetadataAtom
  const randomItem: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/utils').randomItem
  const randomUUID: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/utils').randomUUID
  const refetchSources: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/utils/data').refetchSources
  const relativeTime: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/utils').relativeTime
  const safeParseString: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/utils/index').safeParseString
  const sources: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/sources').default
  const toastAtom: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/hooks/useToast').toastAtom
  const typeSafeObjectEntries: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/type.util').typeSafeObjectEntries
  const typeSafeObjectFromEntries: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/type.util').typeSafeObjectFromEntries
  const typeSafeObjectValues: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/type.util').typeSafeObjectValues
  const useAtom: typeof import('jotai').useAtom
  const useAtomValue: typeof import('jotai').useAtomValue
  const useCallback: typeof import('react').useCallback
  const useContext: typeof import('react').useContext
  const useDark: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/hooks/useDark').useDark
  const useEffect: typeof import('react').useEffect
  const useEntireQuery: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/hooks/query').useEntireQuery
  const useFocus: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/hooks/useFocus').useFocus
  const useFocusWith: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/hooks/useFocus').useFocusWith
  const useLogin: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/hooks/useLogin').useLogin
  const useMemo: typeof import('react').useMemo
  const useOnReload: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/hooks/useOnReload').useOnReload
  const usePWA: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/hooks/usePWA').usePWA
  const useReducer: typeof import('react').useReducer
  const useRef: typeof import('react').useRef
  const useRefetch: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/hooks/useRefetch').useRefetch
  const useRelativeTime: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/hooks/useRelativeTime').useRelativeTime
  const useSearchBar: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/hooks/useSearch').useSearchBar
  const useSetAtom: typeof import('jotai').useSetAtom
  const useState: typeof import('react').useState
  const useSync: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/hooks/useSync').useSync
  const useToast: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/hooks/useToast').useToast
  const useUpdateQuery: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/hooks/query').useUpdateQuery
  const verifyPrimitiveMetadata: typeof import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/verify').verifyPrimitiveMetadata
}
// for type re-export
declare global {
  // @ts-ignore
  export type { Timer } from 'C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/utils/index'
  import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/utils/index')
  // @ts-ignore
  export type { Update, ToastItem } from 'C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/atoms/types'
  import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/src/atoms/types')
  // @ts-ignore
  export type { OmitNever, UnionToIntersection, MaybePromise } from 'C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/type.util'
  import('C:/Users/Administrator/Downloads/Compressed/newsnow-2026-main/newsnow-2026-main/shared/type.util')
}