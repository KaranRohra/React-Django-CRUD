import baseTemplate from "./baseTemplate";

export const getNotesApi = async () => {
    const response = await baseTemplate({
        method: "GET",
        url: "note/",
    });
    return response.data;
};

export const getNoteByIDApi = async (id) => {
    try {
        const response = await baseTemplate({
            method: "GET",
            url: `note/${id}`,
        });
        return response.data;
    } catch (error) {
        return null;
    }
};

export const createNoteApi = async (data) => {
    const response = await baseTemplate({
        method: "POST",
        url: "note/",
        data: data,
    });
    return response.data;
};

export const updateNoteApi = async ({id, data}) => {
    try {
        const response = await baseTemplate({
            method: "PATCH",
            url: `note/${id}/`,
            data: data,
        });
        return response.data;
    } catch (error) {
        return null;
    }
}

export const deleteNoteApi = async (id) => {
    try {
        const response = await baseTemplate({
            method: "DELETE",
            url: `note/${id}`,
        });
        return response.data;
    } catch (error) {
        return null;
    }
}
