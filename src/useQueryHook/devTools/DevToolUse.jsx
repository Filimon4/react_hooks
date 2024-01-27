import React, {useState, useEffect} from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";
import StudyExample from "../studyExample/StudyExample";

const queryClient = new QueryClient();

const DevToolUse = () => {
    const [showDevtools, setShowDevtools] = useState(false);

    useEffect(() => {
        window.toggleDevtools = () => setShowDevtools(old => !old) 
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <StudyExample />
        </QueryClientProvider>
    );
};

export default DevToolUse;
