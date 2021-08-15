import React from "react";
import { Button, Spinner } from "react-bootstrap";

function Loader() {
    return (
        <div style={{display: "flex"}} className="p-5">
            <Button
                variant="warning"
                disabled
                style={{ marginLeft: "auto", marginRight: "auto"}}
            >
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    style={{marginRight: 5}}
                />
                Loading...
            </Button>
        </div>
    );
}

export default Loader;
