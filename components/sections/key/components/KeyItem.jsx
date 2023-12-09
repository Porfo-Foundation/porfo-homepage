// Import necessary libraries and hooks
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import classNames from 'classnames';
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useFeatureStore } from "./utils/store";

// Define KeyItem component
export const KeyItem = ({ children, htmlContent, id }) => {
    const scrollPosition = useScrollPosition();
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
    const setInViewFeature = useFeatureStore(state => state.setInViewFeature);

    useEffect(() => {
        if (isInView) setInViewFeature(id);
    }, [isInView, id, setInViewFeature])

    return (
        <p ref={ref}
            className={classNames(
                "py-16 duration-500 transition-colors",
                isInView ? 'text-white' : 'text-neutral-800'
            )}
        >
            {htmlContent ? (
                <span dangerouslySetInnerHTML={{ __html: htmlContent }} />
            ) : (
                children
            )}
        </p>
    );
};
