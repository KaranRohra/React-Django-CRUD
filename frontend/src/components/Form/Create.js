import React from "react";
import { Container, Button, Alert } from "react-bootstrap";
import BaseForm from "./BaseForm";
import { useHistory } from "react-router-dom";
import { createNoteApi } from "../../api/noteApi";
import Loader from "../../components/Loader";

function Create() {
    const history = useHistory();
    const [showAlert, setShowAlert] = React.useState(false);
    const [loader, setLoader] = React.useState(false);

    const saveNote = async(event) => {
        event.preventDefault();
        setLoader(true);
        callSaveNote(event);
    }

    const callSaveNote = async (event) => {
        await createNoteApi({
            title: event.target.title.value,
            content: event.target.content.value,
        });
        setShowAlert(true);
        setLoader(false);
    };

    return (
        <Container className="mt-5">
            {loader ? (
                <Loader />
            ) : (
                <>
                    {showAlert && (
                        <Alert variant="success">
                            Note Created Successfully
                        </Alert>
                    )}
                    <BaseForm handleForm={saveNote}>
                        <Button
                            className="m-2"
                            variant="secondary"
                            onClick={() => history.push("/")}
                        >
                            Cancel
                        </Button>
                        <Button className="m-2" variant="primary" type="submit">
                            Save
                        </Button>
                    </BaseForm>
                </>
            )}
        </Container>
    );
}

export default Create;
