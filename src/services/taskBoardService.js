import axios from 'axios';

const taskBoardService = {
    fetchAllLists: () => {
        try {
            const response = axios.get('http://localhost:4000/api/lists');
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    createNewList: (listName) => {
        try {
            const response = axios.post('http://localhost:4000/api/list',{
                name: listName
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

export default taskBoardService