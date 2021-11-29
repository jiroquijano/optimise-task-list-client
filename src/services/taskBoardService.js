import axios from 'axios';
const taskBoardServerBaseURL = process.env.TASKBOARD_SERVER_URL || 'http://localhost:4000'

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
    },
    addTask: (task, listName) => {
        try {
            const response = axios.post(`${taskBoardServerBaseURL}/api/list/${listName}/newtask`, {
                name: task.name,
                description: task.description,
                deadline: task.deadline
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    editTask: (task) => {
        try {
            const response = axios.patch(`${taskBoardServerBaseURL}/api/task/update/${task.id}`, {
                name: task.name,
                description: task.description,
                deadline: task.deadline
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    deleteTask: (taskID) => {
        try {
            const response = axios.delete(`${taskBoardServerBaseURL}/api/task/${taskID}`);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    deleteMultipleTasks: (tasks) => {
        try {
            const response = axios.post(`${taskBoardServerBaseURL}/api/task/delete`, {
                tasks
            })
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    completeTask: (taskID) => {
        try {
            const response = axios.patch(`${taskBoardServerBaseURL}/api/task/complete/${taskID}`);
            return response;
        } catch (error) {
            console.log(error)
        }
    },
    moveTasks: (tasks, listName) => {
        try {
            const response = axios.post(`${taskBoardServerBaseURL}/api/task/move`, {
                tasks,
                destination: listName
            });
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}

export default taskBoardService