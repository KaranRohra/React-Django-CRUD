import React from "react";
import { Table, Container } from "react-bootstrap";
import { getNotesApi } from "../../api/noteApi";
import { useHistory } from "react-router-dom";
import Loader from "../Loader";

function Home() {
    const [notes, setNotes] = React.useState([]);
    const [loader, setLoader] = React.useState(true);
    const history = useHistory();

    React.useEffect(() => {
        const getNotes = async () => {
            setNotes(await getNotesApi());
            setLoader(false);
        };
        getNotes();
    }, []);

    const handleClick = (id) => history.push(`/edit/${id}`);

    const dateConverter = (date) => {
        return new Date(date).toLocaleString();
    };

    return (
        <Container className="mt-3">
            {loader ? (
                <Loader />
            ) : (
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Sr no.</th>
                            <th>Title</th>
                            <th>Crated At</th>
                            <th>Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notes.map((note, index) => (
                            <tr
                                onClick={() => handleClick(note.id)}
                                style={{ cursor: "pointer" }}
                                key={index}
                            >
                                <td>{note.id}</td>
                                <td>{note.title}</td>
                                <td>{dateConverter(note.created_at)}</td>
                                <td>{dateConverter(note.updated_at)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
}

export default Home;
