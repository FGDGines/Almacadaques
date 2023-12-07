import * as React from "react";

type PageProps = {
    children: React.ReactNode;
    number: number;
};

const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
    return (
        <div className="demoPage" ref={ref}>
            <h1>Page Header</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});

export default Page