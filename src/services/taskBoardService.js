import axios from 'axios';
const taskBoardServerBaseURL = 'http://localhost:4000'

const taskBoardService = {
    fetchAllLists: () => {
        try {
            const response = axios.get(`${taskBoardServerBaseURL}/api/lists`);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    createNewList: (listName) => {
        try {
            const response = axios.post(`${taskBoardServerBaseURL}/api/list`,{
                name: listName
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    deleteList: (listName) => {
        try {
            const response = axios.delete(`${taskBoardServerBaseURL}/api/list/${listName}`,{
                name: listName
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

export default taskBoardService