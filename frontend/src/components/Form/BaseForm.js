import React from "react";
import { Form } from "react-bootstrap";

function BaseForm(props) {
    return (
        <Form onSubmit={props.handleForm}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Title"
                    name="title"
                    defaultValue={props.note && props.note.title}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Content"
                    name="content"
                    defaultValue={props.note && props.note.content}
                />
            </Form.Group>
            <Form.Group>{props.children}</Form.Group>
        </Form>
    );
}

export default BaseForm;
