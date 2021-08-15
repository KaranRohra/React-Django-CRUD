import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Button, Alert } from "react-bootstrap";
import {
    deleteNoteApi,
    getNoteByIDApi,
    updateNoteApi,
} from "../../api/noteApi";
import BaseForm from "./BaseForm";
import Loader from "../Loader";

function Edit(props) {
    const [note, setNote] = React.useState();
    const [loader, setLoader] = React.useState(true);
    const [showAlert, setShowAlert] = React.useState(false);

    const history = useHistory();
    const id = props.match.params.id;

    React.useEffect(() => {
        const getNote = async () => {
            setNote(await getNoteByIDApi(id));
            setLoader(false);
        };
        getNote();
    }, [id]);

    const handleDelete = async () => {
        await deleteNoteApi(id);
        history.push("/");
    };

    const updateNote = async (event) => {
        event.preventDefault();
        setLoader(true);
        callUpdateNote(event);
    };

    const callUpdateNote = async (event) => {
        const response = await updateNoteApi({
            id: id,
            data: {
                title: event.target.title.value,
                content: event.target.content.value,
            },
        });
        setNote(response);
        setLoader(false);
        setShowAlert(true);
    };

    return (
        <Container className="mt-5">
            {loader ? (
                <Loader />
            ) : (
                <>
                    {showAlert && (
                        <Alert variant="success">
                            Note Updated Successfully
                        </Alert>
                    )}
                    <BaseForm note={note} handleForm={updateNote}>
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
                        <Button
                            style={{ float: "right" }}
                            className="m-2"
                            variant="danger"
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    </BaseForm>
                </>
            )}
        </Container>
    );
}

export default Edit;
