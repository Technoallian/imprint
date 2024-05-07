import classNames from "classnames"
import { useInView } from "framer-motion"
import React, { useEffect, useRef } from "react"
import { useFeatureStore } from "./store"

export const FeatureTitle = ({ children, id }) => {
  const ref = useRef(null)
  const documentRef = useRef(document)
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
    // NOTE: The only reason we pass in the document here, is because
    // of security restrictions set by the browser when using an iFrame.
    // In an iFrame (so eg in the preview on frontend.fyi),
    // margin won't take effect unless you specify the root manually.
    // By default it will be the window element, which is what we want in this case.
    // If you specify your own root, you can usually only pass in an Element, and
    // not the document (since document/window is the default). However, in order
    // to fix the issue in the iframe, we need to pass in the document here and thus
    // tell TypeScript that we know what we're doing. If you're implementing
    // this in your own website, you can just pass in the root property as well as the documentRef.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    root: documentRef
  })
  const setInViewFeature = useFeatureStore(state => state.setInViewFeature)
  const inViewFeature = useFeatureStore(state => state.inViewFeature)

  useEffect(() => {
    if (isInView) setInViewFeature(id)
    if (!isInView && inViewFeature === id) setInViewFeature(null)
  }, [isInView, id, setInViewFeature, inViewFeature])

  return (
    <p
      ref={ref}
      className={classNames(
        "feature-title py-20 font-heading text-4xl font-semibold transition-colors",
        isInView ? "text-white" : "text-black"
      )}
    >
      {children}
    </p>
  )
}
